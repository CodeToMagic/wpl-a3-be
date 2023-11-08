import express from "express";
import { getAllGames } from "../controllers/arcade.games";
export default (router: express.Router) => {
  router.get("/games", getAllGames);
};
