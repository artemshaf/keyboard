import { useEffect, useRef } from "react";

export const useTopElementWatch = (id: string, position: number) => {
  const topPositionForShuffling = useRef<number>(0);
  const startTopPositionForShuffling = useRef<number>(0);
  const currentTopPositionForShuffling = useRef<number>(0);

  useEffect(() => {
    const element = document.getElementById(id);
    if (!element) return;

    const topPos = element.offsetTop;

    if (startTopPositionForShuffling.current === 0) {
      startTopPositionForShuffling.current = topPos;
    }

    currentTopPositionForShuffling.current = topPos;

    const difference =
      startTopPositionForShuffling.current -
      currentTopPositionForShuffling.current;

    if (difference) {
      topPositionForShuffling.current = difference;
    }
  }, [position]);

  return currentTopPositionForShuffling.current;
};
