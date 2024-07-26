import styles from "./TabScreen.module.css";

import { Icon } from "@tabler/icons-react";
import { TabButton } from "./TabButton";
import { ReactNode, useState } from "react";

export interface TabProps {
  title: string;
  icon?: Icon;
  render: () => ReactNode;
}

interface TabScreenProps {
  tabs: TabProps[];
}

export default function TabScreen({ tabs }: TabScreenProps) {
  const [activeTab, setActiveTab] = useState(0);

  const onClickTabButton = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <section className={styles.section}>{tabs[activeTab].render()}</section>
      <footer className={styles.footer}>
        {tabs.map((tab, idx) => {
          return (
            <TabButton
              key={idx}
              {...tab}
              onClick={() => onClickTabButton(idx)}
              active={activeTab === idx}
            />
          );
        })}
      </footer>
    </div>
  );
}
