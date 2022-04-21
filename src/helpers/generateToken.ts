import jwt from "jsonwebtoken";

export const tokenSign = async (id:string, role:string) => {
  return jwt.sign(
    {
      _id: id,
      role: role,
    },
    process.env.JWT_SECRET || "pass"
  );
};

export const verifyToken = async (token: any) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET || "pass")
    } catch (error) {
        return undefined
    }
};

export const decodeSign = async (token: string) => {};
