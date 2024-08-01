import { Button } from "@mantine/core";
import BackButton from "../../components/BackButton";
import styles from "./MeditationDurations.module.css";

interface MeditationDurationsProps {
  open: boolean;
  onClose: (seconds?: number) => void;
}

export default function MeditationDurations({
  open,
  onClose,
}: MeditationDurationsProps) {
  const setDuration = (seconds: number) => () => onClose(seconds);

  return (
    <div className={`${styles.container} ${open && styles.open}`}>
      <BackButton onClick={() => onClose()} color="black" />
      <Button onClick={setDuration(10)}>10 seconds</Button>
      <Button onClick={setDuration(5 * 60)}>5 minutes</Button>
      <Button onClick={setDuration(10 * 60)}>10 minutes</Button>
      <Button onClick={setDuration(15 * 60)}>15 minutes</Button>
    </div>
  );
}
