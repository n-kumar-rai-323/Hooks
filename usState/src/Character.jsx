import { useState } from "react";

const Character = () => {
  const [text, setText] = useState("");
  const maxChar = 100;

  const counterText = (e) => {
    if (e.target.value.length <= maxChar) {
      setText(e.target.value);
    }
  };
  return (
    <>
      <h2>Character Counter</h2>
      <textarea
        rows="5"
        cols="50"
        placeholder="Start Typing"
        value={text}
        onChange={counterText}
      ></textarea>
      <p>
        {text.length}/ {maxChar} Characters
      </p>
    </>
  );
};
export default Character;
