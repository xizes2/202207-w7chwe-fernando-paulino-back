import IcustomError from "../types/IcustomError";
import CustomError from "./CustomError";

describe("Given a CustomError", () => {
  describe("When instantiated with code 200, public message 'public ok' and private message 'private ok'", () => {
    const errorCode = 200;
    const publicMessage = "public ok";
    const privateMessage = "private ok";
    test("Then it should return code 200", () => {
      const error = CustomError(200, "", "") as IcustomError;

      expect(error.code).toBe(errorCode);
    });

    test("Then it should return public message 'public ok'", () => {
      const error = CustomError(200, "public ok", "");

      expect(error.publicMessage).toBe(publicMessage);
    });

    test("Then it should return private message 'private ok'", () => {
      const error = CustomError(200, "", "private ok");

      expect(error.message).toBe(privateMessage);
    });
  });
});
