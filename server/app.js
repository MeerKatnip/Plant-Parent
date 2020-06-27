const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.listen(PORT, function () {
  console.log("Server is running on PORT " + PORT);
});
app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});
