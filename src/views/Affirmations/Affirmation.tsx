import { useEffect, useRef } from "react";
import { GalleryPreviewData } from "../../constants/models/AffirmationCategory";

import styles from "./Affirmation.module.css";
import { Title } from "@mantine/core";
import { IconCircleArrowLeft } from "@tabler/icons-react";

interface AffirmationProps {
  affirmation: GalleryPreviewData;
  onClickBack: () => void;
}

export default function Affirmation({
  affirmation,
  onClickBack,
}: AffirmationProps) {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    divRef.current?.style.setProperty(
      "--background",
      `url(${affirmation.image})`
    );
  }, [affirmation]);

  const sentences = affirmation.text.replace(".", ".\n").split("\n");

  return (
    <div ref={divRef} className={styles.container}>
      <button
        type="button"
        title="Go Back"
        className={styles.back}
        onClick={onClickBack}
      >
        <IconCircleArrowLeft size={50} />
      </button>
      {sentences.map((sentence) => (
        <Title size="h2">{sentence}</Title>
      ))}
    </div>
  );
}
