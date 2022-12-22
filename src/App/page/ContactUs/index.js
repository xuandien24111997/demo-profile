import React from "react";
import home from "../../../assets/images/Home.png";
import left from "../../../assets/images/left.png";
import add from "../../../assets/images/add.png";
import phone from "../../../assets/images/phone.png";
import email from "../../../assets/images/email.png";
import history from "ultils/history";

export default function ContactUs() {
  return (
    <div className="page-contact-us">
      <div className="contact-us">
        <div className="contact-us-div"></div>
        <div className="link-move container">
          <div className="link-move__left">
            <div className="leftRight">
              <img alt="img" src={home} />
              <p className="Home_text" onClick={() => history.push("/")}>
                {" "}
                Home
              </p>
              <span>\</span>
              <p className="Alphabet">Contact us</p>
            </div>
          </div>
          <div className="link-move__right" onClick={() => history.goBack()}>
            <img alt="img" src={left} />
            <p> Back to Previous Page</p>
          </div>
        </div>
      </div>

      <div className="page-contact-us__more-contact">
        <div className="container">
          <div className="contact-content">
            <p className="contact">Contact US</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p className="line"></p>
            </div>
            <div className="contact-details">
              <div className="contact-info">
                <div className="div-list">
                  <div className="contact-info__details">
                    <img src={add} style={{ height: "30px" }} />
                    <p className="details-title">Address</p>
                  </div>
                  <p className="details-text">
                    1 King Yin Ln, Tseung Kwan O, Hong Kong
                  </p>
                </div>
                <div className="div-list">
                  <div className="contact-info__details">
                    <img src={phone} style={{ height: "22px" }} />
                    <p className="details-title">Phone</p>
                  </div>
                  <p className="details-text">+852-2190-8501</p>
                </div>
                <div className="div-list">
                  <div className="contact-info__details">
                    <img src={email} style={{ height: "18px" }} />
                    <p className="details-title">Email</p>
                  </div>
                  <p className="details-text">info@eduhk.hk</p>
                </div>
              </div>
              <div className="contact-form">
                <form>
                  <input type="text" placeholder="Your Name" />
                  <input type="email" placeholder="Your Email" />
                  <input type="text" placeholder="Subject" />
                  <textarea name="message" placeholder="Message"></textarea>
                  <button className="info-submit"> Submit</button>
                </form>
              </div>
            </div>
            <div className="contact-map">{/* map */}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
