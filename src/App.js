import { useState } from "react";
import "./App.css";
let bool = true;
function App() {
  const [theme, setTheme] = useState("light");
  const [btn, setBtn] = useState("Light Mode");

  const clickHandlerTheme = () => {
    bool = !bool;
    if (bool == false) {
      setTheme("dark");
      setBtn("Dark Mode");
    } else {
      setTheme("light");
      setBtn("Light Mode");
    }
  };

  return (
    <div id={theme} className="App">
      <p>
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before final copy is available.In publishing and graphic
        design, Lorem ipsum is a placeholder text commonly used to demonstrate
        the visual form of a document or a typeface without relying on
        meaningful content. Lorem ipsum may be used as a placeholder before
        final copy is available.In publishing and graphic design, Lorem ipsum is
        a placeholder text commonly used to demonstrate the visual form of a
        document or a typeface without relying on meaningful content. Lorem
        ipsum may be used as a placeholder before final copy is available.In
        publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before final copy is available.In publishing and graphic
        design, Lorem ipsum is a placeholder text commonly used to demonstrate
        the visual form of a document or a typeface without relying on
        meaningful content. Lorem ipsum may be used as a placeholder before
        final copy is available.
      </p>
      <button onClick={clickHandlerTheme}>{btn}</button>
    </div>
  );
}

export default App;
