import React, { useState, useEffect } from "react";
import axios from "axios";
import "../map.css";
import { useParams, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import MapContainer from "./MapContainer";

const useStyles = makeStyles({
  root: {
    border: "1px solid #344675",
    borderRadius: "5%",
    width: "100%"
  },
  media: {
    height: 145,
    width: 145
  },
  image: {
    display: "block",
    marginRight: "auto",
    marginLeft: "auto",
    maxWidth: "100%",
    height: "140px"
  },
  circle: {
    backgroundColor: "#000",
    borderRadius: "10%",
    height: "150px",
    width: "150px",
    margin: "30px"
  },
  map: {
    height: "400px",
    width: "400px"
  },
  text: {
    color: "white"
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
      <Container>
        <div className={classes.circle}>
          <img className={classes.image} src={studio.picture} />
        </div>

        <Typography
          className={classes.text}
          gutterBottom
          variant="h5"
          component="h2"
        >
          {studio.name}
        </Typography>
        <Typography className={classes.text} gutterBottom>
          {studio.name} <br />
          {studio.phoneNum} <br />
          {address.street} <br />
          {address.city}, {address.state} {address.postalCode}
          <br />
          {studio.email} <br />
          {studio.website}
        </Typography>
        <div className={classes.socialicons}>
          {socialMedia.facebook && (
            <a
              aria-label="facebook"
              target="_blank"
              href={socialMedia.facebook}
              rel="noopener noreferrer"
            >
              <FacebookIcon
                fontSize="medium"
                color="primary"
                value="facebook"
              />
            </a>
          )}
          {socialMedia.instagram && (
            <a
              aria-label="instagram"
              target="_blank"
              href={socialMedia.instagram}
              rel="noopener noreferrer"
            >
              <InstagramIcon
                fontSize="medium"
                color="primary"
                value="instagram"
              />
            </a>
          )}
          {socialMedia.twitter && (
            <a
              aria-label="twitter"
              target="_blank"
              href={socialMedia.twitter}
              rel="noopener noreferrer"
            >
              <TwitterIcon fontSize="medium" color="primary" value="twitter" />
            </a>
          )}
          {socialMedia.youtube && (
            <a
              aria-label="youtube"
              target="_blank"
              href={socialMedia.youtube}
              rel="noopener noreferrer"
            >
              <YouTubeIcon fontSize="medium" color="primary" value="youtube" />
            </a>
          )}
        </div>
        <div className={classes.map}>
          {Object.keys(coordinates).length > 0 && (
            <MapContainer coordinates={coordinates} />
          )}
        </div>
      </Container>
    </div>
  );
}

export default withRouter(StudioPage);

{
  /* 
      <p>{studio.name}</p>
      <p>{studio.phoneNum}</p>
      <p>{address.street}</p>
      
      <p>{categories.join(", ")}</p>
    </div> */
}
