import { GalleryPreviewData } from "../../constants/models/AffirmationCategory";

import styles from "./Affirmation.module.css";
import { Title } from "@mantine/core";
import BackButton from "../../components/BackButton";
import ImageBackground from "../../components/ImageBackground";

interface AffirmationProps {
  affirmation: GalleryPreviewData;
  onClickBack: () => void;
}

export default function Affirmation({
  affirmation,
  onClickBack,
}: AffirmationProps) {
  const sentences = affirmation.text.replace(".", ".\n").split("\n");

  return (
    <ImageBackground className={styles.container} image={affirmation.image}>
      <BackButton onClick={onClickBack} />
      {sentences.map((sentence) => (
        <Title size="h2">{sentence}</Title>
      ))}
    </ImageBackground>
  );
}
