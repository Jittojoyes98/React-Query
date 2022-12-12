import "./App.css";
import { useState } from "react";
import SummaryForm from "./pages/summary/SummaryForm";
import Options from "./pages/entry/Options";
import Calender from "./pages/calender/Calender";
import "react-calendar/dist/Calendar.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Github from "./pages/Github/Github";

export function changeColorText(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Github />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
