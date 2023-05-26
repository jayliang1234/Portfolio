import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from 'react'
import Navbar from './components/Navbar.js';
import Home from './components/Home';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/Portfolio" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
