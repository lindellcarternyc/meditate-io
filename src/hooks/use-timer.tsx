import { useEffect, useState } from "react";

interface TimerValue {
  seconds: number;
  setSeconds: (seconds: number) => void;
  isTicking: boolean;
  setIsTicking: (isTicking: boolean) => void;
}

export const useTimer = (): TimerValue => {
  const [seconds, setSeconds] = useState(10);
  const [isTicking, setIsTicking] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTicking) {
      if (seconds <= 0) {
        setIsTicking(false);
      } else {
        timeout = setTimeout(() => {
          setSeconds(seconds - 1);
        }, 1000);
      }
    }

    return () => clearTimeout(timeout);
  }, [isTicking, seconds]);

  return {
    seconds,
    setSeconds,
    isTicking,
    setIsTicking,
  };
};
