import { createContext, ReactNode } from "react";
import { MeditationType } from "../../constants/MeditationData";

interface MeditationContextValue {
  meditations: MeditationType[];
  getMeditation: (id: number) => MeditationType | null;
}

export const MeditationContext = createContext<MeditationContextValue>({
  meditations: [],
  getMeditation: () => null,
});

import { MEDITATION_DATA } from "../../constants/MeditationData";
export default function MeditationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const getMeditation = (id: number) => {
    return MEDITATION_DATA[id - 1] || null;
  };
  return (
    <MeditationContext.Provider
      value={{
        meditations: MEDITATION_DATA,
        getMeditation,
      }}
    >
      {children}
    </MeditationContext.Provider>
  );
}
