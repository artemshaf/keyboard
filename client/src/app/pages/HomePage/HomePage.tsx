import styles from "./HomePage.module.scss";
import { IHomePageInterface } from "./HomePage.interface";
import { Faq, Promo } from "@components";

export const HomePage = ({ className, ...props }: IHomePageInterface) => {
  return (
    <div className={styles.homePage} {...props}>
      <Promo />
      <Faq />
    </div>
  );
};
