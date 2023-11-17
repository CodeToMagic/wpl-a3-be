import express from "express";
import passport from "passport";
import { registerUser } from "../controllers/auth";

export default (router: express.Router) => {
  router.post("/auth/register", registerUser);
  router.post(
    "/auth/login",
    passport.authenticate("local"),
    (req: express.Request, res: express.Response) => {
      return res.status(200).json({ message: "User login successfully" }).end();
    }
  );
};
