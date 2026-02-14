import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Accordion from "./components/accordion/Accordion";
import ColorGenerator from "./components/color-generator/ColorGenerator";
import StarRating from "./components/star-rating/StarRating";
import Slider from "./components/slider/Slider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Slider />
    </>
  );
}

export default App;
