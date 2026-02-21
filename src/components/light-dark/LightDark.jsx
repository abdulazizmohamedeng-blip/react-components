import "./style.css";
import useLocalStorage from "./useLocalStorage";
export default function LightDark() {
  let [theme, setTheme] = useLocalStorage("theme", "light");
  return (
    <div className="light-dark" data-theme={theme}>
      <h2>Welcome in Jera</h2>
      <button
        onClick={() =>
          setTheme((theme) => (theme == "dark" ? "light" : "dark"))
        }
      >
        Change Theme
      </button>
    </div>
  );
}
