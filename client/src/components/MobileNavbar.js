import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Button,
  Toolbar,
  Grid,
  SwipeableDrawer,
  MenuList,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  item: {
    fontFamily: "Montserrat",
  },
  mobileBar: {
    backgroundColor: "#171940",
  },
  list: {
    width: 200,
  },
  padding: {
    paddingRight: 30,
    cursor: "pointer",
  },
  sideBarIcon: {
    padding: 0,
    color: "white",
    cursor: "pointer",
  },
  title: {
    margin: 1,
    color: "#fff",
    fontFamily: "Yeseva One",
  },
  toolbar: {
    display: "flex",
  },
}));

export default function MobileNavbar() {
  const classes = useStyles();
  const [drawer, setDrawer] = useState(false);

  const drawerClick = () => {
    setDrawer(false);
  };

  return (
    <div>
      <AppBar position="static" elevation={0} className={classes.mobileBar}>
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <MenuIcon
              className={classes.sideBarIcon}
              onClick={() => {
                setDrawer(true);
              }}
            />
            <Button component={NavLink} exact to="/" className={classes.title}>
              invertdex
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>

      <SwipeableDrawer
        open={drawer}
        onClose={() => {
          setDrawer(false);
        }}
        onOpen={() => {
          setDrawer(true);
        }}
      >
        <div>
          <MenuList className={classes.list}>
            <MenuItem
              className={classes.item}
              component={NavLink}
              onClick={drawerClick}
              onKeyDown={drawerClick}
              exact
              to="/"
              button
              divider
            >
              Invertdex
            </MenuItem>
            <MenuItem
              className={classes.item}
              component={NavLink}
              onClick={drawerClick}
              onKeyDown={drawerClick}
              to="/studios"
              button
              divider
            >
              All Studios
            </MenuItem>
            <MenuItem
              className={classes.item}
              component={NavLink}
              onClick={drawerClick}
              onKeyDown={drawerClick}
              to="/studiosmap"
              button
              divider
            >
              Studios Map
            </MenuItem>
            <MenuItem
              className={classes.item}
              component={NavLink}
              onClick={drawerClick}
              onKeyDown={drawerClick}
              to="/create"
              button
              divider
            >
              Create Studio
            </MenuItem>
          </MenuList>
        </div>
      </SwipeableDrawer>
    </div>
  );
}
