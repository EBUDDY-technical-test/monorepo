import { firebaseFunctions } from "@config/firebase-config";
import { Request, Response } from "express";
import { httpsCallable } from "firebase/functions";

const getUser = async (_: Request, res: Response): Promise<void> => {
  try {
    const userList = await httpsCallable(firebaseFunctions, 'fetchUserData')()
    
    res.send(userList.data);
  } catch (e) {
    throw e;
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const result = await httpsCallable(firebaseFunctions, 'updateUserData')(req.body)
    
    res.send(result.data)
  } catch (e) {
    throw e;
  }
}

const userController = {}
export default Object.assign(userController, {
  getUser,
  updateUser,
})
