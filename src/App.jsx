import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // <--- ΠΡΟΣΘΕΣΕ ΑΥΤΟ
import Menu from "./menu";
import AboutMe from "./AboutMe";

function App() {
  const menuLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/AboutMe' },
    { label: 'Projects', href: '/projects' }
  ];
  return (
    <Router> {/* <--- ΟΛΟ ΤΟ SITE ΠΡΕΠΕΙ ΝΑ ΕΙΝΑΙ ΜΕΣΑ ΣΤΟ ROUTER */}
      <div>
        <Menu 
          items={menuLinks} 
          logo="https://via.placeholder.com/40" // Βάλε το δικό σου logo path εδώ
          baseColor="#030752" 
          pillColor="#ffffff" 
        />

        <Routes>
          {/* Η Αρχική Σελίδα */}
          <Route path="/" element={
            <header style={{ padding: "50px" }}>
              <h1>Hi there, I'm Angeliki!</h1>
              <a
                className="btn liquid"
                href="https://github.com/simigdalius"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Aka simigdalius
              </a>
            </header>
          } />

          {/* Η Σελίδα About */}
          <Route path="/AboutMe" element={<AboutMe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;