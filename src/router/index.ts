import express from "express";

import arcadeGames from "./arcade.games";
const router = express.Router();

export default (): express.Router => {
  arcadeGames(router);
  return router;
};
