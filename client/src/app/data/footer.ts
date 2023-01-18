import { ILink } from "@interfaces";
import { ABOUT_PAGE, CONTACTS_PAGE, HELP_PAGE, RATING_PAGE } from "@utils";

export const footerNavigation: ILink[] = [
  {
    link: ABOUT_PAGE,
    i18Key: "ABOUT_PAGE.linkText",
  },
  {
    i18Key: "RATING_PAGE.linkText",
    link: RATING_PAGE,
  },
  {
    i18Key: "HELP_PAGE.linkText",
    link: HELP_PAGE,
  },
  {
    i18Key: "CONTACTS_PAGE.linkText",
    link: CONTACTS_PAGE,
  },
];
