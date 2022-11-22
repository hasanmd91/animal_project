import React from "react";
import Card from "./Card";
const birds = ({ birds }) => {
  const birdsList = birds.map((bird) => {
    return <Card name={bird.name} likes={bird.likes} key={bird.name} />;
  });

  return (
    <div className="container">
      <div>
        <h1> birds List</h1>
        <input />
      </div>
      <div className="animalList_container "> {birdsList} </div>
    </div>
  );
};

export default birds;
