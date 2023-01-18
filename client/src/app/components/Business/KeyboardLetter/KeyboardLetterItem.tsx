import { memo } from "react";
import { IHistory } from "@interfaces";
import { getCorrectLetter } from "@helpers";

type Props = {
  letter: string;
  index: number;
  position: number;
  history: IHistory;
};

const propsAreEqual = (
  prevProps: Readonly<Props>,
  nextProps: Readonly<Props>
): boolean => {
  //! update on current word
  if (nextProps.position === nextProps.index) return false;
  //! update on prev word
  if (prevProps.index + 1 === nextProps.position) return false;
  return true;
};

export const KeyboardLetterItem = memo(
  ({ history, index, letter, position }: Props) => {
    return getCorrectLetter(letter, index, position, history);
  },
  propsAreEqual
);
