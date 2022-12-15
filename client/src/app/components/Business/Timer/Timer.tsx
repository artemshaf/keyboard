import { ITimerInterface } from "./Timer.interface";
import { getMinutes, getSeconds } from "@helpers";
import { useCountdown } from "@hooks";

/*
1. remember start
2. put on pause
    remember end
    timePassed => end - start 
    start = end
    put on pause
*/

export const Timer = ({
  duration = 60,
  className,
  ...props
}: ITimerInterface) => {
  const [
    counter,
    resetCounter,
    stopCounter,
    pauseCounter,
    resumeCounter,
    isPause,
    isStopBtnDisabled,
    isPauseBtnDisabled,
    isResumeBtnDisabled,
  ] = useCountdown({ initialCounter: duration });

  const handlePause = () => {
    if (isPause) {
      resumeCounter();
      return;
    }
    pauseCounter();
  };

  return (
    <div>
      <div {...props} style={{ zIndex: 100, color: "red" }}>
        {`${getMinutes(counter as number)}:${getSeconds(counter as number)}`}
      </div>
      <button onClick={handlePause}>{isPause ? <>Go</> : <>Pause</>}</button>
    </div>
  );
};
