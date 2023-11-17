import express from "express";

import arcadeGames from "./arcade.games";
import auth from "./auth";
const router = express.Router();

export default (): express.Router => {
  arcadeGames(router);
  auth(router);
  return router;
};
