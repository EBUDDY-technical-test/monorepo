import { adminFunctions } from "@config/firebaseAdminConfig";
import { firebaseFunctions } from "@config/firebaseConfig";
import { Request, Response } from "express";
import { httpsCallable } from "firebase/functions";

const getUser = async (_: Request, res: Response) => {
  try {
    // const data = await fetch('http://127.0.0.1:5001/ebuddy-backend-b531c/us-central1/a')
    console.log('before call fetchUserData')
    const userList = await httpsCallable(firebaseFunctions, 'fetchUserData')()
    console.log('after call fetchUserData')
    // console.log(await data.json())
    // console.log(userList)
    // return await data.json();
  } catch (e) {
    console.log(e)
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
