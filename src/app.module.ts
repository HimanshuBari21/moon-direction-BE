import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreatorModule } from './modules/creator/creator.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [CreatorModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
