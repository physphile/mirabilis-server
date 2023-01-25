import { Router } from "express";
import ApiError from "../models/ApiError.js";
import { User } from "../database/models.js";

const userRouter = Router();

userRouter.post("/create", async (req, res, next) => {
  const { username, password } = req.body;
  if (!username) next(ApiError.badRequest("Username was not provided"));
  else if (!password) next(ApiError.badRequest("Password was not provided"));
  else
    User.create({ username, password })
      .then(() =>
        res.json({
          access_token: username,
        })
      )
      .catch((err) => next(err));
});

userRouter.delete("/:username", async (req, res, next) => {
  const { username } = req.params;
  User.destroy({ where: { username } }).then(() => res.send());
});

export default userRouter;
