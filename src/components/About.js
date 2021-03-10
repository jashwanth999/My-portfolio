import React from "react";
import Typography from "@material-ui/core/Typography";
import "../styles.css";
import Aos from "aos";
import "aos/dist/aos.css";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { Link } from "react-scroll";
import { Blob } from "react-blob";
export default function About() {
  React.useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);

  return (
    <div
      id="about"
      style={{
        flex: 1,
        backgroundColor: "#212727",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 30,
        minHeight: "80vh"
      }}
    >
      '{" "}
      <div
        style={{
          width: 55,
          height: 55,
          backgroundColor: "black",
          borderRadius: 55,
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          alignContent: "center",
          zIndex: 1,
          position: "fixed",
          bottom: 50,
          right: 25
        }}
      >
        <Link to="image" smooth={true} duration={1000}>
          <KeyboardArrowUpIcon
            style={{ color: "white", fontSize: 50, cursor: "pointer" }}
          />
        </Link>
      </div>
      '
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          paddingTop: 20,
          paddingBottom: 60,
          justifyContent: "center"
        }}
      >
        <Blob
          className="img"
          style={{
            backgroundColor: "#21D4FD",
            color: "white",
            opacity: 1
          }}
        >
          <img
            className="img"
            src="https://avatars.githubusercontent.com/u/65611955?s=460&u=8698458c2d18c6e403da7f84deb1aaa20c3786af&v=4"
            alt=""
            style={{}}
          />
        </Blob>

        <Typography
          className="typo"
          style={{
            color: "white",
            padding: 10,
            minWidth: 360,
            wordBreak: "break-word",
            maxWidth: "50%"
          }}
        >
          <h2
            data-aos="fade-up"
            className="aboutme"
            style={{ color: "#2CE13E" }}
          >
            About Me
          </h2>
          <p
            data-aos="fade-up"
            className="about"
            style={{ color: "grey", fontSize: 20 }}
          >
            Hi there! I am Jashwanth!. I'm a Full Stack developer and interested
            in learning new technology,right now I'm a undergraduate at CBIT.
            <br />
            "EAT SLEEP AND CODE"
          </p>
          <p
            data-aos="fade-up"
            className="about"
            style={{ width: 250, fontSize: 20 }}
          >
            <span style={{ color: "#0F4CE8", fontSize: 28 }}>
              Contact Details
            </span>
            <br /> Jashwanth B
            <br />
            Hyderbad
            <br />
            Telangana
            <br />
            jashwanthbj9@gmail.com
          </p>
        </Typography>
      </div>
    </div>
  );
}
