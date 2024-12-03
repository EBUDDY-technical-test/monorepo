import { adminAuth } from "@config/firebaseAdminConfig";
import { NextFunction, Request, Response } from "express";
import { DecodedIdToken } from "firebase-admin/auth";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const token = req.cookies.access_token
  
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decodedToken = await adminAuth.verifyIdToken(token);
    
    (req as any as Request & { user: DecodedIdToken}).user = decodedToken;
    next();
  } catch (error: any) {
    console.log(error)
    return res.status(401).json({ message: 'Unauthorized', error: error.message });
  }
};
