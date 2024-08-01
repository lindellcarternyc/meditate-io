import { Button, Title } from "@mantine/core";
import AppGradient from "./components/AppGradient";
import styles from "./Home.module.css";

interface HomeProps {
  onClickGetStarted: () => void;
}

export default function Home({ onClickGetStarted }: HomeProps) {
  return (
    <div className={styles.container}>
      <AppGradient colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.8)"]}>
        <div className={styles.content}>
          <header>
            <Title size={"h1"}>Simple Meditation</Title>
            <Title size={"h3"}>Simplifying Meditation for Everyone</Title>
          </header>
          <footer>
            <Button type="button" fullWidth onClick={onClickGetStarted}>
              Get Started
            </Button>
          </footer>
        </div>
      </AppGradient>
    </div>
  );
}
