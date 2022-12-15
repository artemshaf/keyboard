import { useEffect, useState } from "react";
import cn from "classnames";
import { Box, Typography } from "@mui/material";

import { ChangeEvent } from "react";
import { useActions } from "@hooks";
import { selectKeyboardState, useAppSelector } from "@store";
import { getWordsOnKeyboardLetter } from "@helpers";

const TEXT = `this text is test for my app on couse work in GSUthis text is test for my app on couse work in GSUthis text is test for my app on couse work in GSUthis text is test for my app on couse work in GSUthis text is test for my app on couse work in GSUthis text is test for my app on couse work in GSU`;

export const KeyboardLetter = () => {
  const [text, setText] = useState<string[]>(() =>
    getWordsOnKeyboardLetter(TEXT)
  );
  const [positionCurrentLetterHeight, setPositionCurrentLetterHeight] =
    useState<number>(0);
  const [position, setPosition] = useState<number>(0);
  const [currentRow, setCurrentRow] = useState<number>(-1);
  const [inputText, setInputText] = useState<string>("");
  const { addCorrectWordIndex, addWrongWordIndex } = useActions();
  const keyboardState = useAppSelector((state) => selectKeyboardState(state));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const currentText = e.target.value;
    if (currentText === "") {
      setInputText(currentText);
    }
    //! we can enter only 1 char
    if (currentText.length > 1) return;
    //! pause
    if (keyboardState.status === "pause") return;
    //! correct letter
    if (currentText[0] === text[position]) {
      setPosition((prev) => prev + 1);
      setInputText("");
      return;
    }
    //! wrong letter
    addWrongWordIndex(position);
    setInputText(currentText);
    return;
  };

  useEffect(() => {
    // const top = document
    //   .querySelector(".current-letter-highlight")
    //   ?.getBoundingClientRect().top;
    // if (!top) return;
    // console.log(top);
    // console.log(positionCurrentLetterHeight);
    // if (top <= positionCurrentLetterHeight) {
    //   return;
    // }
    // //! select correct row for shuffle top
    // setPositionCurrentLetterHeight(top);
    // setCurrentRow((prev) => prev + 1);
  }, [position]);

  return (
    <div>
      <Box
        sx={{
          mt: "300px",
          width: "400px",
          bgcolor: "grey",
          borderRadius: "15px",
          height: "200px",
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
          {text.map((letter, index) => (
            <Typography
              component="span"
              sx={{
                margin: "0",
                width: "auto",
                display: "inline-block",
              }}
              key={letter + index}
              className={cn({
                "wrong-write-letter":
                  position === index &&
                  text[position] !== inputText &&
                  inputText,
                "current-letter-highlight": position === index,

                "correct-write-letter": position > index,
                "letter-space": letter === " ",
              })}
            >
              {letter}
            </Typography>
          ))}
        </Box>
      </Box>
      <input
        value={inputText}
        onChange={handleChange}
        autoFocus
        style={{
          height: 0,
          overflow: "hidden",
          border: "none",
          // display: "none",
        }}
        maxLength={1}
      />
      <p>correct - {keyboardState.history.correct.length}</p>
      <p>wrong - {keyboardState.history.wrong.length}</p>
    </div>
  );
};
