import styles from "./LoginPage.module.scss";
import { ILoginPageInterface } from "./LoginPage.interface";
import { Login } from "@components";

export const LoginPage = ({ className, ...props }: ILoginPageInterface) => {
  return (
    <div className={styles.loginPage} {...props}>
      <Login />
    </div>
  );
};
