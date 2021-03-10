import React from "react";
import Button from "@material-ui/core/Button";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles.css";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import emailjs from "emailjs-com";
export default function Contact() {
  React.useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);
  const send = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_3ybi01i",
        "template_t15w3dk",
        e.target,
        "user_fvU0mTt1RZW7WSXTCN6ox"
      )
      .then((result) => {
        alert(result);
      });
  };
  return (
    <div
      id="contact"
      style={{
        backgroundColor: "black",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 40,
        width: "100%",
        paddingBottom: 60,
        flexWrap: "wrap",
        justifyContent: "center"
      }}
    >
      <form
        onSubmit={send}
        className="contac"
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap"
        }}
      >
        <h3 className="myskills" style={{ color: "#2CE13E" }}>
          GET IN TOUCH
        </h3>
        <input
          data-aos="fade-up"
          placeholder="Name"
          style={{
            height: 50,
            width: "100%",
            maxWidth: 450,
            outline: "none",
            backgroundColor: "black",
            border: "2px solid grey",
            borderRadius: 5,
            color: "grey",
            padding: 10,
            marginTop: 20
          }}
        />
        <input
          data-aos="fade-up"
          placeholder="Your mail"
          style={{
            height: 50,
            width: "100%",
            maxWidth: 450,
            outline: "none",
            backgroundColor: "black",
            border: "2px solid grey",
            borderRadius: 5,
            color: "grey",
            marginTop: 20,
            padding: 10
          }}
        />
        <input
          data-aos="fade-up"
          placeholder="subject"
          style={{
            height: 50,
            width: "100%",
            maxWidth: 450,
            outline: "none",
            backgroundColor: "black",
            border: "2px solid grey",
            borderRadius: 5,
            color: "grey",
            marginTop: 20,
            padding: 10
          }}
        />
        <textarea
          data-aos="fade-up"
          placeholder="write message"
          style={{
            height: 170,
            width: "100%",
            maxWidth: 450,
            outline: "none",
            backgroundColor: "black",
            border: "2px solid grey",
            borderRadius: 5,
            color: "grey",
            marginTop: 20,
            padding: 10,
            resize: "none"
          }}
        />
        <div
          data-aos="fade-up"
          style={{
            display: "flex",
            width: "90%",
            paddingTop: 40,
            flexWrap: "wrap",
            flexDirection: "row-reverse",
            justifyContent: "flex-end"
          }}
        >
          <Button
            variant="contained"
            style={{ backgroundColor: "#E11B57", color: "white" }}
          >
            submit
          </Button>
        </div>
      </form>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{ display: "flex", flexDirection: "row", alignItems: "row" }}
        >
          <MailIcon
            className="mailfont"
            style={{ fontSize: 33, color: "white", paddingRight: 5 }}
          />
          <h3 className="mailfont">jaswhanthbj9@gmail.com</h3>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "row",
            marginTop: 15
          }}
        >
          <PhoneIphoneIcon
            className="mailfont"
            style={{ fontSize: 33, color: "white", paddingRight: 5 }}
          />
          <h3 className="mailfont">7013529472</h3>
        </div>
      </div>
    </div>
  );
}
