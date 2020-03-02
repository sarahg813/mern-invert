import React, { useState } from "react";
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

  const handleSearchChanges = e => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunc = e => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  };

  return (
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
            InputProps={{
              className: classes.textInput
            }}
          />

          <IconButton
            color="primary"
            aria-label="search"
            component="span"
            onClick={callSearchFunc}
          >
            <SearchIcon fontSize="large" type="submit" value="search" />
          </IconButton>
        </Grid>
      </form>
      <Typography variant="caption" className={classes.text}>
        (currently Brooklyn or New York works for now)
      </Typography>
    </Grid>
  );
};

export default SearchForm;
