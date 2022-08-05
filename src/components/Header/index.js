import React from "react";
import { AppLogo, Username, NavElmt, DivElmt } from "./styledComponents";
const Header = () => {
  return (
    <NavElmt>
      <DivElmt>
        <AppLogo
          src="https://media-content.ccbp.in/website/ccbp_website_logos/nxtwave_header_logo.png"
          alt="app logo"
        />
        <Username />
      </DivElmt>
    </NavElmt>
  );
};

export default Header;
