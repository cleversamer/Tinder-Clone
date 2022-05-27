import React from "react";
import Header from "../../components/header/index";
import { ArrowBackIos } from "@mui/icons-material";

import "./index.css";

const NotFound = () => {
  return (
    <div className="not-found-page">
      <Header Icon={ArrowBackIos} path="/" />

      <div className="not-found">
        <img
          className="not-found__img"
          src="img/not-found.png"
          alt="Not found"
        />
      </div>
    </div>
  );
};

export default NotFound;
