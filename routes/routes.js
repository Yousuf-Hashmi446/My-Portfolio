import express from "express";
import { homeController, insertUser } from "../controllers/homeController.js";
const routes = express.Router();

routes.get("/", homeController);

routes.post("/submit-contact-form", insertUser);

export default routes;
