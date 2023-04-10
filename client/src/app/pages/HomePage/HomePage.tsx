import styles from "./HomePage.module.scss";
import { IHomePageInterface } from "./HomePage.interface";
import { AccountInfoBig, Faq, Promo } from "@components";
import { useAppDispatch } from "../../store";
import { Typography } from "@mui/material";

export const HomePage = ({ className, ...props }: IHomePageInterface) => {
  const dispatch = useAppDispatch();

  const onSend = () => {};

  return (
    <div className={styles.homePage} {...props}>
      <Promo />
      <Faq />
    </div>
  );
};
