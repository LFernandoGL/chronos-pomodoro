import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

type AvailableThemes = "dark" | "light";

export function Menu() {
  const [themes, setThemes] = useState<AvailableThemes>(() => {
    const storageTheme = localStorage.getItem("theme") as
      | AvailableThemes
      | "dark";
    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChangeClick(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();

    setThemes((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themes);
    localStorage.setItem("theme", themes);
  }, [themes]);

  return (
    <nav className={styles.menu}>
      <a
        className={styles.icon}
        href="#"
        aria-label="Ir para Home"
        title="Ir para Home"
      >
        <HouseIcon />
      </a>

      <a
        className={styles.icon}
        href="#"
        aria-label="Ir para Historico"
        title="Ir para Historico"
      >
        <HistoryIcon />
      </a>

      <a
        className={styles.icon}
        href="#"
        aria-label="Ir para Configuracoes"
        title="Ir para Configuracoes"
      >
        <SettingsIcon />
      </a>

      <a
        className={styles.icon}
        href="#"
        aria-label="Trocar tema"
        title="Trocar tema"
        onClick={handleThemeChangeClick}
      >
        {nextThemeIcon[themes]}
      </a>
    </nav>
  );
}
