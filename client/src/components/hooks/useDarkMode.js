import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage("dark");

  useEffect(() => {
    const body = window.document.body;
    if (darkMode) {
      body.classList.add("darkMode");
    } else {
      body.classList.remove("darkMode");
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
}
