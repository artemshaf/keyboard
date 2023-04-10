const pathToImages = `${import.meta.env.BASE_URL}images/`;

export const blackKeyboardSrc = `${pathToImages}blackKeyboard.png`;
export const whiteKeyboardSrc = `${pathToImages}whiteKeyboard.png`;
export const vkKeyboardSrc = `${pathToImages}/socials/vk.svg`;

export const regExpFlags = "gi";

export const russianPattern = new RegExp(
  /[а-яА-яёЁ0-9_.,\/#?!$%^&*;:{}\[\]=\-<>\|_`~()@"' ]+-*/,
  regExpFlags
);
export const englishPattern = new RegExp(
  /[a-zA-Z0-9_.,\/#?!$%^&*;:{}\[\]=\-<>\|_`~()@"' ]/,
  regExpFlags
);
export const HOME_PAGE = "/";
export const LOGIN_PAGE = "/login";
export const REGISTRATION_PAGE = "/registration";

export const TRAINING_PAGE = "/training";
export const LEARNING_PAGE = "/learning";
export const COURSES_PAGE = "/courses";
export const TEXTS_PAGE = "/texts";
export const KEYBOARD_PAGE = "/keyboard";
export const KEYBOARD_LETTER_PAGE = "/keyboard-page";

export const ABOUT_PAGE = "/keyboard-page";
export const RATING_PAGE = "/keyboard-page";
export const HELP_PAGE = "/keyboard-page";
export const CONTACTS_PAGE = "/contacts-page";

export const ACCOUNT_PAGE = "/account";

export const VK_LINK = "https://vk.com/artsss02";
export const TELEGRAM_LINK = "https://t.me/shafArt";

export const LOADING_CONSTANTS = {
  REJECTED: "/rejected",
  FULFILLED: "/fulfilled",
  PENDING: "/pending",
};
