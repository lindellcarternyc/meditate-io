import { Outlet, useLocation, useNavigate } from "react-router-dom";
import styles from "./Main.module.css";
import { TabButton } from "./components/TabButton/TabButton";
import { IconBook, IconPlant2 } from "@tabler/icons-react";

export default function Main() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  if (pathname === "/main") {
    navigate("/main/meditations");
  }

  const onClick = (route: string) => () => {
    if (!pathname.endsWith(route)) {
      navigate(`/main/${route}`);
    }
  };

  return (
    <div>
      <div className={styles.content}>
        <Outlet />
      </div>
      <footer className={styles.footer}>
        <TabButton
          title="Meditations"
          onClick={onClick("meditations")}
          icon={IconPlant2}
          active={pathname.includes("meditations")}
        />
        <TabButton
          title="Affirmations"
          onClick={onClick("affirmations")}
          icon={IconBook}
          active={pathname.includes("affirmations")}
        />
      </footer>
    </div>
  );
}
