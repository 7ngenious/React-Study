import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import Board from "./components/Board";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Board" element={<Board />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
