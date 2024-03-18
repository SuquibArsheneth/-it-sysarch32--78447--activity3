import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Pokedex from "./Pokedex.jsx";



function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <Pokedex />
      </div>
      <Footer />
    </div>
  );
}

export default App;