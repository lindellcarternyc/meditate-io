import { useEffect, useRef } from "react";
import { MeditationType } from "../../constants/MeditationData";
import styles from "./MeditationButton.module.css";

interface MeditationButtonProps {
  meditation: MeditationType;
  onClick: () => void;
}

export default function MeditationButton({
  meditation,
  onClick,
}: MeditationButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    buttonRef.current?.style.setProperty(
      "--background",
      `url(${meditation.image})`
    );
  }, [meditation.image]);

  return (
    <button
      onClick={onClick}
      ref={buttonRef}
      type="button"
      title={meditation.title}
      className={styles.button}
    >
      <div className={styles.gradient}>{meditation.title}</div>
    </button>
  );
}
