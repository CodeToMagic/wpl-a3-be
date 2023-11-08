import bodyParser from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import http from "http";

import mongoose from "mongoose";
import router from "./router";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000/");
});

const MONGO_URL =
  "mongodb+srv://backend:4knMy2MN7Eb3Hv6W@cluster1.axercl6.mongodb.net/wpl?retryWrites=true&w=majority";
mongoose.set("strictQuery", false);
mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("open", () => console.log("Connection successful"));
mongoose.connection.on("error", (error: Error) => console.log(error));

app.use("/", router());
