const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 4000;
const login = require("./routes/loginroutes");
const bodyParser = require("body-parser");
const { Client } = require("pg");
const connectionString =
  "postgres://postgres:postgres@localhost:5432/plant-parent";

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
const router = express.Router();
const client = new Client({
  connectionString: connectionString,
});

client.connect();

app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

//test route
router.get("/", function (req, res) {
  res.json({ message: "Welcome to our upload module apis" });
});

//route to handle user registration
router.post("/register", login.register);
router.post("/login", login.login);
app.use("/api", router);
app.listen(4000);

app.listen(PORT, function () {
  console.log("Server is running on PORT " + PORT);
});
