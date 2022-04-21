import { NextFunction, Response, Request } from "express";
import { verifyToken } from "../helpers/generateToken";

const checkAuth = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ").pop();
  const tokenData = await verifyToken(token);

  if (tokenData) {
    next();
  } else {
    res.status(409).json({ error: "no autorizado" });
  }
};

export default checkAuth;
