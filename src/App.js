import React from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

// Pages
import Home from "./pages/Home";


function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      {/* Add more pages here */}
      <Footer />
    </div>
  );
}

export default App;
