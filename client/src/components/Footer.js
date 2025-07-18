import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <p class="footer-heart">
        Made with{" "}
        <g-emoji
          class="g-emoji"
          alias="heart"
          fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png"
        >
          <img
            class="emoji"
            alt="heart"
            height="20"
            width="20"
            src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png"
          />
        </g-emoji>{" "}
        by{" "}
          Rohit and Sahil
      </p>
    </div>
  );
};

export default Footer;
