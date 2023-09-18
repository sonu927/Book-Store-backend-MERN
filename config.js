import "dotenv/config";

const db = process.env.DATABASE;
export const PORT = process.env.PORT || 4000;

export const mongoDB_URL = `${db}`;
