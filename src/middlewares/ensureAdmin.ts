import { Request, Response, NextFunction } from "express";

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {

  const  admin  = true;

  if (admin) {
    return next();
  }

  return response.status(401).json({
    error: "Não Autorizado por não ser admin",
  });
}