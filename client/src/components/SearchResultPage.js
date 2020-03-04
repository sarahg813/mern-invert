import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const SearchResultPage = props => {
  const classes = useStyles();
  let history = useHistory();
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState({ studios: [] });

  useEffect(() => {
    setData({ studios: props.location.state.results });
  }, []);

  const search = async searchValue => {
    try {
      const response = await axios.get("/studios/search", {
        params: { q: searchValue }
      });
      setData({ studios: response.data });
    } catch (error) {
      console.log("error", error);
    }
  };

  const pushHandle = id => {
    history.push("/profile/" + id);
  };

  return (
    <div className={classes.root}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            {data.studios.map(studio => (
              <TableRow key={studio._id}>
                <TableCell component="th" scope="row">
                  <button
                    onClick={() => {
                      pushHandle(studio._id);
                    }}
                  >
                    {studio.name}
                  </button>
                </TableCell>
                <TableCell align="right">
                  {studio.address.street}
                  <br />
                  {studio.address.city}, {studio.address.state}{" "}
                  {studio.address.postalCode}
                  <br />
                  {studio.address.country}
                  <br />
                </TableCell>
                <TableCell align="right">{studio.phoneNum}</TableCell>
                <TableCell align="right">{studio.email}</TableCell>
                <TableCell align="right">{studio.website}</TableCell>
                <TableCell align="right">
                  {Object.values(studio.socialMedia).join(", ")}
                </TableCell>
                <TableCell align="right">
                  {studio.categories.join(", ")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default withRouter(SearchResultPage);
