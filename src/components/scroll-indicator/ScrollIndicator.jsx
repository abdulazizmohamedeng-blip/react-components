import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  let [perc, setPerc] = useState();
  useEffect(function () {
    window.addEventListener("scroll", function () {
      let total = window.scrollY;
      let current =
        document.documentElement.scrollHeight - this.window.innerHeight;
      let percentage = (total / current) * 100;
      console.log(perc);
      setPerc(percentage);
    });
  }, []);
  return (
    <div style={{ height: "2000px" }}>
      <div
        style={{
          width: `${perc}%`,
          height: "2px",
          backgroundColor: "red",
          position: "fixed",
        }}
      ></div>
      <p>Indicator</p>
    </div>
  );
}
