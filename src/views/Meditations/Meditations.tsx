import {
  MEDITATION_DATA,
  MeditationType,
} from "../../constants/MeditationData";
import { useState } from "react";
import MeditationProvider from "./MeditationContext";
import MeditationsList from "./MeditationsList";
import Meditation from "./Meditation";

export default function Meditations() {
  const [selectedMeditation, setSelectedMeditation] =
    useState<MeditationType | null>(null);

  return (
    <MeditationProvider>
      {selectedMeditation ? (
        <Meditation
          meditation={selectedMeditation}
          onClickBack={() => setSelectedMeditation(null)}
        />
      ) : (
        <MeditationsList
          meditations={MEDITATION_DATA}
          selectMeditation={setSelectedMeditation}
        />
      )}
    </MeditationProvider>
  );
}
