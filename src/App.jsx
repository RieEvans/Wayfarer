import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Route/Home";
import { About } from "./Route/About";
import { Service } from "./Route/Service";
import TodoList from "./Intramuros/TodoList";
import { Signup } from "./Route/signup";
import { Login } from "./Route/login";
import Navbar from "./components/Navbar";
import { ProtectedRoutes } from "./Protected/ProtectedRoute";

function App() {
  
  return (
    <div className="app">
        <Navbar  />
      <Routes>


          <Route path="/" exact element={<Home />} />
          <Route path="todolist" element={<TodoList />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />}></Route>

      </Routes>

      <div className={``}>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
