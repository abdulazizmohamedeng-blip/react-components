import { useState } from "react";
import "./style.css";
let data = [
  {
    id: 1,
    name: "Google",
    content: "Google is searcing engine",
  },
  {
    id: 2,
    name: "Facebook",
    content: "facebook is social media",
  },
  {
    id: 3,
    name: "YouTube",
    content: "you tube is streaming platform",
  },
];
export default function Tabs() {
  let [tab, setTab] = useState(0);
  return (
    <div className="tabs">
      <div className="tabs-title">
        {data.map((item, index) => (
          <button
            className={index == tab ? "active" : ""}
            onClick={() => setTab(index)}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="tab-content">{data[tab].content}</div>
    </div>
  );
}
