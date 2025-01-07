import { useState } from "react";

const SimpleCalculator = () => {
  const [addnum, setNum] = useState(""); // Input 1
  const [addnum2, setaddnum2] = useState(""); // Input 2
  const [result, setResult] = useState(null); // Stores result

  const handleAddition = () => {
    setResult(Number(addnum) + Number(addnum2));
  };

  const handleSubtraction = () => {
    setResult(Number(addnum) - Number(addnum2));
  };

  const handleMultiplication = () => {
    setResult(Number(addnum) * Number(addnum2));
  };

  const handleDivision = () => {
    if (Number(addnum2) === 0) {
      setResult("Cannot divide by zero"); // Handle division by zero
    } else {
      setResult(Number(addnum) / Number(addnum2));
    }
  };

  return (
    <>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="number"
          placeholder="Enter your first number"
          value={addnum}
          onChange={(e) => setNum(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <input
          type="number"
          placeholder="Enter your second number"
          value={addnum2}
          onChange={(e) => setaddnum2(e.target.value)}
          style={{ padding: "5px" }}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <button onClick={handleAddition} style={{ marginRight: "10px", padding: "5px 10px" }}>
          Add
        </button>
        <button onClick={handleSubtraction} style={{ marginRight: "10px", padding: "5px 10px" }}>
          Subtract
        </button>
        <button onClick={handleMultiplication} style={{ marginRight: "10px", padding: "5px 10px" }}>
          Multiply
        </button>
        <button onClick={handleDivision} style={{ padding: "5px 10px" }}>
          Divide
        </button>
      </div>

      <div>
        {result !== null && <p>Result: {result}</p>} {/* Display result conditionally */}
      </div>
    </>
  );
};

export default SimpleCalculator;
