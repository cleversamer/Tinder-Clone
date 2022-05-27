import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { Person, Forum } from "@mui/icons-material";

import "./index.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <IconButton>
          <Person className="header__icon" fontSize="large" />
        </IconButton>
      </Link>

      <Link to="/">
        <IconButton>
          <img className="header__logo" src="/img/logo.png" alt="Tinder" />
        </IconButton>
      </Link>

      <Link to="/chat">
        <IconButton>
          <Forum className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
    </header>
  );
};

export default Header;
