import { useEffect, useRef } from "react";
import type { Icon } from "@tabler/icons-react";

import styles from "./TabButton.module.css";

interface TabButtonProps {
  title: string;
  icon?: Icon;
  active?: boolean;
  onClick?: () => void;
}

export function TabButton({
  title,
  active,
  icon: Icon,
  onClick,
}: TabButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    buttonRef?.current?.style.setProperty(
      "color",
      active ? "#228be6" : "white"
    );
  }, [active]);

  return (
    <button
      type="button"
      ref={buttonRef}
      className={styles.button}
      onClick={onClick}
    >
      {Icon && <Icon size={24} />}
      {title}
    </button>
  );
}
