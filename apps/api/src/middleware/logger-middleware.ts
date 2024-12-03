import { NextFunction, Request, Response } from "express";

export const loggerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
  } catch (e) {
    throw e;
  }
};
