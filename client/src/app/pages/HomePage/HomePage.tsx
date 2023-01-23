import styles from "./HomePage.module.scss";
import { IHomePageInterface } from "./HomePage.interface";
import { Faq, Modal, Promo } from "@components";

export const HomePage = ({ className, ...props }: IHomePageInterface) => {
  return (
    <div className={styles.homePage} {...props}>
      <Promo />
      <Faq />
      <Modal />
    </div>
  );
};
