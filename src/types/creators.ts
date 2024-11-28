export interface ContentCreator {
  id: string; // Unique identifier for the content creator
  name: string; // Name of the content creator
  username: string; // Unique username for the creator
  bio?: string; // Optional short bio
  profileImageUrl?: string; // URL of the profile image
  coverImageUrl?: string; // URL of the cover/banner image
  categories: string[]; // Categories the creator focuses on (e.g., Music, Education)
  subscriptionFee: number; // Subscription fee (in INR) for a year
  totalSubscribers: number; // Total number of subscribers
  totalEarnings: number; // Total earnings in INR
  contentCount: number; // Total number of uploaded content pieces
  contentUrls: string[]; // Array of URLs to the creator's content
  paymentInfo: {
    bankAccount?: string; // Optional bank account for direct payments
    upiId?: string; // Optional UPI ID for direct payments
  };
  createdAt: Date; // Account creation date
  updatedAt: Date; // Last profile update
}
