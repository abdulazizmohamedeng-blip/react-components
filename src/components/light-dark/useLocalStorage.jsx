import { useState, useEffect } from "react";
export default function useLocalStorage(key, initialValue) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem(key) || initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, theme);
    console.log(theme);
  }, [theme]);

  return [theme, setTheme];
}
