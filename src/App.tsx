import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
