import { useState } from "react";
import "./App.css";
import Header from "./Header";
import CardContainer from "./CardContainer";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <CardContainer
        score={score}
        setScore={setScore}
        bestScore={bestScore}
        setBestScore={setBestScore}
      />
    </>
  );
}

export default App;
