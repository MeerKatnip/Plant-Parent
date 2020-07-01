import React, { useState, useEffect } from "react";

function DisplayPlants() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/plants")
      .then((response) => response.json())
      .then((json) => {
        setPlants(json);
      });
  }, []);

  const formatPlantURL = (photo) => {
    return `http://localhost:4000/${photo}`;
  };

  const plantItems = plants.map((plant) => {
    return (
      <li>
        <label>Plant Name: {plant.name}</label>
        <img src={formatPlantURL(plant.photoURL)} alt="plant" />
        <label>Light: {plant.light}</label>
        <label>Water: {plant.water}</label>
        <label>Lifespan: {plant.lifespan}</label>
      </li>
    );
  });

  return (
    <div>
      <ul>{plantItems}</ul>
    </div>
  );
}

export default DisplayPlants;
