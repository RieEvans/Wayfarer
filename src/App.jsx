import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Route/Home";
import { WhatToSee } from "./Route/WhatToSee";
import { WhereToStay } from "./Route/WhereToStay";
import TodoList from "./Intramuros/TodoList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="todolist" element={<TodoList />} />
        <Route path="/WhatToSee" element={<WhatToSee />} />
        <Route path="/WhereToStay" element={<WhereToStay />}></Route>
      </Routes>
    </div>
  );
}

export default App;
