import "./App.css";
import { useState } from "react";
import SummaryForm from "./pages/summary/SummaryForm";

export function changeColorText(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  return <SummaryForm />;
}

export default App;
