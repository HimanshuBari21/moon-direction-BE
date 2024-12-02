import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { creators, PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async register(creatorData: creators) {
    const hashedPassword = await bcrypt.hash(creatorData.password, 2);
    try {
      await prisma.creators.create({
        data: { ...creatorData, password: hashedPassword },
      });

      return { message: 'User registered successfully', status: 'success' };
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async login(creatorData: Pick<creators, 'username' | 'password'>) {
    if (!creatorData.password || !creatorData.username) {
      throw new BadRequestException('The request data is invalid!');
    }

    const creator = await prisma.creators.findFirst({
      where: { username: creatorData.username },
    });
    if (!creator) {
      throw new NotFoundException('User not found');
    }

    const isMatch = await bcrypt.compare(
      creatorData.password,
      creator.password,
    );
    if (!isMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { email: creator.username, sub: creator.id };
    const accessToken = this.jwtService.sign(payload);
    return { accessToken };
  }
}
