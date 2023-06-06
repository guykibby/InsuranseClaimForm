import React from "react";
import "./index.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";
import InputForm from "./components/InputForm";
import Dashboard from "./components/dashboard";
import Homepage from "./components/homepage";

function App() {
  return (
    <>
      <Header />
      <div className="primary-container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/claim" element={<InputForm />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
