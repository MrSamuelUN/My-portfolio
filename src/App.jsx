import React from "react";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import BackToTop from "./BactToTop";


function App() {
  return (
    <>
      <Routes>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/" element={<BackToTop/>}></Route> */}
        
      </Routes>
      <BackToTop/>
    </>
  );
}

export default App;



