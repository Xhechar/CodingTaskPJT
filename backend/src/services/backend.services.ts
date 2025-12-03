import { IBackendServiceAbstractMethods } from "../interfaces/abstraction/backend.abstract.methods";
import { PrismaClient } from "@prisma/client";
import { CommunityStatus } from "../interfaces/enums/backend.enums";

const prisma = new PrismaClient({
  log: ["error"]
});

export class BackendService implements IBackendServiceAbstractMethods {

  async getAdminPlatformStats(): Promise<any> {
    const totalUsers = await prisma.user.count();
    const totalCommunities = await prisma.community.count();
    const totalRevenueResult = await prisma.transaction.aggregate({
      _sum: {
        amount: true
      }
    });
    const totalRevenue = totalRevenueResult._sum.amount || 0;
    const recentSignups = await prisma.user.count({
      where: {
        joinedAt: {
          gte: new Date(new Date().setDate(new Date().getDate() - 7))
        }
      }
    });
    const activeCommunities = await prisma.community.count({
      where: {
        status: "active"
      }
    });

    return {
      "totalUsers": totalUsers,
      "totalCommunities": totalCommunities,
      "totalRevenue": totalRevenue,
      "recentSignups": recentSignups,
      "activeCommunities": activeCommunities
    };
  }

  async getAllCommunities(): Promise<any> {
    const communities = await prisma.community.findMany({
      include: {
        creator: true
      }
    });

    if (!communities || communities.length === 0) {
      return {
        "success": false,
        "errorMessage": "No communities found"
      };
    }

    return {
      "success": true,
      "communities": communities
    };
  }
  async getAllPlatformTransactions(): Promise<any> {
    
    let transactions = await prisma.transaction.findMany({
      include: {
        user: true,
        community: true
      }
    });

    if (!transactions || transactions.length === 0) {
      return {
        "success": false,
        "errorMessage": "No transactions found"
      };
    }

    return {
      "success": true,
      "transactions": transactions
    };
  }
  async getAllUsers(): Promise<any> {
    
    let users = await prisma.user.findMany({
      include: {
        communities: true,
        transactions: true
      }
    });

    if (!users || users.length === 0) {
      return {
        "success": false,
        "errorMessage": "No users found"
      };
    }

    return {
      "success": true,
      "users": users
    };
  }
  async deleteUserById(userId: string): Promise<any> {
    
    let userExists = await prisma.user.findUnique({
      where: {
        id: userId
      }
    });

    if (!userExists) {
      return {
        "success": false,
        "errorMessage": "User not found"
      };
    }

    let deleteUser = await prisma.user.delete({
      where: {
        id: userId
      }
    });

    if (!deleteUser) {
      return {
        "success": false,
        "errorMessage": "Failed to delete user"
      };
    }

    return {
      "success": true,
      "message": "User removed"
    };
  }
  async changeCommunityStatus(communityId: string, status: CommunityStatus): Promise<any> {
    
    let communityExists = await prisma.community.findUnique({
      where: {
        id: communityId
      }
    });

    if (!communityExists) {
      return {
        "success": false,
        "errorMessage": "Community not found"
      };
    }

    let updateCommunity = await prisma.community.update({
      where: {
        id: communityId
      },
      data: {
        status: status
      }
    });

    if (!updateCommunity) {
      return {
        "success": false,
        "errorMessage": "Failed to update community status"
      };
    }

    return {
      "message": "Community status updated successfully",
      "community": updateCommunity
    };
  }


  //other necessary services

  async deleteCommunity(communityId: string) {

    let communityExists = await prisma.community.findUnique({
      where: {
        id: communityId
      }
    });

    if (!communityExists) {
      return {
        "success": false,
        "errorMessage": "Community not found"
      };
    }

    let deleteCommunity = await prisma.community.delete({
      where: {
        id: communityId
      }
    });

    if (!deleteCommunity) {
      return {
        "success": false,
        "errorMessage": "Failed to delete community"
      };
    }

    return {
      "success": true,
      "message": "Community deleted successfully"
    };
  }

  async deleteTransaction(transactionId: string) {

    let transactionExists = await prisma.transaction.findUnique({
      where: {
        id: transactionId
      }
    });

    if (!transactionExists) {
      return {
        "success": false,
        "errorMessage": "Transaction not found"
      };
    }

    let deleteTransaction = await prisma.transaction.delete({
      where: {
        id: transactionId
      }
    });

    if (!deleteTransaction) {
      return {
        "success": false,
        "errorMessage": "Failed to delete transaction"
      };
    }

    return {
      "success": true,
      "message": "Transaction deleted successfully"
    };
  }

}