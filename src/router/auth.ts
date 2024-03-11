import express from "express";
import { get } from "lodash";
import passport from "passport";
import { registerUser } from "../controllers/auth";
import { isAuthenticated } from "../middleware";

export default (router: express.Router) => {
  router.post("/auth/register", registerUser);
  router.post(
    "/auth/login",
    passport.authenticate("local"),
    (req: express.Request, res: express.Response) => {
      return res.status(200).json({ message: "User login successfully" }).end();
    }
  );
  router.get("/auth/logout", function (req, res, next) {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      return res
        .status(200)
        .json({
          message: "You're now securely logged out.",
        })
        .end();
    });
  });
  router.get(
    "/auth/isAuthenticated",
    isAuthenticated,
    (req: express.Request, res: express.Response) => {
      const currentUserId = get(req, "session.passport.user") as string;
      return res
        .status(200)
        .json({
          currentUserId: currentUserId,
          message: "user's current session active",
        })
        .end();
    }
  );
};
// This is nava test message.
