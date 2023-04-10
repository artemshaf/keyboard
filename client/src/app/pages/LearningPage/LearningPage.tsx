import styles from "./LearningPage.module.scss";
import { ILearningPageInterface } from "./LearningPage.interface";
import { KeyboardLetter } from "@components";
import { storeActions, useActions } from "@store";
import { useEffect } from "react";

export const LearningPage = ({
  className,
  ...props
}: ILearningPageInterface) => {
  const actions = useActions(storeActions);

  useEffect(() => {
    // const res = actions.createText({ text, languageId: 1 });
  }, []);

  return (
    <div className={styles.learningPage} {...props}>
      <KeyboardLetter />
    </div>
  );
};
