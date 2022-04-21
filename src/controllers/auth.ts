import { Request, Response } from "express";
import { tokenSign } from "../helpers/generateToken";
import { encrypt, compare } from "../helpers/handleBcrypt";
import httpError from "../helpers/handleError";
import User from "../models/user";

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user: any = await User.findOne({ where: { email: email } });
    if (!user) {
      return httpError(res, "User not found");
    }

    const savePassword: string = user.password;
    const checkPassword = await compare(password, savePassword)
    const tokenSession = await tokenSign(user.id, user.role)

    res.json({checkPassword,tokenSession});
  } catch (error) {
    httpError(res, error);
  }
};

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const email = body.email;

    const isEmailUsed = await User.findOne({ where: { email: email } });

    // if (isEmailUsed) {
    //   return httpError(res, "Email already registered");
    // }

    body.password = await encrypt(body.password);
    const user = await User.create(body);

    res.json(user);
  } catch (error) {
    httpError(res, error);
  }
};
