import styles from './HomePage.module.scss';
import { IHomePageInterface } from './HomePage.interface';

export const HomePage = ({
  className,
  ...props
}: IHomePageInterface) => {
  return (
    <div className={styles.homePage} {...props}>
      HomePage Component
    </div>
  );
};
