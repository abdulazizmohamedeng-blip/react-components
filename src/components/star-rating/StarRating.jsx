import { useState } from "react";
import "./style.css";
export default function StarRating({ stars = 5 }) {
  let [hovered, setHovered] = useState(null);
  let [selected, setSelected] = useState(null);
  function handleHovered(id) {
    setHovered(id);
  }
  function handleSelected(id) {
    setSelected(id);
  }
  return (
    <div className="rating-wrapper">
      <div className="star-rating">
        <ul>
          {Array.from({ length: stars }, (_, i) => (
            <li
              key={i}
              style={i <= hovered ? { color: "rgb(255, 157, 0" } : {}}
              onMouseOver={() => handleHovered(i)}
              onMouseLeave={() => handleHovered(selected)}
              onClick={() => handleSelected(i)}
            >
              &#9733;
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
