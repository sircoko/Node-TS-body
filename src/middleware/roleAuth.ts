import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../helpers/generateToken";
import User from "../models/user";

const checkRoleAuth =
  (roles: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization?.split(" ").pop();
      const tokenData = await verifyToken(token);
      //const userData = await User.findByPk(tokenData._id);

      // if (roles.includes(userData.role)) {
      //   next();
      // } else {
      //   res.status(401).json({
      //     error: "Unauthorized",
      //   });
      }
     catch (error) {
      res.status(401).json({
        error: "Unauthorized",
      });
    }
  };

export default checkRoleAuth;
