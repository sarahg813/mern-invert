import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Grid, IconButton, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  field: {
    width: "400px"
  },
  textInput: {
    color: "#fff",
    backgroundColor: "#192152"
  },
  text: {
    fontFamily: "Montserrat",
    color: "#fff"
  }
}));

const SearchForm = props => {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState({});

  const handleSubmit = async () => {
    try {
      const response = await axios.get("/studios/search", {
        params: { q: searchValue }
      });
      setData(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleSearchChanges = e => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  return (
    <React.Fragment>
      <Grid container direction="column" justify="center" alignItems="center">
        <form className="search" noValidate autoComplete="off">
          <Grid container justify="center" alignItems="center">
            <TextField
              value={searchValue}
              onChange={handleSearchChanges}
              className={classes.field}
              label="Search for city or state"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
              color="primary"
              type="text"
              InputProps={{
                className: classes.textInput
              }}
            />

            <IconButton
              color="primary"
              aria-label="search"
              component="span"
              onClick={handleSubmit}
            >
              <SearchIcon fontSize="large" type="submit" value="search" />
            </IconButton>
          </Grid>
        </form>
        <Typography variant="caption" className={classes.text}>
          (Brooklyn or New York works for now)
        </Typography>
      </Grid>
      {data.length > 0 && (
        <Redirect
          to={{
            pathname: "/results",
            state: { results: data }
          }}
        />
      )}
    </React.Fragment>
  );
};

export default SearchForm;
