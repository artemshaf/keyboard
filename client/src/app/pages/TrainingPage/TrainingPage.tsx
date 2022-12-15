import styles from './TrainingPage.module.scss';
import { ITrainingPageInterface } from './TrainingPage.interface';

export const TrainingPage = ({
  className,
  ...props
}: ITrainingPageInterface) => {
  return (
    <div className={styles.trainingPage} {...props}>
      TrainingPage Component
    </div>
  );
};
