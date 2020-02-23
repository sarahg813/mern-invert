import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import StudioList from "./components/StudioList";
import EditStudio from "./components/EditStudio";
import CreateStudio from "./components/CreateStudio";
import StudioPage from "./components/StudioPage";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route path="/" exact component={StudioList} />
          <Route path="/profile/:id" component={StudioPage} />
          <Route path="/edit/:id" component={EditStudio} />
          <Route path="/create" component={CreateStudio} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
