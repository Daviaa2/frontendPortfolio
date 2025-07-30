import React from "react";
import { ThemeProvider } from "./assets/context/ThemeContext";
import Navbar from "./assets/components/Sections/Navbar";
function App() {
  return (
    <>
      <ThemeProvider>
          <Navbar/>
      </ThemeProvider>
    </>
  );
}

export default App;
