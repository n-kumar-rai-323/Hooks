import "./App.css";
import UseState from "./UseState";
import Counter from "./Counter";
import Hide_Show from "./Hide_Show";
import To_do from "./To_do";
import Dynamic_Font_Resize from "./Dynamic_Font_Resize";
import DynamicFontResizer from "./DynamicFontReSizer";
import SimpleCalulator from "./SimpleCalculator";
import BackgroundChange from "./BackgroundChange";

function App() {
  return (
    <>
      <h1>Hi Nishan</h1>
      <UseState />
      <br />
      <br />
      <Counter />
      <br />
      <br />
      <Hide_Show />
      <br />
      <br />
      <To_do />
      <br />
      <br />
      <Dynamic_Font_Resize />
      <br />
      <br />
      <DynamicFontResizer />

      <br />
      <br />
      <SimpleCalulator />
      <br />
      <br />
      <BackgroundChange />
    </>
  );
}

export default App;
