import chalk from "chalk";
import Debug from "debug";
import app from ".";
import IcustomError from "../types/IcustomError";

const debug = Debug("social-network-isdi:server:startServer");

const startServer = (port: number) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(
        chalk.bgGreenBright(`Server listening on http://localhost:${port}`)
      );
      resolve(true);
    });

    server.on("error", (error: IcustomError) => {
      debug(
        chalk.bgRedBright(
          `Error code: ${error.code}, Error starting the server`
        )
      );
      reject(error);
    });
  });

export default startServer;
