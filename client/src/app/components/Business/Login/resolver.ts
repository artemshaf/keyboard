import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { ILoginDto } from "@interfaces";

export interface IFormResolver extends ILoginDto {
  agree: boolean;
}

export const formResolver = joiResolver(
  Joi.object<IFormResolver>({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .max(64)
      .required(),
    password: Joi.string().min(4).max(64).required(),
    agree: Joi.boolean().invalid(false),
  })
);
