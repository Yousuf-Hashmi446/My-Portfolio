import express from "express";
import routes from "./routes/routes.js";
import path from "path";
import { connectDB } from "./db/connection.js";
import bodyParser from "body-parser";

const app = express();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//create routes
app.use("/", routes);

//ejs setup
app.set("view engine", "ejs");
app.set("views", "./views");

//setup for static files
app.use(express.static(path.join(process.cwd(), "public")));

//connect db
connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
