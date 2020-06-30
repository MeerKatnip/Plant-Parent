import React, { useState, useEffect } from "react";
// eslint-disable-next-line
import logo from "./logo.svg";
import "./App.css";
// import Header from "./components/Header/Header";
// import DisplayPlants from "./components/DisplayPlants";
// import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { BaseLayout, Menu } from "./components/BaseLayout";

function App() {
  return <h1> homepage </h1>;
}
export default App;

// componentDidMount() {
//   fetch("http://localhost:4000/express_backend")
//     .then((response) => response.json())
//     .then((result) => {
//       this.setState({
//         plants: result,
//       });
//     });
//   // this.callBackendAPI()
//   //   .then((res) => this.setState({ data: res.express }))
//   //   .catch((err) => console.log(err));
// }

//ASYNC
// callBackendAPI = async () => {
//   const response = await fetch("http://localhost:4000/express_backend", {
//     mode: "cors",
//   });
//   const body = await response.json();

//   if (response.status !== 200) {
//     throw Error(body.message);
//   }
//   return body;
// };

// <div className="App">
//   <header>
//     <Header />
//     <BaseLayout />
//     <h1 className="App-title">Plant Parent</h1>
//   </header>
//   <p className="App-intro">{this.state.data}</p>
//   <DisplayPlants plants={this.state.plants} />
//   <RegistrationForm />
// </div>
