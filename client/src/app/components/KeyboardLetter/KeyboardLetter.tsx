import styles from './KeyboardLetter.module.scss';
import { IKeyboardLetterInterface } from './KeyboardLetter.interface';

export const KeyboardLetter = ({
  className,
  ...props
}: IKeyboardLetterInterface) => {
  return (
    <div className={styles.keyboardLetter} {...props}>
      KeyboardLetter Component
    </div>
  );
};
