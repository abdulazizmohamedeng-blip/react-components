import { useState } from "react";
import "./style.css";
export default function ColorGenerator() {
  let [generated, setGenerated] = useState("#A1B5C1");
  function handleGenerate() {
    let hexaChars = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let hexaColor = "#";
    for (let i = 0; i < 6; i++) {
      let rand = Math.floor(Math.random() * hexaChars.length);
      hexaColor += hexaChars[rand];
    }
    console.log(hexaColor);
    setGenerated(hexaColor);
  }
  return (
    <div className="generator-wrapper">
      <div className="generator">
        <div className="generator-content">
          <div
            className="show-color"
            style={{ backgroundColor: generated }}
          ></div>
          <div className="color-code">{generated}</div>
        </div>
        <button className="generator-btn" onClick={() => handleGenerate()}>
          Generate Color
        </button>
      </div>
    </div>
  );
}
