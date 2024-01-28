import { useState } from "react";
import "../src/App.css";
import "../src/css/styles.css";
import reactLogo from "./assets/react.svg";
import ListUsers from "./components/ListSort/SpaceListUsers";
import PlusMinus from "./components/PlusMinus/plusminus";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <PlusMinus />
      <ListUsers />
    </>
  );
}

export default App;
