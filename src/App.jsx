import React from "react";
import Counter from './counter.jsx';
import Menu from "./menu";

function App() {
  return (
    <div>
      <Menu />

      <h1>Hi there, I'm Angeliki!</h1>

    

      <button>
        <a
        className="btn liquid"
          href="https://github.com/simigdalius"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          Aka simigdalius
        </a>
      </button>
      <Counter />
    </div>
      
  );
}

export default App;