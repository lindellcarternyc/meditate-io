import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

// import styles from "./App.module.css";
import { Tabs } from "./components/Tabs";
import { IconBook, IconPlant2 } from "@tabler/icons-react";
import Affirmations from "./views/Affirmations/Affirmations";
// import Home from "./Home";
import Meditations from "./views/Meditations/Meditations";
import MeditationsList from "./views/Meditations/MeditationsList";

import Home from "./routes/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./routes/main";
import MeditationProvider from "./views/Meditations/MeditationContext";
import Meditation from "./views/Meditations/Meditation";
import Affirmation from "./views/Affirmations/Affirmation";
import { AffirmationsProvider } from "./views/Affirmations/AffirmationsContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/main",
    element: <Main />,
    children: [
      {
        path: "/main/meditations",
        element: <MeditationsList />,
      },
      {
        path: "/main/meditations/:id/",
        element: <Meditation />,
      },
      {
        path: "/main/affirmations",
        element: <Affirmations />,
      },
      {
        path: "/main/affirmations/:galleryId/:affirmationId",
        element: <Affirmation />,
      },
    ],
  },
]);

const App = () => {
  return (
    <MantineProvider>
      {/* <main className={styles.app}>
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
       */}
      <MeditationProvider>
        <AffirmationsProvider>
          <RouterProvider router={router} />
        </AffirmationsProvider>
      </MeditationProvider>
    </MantineProvider>
  );
};

export default App;
