import { ReactNode, useEffect, useRef } from "react";

import styles from "./ImageBackground.module.css";

interface ImageBackgroundProps {
  children: ReactNode;
  image: string;
  className?: string;
}

export default function ImageBackground({
  children,
  image,
  className,
}: ImageBackgroundProps) {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    divRef.current?.style.setProperty("--background", `url(${image})`);
  }, [image]);

  return (
    <div ref={divRef} className={`${styles.background} ${className}`}>
      {children}
    </div>
  );
}
