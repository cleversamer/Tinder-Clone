import React, { useState, useEffect } from "react";
import { onSnapshot } from "firebase/firestore";
import { peopleRef } from "../../firebase";
import TinderCard from "react-tinder-card";

import "./index.css";

const TinderCards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    onSnapshot(peopleRef, (snapshot) => {
      setPeople(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

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
