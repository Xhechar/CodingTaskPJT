import { Request, Response } from "express";
import { BackendService } from "../services/backend.services";
import { User } from "@prisma/client";
import { CreateUserDTO } from "../interfaces/dtos/backend.dtos";

let backendService: BackendService = new BackendService();

export class BackendController {
  async getAdminPlatformStats(req: Request, res: Response) {
    try {
      let result = await backendService.getAdminPlatformStats();

      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({
        "success": false,
        "errorMessage": "Internal server error",
      });
    }
  }
  async getAllCommunities(req: Request, res: Response) {
    try {
      let result = await backendService.getAllCommunities();

      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({
        "success": false,
        "errorMessage": "Internal server error",
      });
    }
  }
  async getAllPlatformTransactions(req: Request, res: Response) {
    try {
      let result = await backendService.getAllPlatformTransactions();

      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({
        "success": false,
        "errorMessage": "Internal server error",
      });
    }
  }
  async getAllUsers(req: Request, res: Response) {
    try {
      let result = await backendService.getAllUsers();

      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({
        "success": false,
        "errorMessage": "Internal server error",
      });
    }
  }
  async deleteUserById(req: Request, res: Response) {
    try {
      let result = await backendService.deleteUserById(req.params.userId);

      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({
        "success": false,
        "errorMessage": "Internal server error",
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
        "success": false,
        "errorMessage": "Internal server error",
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
        "success": false,
        "errorMessage": "Internal server error",
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
        "success": false,
        "errorMessage": "Internal server error",
      });
    }
  }

  async createUser(req: Request, res: Response) {

    try {

      let result = await backendService.createUser(req.body as CreateUserDTO);

      return res.status(200).json(result);
      
    } catch (error: any) {
      return res.status(500).json({
        "success": false,
        "errorMessage": error instanceof Error ? error.message : "Internal server error",
      });
    }
  }
}