import React, { useState, useEffect } from "react";
import axios from "axios";
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

export default function StudioList() {
  const classes = useStyles();
  const [data, setData] = useState({ studios: [] });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:5000/studios/");

      setData({ studios: response.data });
    };
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading data...</div>;
  }

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
                  {studio.name}
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
