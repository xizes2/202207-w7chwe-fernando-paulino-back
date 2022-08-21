import Router from "express";
import { getUsers, registerUser } from "../controllers/userController";

const usersRouter = Router();

usersRouter.get("/", getUsers);
usersRouter.post("/register", registerUser);

export default usersRouter;
