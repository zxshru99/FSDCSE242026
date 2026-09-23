import React, { useState } from 'react';

function ColorChange() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <div>
      {/* Box that changes color */}
      <div 
        style={{ 
          backgroundColor: `rgb(${red},${green},${blue})`, 
          height: "100px", 
          width: "100px" 
        }}
      ></div>

      {/* Buttons to change colors */}
      <button onClick={() => setRed(red === 0 ? 255 : 0)}>Red</button>
      <button onClick={() => setGreen(green === 0 ? 255 : 0)}>Green</button>
      <button onClick={() => setBlue(blue === 0 ? 255 : 0)}>Blue</button>
    </div>
  );
}

export default ColorChange;
