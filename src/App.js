import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export function changeColorText(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const textColor = buttonColor === "red" ? "blue" : "red";
  const handleClick = (event) => {
    setButtonColor(textColor);
  };
  const [disableButton, setDisableButton] = useState(false);
  const handleButtonGray = () => {
    setDisableButton(!disableButton);
  };
  return (
    <div className="App">
      <button
        style={{ backgroundColor: disableButton ? "grey" : buttonColor }}
        onClick={handleClick}
        disabled={disableButton}
      >
        Change to {textColor}
      </button>
      <input type="checkbox" id="disabled-button" onChange={handleButtonGray} />
      <label htmlFor="disabled-button">Disable Button</label>
    </div>
  );
}

export default App;
