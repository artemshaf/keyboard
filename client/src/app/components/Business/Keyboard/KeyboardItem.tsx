import { memo } from "react";
import { IHistory } from "@interfaces";
import { getCorrectWord, getCorrectWordOnChar } from "@helpers";

type Props = {
  word: string;
  index: number;
  position: number;
  inputText: string;
  history: IHistory;
};

const propsAreEqual = (
  prevProps: Readonly<Props>,
  nextProps: Readonly<Props>
): boolean => {
  //! update on current word
  if (nextProps.index === 0) {
    console.log(prevProps);
    console.log(nextProps);
  }
  const correntWord =
    nextProps.position === nextProps.index &&
    prevProps.inputText !== nextProps.inputText;
  if (correntWord) {
    console.log("correntWord ", prevProps.word);
    return false;
  }
  //! update prev word
  if (nextProps.position === prevProps.index + 1) return false;
  //! update next word
  if (nextProps.position === nextProps.index) return false;
  return true;
};

export const KeyboardItem = memo(
  ({ history, index, word, position, inputText }: Props) => {
    return index === position
      ? getCorrectWordOnChar(word, inputText) //! inputText in two option
      : getCorrectWord(word, index, position, history);
  },
  propsAreEqual
);
