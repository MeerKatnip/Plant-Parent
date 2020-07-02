import React, { useState, useEffect, Component } from "react";
// eslint-disable-next-line
import logo from "./logo.svg";
import "./App.css";
// import { BaseLayout } from "./components/BaseLayout";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { BaseLayout, Menu } from "./components/BaseLayout";
import { NavLink } from "react-router-dom";
import DisplayPlants from "./components/DisplayPlants";

export class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <h1>Plant Parent</h1>
        <DisplayPlants />
        {/* {this.props.children} */}
        <p>Copyright 2020</p>
      </div>
    );
  }
}

export class Menu extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/api/plants">Plants</NavLink>
          </li>
          <li>
            <NavLink to="/addplant">Add Plant</NavLink>
          </li>
        </ul>
      </div>
    );
  }
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
