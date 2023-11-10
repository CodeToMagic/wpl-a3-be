import express from "express";
import {
  createNewGame,
  getAllGames,
  getGameByGameId,
} from "../controllers/arcade.games";
export default (router: express.Router) => {
  router.get("/games/:id", getGameByGameId);
  router.get("/games", getAllGames);
  router.post("/games", createNewGame);
};
