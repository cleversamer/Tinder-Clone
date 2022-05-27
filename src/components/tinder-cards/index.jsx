import React, { useState } from "react";
import TinderCard from "react-tinder-card";

import "./index.css";

const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      id: 1,
      name: "Steve Jobs",
      url: "https://avatars.githubusercontent.com/u/73291969?s=120&v=4",
    },
    {
      id: 2,
      name: "Mark Zuckerburg",
      url: "https://avatars.githubusercontent.com/u/73291969?s=120&v=4",
    },
  ]);

  return (
    <section className="tinder-cards">
      {people.map((person) => (
        <TinderCard
          key={person.id}
          className="swipe"
          prventSwipe={["up", "down"]}
        >
          <div
            className="card"
            style={{ backgroundImage: `url(${person.url})` }}
          >
            <h3 className="card__heading">{person.name}</h3>
          </div>
        </TinderCard>
      ))}
    </section>
  );
};

export default TinderCards;
