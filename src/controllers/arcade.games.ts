import express from "express";
import { getGames } from "../db/arcade.games";
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
