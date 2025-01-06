import { useState } from "react";

const UseState = () => {
  const [color, setColor] = useState("red");
  const [userColor, setUserColor] = useState("");
  const [error, setError] = useState("");

  const changeColor = () => {
    if (!userColor.trim()) {
      setError("Please enter a color.");
      return;
    }
    setError("");
    setColor(userColor);
    setUserColor("");
  };

  return (
    <>
      <div
        style={{
          backgroundColor: color,
          color: "white",
          padding: "20px",
          textAlign: "center",
          margin: "10px 0",
        }}
      >
        {color}
      </div>
      <input
        type="text"
        placeholder="Enter your color"
        value={userColor}
        onChange={(e) => setUserColor(e.target.value)}
      />
      <button onClick={changeColor}>Change Color</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
};

export default UseState;
