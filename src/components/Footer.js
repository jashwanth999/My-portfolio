import React from "react";
import Button from "@material-ui/core/Button";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Footer() {
  React.useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);
  return (
    <div
      style={{
        backgroundColor: "#212727",
        height: "14vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row"
        }}
      >
        <Button
          target="_blank"
          href="https://www.linkedin.com/in/jashwanth-bheemapaka-01a5781b7"
        >
          <LinkedInIcon
            style={{
              color: "grey",
              fontSize: 60,
              margin: 10,
              cursor: "pointer"
            }}
          />
        </Button>

        <Button
          target="_blank"
          href="https://github.com/jashwanth999?tab=repositories"
        >
          <GitHubIcon
            style={{
              color: "grey",
              fontSize: 50,
              margin: 10,
              cursor: "pointer"
            }}
          />
        </Button>

        <Button
          target="_blank"
          href="https://github.com/jashwanth999?tab=repositories"
        >
          <InstagramIcon
            style={{
              color: "grey",
              fontSize: 50,
              margin: 10,
              cursor: "pointer"
            }}
          />
        </Button>
      </div>
    </div>
  );
}
