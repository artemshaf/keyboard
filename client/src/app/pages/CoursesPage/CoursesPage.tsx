import styles from './CoursesPage.module.scss';
import { ICoursesPageInterface } from './CoursesPage.interface';

export const CoursesPage = ({
  className,
  ...props
}: ICoursesPageInterface) => {
  return (
    <div className={styles.coursesPage} {...props}>
      CoursesPage Component
    </div>
  );
};
