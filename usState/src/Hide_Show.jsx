import { useState } from "react";
const Hide_Show = () => {
  const [isVisible, setVisible] = useState(true);

  const show_hide = () => {
    setVisible(!isVisible);
  };

  return (
    <>
      <button onClick={show_hide}>{isVisible ? "Hide" : "Show"}</button>
      {isVisible && <p>Hello, world!</p>}
    </>
  );
};
export default Hide_Show;
