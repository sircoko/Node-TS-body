import { NextFunction, Response, Request } from "express";
import { check, CustomValidator } from "express-validator";
import validateResult from "../helpers/validateHelper";
import User from "../models/user";

const allowRoles: string[] = ["user", "admin"];

const validateCreate = [
  check("name").exists().not().isEmpty().isLength({ min: 3 }),

  check("email")
    .exists()
    .isEmail()
    .withMessage("E-mail not valid")
    .custom(async (value, { req }) => {
      const isValidEmail = await User.findOne({
        where: { email: req.body.email },
      });
      if (isValidEmail) {
        return Promise.reject("E-mail already in use");
      }
      return true;
    })
    .withMessage("E-mail already in use"),

  check("role")
    .exists()
    .custom((role, { req }) => {
      return allowRoles.includes(req.body.role);
    })
    .withMessage("role not allow"),

  (req: Request, res: Response, next: NextFunction) => {
    validateResult(req, res, next);
  },
];

export default validateCreate;
