import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { Forum } from "@mui/icons-material";

import "./index.css";

const Header = ({ Icon, path }) => {
  return (
    <header className="header">
      <Link to={path}>
        <IconButton>
          <Icon className="header__icon" fontSize="medium" />
        </IconButton>
      </Link>

      <Link to="/">
        <IconButton>
          <img className="header__logo" src="/img/logo.png" alt="Tinder" />
        </IconButton>
      </Link>

      <Link to="/chat">
        <IconButton>
          <Forum className="header__icon" fontSize="medium" />
        </IconButton>
      </Link>
    </header>
  );
};

export default Header;
