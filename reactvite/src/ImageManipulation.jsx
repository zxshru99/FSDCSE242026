import React, { useState } from 'react';
import cat from "./assets/cat.jpg";

function ImageManipulation() {
  const [catHeight, setHeight] = useState(200);
  const [catWidth, setWidth] = useState(200);
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  function incH() {
    setHeight(catHeight + 100);
  }

  function incW() {
    setWidth(catWidth + 100);
  }

  function changebgcolor() {
    setRed(Math.floor(Math.random() * 255));
    setGreen(Math.floor(Math.random() * 255));
    setBlue(Math.floor(Math.random() * 255));
  }

  return (
    <div>
      <h2>Image Manipulation</h2>
      <div
        style={{
          height: '400px',
          width: '400px',
          border: '4px solid red',
          background: `rgb(${red},${green},${blue})`
        }}
      >
        <img src={cat} height={catHeight} width={catWidth} alt="Cat" />
      </div>

      <div>
        <button onClick={incH}>Increase Height</button>
        <button onClick={incW}>Increase Width</button>
        <button onClick={changebgcolor}>Change Background Color</button>
      </div>
    </div>
  );
}

export default ImageManipulation;
