import { useEffect, useRef, useState } from "react";
import cn from "classnames";
import { Box, Typography } from "@mui/material";

import { getWordsOnKeyboard } from "@helpers";
import { IKeyboardInterface } from "./Keyboard.interface";
import { ChangeEvent } from "react";
import { useActions } from "@hooks";
import { selectKeyboardState, useAppSelector } from "@store";

const TEXT = `this text is test for my app on couse work in GSUthis text is test for my app on couse work in GSUthis text is test for my app on couse work in GSUthis text is test for my app on couse work in GSUthis text is test for my app on couse work in GSUthis text is test for my app on couse work in GSU`;

export const Keyboard = ({ className, ...props }: IKeyboardInterface) => {
  const [text, setText] = useState<string[]>(() => getWordsOnKeyboard(TEXT));
  const [positionCurrentWord, setPositionCurrentWord] = useState<number>(0);
  const [position, setPosition] = useState<number>(0);
  const [currentRow, setCurrentRow] = useState<number>(-1);
  const [inputText, setInputText] = useState<string>("");
  const { addCorrectWordIndex, addWrongWordIndex } = useActions();
  const keyboardState = useAppSelector((state) => selectKeyboardState(state));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const currentText = e.target.value;
    //! pause
    if (keyboardState.status === "pause") {
      return;
    }
    //! space in start word
    if (currentText === " ") {
      return;
    }
    //! correct word
    if (currentText === text[position] + " ") {
      addCorrectWordIndex(position);
      setPosition((prev) => prev + 1);
      setInputText("");
      return;
    }
    //! wrong word
    if (currentText[currentText.length - 1] === " ") {
      addWrongWordIndex(position);
      setPosition((prev) => prev + 1);
      setInputText("");
      return;
    }
    setInputText(currentText);
  };

  useEffect(() => {
    const top = document
      .querySelector(".current-word")
      ?.getBoundingClientRect().top;
    if (!top) return;
    console.log(top);
    console.log(positionCurrentWord);
    if (top <= positionCurrentWord) {
      return;
    }
    //! select correct row for shuffle top
    setPositionCurrentWord(top);
    setCurrentRow((prev) => prev + 1);
  }, [position]);

  return (
    <div {...props}>
      <Box
        sx={{
          width: "300px",
          bgcolor: "grey",
          borderRadius: "15px",
          height: "100px",
          overflow: "hidden",
          whiteSpace: "normal",
          userSelect: "none",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: `-${25 * (currentRow - 1)}px`,
            zIndex: 100,
            color: "red",
            width: "100%",
          }}
        >
          {text.map((item, index) => (
            <Typography
              component="span"
              sx={{ padding: "3px", width: "auto", display: "inline-block" }}
              key={item + index}
              className={cn({
                "current-word": position === index,
                "wrong-write-word": text[position] !== inputText && inputText,
              })}
            >
              {item}
            </Typography>
          ))}
        </Box>
      </Box>
      <input value={inputText} onChange={handleChange} />
      <p>correct - {keyboardState.history.correct.length}</p>
      <p>wrong - {keyboardState.history.wrong.length}</p>
    </div>
  );
};
