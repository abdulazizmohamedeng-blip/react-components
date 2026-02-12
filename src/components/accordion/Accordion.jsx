import { useState } from "react";
import accordionData from "./data";
import "./style.css";
export default function Accordion() {
  let [selected, setSelected] = useState(null);
  function handleSelectItem(id) {
    setSelected(() => (selected == id ? null : id));
  }
  return (
    <div className="accordion-wrapper">
      <div className="accordion">
        {accordionData.map((item) => (
          <div
            className="accordion-item"
            id={item.id}
            onClick={() => handleSelectItem(item.id)}
          >
            <div className="accordion-title">
              <h3>{item.title}</h3>
              <span>{item.id == selected ? "-" : "+"}</span>
            </div>
            {selected == item.id && (
              <div className="accordion-content">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
