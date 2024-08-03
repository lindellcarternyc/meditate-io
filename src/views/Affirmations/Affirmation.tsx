import styles from "./Affirmation.module.css";
import { Title } from "@mantine/core";
import BackButton from "../../components/BackButton";
import ImageBackground from "../../components/ImageBackground";
import { useAffirmations } from "../../hooks/use-affirmations";
import { useParams } from "react-router-dom";

export default function Affirmation() {
  const { getAffirmation } = useAffirmations();
  const { galleryId, affirmationId } = useParams();

  const affirmation = getAffirmation(Number(galleryId), Number(affirmationId));

  if (!affirmation) {
    throw new Error("Affirmation not found");
  }

  const sentences = affirmation.text.replace(".", ".\n").split("\n");

  return (
    <ImageBackground className={styles.container} image={affirmation.image}>
      <BackButton onClick={() => {}} />
      {sentences.map((sentence, idx) => (
        <Title size="h2" key={idx}>
          {sentence}
        </Title>
      ))}
    </ImageBackground>
  );
}
