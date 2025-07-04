import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import { notFound } from "./middleware/example";
import router from "./route/example";

dotenv.config();

const app = express();

app.use(morgan("combined"));

app.use(router);

app.use(notFound);

app.listen(process.env.API_PORT, () => {
	console.log(`Server running on port ${process.env.API_PORT}`);
});
