import { adminAuth } from "@config/firebase-admin-config";
import { NextFunction, Request, Response } from "express";
import { FirebaseAuthError } from "firebase-admin/auth";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const token = req.cookies.access_token
  
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decodedToken = await adminAuth.verifyIdToken(token);
    
    req.user = decodedToken;
    next();
  } catch (error) {
    if (error instanceof FirebaseAuthError) {
      return res.status(401).json({ message: 'Unauthorized', error: error.message });
    }

    return res.status(500).json({ message: 'Something went wrong' })
  }
};
