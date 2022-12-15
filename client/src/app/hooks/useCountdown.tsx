import { useCallback, useEffect, useRef, useState } from "react";

const DEFAULT_TIME_IN_SECONDS = 60;
const DEFAULT_MAX_PAUSE = 3;

interface IUseCountDown {
  initialCounter?: number;
  callback?: Function;
}

type TUseCountdownReturn = [
  number,
  () => void,
  () => void,
  () => void,
  () => void,
  boolean,
  boolean,
  boolean,
  boolean,
  number
];

export const useCountdown = ({
  initialCounter,
  callback,
}: IUseCountDown): TUseCountdownReturn => {
  const _initialCounter = initialCounter ?? DEFAULT_TIME_IN_SECONDS,
    [resume, setResume] = useState(0),
    [counter, setCounter] = useState(_initialCounter),
    initial = useRef(_initialCounter),
    intervalRef = useRef<number | null>(null),
    [isPause, setIsPause] = useState(false),
    [countPause, setCountPause] = useState(0),
    isStopBtnDisabled = counter === 0,
    isPauseBtnDisabled =
      countPause >= DEFAULT_MAX_PAUSE || isPause || counter === 0,
    isResumeBtnDisabled = !isPauseBtnDisabled;

  const stopCounter = useCallback(() => {
    clearInterval(intervalRef.current as number);
    setCounter(0);
    setIsPause(false);
  }, []);

  const startCounter = useCallback(
    (seconds = initial.current) => {
      intervalRef.current = setInterval(() => {
        const newCounter = seconds--;
        if (newCounter >= 0) {
          setCounter(newCounter);
          callback && callback(newCounter);
        } else {
          stopCounter();
        }
      }, 1000);
    },
    [stopCounter]
  );

  const pauseCounter = () => {
    if (countPause >= DEFAULT_MAX_PAUSE) {
      return;
    }
    setResume(counter);
    setIsPause(true);
    setCountPause(countPause + 1);
    clearInterval(intervalRef.current as number);
  };

  const resumeCounter = () => {
    startCounter(resume - 1);
    setResume(0);
    setIsPause(false);
  };

  const resetCounter = useCallback(() => {
    if (intervalRef.current) {
      stopCounter();
    }
    setCounter(initial.current);
    startCounter(initial.current - 1);
  }, [startCounter, stopCounter]);

  useEffect(() => {
    resetCounter();
  }, [resetCounter]);

  useEffect(() => {
    return () => {
      stopCounter();
    };
  }, [stopCounter]);

  return [
    counter,
    resetCounter,
    stopCounter,
    pauseCounter,
    resumeCounter,
    isPause,
    isStopBtnDisabled,
    isPauseBtnDisabled,
    isResumeBtnDisabled,
    countPause,
  ];
};
