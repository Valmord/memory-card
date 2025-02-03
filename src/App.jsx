import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./Header";
import CardContainer from "./CardContainer";

function App() {
  const [score, setScore] = useState(0);
  return (
    <>
      <Header score={score} />
      <CardContainer setScore={setScore} />
    </>
  );
}

export default App;
