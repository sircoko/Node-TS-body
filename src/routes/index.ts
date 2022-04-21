import { Router, Request, Response } from "express";
import userRoutes from "./users";
import authRoutes from "./auth";

const router = Router();

router.use("/api/users", userRoutes);
router.use("/api/auth",  authRoutes);

router.use("*", async (req: Request, res: Response) => {
  res.json({error:"Not found"});
});

export default router;
