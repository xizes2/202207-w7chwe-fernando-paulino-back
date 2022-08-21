import chalk from "chalk";
import Debug from "debug";
import { NextFunction, Request, Response } from "express";
import { User } from "../../database/models/User";
import hashCreator from "../../utils/auth";
import CustomError from "../../utils/CustomError";

const debug = Debug("social-network-isdi:server:usersControllers");

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  debug(chalk.bgYellowBright("getUsers method requested..."));
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    debug(
      chalk.bgRedBright(`Error code: ${error.code} => Error getting petition`)
    );
    next(error);
  }
};

interface UserRegisterData {
  userName: string;
  userEmail: string;
  password: string;
  image: string;
}

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  debug(chalk.bgMagentaBright("registerUser method requested..."));
  const user: UserRegisterData = req.body;
  user.password = (await hashCreator(user.password)) as unknown as string;
  try {
    const newUser = await User.create(user);
    res.status(201).json({ user: newUser });
  } catch (error) {
    const customError = CustomError(
      error.code,
      error.message,
      "Error registering user"
    );
    next(customError);
  }
};
