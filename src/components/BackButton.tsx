import { IconCircleArrowLeft } from "@tabler/icons-react";
import styles from "./BackButton.module.css";
import { useEffect, useRef } from "react";

interface BackButtonProps {
  onClick: () => void;
  color?: string;
}

export default function BackButton({ onClick, color }: BackButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (color) {
      buttonRef.current?.style.setProperty("--color", color);
    }
  }, [color]);
  return (
    <button
      type="button"
      title="Go Back"
      className={styles.button}
      onClick={onClick}
      ref={buttonRef}
    >
      <IconCircleArrowLeft size={50} />
    </button>
  );
}
