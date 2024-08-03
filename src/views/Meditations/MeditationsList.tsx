import { ScrollArea, Title } from "@mantine/core";
import AppGradient from "../../components/AppGradient";
import MeditationButton from "./MeditationButton";

import styles from "./MeditationsList.module.css";

import MEDITATION_IMAGES from "../../constants/meditation-images";
import { useContext } from "react";
import { MeditationContext } from "./MeditationContext";
import { useNavigate } from "react-router-dom";

// interface MeditationsListProps {
//   meditations: MeditationType[];
//   selectMeditation: (meditation: MeditationType) => void;
// }

export default function MeditationsList() {
  const { meditations } = useContext(MeditationContext);
  const navigate = useNavigate();

  return (
    <AppGradient colors={["#161b23", "#0a4d4a", "#766e67"]}>
      <div className={styles.container}>
        <Title mt="md">Welcome, Lindell</Title>
        <Title size={"h2"} mt="sm">
          Start your meditation practice today!
        </Title>
        <ScrollArea h="calc(100% - 72px)">
          <div className={styles.list}>
            {meditations.map((meditation) => {
              return (
                <MeditationButton
                  key={meditation.id}
                  meditation={{
                    ...meditation,
                    image: MEDITATION_IMAGES[meditation.id - 1],
                  }}
                  onClick={() => navigate(`/main/meditations/${meditation.id}`)}
                />
              );
            })}
          </div>
        </ScrollArea>
      </div>
    </AppGradient>
  );
}
