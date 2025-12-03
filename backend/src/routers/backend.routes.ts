import { Router } from "express";
import { BackendController } from "../controllers/backend.controller";

export const backendRouter: Router = Router();
export const backendController: BackendController = new BackendController();

backendRouter.get("/stats", (req, res) => backendController.getAdminPlatformStats(req, res));
backendRouter.get("/communities", (req, res) => backendController.getAllCommunities(req, res));
backendRouter.get("/transactions", (req, res) => backendController.getAllPlatformTransactions(req, res));
backendRouter.get("/users", (req, res) => backendController.getAllUsers(req, res));
backendRouter.delete("/remove-user/:userId", (req, res) => backendController.deleteUserById(req, res));
backendRouter.put("/change-community-status/:communityId", (req, res) =>
  backendController.changeCommunityStatus(req, res)
);

backendRouter.delete("/remove-community/:communityId", (req, res) =>
  backendController.deleteCommunity(req, res)
);
backendRouter.delete("/remove-transaction/:transactionId", (req, res) =>
  backendController.deleteTransaction(req, res)
);