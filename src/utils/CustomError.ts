import IcustomError from "../types/IcustomError";

const CustomError = (
  code: number,
  publicMessage: string,
  privateMessage: string
): IcustomError => {
  const error = new Error(privateMessage) as IcustomError;
  error.code = code;
  if (publicMessage) {
    error.publicMessage = publicMessage;
  }
  return error;
};

export default CustomError;
