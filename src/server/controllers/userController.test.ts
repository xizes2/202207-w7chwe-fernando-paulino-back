import { NextFunction, Request, Response } from "express";
import { User } from "../../database/models/User";
import { getUsers } from "./userController";

describe("Given a userController controller", () => {
  const users = [{}];
  const status = 200;
  const req = {};
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockResolvedValue(test),
  };
  const next = jest.fn();

  describe("When it's getUsers method is called with ", () => {
    test("Then it should respond with status 200 and the users array", async () => {
      User.find = jest.fn().mockResolvedValue(users);
      await getUsers(
        req as Request,
        res as unknown as Response,
        next as NextFunction
      );

      expect(res.status).toBeCalledWith(status);
      expect(res.json).toBeCalledWith({ users });
    });
  });

  describe("When it's getUsers method is called and cachtes and error", () => {
    test("Then it should call next method with the error", async () => {
      User.find = jest.fn().mockRejectedValue(Error);
      await getUsers(
        req as Request,
        res as unknown as Response,
        next as NextFunction
      );

      expect(next).toBeCalledWith(Error);
    });
  });
});
