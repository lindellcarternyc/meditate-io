import styles from "./Timer.module.css";

interface TimerDisplayProps {
  seconds: number;
}

const padTime = (time: number) => time.toString().padStart(2, "0");

const formatTime = (time: number): string => {
  return `${padTime(Math.floor(time / 60))}:${padTime(time % 60)}`;
};

export default function TimerDisplay({ seconds }: TimerDisplayProps) {
  return <div className={styles.timer}>{formatTime(seconds)}</div>;
}
