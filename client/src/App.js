import React from "react";
import "./index.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";
import InputForm from "./components/InputForm";
import Homepage from "./components/homepage";

function App() {
  return (
    <>
      <Header />
      <div className="primary-container">
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/inputForm" element={<InputForm />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
