import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Model1 from "./components/Model1";
import Model2 from "./components/Model2";
import Model3 from "./components/Model3";
import "./css/App.css";

function Home() {
    return (
        <div id="HomeApp">
            <h1>Modelos de Landing Page para Glamour</h1>
            <p>Clique em um modelo para visualizá-lo</p>
            <nav>
                <ul>
                    <li><Link to="/model1" >Model1</Link></li>
                    <li><Link to="/model2" >Model2</Link></li>
                    <li><Link to="/model3" >Model3</Link></li>
                </ul>
            </nav>
        </div>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/model1" element={<Model1 />} />
                <Route path="/model2" element={<Model2 />} />
                <Route path="/model3" element={<Model3 />} />
            </Routes>
        </Router>
    );
}

export default App;