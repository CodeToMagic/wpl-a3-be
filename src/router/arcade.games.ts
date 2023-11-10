import express from "express";
import {
  createNewGame,
  deleteGame,
  getAllGames,
  getGameByGameId,
  updateGame,
} from "../controllers/arcade.games";
export default (router: express.Router) => {
  router.get("/games/:id", getGameByGameId);
  router.put("/games/:id/edit", updateGame);
  router.delete("/games/:id", deleteGame);
  router.get("/games", getAllGames);
  router.post("/games", createNewGame);
};
