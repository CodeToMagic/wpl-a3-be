import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import http from "http";

import bcrypt from "bcrypt";
import session from "express-session";
import mongoose from "mongoose";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { UserType } from "types";
import { User } from "./db/User";
import router from "./router";

const app = express();

// Configure session middleware
app.use(
  session({
    secret: "D49ED3295CB92DCBE17B1AFAC7EA1",
    resave: false,
    saveUninitialized: false,
  })
);
// Initialize Passport.js
app.use(passport.initialize());
app.use(passport.session());
// Configure Passport.js local strategy
passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username }, (err: Error, user: UserType) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }
      if (!bcrypt.compareSync(password, user.password)) {
        return done(null, false);
      }
      return done(null, user);
    });
  })
);
// Serialize and deserialize user
passport.serializeUser((user: UserType, done) => {
  done(null, user._id);
});

passport.deserializeUser((_id, done) => {
  User.findById(_id, (err: Error, user: UserType) => {
    done(err, user);
  });
});
app.use(
  cors({
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(express.urlencoded());

const server = http.createServer(app);

server.listen(3001, () => {
  console.log("Server running on http://localhost:3001/");
});

const MONGO_URL =
  "mongodb+srv://backend:4knMy2MN7Eb3Hv6W@cluster1.axercl6.mongodb.net/wpl?retryWrites=true&w=majority";
mongoose.set("strictQuery", false);
mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("open", () => console.log("Connection successful"));
mongoose.connection.on("error", (error: Error) => console.log(error));

app.use("/", router());
