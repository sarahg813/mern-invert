import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, CssBaseline } from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import StudioList from "./components/StudioList";
import EditStudio from "./components/EditStudio";
import CreateStudio from "./components/CreateStudio";
import StudioPage from "./components/StudioPage";
import SearchResultPage from "./components/SearchResultPage";
import MapAllStudios from "./components/MapAllStudios";
import theme from "./theme";

const useStyles = makeStyles((theme) => ({
  app: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    minHeight: "100vh",
    width: "100vw",
  },
  main: {
    display: "flex",
    flex: "auto",
    width: "100%",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className={classes.app}>
          <CssBaseline />
          <Navbar />
          <Container component="main" className={classes.main}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/studios" exact component={StudioList} />
              <Route path="/profile/:id" component={StudioPage} />
              <Route path="/edit/:id" component={EditStudio} />
              <Route path="/allstudiosmap" component={MapAllStudios} />
              <Route path="/create" component={CreateStudio} />
              <Route path="/results" component={SearchResultPage} />
            </Switch>
          </Container>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
