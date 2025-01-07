import { useState } from "react";
const BackgroundChange = () => {
  const [color, setcolor] = useState("");
  return (
    <>
      <select
        id="choose"
        onChange={(e) => setcolor(e.target.value)}
        style={{ marginBottom: "20px", padding: "10px" }}
      >
        <option value="">Choose your favorite Color</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
      </select>

      <div
        style={{
          height: "300px",
          width: "600px",
          backgroundColor: color,
          border: "1px solid black",
        }}
      ></div>
    </>
  );
};
export default BackgroundChange;
