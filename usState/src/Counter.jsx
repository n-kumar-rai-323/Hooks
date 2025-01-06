import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };

  const reSet = () => {
    setCount(0);
  };
  return (
    <>
      <button onClick={increase}>Increase</button>
      <span>{count}</span>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reSet}>Reset</button>
    </>
  );
};
export default Counter;
