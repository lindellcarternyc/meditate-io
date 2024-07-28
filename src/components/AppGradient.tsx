import { ReactNode, useEffect, useRef } from "react";

import styles from "./AppGradient.module.css";

interface LinearGradientProps {
  children: ReactNode;
  colors: string[];
  className?: string;
}

export default function LinearGradient({
  children,
  colors,
}: LinearGradientProps) {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    divRef?.current?.style.setProperty(
      "--gradient",
      `linear-gradient(${colors.join(", ")})`
    );
  }, [colors]);

  return (
    <div className={styles.container} ref={divRef}>
      {children}
    </div>
  );
}
