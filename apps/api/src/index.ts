import express from 'express';
import dotenv from 'dotenv';
import userRoutes from '@routes/user-routes';
import cors from "cors";
import cookieParser from "cookie-parser";
import { loggerMiddleware } from '@middleware/logger-middleware';
import { connectFunctionsEmulator } from 'firebase/functions';
import { firebaseFunctions } from '@config/firebaseConfig';
import { authMiddleware } from '@middleware/auth-middleware';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// MIDDLEWARES
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));
app.use(cookieParser() as any);
app.use(loggerMiddleware);
app.use(authMiddleware);

// ROUTES
// NOTES: I just follow the requirement in the docs. 
// for better and understandable routes, it should be '/users' or '/user'.
app.use('/', userRoutes);

connectFunctionsEmulator(firebaseFunctions, "127.0.0.1", 5001)
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
