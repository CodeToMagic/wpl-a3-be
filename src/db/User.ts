import mongoose from "mongoose";

export const User = mongoose.model(
  "User",
  new mongoose.Schema({
    fname: String,
    lname: String,
    username: String,
    password: String,
  })
);

export const createUser = (values: Record<string, any>) =>
  new User(values).save().then((user) => user.toObject());
export const getUserByUsername = (username: string) =>
  User.findOne({ username });
