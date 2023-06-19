import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from 'react'
import Home from './components/Home';
function App() {
  return (
    <Router>
      {/*<Navbar/>*/}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Portfolio" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
