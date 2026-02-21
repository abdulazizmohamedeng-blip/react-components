import { QRCodeCanvas } from "qrcode.react";
import { useRef, useState } from "react";
export default function QrCode() {
  let codeRef = useRef(null);
  let [codeVal, setCodeVal] = useState("");
  function handleGenerateQR() {
    setCodeVal(codeRef.current.value);
  }
  return (
    <>
      <div className="flex">
        <input type="text" ref={codeRef} />
        <button onClick={() => handleGenerateQR()}>Generate</button>
      </div>
      <QRCodeCanvas value={codeVal} />
    </>
  );
}
