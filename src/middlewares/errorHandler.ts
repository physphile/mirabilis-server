import { ErrorRequestHandler } from "express";
import ApiError from "../models/ApiError.js";
import { UniqueConstraintError } from "sequelize";

// express не распознает middleware без 4-х аргументов
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof ApiError) res.status(err.status).json(err);
  else if (err instanceof UniqueConstraintError)
    res.status(400).json({
      type: err.name,
      message: err.message,
    });
  else if (err instanceof Error)
    res.status(520).json({
      type: "Unhandled error",
      message: err.message,
    });
  else
    res.status(520).json({
      type: "Unknown error",
    });
};
