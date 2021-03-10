import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles.css";
import ParticlesBg from "particles-bg";
export default function Image() {
  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
      id="image"
      style={{
        height: "80vh",
        flex: 1,

        alingItems: "center",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          width: "100%",
          height: "80vh",
          position: "absolute",
          zIndex: -1,
          top: 0,
          left: 0
        }}
      >
        <ParticlesBg type="circle" bg={true} />
      </div>

      {/* 
       <img
        src="https://github.com/sonnysangha/Resume-Portfolio-Starter-pack/blob/main/public/images/header-background.jpg?raw=true"
        alt=""
        width="100%"
        height="80%"
        style={{
          marginTop: 10,
          borderRadius: 5,
          boxShadow: 10,
          opacity: 0.4,
          position: "absolute"
        }}
      />*/}

      <div
        style={{
          paddingTop: 70,
          flex: 1,
          width: "100%",
          justifyContent: "center",
          display: "flex",
          zIndex: 1,
          position: "absolute",
          top: 120
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            flex: 1
          }}
        >
          <p style={{ color: "black", fontWeight: "bold" }}>
            Welcome to my World
          </p>
          <h3 className="font" style={{ color: "white", fontWeight: "bold" }}>
            I'm <span style={{ color: "#0FE8D6" }}>Jashwanth </span>
          </h3>
          <h3 className="font" style={{ color: "#E1054B", fontWeight: "bold" }}>
            I eat,sleep and breathe React
          </h3>
        </div>
      </div>
    </div>
  );
}
