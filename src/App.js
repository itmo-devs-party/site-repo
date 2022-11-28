import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./App.scss";
import { NavBar } from "./container";

// eslint-disable-next-line
import { Home, Scan, Buildings, People, YaMap, Kronv } from "./pages";

function App() {
  return (
    <Router>
      {/* <div className='main__app-container'> */}
      <NavBar />
      <Routes>
        <Route path="/Buildings" element={<Buildings />} />
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/People" element={<People />} />

        {/* consider implementing next line with buildings id */}
        {/* <Route path="/Buildings/:id" element={<Buildings />} /> */}

        <Route path="/Map" element={<YaMap />} />
        <Route path="/Kronv" element={<Kronv />} />
        <Route path="/Scan" element={<Scan />} />
      </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;
