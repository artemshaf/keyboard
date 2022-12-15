import { List, ListItem } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { getWordsOnKeyboard } from "@helpers";
import { useActions } from "@hooks";
import { selectKeyboardState, useAppSelector } from "@store";
import cn from "classnames";

const TEXT = `this text is test for my app on couse work in GSUthis text is test for my app on couse work in GSUthis text is test for my app on couse work in GSUthis text is test for my app on couse work in GSUthis text is test for my app on couse work in GSUthis text is test for my app on couse work in GSU`;

const KeyboardList = () => {
  const [text, setText] = useState<string[]>(() => getWordsOnKeyboard(TEXT));
  const [position, setPosition] = useState<number>(0);
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

  return (
    <List
      sx={{
        width: "400px",
        display: "flex",
        flexWrap: "wrap",
        bgcolor: "grey",
        p: "15px",
        borderRadius: "15px",
        maxHeight: "100px",
        textOverflow: "ellipsis",
        overflow: "hidden",
        wordWrap: "break-word",
      }}
    >
      {text.map((item, index) =>
        index + 1 > position ? (
          <ListItem
            sx={{ padding: "3px", width: "auto" }}
            key={item + index}
            className={classNames({
              "current-word": position === index,
              "wrong-write-word": text[position] !== inputText,
            })}
          >
            {item}
          </ListItem>
        ) : (
          <></>
        )
      )}
    </List>
  );
};

export default KeyboardList;
