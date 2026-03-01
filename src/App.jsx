import React from "react";
import Counter from './counter.jsx'
import Menu from "./menu";

function App() {
  return (
    <div>
        <Menu />
    
      <h1>Hi there, I'm Angeliki! </h1>

      <Counter />

      <p className="read-the-docs">
        Click on the Vite logo to learn more
      </p>
    </div>
  )
}

export default App