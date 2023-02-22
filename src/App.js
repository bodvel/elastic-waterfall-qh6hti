// versi "react-qr-reader" 1.0.0. component API harus disesuaikan dengan yg baru

import "./styles.css";
import { useState } from "react";
import QrReader from "react-qr-reader";
const tg = window.Telegram.WebApp;

const App = () => {
  const [startScan, setStartScan] = useState(false);
  const [data, setData] = useState("");
  const selected = "environment";

  const handleScan = async (scanData) => {
    console.log(`loaded data data`, scanData);
    if (scanData && scanData !== "") {
      console.log(`loaded >>>`, scanData);
      setStartScan(false);
      setData(scanData);
      const url =
        "https://2y4y5p6k6b.apigw.corezoid.com/webApp?qr=" +
        scanData +
        "&id=" +
        tg.initDataUnsafe.user.id;
      fetch(url);
      setTimeout(function () {
        tg.close();
      }, 1000);
      // setPrecScan(scanData);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div className="App">
      <button
        onClick={() => {
          setStartScan(!startScan);
        }}
      >
        {startScan ? "Stop Scan" : "Start Scan"}
      </button>
      {startScan && (
        <QrReader
          facingMode={selected}
          delay={2000}
          onError={handleError}
          onScan={handleScan}
          // chooseDeviceId={()=>selected}
          style={{ width: "300px" }}
        />
      )}

      {data !== "" && <p>{data}</p>}
    </div>
  );
};

export default App;
