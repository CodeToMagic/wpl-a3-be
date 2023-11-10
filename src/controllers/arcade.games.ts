import express from "express";
import { createGame, getGames, getGamesById } from "../db/arcade.games";
import { ArcadeGame } from "../types";
export const getAllGames = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const games = await getGames();
    return res.status(200).json(games);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

export const getGameByGameId = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const id = req.params.id;
    const games = await getGamesById(id);
    return res.status(200).json(games);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

export const createNewGame = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const {
      pricing,
      image,
      _id,
      name,
      description,
      type,
      minimumAge,
    }: ArcadeGame = req.body;
    const arcadeGameData: ArcadeGame = {
      pricing,
      image,
      _id,
      name,
      description,
      type,
      minimumAge,
    };
    const games = await createGame(arcadeGameData);
    return res.status(200).json(games);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
};
