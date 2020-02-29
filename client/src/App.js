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
import theme from "./theme";

const useStyles = makeStyles(theme => ({
  app: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    minHeight: "100vh",
    width: "100vw",
    backgroundColor: "#171940"
  },
  main: {
    display: "flex",
    flex: "auto",
    width: "100vw"
  }
}));

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.app}>
        <CssBaseline />
        <Router>
          <Navbar />
          <Container component="main" className={classes.main}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/studios" exact component={StudioList} />
              <Route path="/profile/:id" component={StudioPage} />
              <Route path="/edit/:id" component={EditStudio} />
              <Route path="/create" component={CreateStudio} />
            </Switch>
          </Container>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
