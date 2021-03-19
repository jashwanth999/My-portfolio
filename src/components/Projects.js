import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles.css";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles({
  root: {
    maxWidth: 360,
    paddingTop: 10,
    margin: 10,
    backgroundColor: "black"
  },
  media: {
    height: 300,
    objectfit: "contain",
    resizeMode: "cover"
  }
});

export default function Projects() {
  const classes = useStyles();
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        paddingTop: 50,
        backgroundColor: "#212727",
        paddingBottom: 50
      }}
      id="projects"
    >
      <h3 className="myskills" style={{ color: "#2CE13E" }}>
        My Projects
      </h3>
      <div
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexWrap: "wrap"
        }}
      >
        <Card data-aos="fade-up" className={classes.root}>
          <CardActionArea>
            <img
              alt=""
              src="https://user-images.githubusercontent.com/65611955/109395984-5cbcf300-7955-11eb-83fa-ebfea8775ec9.png"
              style={{
                objectFit: "contain",
                width: 360,
                height: 340,
                resizeMode: "cover"
              }}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                <Button
                  target="_blank"
                  href="https://github.com/jashwanth999/ChatXX-React-native"
                  style={{ color: "white", fontSize: 20, padding: 0 }}
                >
                  {" "}
                  ChatXX
                </Button>
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                style={{ color: "white" }}
              >
                It is a real time chat application created using React native
                and it is Cross platform application
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card data-aos="fade-up" className={classes.root}>
          <CardActionArea>
            <img
              alt=""
              src="https://user-images.githubusercontent.com/65611955/101473399-cbe70480-396f-11eb-8fcf-ac2bfb12e706.gif"
              style={{
                objectFit: "contain",
                width: 360,
                height: 340,
                resizeMode: "cover"
              }}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                style={{ color: "white" }}
              >
                <Button
                  target="_blank"
                  href="https://github.com/jashwanth999/Instaclone-React-native"
                  style={{ color: "white", fontSize: 20, padding: 0 }}
                >
                  {" "}
                  Instagram Clone
                </Button>
              </Typography>

              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                style={{ color: "white" }}
              >
                Instagram Clone created using React native and firebase
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card data-aos="fade-up" className={classes.root}>
          <CardActionArea>
            <img
              alt=""
              src="https://user-images.githubusercontent.com/65611955/109396933-128a4080-795a-11eb-95c7-221ed6718b29.png"
              style={{
                objectFit: "contain",
                width: 360,
                height: 340,
                resizeMode: "cover"
              }}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                style={{ color: "white" }}
              >
                <Button
                  target="_blank"
                  href="https://github.com/jashwanth999/Social-media-app"
                  style={{ color: "white", fontSize: 20, padding: 0 }}
                >
                  {" "}
                  Social Media Website
                </Button>
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                style={{ color: "white" }}
              >
                It is social Media Website for CBIT It's a multi pupose useful
                website
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}
