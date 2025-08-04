import React from "react";
import { ThemeProvider } from "./assets/context/ThemeContext";
import Navbar from "./assets/components/Sections/Navbar";
import HeroSection from "./assets/components/Sections/HeroSection";

function App() {
  return (
    <>
      <ThemeProvider>
          <Navbar />
          <HeroSection />
      </ThemeProvider>
    </>
  );
}

export default App;
