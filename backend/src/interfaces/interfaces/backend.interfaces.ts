export interface Community {
  id: string;
  name: string;
  creator: string;
  memberCount: number;
  revenue: number;
  status: string;
}

export interface Transaction {
  id: string;
  amount: number;
  communityName: string;
  userName: string;
  date: Date;
  platformFee: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  communitiesCount: number;
  joinedAt: Date;
}