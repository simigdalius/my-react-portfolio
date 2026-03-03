import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // <--- ΠΡΟΣΘΕΣΕ ΑΥΤΟ
import Menu from "./menu";
import AboutMe from "./AboutMe";
import Grainient from './Grainient';



function App() {
  const menuLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/AboutMe' },
    { label: 'Projects', href: '/projects' }
  ];
  return (
    <Router> {/* <--- ΟΛΟ ΤΟ SITE ΠΡΕΠΕΙ ΝΑ ΕΙΝΑΙ ΜΕΣΑ ΣΤΟ ROUTER */}
<div>
        <div className="grainient-container">
  <Grainient
    color1="#62a0ea"
    color2="#003d98"
    color3="#c061cb"
    timeSpeed={0.25}
    colorBalance={0}
    warpStrength={1}
    warpFrequency={5}
    warpSpeed={2}
    warpAmplitude={50}
    blendAngle={0}
    blendSoftness={0.05}
    rotationAmount={500}
    noiseScale={2}
    grainAmount={0.1}
    grainScale={2}
    grainAnimated={false}
    contrast={1.5}
    gamma={1}
    saturation={1}
    centerX={0}
    centerY={0}
    zoom={0.9}
  />
</div>
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