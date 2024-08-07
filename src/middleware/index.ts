import express from "express";
export const isAuthenticated = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.status(401).json({ error: "Unauthorized" }).end();
};
