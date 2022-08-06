import React from "react";
import { Link } from "react-router-dom";
import { AppLogo, Username, NavElmt, DivElmt } from "./styledComponents";
const Header = () => {
  return (
    <NavElmt>
      <DivElmt>
        <Link to="/">
          <AppLogo
            src="https://media-content.ccbp.in/website/ccbp_website_logos/nxtwave_header_logo.png"
            alt="app logo"
          />
        </Link>
        <Username />
      </DivElmt>
    </NavElmt>
  );
};

export default Header;
