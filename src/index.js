import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ButtonDesigner from "./pages/ButtonDesigner.js";
import ColorPaletteGenerator from "./pages/ColorPaletteGenerator";
import ReactSnippets from "./pages/ReactSnippets";
import VueSnippets from "./pages/VueSnippets";
import AnimationDesigner from "./pages/AnimationCreator";
import 'tailwindcss/tailwind.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/button-designer" element={<ButtonDesigner />} />
        <Route path="/color-palette-generator" element={<ColorPaletteGenerator />} />
        <Route path="/react-snippets" element={<ReactSnippets />} />
        <Route path="/vue-snippets" element={<VueSnippets />} />
        <Route path="/animation-designer" element={<AnimationDesigner />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);