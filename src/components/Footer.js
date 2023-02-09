import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./Footer.scss";

function Footer() {
  return (
    <div className="Footer">
      <p>
        Check my code on
        <a
          href="https://github.com/vbldra/shopping-list-front"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </p>
    </div>
  );
}

export default Footer;
