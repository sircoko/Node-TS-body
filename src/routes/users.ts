import { Router } from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  postUser,
  putUser,
  softDelete,
} from "../controllers/users";
import checkAuth from "../middleware/auth";
import checkRoleAuth from "../middleware/roleAuth";
import validateCreate from "../validators/users";

const router = Router();

router.get("/",  checkAuth, checkRoleAuth(['user','admin']), getUsers);
router.get("/:id", getUser);
router.post("/", validateCreate, postUser);
router.put("/:id", putUser);
router.delete("/:id", deleteUser);
router.delete("/soft/:id", softDelete);

export default router;
