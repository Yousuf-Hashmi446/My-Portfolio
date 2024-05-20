import { client } from "../db/connection.js";

const homeController = (req, res) => {
  res.render("index");
};

const insertUser = async (req, res) => {
  const { name, email, message } = req.body;
  console.log("Request Body:", req.body);

  if (!name || !email || !message) {
    console.error("Missing required fields");
    return res.render("success", { message: "Missing required fields" });
  }

  try {
    const result = await client.query(
      "INSERT INTO users (name, email, message) VALUES ($1, $2, $3) RETURNING *",
      [name, email, message]
    );
    console.log("Inserted data:", result.rows[0]);
    res.render("success", { message: "Insertion was successful!" });
  } catch (error) {
    console.error("Error inserting data:", error);
    res.render("success", { message: "An error occurred. Please try again." });
  }
};

export { homeController, insertUser };
