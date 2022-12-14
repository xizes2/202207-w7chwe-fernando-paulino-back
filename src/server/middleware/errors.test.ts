import { NextFunction, Request, Response } from "express";
import ICustomError from "../../types/ICustomError";
import { generalError, notFoundError } from "./errors";

describe("Given an notFoundError function", () => {
  describe("When its called", () => {
    test("Then it should respond with status 404 and {error: 'Endpoint not found' }", async () => {
      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockResolvedValue({ error: "Endpoint not found" }),
      };
      const status = 404;
      const resolvedJson = { error: "Endpoint not found" };

      await notFoundError(
        req as unknown as Request,
        res as unknown as Response
      );

      expect(res.status).toBeCalledWith(status);
      expect(res.json).toBeCalledWith(resolvedJson);
    });
  });
});

describe("Given an generalError function", () => {
  describe("When its called", () => {
    test("Then it should respond with status the received error code and {error: errorMessage}", async () => {
      const error = {
        code: 666,
        publicMessage: "Total error, hell broke loose!",
      };
      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockResolvedValue(error.publicMessage),
      };
      const next = jest.fn;
      const status = 666;
      const resolvedJson = { error: error.publicMessage };

      await generalError(
        error as ICustomError,
        req as unknown as Request,
        res as unknown as Response,
        next as NextFunction
      );

      expect(res.status).toBeCalledWith(status);
      expect(res.json).toBeCalledWith(resolvedJson);
    });
  });
});
