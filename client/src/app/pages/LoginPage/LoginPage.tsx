import styles from './LoginPage.module.scss';
import { ILoginPageInterface } from './LoginPage.interface';

export const LoginPage = ({
  className,
  ...props
}: ILoginPageInterface) => {
  return (
    <div className={styles.loginPage} {...props}>
      LoginPage Component
    </div>
  );
};
