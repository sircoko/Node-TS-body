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
        const res = jwt.verify(token, process.env.JWT_SECRET || "pass")
        console.log(res)
        return res
    } catch (error) {
        return undefined
    }
};

export const decodeSign = async (token: string) => {};
