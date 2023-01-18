import { IRoute } from "@interfaces";
import {
  COURSES_PAGE,
  HOME_PAGE,
  LEARNING_PAGE,
  LOGIN_PAGE,
  TEXTS_PAGE,
  TRAINING_PAGE,
  KEYBOARD_PAGE,
  KEYBOARD_LETTER_PAGE,
  ACCOUNT_PAGE,
} from "@utils";
import {
  AccountPage,
  CoursesPage,
  HomePage,
  KeyboardPage,
  LearningPage,
  LoginPage,
} from "@pages";
import { KeyboardLetterPage } from "@pages";

export const publicRoutes: IRoute[] = [
  {
    path: HOME_PAGE,
    element: <HomePage />,
  },
  {
    path: LOGIN_PAGE,
    element: <LoginPage />,
  },
];

export const authRoutes: IRoute[] = [
  {
    path: COURSES_PAGE,
    element: <CoursesPage />,
  },
  {
    path: LEARNING_PAGE,
    element: <LearningPage />,
  },
  {
    path: ACCOUNT_PAGE,
    element: <AccountPage />,
  },
  // {
  //   path: TRAINING_PAGE,
  //   element: <>,
  // },
  {
    path: KEYBOARD_PAGE,
    element: <KeyboardPage />,
  },
  {
    path: KEYBOARD_LETTER_PAGE,
    element: <KeyboardLetterPage />,
  },
];
