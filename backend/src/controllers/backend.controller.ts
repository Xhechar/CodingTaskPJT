import { Request, Response } from "express";
import { BackendService } from "../services/backend.services";

let backendService: BackendService = new BackendService();

export class BackendController {
  async getAdminPlatformStats(req: Request, res: Response) {
    try {
      let result = await backendService.getAdminPlatformStats();

      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({
        success: false,
        errorMessage: "Internal server error",
      });
    }
  }
  async getAllCommunities(req: Request, res: Response) {
    try {
      let result = await backendService.getAllCommunities();

      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({
        success: false,
        errorMessage: "Internal server error",
      });
    }
  }
  async getAllPlatformTransactions(req: Request, res: Response) {
    try {
      let result = await backendService.getAllPlatformTransactions();

      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({
        success: false,
        errorMessage: "Internal server error",
      });
    }
  }
  async getAllUsers(req: Request, res: Response) {
    try {
      let result = await backendService.getAllUsers();

      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({
        success: false,
        errorMessage: "Internal server error",
      });
    }
  }
  async deleteUserById(req: Request, res: Response) {
    try {
      let result = await backendService.deleteUserById(req.params.userId);

      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({
        success: false,
        errorMessage: "Internal server error",
      });
    }
  }
  async changeCommunityStatus(req: Request, res: Response) {
    try {
      let result = await backendService.changeCommunityStatus(
        req.params.communityId,
        req.body.status
      );

      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({
        success: false,
        errorMessage: "Internal server error",
      });
    }
  }

  async deleteCommunity(req: Request, res: Response) {
    try {
      let result = await backendService.deleteCommunity(
        req.params.communityId
      );

      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({
        success: false,
        errorMessage: "Internal server error",
      });
    }
  }

  async deleteTransaction(req: Request, res: Response) {
    try {
      let result = await backendService.deleteTransaction(
        req.params.transactionId
      );

      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({
        success: false,
        errorMessage: "Internal server error",
      });
    }
  }
}