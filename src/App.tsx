import React, { useRef, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import { accessories, accessorizeTheAlpacas, backgrounds, displayCurrentAccessorizeStyle, ears, eyes, hair, handleDownload, handleRandom, leg, mouth, neck, nose } from "./utils";
import { Accessorizes } from "./interfaces";
import { CurrentAccessorize } from "./types";

function App() {
  const containerRef = useRef<any |null>(null);
  const [currentAccessorize, setCurrentAccessorize] = useState<CurrentAccessorize>('Hair');
  const [accessorises, setAccessorizes] = useState<Accessorizes>({
    Accessories: accessories[0],
    Background: backgrounds[0],
    Ears: ears[0],
    Eyes: eyes[0],
    Hair: hair[0],
    Leg: leg[0],
    Mouth: mouth[0],
    Neck: neck[0]
  });

  return (
    <section className="container">
      <h1 className="big-heading">ALPACA GENERATOR</h1>
      <div className="inner-container">
        <div className="left-container">
          <div className={`image-container ${accessorises.Background}`} ref={containerRef}>
            <img src={`leg/${accessorises.Leg}`} alt="leg" className="leg" />
            <img src={`neck/${accessorises.Neck}`} alt="neck" className="neck" />
            <img src={nose} alt="nose" className="nose" />
            <img src={`mouth/${accessorises.Mouth}`} alt="mouth" className="mouth" />
            <img src={`eyes/${accessorises.Eyes}`} alt="eyes" className="eyes" />
            <img src={`hair/${accessorises.Hair}`} alt="hair" className="hair" />
            <img src={`ears/${accessorises.Ears}`} alt="ears" className="ears" />
            <img src={`accessories/${accessorises.Accessories}`} alt="accessories" className="accessories"
            />
          </div>
          <div className="cta-container">
            <Button variant="cta" onClick={() => setAccessorizes(handleRandom())}>
              <div className="cta-btn-child">
                <img src="icons8-random-48.png" alt="random-icon" className="cta-icon" />
                <span>Random</span>
              </div>
            </Button>
            <Button variant="cta" onClick={() => handleDownload(containerRef)}>
              <div className="cta-btn-child">
                <img src="icons8-download-48.png" alt="download-icon" className="cta-icon" />
                <span>Download</span>
              </div>
            </Button>
          </div>
        </div>
        <div className="right-container">
          <div className="accessorise-container">
            <h3 className="small-heading">ACCESSORISE THE ALPACA'S</h3>
            <div className="map-container">
              {accessorizeTheAlpacas.map((item) => (
                <Button
                  key={item}
                  variant="primary"
                  onClick={() => setCurrentAccessorize(item as CurrentAccessorize)}
                  selected={item === currentAccessorize}
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>
          <div className="style-container">
            <h3 className="small-heading">STYLE</h3>
            <div className="map-container">
              {displayCurrentAccessorizeStyle(currentAccessorize).map((item: string) => (
                <Button
                  key={item}
                  variant="primary"
                  onClick={() => setAccessorizes((prevState) => ({ ...prevState, [currentAccessorize]: item }))}
                  selected={item === accessorises[currentAccessorize]}
                >
                  {item.split(".")[0]}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
