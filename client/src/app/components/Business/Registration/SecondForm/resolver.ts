import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { IRegisrationSecondData } from "@interfaces";

export interface IRegisrationSecondFormData extends IRegisrationSecondData {
  repeatPassword: string;
}

export const formResolver = joiResolver(
  Joi.object<IRegisrationSecondFormData>({
    password: Joi.string().min(4).max(64).required(),
    repeatPassword: Joi.any()
      .equal(Joi.ref("password"))
      .required()
      .label("Confirm password")
      .options({ messages: { "any.only": "{{#label}} does not match" } }),
    name: Joi.string().trim().max(64),
    surname: Joi.string().trim().max(64),
  })
);
