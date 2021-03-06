const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 4000;
// const login = require("./routes/loginroutes");
const bodyParser = require("body-parser");
const { Client } = require("pg");
const Plant = require("./models/plant");
// const User = require("./models/user");
const connectionString =
  "postgres://postgres:postgres@localhost:5432/plant-parent";
const models = require("./models");
const createError = require("http-errors");
const path = require("path");
const cookieParser = require("cookie-parser");
// const logger = require("./routes");

// const indexRouter = require("./routes");

const client = new Client({
  connectionString: connectionString,
});

client.connect();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
// app.use(logger("dev"));
app.use(cookieParser());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
const router = express.Router();

// app.get("/", async (req, res) => {
//   res.json({ message: "connection successful" });
// });

// app.get("/users", async (req, res) => {
//   let users = await models.User.findAll();
//   res.json(users);
// });

// app.get("/", function (req, res, next) {
//   client.query("SELECT * FROM User where id = $1", [1], function (err, result) {
//     if (err) {
//       console.log(err);
//       res.status(400).send(err);
//     }
//     res.status(200).send(result.rows);
//   });
// });

// app.get("/login", (req, res) => {
//   res.send("login");
// });
// app.get("/login", login.getLogin);

// app.get("/register", login.getRegister);

// //route to handle user registration
// app.post("/register", login.register);
// app.post("/login", login.login);

app.get("/", (req, res) => {
  res.send("homepage");
});

app.get("/api/plants", async (req, res) => {
  let plants = await models.Plant.findAll();
  res.json(plants);
});

app.listen(PORT, function () {
  console.log("Server is running on PORT " + PORT);
});

// const client = new Client({
//   connectionString: connectionString,
// });

// client.connect();

// app.get("/express_backend", (req, res) => {
//   res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
// });

// //test route
// router.get("/", function (req, res) {
//   res.json({ message: "Welcome to our upload module apis" });
// });
