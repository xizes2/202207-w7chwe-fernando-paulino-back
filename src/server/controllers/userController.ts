import chalk from "chalk";
import Debug from "debug";
import { NextFunction, Request, Response } from "express";
import { User } from "../../database/models/User";

const debug = Debug("social-network-isdi:server:usersControllers");

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  debug(chalk.bgYellowBright("A request has arrived..."));
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

export const registerUser = () => {};

export const loginUser = () => {};