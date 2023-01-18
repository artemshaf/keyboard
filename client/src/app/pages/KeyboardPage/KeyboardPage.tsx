import { IKeyboardPageInterface } from "./KeyboardPage.interface";
import { Keyboard, Timer } from "@components";

import { useActions } from "@hooks";
import { selectKeyboardStateStatus, useAppSelector } from "@store";

export const KeyboardPage = ({
  className,
  ...props
}: IKeyboardPageInterface) => {
  return (
    <div {...props} style={{ marginTop: 150 }}>
      <Keyboard />
      <Timer />
    </div>
  );
};
