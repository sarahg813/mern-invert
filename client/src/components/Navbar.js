import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    margin: 1
  },
  appbar: {
    display: "flex",
    backgroundColor: "#009688"
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar>
        <Button component={NavLink} exact to="/" variant="button">
          <Typography variant="h6" className={classes.title}>
            Invert Finder
          </Typography>
        </Button>
        <Button
          component={NavLink}
          to="/studios"
          variant="button"
          color="textPrimary"
          className={classes.button}
        >
          All Studios
        </Button>
        <Button
          component={NavLink}
          to="/create"
          variant="button"
          color="textPrimary"
          className={classes.button}
        >
          Add Studio
        </Button>
      </Toolbar>
    </AppBar>
  );
}
