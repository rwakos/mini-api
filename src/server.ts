import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import { notFound } from "./middleware/not-found";

dotenv.config();
const app = express();

app.use(morgan("combined"));

app.get("/health-check", (_req, res) => {
	res.json({ message: "Up and running" });
});

app.use(notFound);

app.listen(process.env.API_PORT, () => {
	console.log(`Server running on port ${process.env.API_PORT}`);
});
