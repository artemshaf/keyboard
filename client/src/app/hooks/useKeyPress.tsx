import { useEffect, useState } from "react";

type Props = {
  pattern: RegExp;
};

export const useKeyPress = ({ pattern }: Props): string | null => {
  const [keyPressed, setKeyPressed] = useState<string | null>(null);

  function downHandler({ key }: KeyboardEvent) {
    const isIncludedInPattern = key.match(pattern);
    if (!isIncludedInPattern) {
      return;
    }
    setKeyPressed(key);
  }

  const upHandler = ({ key }: KeyboardEvent): void => {
    setKeyPressed("");
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    // window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      // window.removeEventListener("keyup", upHandler);
    };
  }, []);

  return keyPressed;
};
