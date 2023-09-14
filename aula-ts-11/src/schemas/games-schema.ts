import Joi from "joi";
import { Game } from "protocols/game-protocol";

export const gameSchema = Joi.object<Game>({
    title: Joi.string().required(),
    platform: Joi.string().required()
  })