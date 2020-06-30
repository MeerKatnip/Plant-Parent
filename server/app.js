const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 4000;
const login = require("./routes/loginroutes");
const bodyParser = require("body-parser");
const { Client } = require("pg");
const Plant = require("./models/plant");
const connectionString =
  "postgres://postgres:postgres@localhost:5432/plant-parent";
const models = require("./models");

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", async (req, res) => {
  let;
});

// app.get("/login", (req, res) => {
//   res.send("login");
// });
app.get("/login", login.getLogin);

//route to handle user registration
app.post("/register", login.register);
app.post("/login", login.login);
// app.use("/api", router);
// app.listen(4000);

app.get("/api/plants", async (req, res) => {
  let plants = await models.Plant.findAll();
  res.json(plants);
});

app.listen(PORT, function () {
  console.log("Server is running on PORT " + PORT);
});

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });
// const router = express.Router();
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
