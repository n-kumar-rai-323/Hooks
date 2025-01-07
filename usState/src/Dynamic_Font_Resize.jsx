import { useState } from "react";
const Dynamic_Font_Resize = () => {
  const initilze_value = () => {
    console.log("functiong initilze");
    return 16;
  };
  const [fontSize, setFontSize] = useState(() => initilze_value());

  const increaseFontSize = () => {
    setFontSize((prevSize) => prevSize + 2);
    setFontSize((prevSize) => prevSize + 2);
    // setFontSize(fontSize + 2);
    // setFontSize(fontSize + 2); it is wrong way to increase value because in this type overide the uper state
  };

  const decreaseFontSize = () => {
    setFontSize((prevSize) => (prevSize > 10 ? prevSize - 2 : prevSize));
  };

  const resetFontSize = () => {
    setFontSize(10);
  };
  return (
    <>
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
        <div>
          <button
            onClick={increaseFontSize}
            style={{ marginRight: "10px", marginTop: "10px" }}
          >
            Increase Font
          </button>
          {fontSize} px
          <button onClick={decreaseFontSize} style={{ marginLeft: "30px" }}>
            Decrease Font
          </button>
          <button onClick={resetFontSize}>ResetFont</button>
        </div>
      </div>
    </>
  );
};
export default Dynamic_Font_Resize;
