import pkg from "pg";
const { Client } = pkg;

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "080080800",
  database: "portfolio",
});

async function connectDB() {
  try {
    await client.connect();
    console.log(`Database connection established`);
  } catch (error) {
    console.log(`Error to connect ${error}`);
  }
}

export { client, connectDB };
