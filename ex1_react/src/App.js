import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ToDoList from "./pages/ToDoList";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" exact={true} element={<NotFound />} />
          <Route path="/" exact={true} element={<ToDoList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
