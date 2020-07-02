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
        <dl>
          <dt>{plant.name}</dt>
          <img src={formatPlantURL(plant.photoURL)} alt="plant" />
          <dd>
            <b>Light Needs: </b>
            {plant.light}
          </dd>
          <dd>
            <b>Water/Soil Needs: </b>
            {plant.water}
          </dd>
          <dd>
            <b>Lifespan: </b>
            {plant.lifespan}
          </dd>
        </dl>
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
