import { createContext, ReactNode, useState } from "react";
import { MeditationType } from "../../constants/MeditationData";

interface MeditationContextValue {
  meditations: MeditationType[];
  selectedMeditation: MeditationType | null;
  selectMeditation: (meditation: MeditationType | null) => void;
}

export const MeditationContext = createContext<MeditationContextValue>({
  meditations: [],
  selectedMeditation: null,
  selectMeditation: () => {},
});

import { MEDITATION_DATA } from "../../constants/MeditationData";
export default function MeditationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [selectedMeditation, setSelectedMeditation] =
    useState<MeditationType | null>(null);

  const onSelect = (meditation: MeditationType | null) => {
    console.log("selectMeditation", meditation);
    setSelectedMeditation(() => meditation);
  };

  return (
    <MeditationContext.Provider
      value={{
        meditations: MEDITATION_DATA,
        selectedMeditation,
        selectMeditation: onSelect,
      }}
    >
      {children}
    </MeditationContext.Provider>
  );
}
