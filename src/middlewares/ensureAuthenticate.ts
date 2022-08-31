import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IAuthenticate {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).end();
  }

  const [, token] = authToken.split(" ");
 
  try {
    const { sub } = verify(
      token,
      "4f93ac9d10cb751b8c9c646bc9dbccb9"
    ) as IAuthenticate;   

    return next();
  } catch (err) {
    return response.status(401).end();
  }
}
