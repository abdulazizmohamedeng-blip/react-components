import Image from "../../assets/1.png";
import "./style.css";
import data from "./data";
import { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { WiDaySnow } from "react-icons/wi";

export default function Slider() {
  let [currentImage, setCurrentImage] = useState(0);
  function handleRight() {
    setCurrentImage((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  }

  function handleLeft() {
    setCurrentImage((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  }

  useEffect(function () {
    function handleKeyDown(e) {
      if (e.key == "ArrowLeft") {
        handleLeft();
      } else if (e.key == "ArrowRight") {
        handleRight();
      }
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div className="slider-wrapper">
      <div className="slider">
        <div className="slider-image">
          <div className="lef-right-controll">
            <button className="left-control" onClick={() => handleLeft()}>
              <BsArrowLeft />
            </button>
            <button className="right-control" onClick={() => handleRight()}>
              <BsArrowRight />
            </button>
          </div>
          <img src={`/src/assets/${data[currentImage]}`} alt="" />
        </div>
        <ul className="control">
          {data.map((item, index) => (
            <li
              className={currentImage == index && "active"}
              key={item}
              onClick={() => setCurrentImage(index)}
            ></li>
          ))}
        </ul>
      </div>
    </div>
  );
}
