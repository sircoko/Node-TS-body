import { Response } from "express";

const httpError = (res:Response, err: unknown  ) => {
    console.log(err);
    
    res.status(500)
    res.json({
        error: "something went wrong"
    })
}

export default httpError