
export interface IBackendServiceAbstractMethods {
  getAdminPlatformStats(): Promise<any>;
  getAllCommunities(): Promise<any>;
  getAllPlatformTransactions(): Promise<any>;
  getAllUsers(): Promise<any>;
  deleteUserById(userId: string): Promise<any>;
  changeCommunityStatus(communityId: string, status: string): Promise<any>;
}