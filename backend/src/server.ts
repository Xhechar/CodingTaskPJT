import Express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { backendRouter } from "./routers/backend.routes";

dotenv.config();

const app = Express();

app.use(Express.json());

app.use("/api", backendRouter);

app.use((err: Error, req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
  res.status(500).json({
    "success": false,
    "errorMessage": err.message || "Internal server error"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});