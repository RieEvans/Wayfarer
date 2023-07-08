import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Route/Home";
import { About } from "./Route/About";
import { Service } from "./Route/Service";
import TodoList from "./Intramuros/TodoList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="todolist" element={<TodoList />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Service />}></Route>
      </Routes>
    </div>
  );
}

export default App;
