import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import styles from "./App.module.css";
import { Tabs } from "./components/Tabs";
import { IconBook, IconPlant2 } from "@tabler/icons-react";
import Affirmations from "./views/Affirmations/Affirmations";
import { useState } from "react";
import Home from "./Home";
import Meditations from "./views/Meditations/Meditations";
import MeditationProvider from "./views/Meditations/MeditationContext";

const App = () => {
  const [showTabs, setShowTabs] = useState(false);

  return (
    <MantineProvider>
      <main className={styles.app}>
        {showTabs ? (
          <Tabs
            tabs={[
              {
                title: "Meditate",
                icon: IconPlant2,
                render() {
                  return (
                    <MeditationProvider>
                      <Meditations />
                    </MeditationProvider>
                  );
                },
              },
              {
                title: "Affirmations",
                icon: IconBook,
                render() {
                  return <Affirmations />;
                },
              },
            ]}
          />
        ) : (
          <Home onClickGetStarted={() => setShowTabs(true)} />
        )}
      </main>
      ;
    </MantineProvider>
  );
};

export default App;
