import { QualityWord, QualityChar, IHistory } from "@interfaces";
import { KeyboarsItems } from "@components";
import { useId } from "react";

export const getWordsOnKeyboard = (text: string) => text.trim().split(" ");
export const getWordsOnKeyboardLetter = (text: string) => text.trim().split("");
export const correctWordId = "word_current";

const defineQualityWord = (
  index: number,
  position: number,
  history: IHistory
): QualityWord => {
  if (index < position) {
    return history[index] ? "correct" : "wrong";
  }
  return "next";
};

const defineQualityChar = (
  char: string,
  index: number,
  input: string
): QualityChar => {
  const position = input.length;
  if (index > position) {
    return "next";
  }
  if (index === position) {
    return "current";
  }
  return char === input[index] ? "correct" : "wrong";
};

const getCorrectChar = (char: string, index: number, input: string) => {
  const charQuality = defineQualityChar(char, index, input);
  if (charQuality === "correct") {
    return (
      <KeyboarsItems.ListItemCharCorrect key={char + index}>
        {char}
      </KeyboarsItems.ListItemCharCorrect>
    );
  }
  if (charQuality === "wrong") {
    return (
      <KeyboarsItems.WordListItemCharWrong key={char + index}>
        {char}
      </KeyboarsItems.WordListItemCharWrong>
    );
  }
  if (charQuality === "next") {
    return (
      <KeyboarsItems.ListItemCharNext key={char + index}>
        {char}
      </KeyboarsItems.ListItemCharNext>
    );
  }
  return (
    <KeyboarsItems.ListItemChar key={char + index}>
      {char}
    </KeyboarsItems.ListItemChar>
  );
};

export const getCorrectWordOnChar = (
  word: string,
  inputText: string
): JSX.Element => {
  return (
    <KeyboarsItems.WordListOnChar key={useId()} id={correctWordId}>
      {word
        .split("")
        .map((char, index) => getCorrectChar(char, index, inputText))}
    </KeyboarsItems.WordListOnChar>
  );
};

export const getCorrectWord = (
  word: string,
  index: number,
  pointerPosition: number,
  history: IHistory
) => {
  const key = useId();
  const qualityWord: QualityWord = defineQualityWord(
    index,
    pointerPosition,
    history
  );
  if (qualityWord === "next") {
    return (
      <KeyboarsItems.WordListItem key={key}>{word}</KeyboarsItems.WordListItem>
    );
  }
  if (qualityWord === "wrong") {
    return (
      <KeyboarsItems.WordListItemWrong key={key}>
        {word}
      </KeyboarsItems.WordListItemWrong>
    );
  }
  return (
    <KeyboarsItems.WordListItemCorrect key={key}>
      {word}
    </KeyboarsItems.WordListItemCorrect>
  );
};

const defineQualityLetter = (
  index: number,
  pointer: number,
  history: IHistory
): QualityChar => {
  if (pointer < index) {
    return "next";
  }
  if (pointer === index) {
    return "current";
  }
  return history[index] ? "correct" : "wrong";
};

export const getCorrectLetter = (
  letter: string,
  index: number,
  pointerPosition: number,
  history: IHistory
) => {
  const key = letter + index;
  const qualityLetter: QualityWord = defineQualityLetter(
    index,
    pointerPosition,
    history
  );
  if (qualityLetter === "next") {
    return (
      <KeyboarsItems.WordListItem key={key}>
        {letter}
      </KeyboarsItems.WordListItem>
    );
  }
  if (qualityLetter === "wrong") {
    return (
      <KeyboarsItems.WordListItemWrong key={key}>
        {letter}
      </KeyboarsItems.WordListItemWrong>
    );
  }
  if (qualityLetter === "correct") {
    return (
      <KeyboarsItems.WordListItemCorrect key={key}>
        {letter}
      </KeyboarsItems.WordListItemCorrect>
    );
  }
  return (
    <KeyboarsItems.WordListItemCurrent key={key} id={correctWordId}>
      {letter}
    </KeyboarsItems.WordListItemCurrent>
  );
};
