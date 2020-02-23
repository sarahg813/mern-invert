import React, { useState, useEffect } from "react";
import axios from "axios";
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

function StudioList(props) {
  const classes = useStyles();
  const [data, setData] = useState({ studios: [] });
  let history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/studios/");
        setData({ studios: response.data });
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

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
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">Phone Number</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Website</TableCell>
              <TableCell align="right">Social Media</TableCell>
              <TableCell align="right">Categories</TableCell>
            </TableRow>
          </TableHead>
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
}

export default withRouter(StudioList);
