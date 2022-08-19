import connectDatabase from "./database";
import "./dotenv";

const databaseUrl = process.env.MONGOURL;

(async () => {
  try {
    await connectDatabase(databaseUrl);
  } catch (error) {
    process.exit(1);
  }
})();
