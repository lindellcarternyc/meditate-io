import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import styles from "./App.module.css";
import { Tabs } from "./components/Tabs";
import { IconBook, IconPlant2 } from "@tabler/icons-react";
import Affirmations from "./views/Affirmations/Affirmations";

const App = () => {
  return (
    <MantineProvider>
      <main className={styles.app}>
        {
          // <Home />
          <Tabs
            tabs={[
              {
                title: "Meditate",
                icon: IconPlant2,
                render() {
                  return "Meditate";
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
        }
      </main>
      ;
    </MantineProvider>
  );
};

export default App;
