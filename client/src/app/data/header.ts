import { ILink } from "@interfaces";
import {
  COURSES_PAGE,
  KEYBOARD_PAGE,
  LEARNING_PAGE,
  TRAINING_PAGE,
} from "@utils/consts";

export const navigation: ILink[] = [
  {
    text: "Тестирование",
    link: KEYBOARD_PAGE,
  },
  {
    text: "Обучение",
    link: LEARNING_PAGE,
  },
  {
    text: "Тренировка",
    link: TRAINING_PAGE,
  },
  {
    text: "Курсы",
    link: COURSES_PAGE,
  },
];
