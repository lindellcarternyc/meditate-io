import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import styles from "./App.module.css";
import Home from "./Home";

const App = () => {
  return (
    <MantineProvider>
      <main className={styles.app}>
        <Home />
      </main>
      ;
    </MantineProvider>
  );
};

export default App;
