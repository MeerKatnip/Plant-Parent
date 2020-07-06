// import React, { Component } from "react";
// // import { UseState } from "react";
// import axios from "axios";
// import * as appConstants from "../../constants/appConstants";
// // import ServerInfo from "./server/app";

// class RegistrationForm extends Component {
//   constructor() {
//     super();

//     this.state = {
//       email: "",
//       password: "",
//       message: "",
//     };
//   }

//   //   [state, setState] = useState({
//   //     email: "",
//   //     password: "",
//   //   });

//   handleSubmitClick = (e) => {
//     this.setState({
//       message: this.state.email + " account created!",
//     });
//     // e.preventDefault();
//     // if (state.password === state.confirmPassword) {
//     //   sendDetailsToServer();
//     // } else {
//     //   props.showError("Passwords do not match");
//     // }
//   };

//   handleChange = (e) => {
//     // e.target.name;
//     // this.setState({ [e.target.name]: e.target.value }, () => {
//     //   console.log(this.state.value);
//     // });
//     const { id, value } = e.target;
//     this.setState((prevState) => ({
//       ...prevState,
//       [id]: value,
//     }));
//   };

//   sendDetailsToServer = () => {
//     if (this.state.email.length && this.state.password.length) {
//       this.props.showError(null);
//       const payload = {
//         email: this.state.email,
//         password: this.state.password,
//       };

//       axios
//         .post(appConstants.BASE_API_URL + "/register", payload)
//         .then(function (response) {
//           if (response.data.code === 200) {
//             this.setState((prevState) => ({
//               ...prevState,
//               successMessage:
//                 "Registration successful. Redirecting to home page...",
//             }));
//             // redirectToHome();
//             // props.history.push()
//             this.props.showError(null);
//           } else {
//             this.props.showError("Some error occured");
//           }
//         })
//         .catch(function (error) {
//           console.log(error);
//         });
//     } else {
//       this.props.showError("Please enter valid username and password");
//     }
//   };

//   render() {
//     return (
//       <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
//         <form>
//           <div className="form-group text-left">
//             <label htmlFor="exampleInputEmail1">Email address</label>
//             <input
//               name="email"
//               type="email"
//               className="form-control"
//               id="email"
//               aria-describedby="emailHelp"
//               placeholder="Enter email"
//               value={this.state.email}
//               onChange={this.handleChange}
//             />
//             <small id="emailHelp" className="form-text text-muted">
//               We will never share your email with anyone else.
//             </small>
//           </div>
//           <div className="form-group text-left">
//             <label htmlFor="exampleInputPassword1">Password</label>
//             <input
//               name="password"
//               type="password"
//               className="form-control"
//               id="password"
//               placeholder="Password"
//               value={this.state.password}
//               onChange={this.handleChange}
//             />
//           </div>
//           <div className="form-group text-left">
//             <label htmlFor="exampleInputPassword1">Confirm Password</label>
//             <input
//               type="password"
//               className="form-control"
//               id="confirmPassword"
//               placeholder="Confirm Password"
//               value={this.state.password}
//               onChange={this.handleChange}
//             />
//           </div>
//           <button
//             type="submit"
//             className="btn btn-primary"
//             onClick={this.handleSubmitClick}
//           >
//             Register
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// export default RegistrationForm;

//this needs to post and get from pgsql server
