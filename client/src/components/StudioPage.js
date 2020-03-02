import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  root: {
    backgroundColor: "white"
  }
});

function StudioPage() {
  const classes = useStyles();
  const [studio, setStudio] = useState({});
  const [address, setAddress] = useState({});
  const [coordinates, setCoordinates] = useState({});
  const [socialMedia, setSocialMedia] = useState({});
  const [categories, setCategories] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/studios/profile/" + id);

        setStudio(response.data);
        setAddress(response.data.address);
        setCoordinates(response.data.coordinates);
        setSocialMedia(response.data.socialMedia);
        setCategories(response.data.categories);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className={classes.root}>
      <p>{studio.name}</p>
      <p>{studio.phoneNum}</p>
      <p>{address.street}</p>
      <p>{Object.values(socialMedia).join(", ")}</p>
      <p>{categories.join(", ")}</p>
    </div>
  );
}

export default withRouter(StudioPage);
