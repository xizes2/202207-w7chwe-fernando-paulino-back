interface IcustomError extends Error {
  code: number;
  publicMessage?: string;
}

export default IcustomError;
