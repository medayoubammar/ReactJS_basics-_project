import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap';

import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './components/Home';
import Movies from './components/Movies';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/movies" element={<Movies />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
