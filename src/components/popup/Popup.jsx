import { useState } from "react";
import "./style.css";

export default function PopupHome() {
  let [open, setOpen] = useState(false);
  return (
    <div className="home-popup">
      <button onClick={() => setOpen(!open)}>Open</button>
      {open && <Popup setOpen={setOpen} />}
    </div>
  );
}

function Popup({ setOpen }) {
  return (
    <div className="popup" onClick={() => setOpen(false)}>
      <div className="content" onClick={(e) => e.stopPropagation()}>
        <p>Welcome In Jira</p>
      </div>
    </div>
  );
}
