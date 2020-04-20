import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import RoomIcon from "@material-ui/icons/Room";
import LinkIcon from "@material-ui/icons/Link";
import MapContainer2 from "./MapContainer2";
import handstandImg from "../images/backgroundfigures/handstand-300.png";
import lyraImg from "../images/backgroundfigures/lyra-250.png";

const useStyles = makeStyles({
  root: {
    width: "100vw",
    color: "white",
    background: `url(${handstandImg}) left bottom no-repeat, url(${lyraImg}) right top no-repeat`,
    display: "flex",
  },
  container: {
    margin: "auto 8rem auto 8rem",
  },
  gridContainer: {
    border: "1px solid #344675",
    borderRadius: "5%",
    padding: "2rem",
  },
  circle: {
    backgroundColor: "#000",
    borderRadius: "10%",
    height: "150px",
    width: "150px",
    margin: "30px",
  },
  map: {
    height: "400px",
    width: "400px",
  },
  studioName: {
    fontFamily: "Playfair Display",
  },
  nameContainer: {
    margin: "1rem 0 3rem 0",
  },
  mediaIcons: {
    margin: ".5rem",
  },
  icon: {
    marginRight: ".5rem",
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
});

function StudioPage() {
  const classes = useStyles();
  const [studio, setStudio] = useState({});
  const [address, setAddress] = useState({});
  const [coordinates, setCoordinates] = useState({});
  const [socialMedia, setSocialMedia] = useState({});
  const [categories, setCategories] = useState([]);
  const [stateName, setStateName] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/studios/profile/" + id);

        setStudio(response.data);
        setAddress(response.data.address);
        setStateName(response.data.address.state);
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
      <div className={classes.container}>
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.gridContainer}
        >
          <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.nameContainer}
          >
            <Grid item>
              <Typography variant="h4" className={classes.studioName}>
                {studio.name}
              </Typography>
            </Grid>
          </Grid>

          <Grid container justify="space-between">
            <Grid item md={7}>
              <Grid container>
                <Grid item md={1}>
                  <RoomIcon
                    fontSize="medium"
                    color="primary"
                    value="address pin icon"
                  />
                </Grid>
                <Grid item md={11}>
                  <Typography variant="body1">
                    {address.street}
                    <br /> {address.city}, {stateName[0]} {address.postalCode}
                    <br /> {address.country}
                  </Typography>
                </Grid>
                <Grid item md={1}>
                  <PhoneIcon
                    fontSize="medium"
                    color="primary"
                    value="phone icon"
                  />
                </Grid>
                <Grid item md={11}>
                  <Typography variant="body1">
                    <a href={`tel:${studio.phoneNum}`} className={classes.link}>
                      {studio.phoneNum}
                    </a>
                  </Typography>
                </Grid>
                <Grid item md={1}>
                  <LinkIcon
                    fontSize="medium"
                    color="primary"
                    value="link icon"
                  />
                </Grid>
                <Grid item md={11}>
                  <Typography variant="body1">
                    <a
                      target="_blank"
                      href={studio.website}
                      rel="noopener noreferrer"
                      className={classes.link}
                    >
                      {studio.website}
                    </a>
                  </Typography>
                </Grid>
                <Grid item md={1}>
                  <EmailIcon
                    fontSize="medium"
                    color="primary"
                    value="email icon"
                  />
                </Grid>
                <Grid item md={11}>
                  <Typography variant="body1">{studio.email}</Typography>
                </Grid>
                <Grid item md={12}>
                  <div className={classes.mediaIcons}>
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
                          className={classes.icon}
                        />
                      </a>
                    )}
                    {socialMedia.instagram && (
                      <a
                        aria-label="instagram link"
                        target="_blank"
                        href={socialMedia.instagram}
                        rel="noopener noreferrer"
                      >
                        <InstagramIcon
                          fontSize="medium"
                          color="primary"
                          value="instagram"
                          className={classes.icon}
                        />
                      </a>
                    )}
                    {socialMedia.twitter && (
                      <a
                        aria-label="twitter link"
                        target="_blank"
                        href={socialMedia.twitter}
                        rel="noopener noreferrer"
                      >
                        <TwitterIcon
                          fontSize="medium"
                          color="primary"
                          value="twitter"
                          className={classes.icon}
                        />
                      </a>
                    )}
                    {socialMedia.youtube && (
                      <a
                        aria-label="youtube link"
                        target="_blank"
                        href={socialMedia.youtube}
                        rel="noopener noreferrer"
                      >
                        <YouTubeIcon
                          fontSize="medium"
                          color="primary"
                          value="youtube"
                          className={classes.icon}
                        />
                      </a>
                    )}
                  </div>
                </Grid>
                <Grid item md={12}>
                  <Typography variant="body2">
                    &#91; {categories.join(", ")} &#93;
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item md={5} className={classes.map}>
              {Object.keys(coordinates).length > 0 && (
                <MapContainer2 coordinates={coordinates} />
              )}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default withRouter(StudioPage);
