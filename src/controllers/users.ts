import { Request, Response } from "express";
import httpError from "../helpers/handleError";
import User from "../models/user";

export const getUsers = async (req: Request, res: Response) => {
  const users = await User.findAll();

  res.json(users);
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) {
      return httpError(res, "User not found");
    }

    res.json(user);
  } catch (error) {
    httpError(res, error);
  }
};

export const postUser = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const email = body.email;

    const isEmailUsed = await User.findOne({ where: { email: email } });

    if (isEmailUsed) {
      return httpError(res, "Email already registered");
    }

    const user = await User.create(body);
    res.json(user);
  } catch (error) {
    httpError(res, error);
  }
};

export const putUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const user = await User.findByPk(id);

    if (!user) {
      return httpError(res, "User not found");
    }

    await user.update(body);
    res.json(user);
  } catch (error) {
    httpError(res, error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await User.findByPk(id);

  if (!user) {
    return httpError(res, "User not found");
  }

  await user.destroy();
  res.json({
    msg: "Delete User",
  });

  try {
  } catch (error) {
    httpError(res, error);
  }
};

export const softDelete = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) {
      return httpError(res, "User not found");
    }

    await user.update({ status: false });

    res.json({
      msg: "Soft Delete User",
    });
  } catch (error) {
    httpError(res, error);
  }
};
