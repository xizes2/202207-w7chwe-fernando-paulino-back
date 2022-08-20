import Router from "express";
import {
  getUsers,
  loginUser,
  registerUser,
} from "../controllers/usersControllers";

const usersRouter = Router();

usersRouter.get("/", getUsers);
usersRouter.post("/register", registerUser);
usersRouter.post("/login", loginUser);

export default usersRouter;
