import React, { useState, useEffect } from "react";
// eslint-disable-next-line
// import logo from "./logo.svg";
// eslint-disable-next-line
// import { BaseLayout } from "./components/BaseLayout";
// import Header from "./components/Header/Header";
// import DisplayPlants from "./components/DisplayPlants";
// import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { BaseLayout, Menu } from "./components/BaseLayout";

function PlantDetails() {
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
        <img src={formatPlantURL(plant.photoURL)} alt="plant image" />
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

export default PlantDetails;
