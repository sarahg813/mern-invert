import React, { useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

function ResultList({ result }) {
  const classes = useStyles();
  let history = useHistory();

  const pushHandle = id => {
    history.push("/profile/" + id);
  };

  return (
    <div className={classes.root}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Studio Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key={result._id}>
              <TableCell component="th" scope="row">
                <button
                  onClick={() => {
                    pushHandle(result._id);
                  }}
                >
                  {result.name}
                </button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ResultList;
