import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  transparentBar: {
    backgroundColor: "transparent",
  },
  colorBar: {
    backgroundColor: "#171940",
  },
  padding: {
    paddingRight: 30,
    cursor: "pointer",
  },
  button: {
    margin: 1,
    color: "#fff",
    fontFamily: "Montserrat",
  },
  toolbar: {
    display: "flex",
  },

  title: {
    fontFamily: "Yeseva One",
    color: "#fff",
  },
}));

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger();

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function DesktopNavbar(props) {
  const classes = useStyles();
  const [scroll, setScroll] = React.useState(true);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < 50;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });

  return (
    <ElevationScroll {...props}>
      <AppBar
        elevation={0}
        position="sticky"
        className={scroll ? classes.transparentBar : classes.colorBar}
      >
        <Toolbar className={classes.toolbar}>
          <Box flexGrow={1}>
            <Button component={NavLink} exact to="/">
              <Typography component="h1" variant="h4" className={classes.title}>
                invertdex
              </Typography>
            </Button>
          </Box>

          <Button component={NavLink} to="/studios" className={classes.button}>
            ALL STUDIOS
          </Button>
          <Button
            component={NavLink}
            to="/allstudiosmap"
            className={classes.button}
          >
            STUDIOS MAP
          </Button>
          <Button component={NavLink} to="/create" className={classes.button}>
            CREATE STUDIO
          </Button>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}
