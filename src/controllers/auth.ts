import bcrypt from "bcrypt";
import express from "express";
import { createUser, getUserByUsername } from "../db/User";

export const registerUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { password, username, fname, lname, phoneNumber, address } = req.body;
    if (
      !password ||
      !username ||
      !fname ||
      !lname ||
      !phoneNumber ||
      !address
    ) {
      return res.status(400).json({ error: "Invalid request" }).end();
    }
    const existingUser = await getUserByUsername(username);

    if (existingUser) {
      return res.status(400).json({ error: "Duplicate user request" }).end();
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await createUser({
      username: username,
      password: hashedPassword,
      fname: fname,
      lname: lname,
      phoneNumber: phoneNumber,
      address: address,
    });
    return res
      .status(200)
      .json({ user: newUser, message: "User registered successfully" })
      .end();
  } catch (error) {
    return res.status(500).json({ error: "System error" }).end();
  }
};
