import React from "react";
import TinderCards from "../../components/tinder-cards";
import SwipeButtons from "../../components/swipe-buttons";

import "./index.css";

const Home = () => {
  return (
    <div className="home">
      <TinderCards />
      <SwipeButtons />
    </div>
  );
};

export default Home;
