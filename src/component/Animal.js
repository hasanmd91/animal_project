import React from "react";
import Card from "./Card";
const animal = ({ animals, removeCard }) => {
  const animalList = animals.map((animal) => {
    return (
      <Card
        name={animal.name}
        likes={animal.likes}
        key={animal.name}
        removeCard={removeCard}
      />
    );
  });

  return (
    <div className="container">
      <div>
        <h1> Animal List</h1>
        <input />
      </div>
      <div className="animalList_container "> {animalList} </div>
    </div>
  );
};

export default animal;
