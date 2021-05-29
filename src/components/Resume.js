import React from "react";
import { ProgressBar } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles.css";
import Button from "@material-ui/core/Button";
export default function Resume() {
  React.useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);
  return (
    <div
      style={{
        backgroundColor: "black",

        flex: 1,

        textAlign: "center",
        paddingTop: 60,
        paddingBottom: 60
      }}
      id="resume"
    >
      <h3 className="myskills" style={{ color: "#2CE13E" }}>
        My Skills
      </h3>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <div
          className="resume"
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            alignItems: "center",
            paddingTop: 20
          }}
        >
          <div
            data-aos="fade-up"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "90%",
              maxWidth: 600,
              textAlign: "left"
            }}
          >
            <h4 style={{ color: "white" }}>python</h4>
            <ProgressBar
              now={90}
              style={{ height: 34, width: "100%", marginTop: 10 }}
            />
          </div>

          <div
            data-aos="fade-up"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "90%",
              maxWidth: 600,
              paddingTop: 20,
              textAlign: "left"
            }}
          >
            <h4 style={{ color: "white" }}>c++</h4>
            <ProgressBar
              now={80}
              style={{ height: 34, width: "100%", marginTop: 10 }}
            />
          </div>
          <div
            data-aos="fade-up"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "90%",
              maxWidth: 600,
              paddingTop: 20,
              textAlign: "left"
            }}
          >
            <h4 style={{ color: "white" }}>React Js</h4>
            <ProgressBar
              now={70}
              style={{ height: 34, width: "100%", marginTop: 10 }}
            />
          </div>
          <div
            data-aos="fade-up"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "90%",
              maxWidth: 600,
              textAlign: "left",
              paddingTop: 10
            }}
          >
            <h4 style={{ color: "white" }}>React Native</h4>
            <ProgressBar
              now={70}
              style={{ height: 34, width: "100%", marginTop: 10 }}
            />
          </div>
         <div
            data-aos="fade-up"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "90%",
              maxWidth: 600,
              textAlign: "left",
              paddingTop: 10
            }}
          >
            <h4 style={{ color: "white" }}>Flutter</h4>
            <ProgressBar
              now={60}
              style={{ height: 34, width: "100%", marginTop: 10 }}
            />
          </div>
          <div
            data-aos="fade-up"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "90%",
              maxWidth: 600,
              textAlign: "left",
              paddingTop: 10
            }}
          >
            <h4 style={{ color: "white" }}>Node js</h4>
            <ProgressBar
              now={50}
              style={{ height: 34, width: "100%", marginTop: 10 }}
            />
          </div>
        </div>
        <div
          className="king"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <p
            data-aos="fade-up"
            className="data"
            style={{ color: "#EC7063", fontWeight: "bold" }}
          >
            Databases: MYSQL, Mongodb, Firebase
            <br />
            Programming Languages:Java,Python
            <br />
    
          </p>
          <Button
            data-aos="fade-up"
            variant="contained"
            style={{
              backgroundColor: "#E11B57",
              color: "white",
              width: 230,
              fontSize: 14,
              marginTop: 20,
              position: "relative",
              left: 20
            }}
          >
            Download Resume
          </Button>
        </div>
      </div>
    </div>
  );
}
