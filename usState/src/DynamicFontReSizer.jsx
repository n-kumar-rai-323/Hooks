// DynamicFontResizer.js
import { useState } from "react";

const DynamicFontResizer = () => {
  const [fontSize, setFontSize] = useState(16); // Initial font size in pixels

  const increaseFont = () => {
    setFontSize((prevSize) => prevSize + 2);
  };

  const decreaseFont = () => {
    setFontSize((prevSize) => (prevSize > 10 ? prevSize - 2 : prevSize));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <div
        style={{
          fontSize: `${fontSize}px`,
          border: "1px solid #ccc",
          padding: "10px",
          display: "inline-block",
        }}
      >
        Dynamic Font Resizer
      </div>
      <div style={{ marginTop: "20px" }}>
        <button onClick={increaseFont} style={{ marginRight: "10px" }}>
          Increase Font
        </button>
        <button onClick={decreaseFont}>Decrease Font</button>
      </div>
    </div>
  );
};

export default DynamicFontResizer;
