// versi "react-qr-reader" 1.0.0. component API harus disesuaikan dengan yg baru

import "./styles.css";
import { useState } from "react";
import QrReader from "react-qr-reader";

const App = () => {
  const [data, setData] = useState("");
  const selected = "environment";

  const handleScan = async (scanData) => {
    console.log(`loaded data data`, scanData);
    if (scanData && scanData !== "") {
      console.log(`loaded >>>`, scanData);
      setData(scanData);

      // setPrecScan(scanData);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div className="App">
      <QrReader
        facingMode={selected}
        delay={2000}
        onError={handleError}
        onScan={handleScan}
        // chooseDeviceId={()=>selected}
        style={{ width: "300px" }}
      />

      {data !== "" && <p>{data}</p>}
    </div>
  );
};

export default App;
