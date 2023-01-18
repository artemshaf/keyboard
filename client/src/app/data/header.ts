import { ILink } from "@interfaces";
import {
  COURSES_PAGE,
  KEYBOARD_PAGE,
  LEARNING_PAGE,
  TRAINING_PAGE,
} from "@utils";

export const headerNavigation: ILink[] = [
  {
    link: KEYBOARD_PAGE,
    i18Key: "KEYBOARD_PAGE.linkText",
  },
  {
    i18Key: "LEARNING_PAGE.linkText",
    link: LEARNING_PAGE,
  },
  {
    i18Key: "TRAINING_PAGE.linkText",
    link: TRAINING_PAGE,
  },
  {
    i18Key: "COURSES_PAGE.linkText",
    link: COURSES_PAGE,
  },
];
