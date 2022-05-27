import React from "react";
import { IconButton } from "@mui/material";
import { Person, Forum } from "@mui/icons-material";

import "./index.css";

const Header = () => {
  return (
    <header className="header">
      <IconButton>
        <Person className="header__icon" fontSize="large" />
      </IconButton>

      <img
        className="header__logo"
        src="https://tinder.com/favicon-32x32.png"
        alt="Tinder"
      />

      <IconButton>
        <Forum className="header__icon" fontSize="large" />
      </IconButton>
    </header>
  );
};

export default Header;
