import { NextFunction, Request, Response } from "express";
import { User } from "../../database/models/User";
import { getUsers, registerUser } from "./userController";

describe("Given a userController controller", () => {
  describe("When it's getUsers method is called with an users array", () => {
    const users = [{}];
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockResolvedValue(users),
    };
    const next = jest.fn();
    const status = 200;

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

  describe("When it's getUsers method is called and catches and error", () => {
    const users = [{}];
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockResolvedValue(users),
    };
    const next = jest.fn();

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

  describe("When it's registerUser method is called with an user object with it's data", () => {
    const user = {
      userName: "",
      userEmail: "",
      password: "",
      image: "",
    };
    const req = { body: user };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockResolvedValue(user),
    };
    const next = jest.fn();
    const status = 201;

    test("Then it should respond with status 201 and the users data", async () => {
      User.create = jest.fn().mockResolvedValue(user);

      await registerUser(
        req as unknown as Request,
        res as unknown as Response,
        next as NextFunction
      );

      expect(res.status).toBeCalledWith(status);
      expect(res.json).toBeCalledWith({ user });
    });
  });

  describe("When it's registerUser method is called and catches and error", () => {
    const user = {
      userName: "",
      userEmail: "",
      password: "",
      image: "",
    };
    const req = { body: user };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockResolvedValue(user),
    };
    const next = jest.fn();

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
