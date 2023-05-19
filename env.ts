import { config } from "dotenv";
config();

export const env = {
  apiKeySwapi: process.env.API_KEY_SWAPI,
  dbHost: process.env.DB_HOST,
};
