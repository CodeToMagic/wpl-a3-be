import express from "express";
import {
  createNewGame,
  deleteGame,
  getAllGames,
  getGameByGameId,
  updateGame,
} from "../controllers/arcade.games";
import { isAuthenticated } from "../middleware";
export default (router: express.Router) => {
  router.get("/games/:id", isAuthenticated, getGameByGameId);
  router.put("/games/:id/edit", isAuthenticated, updateGame);
  router.delete("/games/:id", isAuthenticated, deleteGame);
  router.get("/games", isAuthenticated, getAllGames);
  router.post("/games", isAuthenticated, createNewGame);
};
