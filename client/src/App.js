import React, { Fragment } from "react";
import "./index.css";
import Header from "./components/header";
import Footer from "./components/footer";

import InputForm from "./components/InputForm";

function App() {
  return (
    <>
      <Header />
      <div className="primary-container">
        <InputForm />
      </div>
      <Footer />
    </>
  );
}

export default App;
