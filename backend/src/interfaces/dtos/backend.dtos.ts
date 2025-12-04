export interface AdminStatsResponse {
  totalUsers: number;
  totalCommunities: number;
  totalRevenue: number;
  recentSignups: number;
  activeCommunities: number;
}

export interface CreateUserDTO {
  id: string;
  name: string;
  email: string;
  role: string;
  joinedAt: Date;
}