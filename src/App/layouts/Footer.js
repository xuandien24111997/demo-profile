import React from 'react';
import history from "ultils/history";

function Footer() {

  return (
    <div className="footer">
       <div className="footer__menu ">
        <ul className="menu-ul row">
          <li className="menu-ul__list-li "
           onClick={() => {
            history.push("about-us");
          }}
          >About us</li>
          <li className="menu-ul__list-li "
           onClick={() => {
            history.push("contributes");
          }}
          >Contribute to the Project</li>
          <li className="menu-ul__list-li "
           onClick={() => {
            history.push("external-resources");
          }}>External Resources</li>
          <li className="menu-ul__list-li "
           onClick={() => {
            history.push("contact-us");
          }}>Contact us</li>
          <li className="menu-ul__list-li "
            onClick={() => {
              history.push("acknowledgement");
            }}>Acknowledgement</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
