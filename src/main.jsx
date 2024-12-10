import "../global.css";
import "../styleguide.css";
import React from "react";
import { ElementMasuk } from "./screens/ElementMasuk";
import { ElementDaftar } from "./screens/ElementDaftar";
import { ElementBerandaHover } from "./screens/ElementBerandaHover";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';



const Main = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<ElementMasuk />} />
          <Route path="/ElementDaftar" element={<ElementDaftar />} />
          <Route path="/ElementBerandaHover" element={<ElementBerandaHover />} />
        </Routes>

      </Router>
      );
  };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
  
  export default Main;


