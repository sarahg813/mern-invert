import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import StudioList from "./components/StudioList";
import EditStudio from "./components/EditStudio";
import CreateStudio from "./components/CreateStudio";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Route path="/" exact component={StudioList} />
        <Route path="/edit/:id" component={EditStudio} />
        <Route path="/create" component={CreateStudio} />
      </div>
    </Router>
  );
}

export default App;
