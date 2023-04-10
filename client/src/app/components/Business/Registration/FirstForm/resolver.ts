import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { IRegisrationFirstData } from "@interfaces";

export const formResolver = joiResolver(
  Joi.object<IRegisrationFirstData>({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .max(64)
      .required(),
  })
);
