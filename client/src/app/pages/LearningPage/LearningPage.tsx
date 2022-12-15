import styles from "./LearningPage.module.scss";
import { ILearningPageInterface } from "./LearningPage.interface";
import { KeyboardLetter } from "@components";

export const LearningPage = ({
  className,
  ...props
}: ILearningPageInterface) => {
  return (
    <div className={styles.learningPage} {...props}>
      <KeyboardLetter />
    </div>
  );
};
