import { Router } from "express";
import { registerUser, loginUser } from "../controllers/auth";
import checkAuth from "../middleware/auth";
import validateCreate from "../validators/users";

const router = Router();

router.post("/login", loginUser);
router.post("/register", validateCreate, registerUser);

export default router;
