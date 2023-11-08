import mongoose from "mongoose";

const ArcadeGamesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
  minimumAge: { type: Number, required: true },
  pricing: {
    hourly: { type: String, required: true },
    perGame: { type: String, required: true },
  },
  image: {
    description: { type: String, required: true },
    path: { type: String, required: true },
  },
});

export const ArcadeGamesModel = mongoose.model(
  "ArcadeGames",
  ArcadeGamesSchema
);

// Arcade Games CRUD opeartion methods
export const getGames = () => ArcadeGamesModel.find();
export const getGamesById = (id: string) => ArcadeGamesModel.findById(id);

export const createGame = (values: Record<string, any>) =>
  new ArcadeGamesModel(values).save().then((game) => game.toObject());
export const deleteUserById = (id: string) =>
  ArcadeGamesModel.findOneAndDelete({ _id: id });
export const updateUserById = (id: string, values: Record<string, any>) =>
  ArcadeGamesModel.findByIdAndUpdate(id, values);
