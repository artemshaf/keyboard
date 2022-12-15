import styles from "./Footer.module.scss";
import { IFooterInterface } from "./Footer.interface";

export const Footer = ({ className, ...props }: IFooterInterface) => {
  return <div className={styles.footer} {...props}></div>;
};
