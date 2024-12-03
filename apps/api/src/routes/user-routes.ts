import userController from '@controller/user-controller';
import express from 'express';

const router = express.Router();

router.get('/fetch-user-data', userController.getUser);
router.put('/update-user-data', userController.updateUser);

export default router;
