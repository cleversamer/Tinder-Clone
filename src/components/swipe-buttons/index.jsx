import React from "react";
import { IconButton } from "@mui/material";
import {
  Replay,
  Close,
  StarRate,
  Favorite,
  FlashOn,
} from "@mui/icons-material";

import "./index.css";

const SwipeButtons = () => {
  return (
    <section className="swipe-buttons">
      <IconButton className="swipe-buttons__repeat">
        <Replay fontSize="large" />
      </IconButton>

      <IconButton className="swipe-buttons__left">
        <Close fontSize="large" />
      </IconButton>

      <IconButton className="swipe-buttons__star">
        <StarRate fontSize="large" />
      </IconButton>

      <IconButton className="swipe-buttons__right">
        <Favorite fontSize="large" />
      </IconButton>

      <IconButton className="swipe-buttons__lightning">
        <FlashOn fontSize="large" />
      </IconButton>
    </section>
  );
};

export default SwipeButtons;
