import React from "react";
import Search from "./SearchResultPage";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  home: {
    display: "flex",
    alignItems: "center",
    flexGrow: "1",
    "@media (max-width: 767px)": {
      height: "100%",
      minHeight: "100vh"
    }
  },
  pageInfo: {
    fontFamily: "Playfair Display",
    color: "#fff",
    fontSize: "3em"
  },
  text: {
    fontFamily: "Montserrat",
    color: "#fff"
  }
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      <Grid container direction="column" justify="center" alignItems="center">
        <Typography
          variant="h4"
          gutterBottom="true"
          className={classes.pageInfo}
        >
          Find a studio where you can invert!
        </Typography>
        <br />
        <Search />
        <Typography variant="caption" className={classes.text}>
          (currently Brooklyn or New York works for now)
        </Typography>
      </Grid>
    </div>
  );
}
