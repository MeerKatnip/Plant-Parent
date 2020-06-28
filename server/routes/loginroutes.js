const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 4000;
const login = require("./routes/loginroutes");
const bodyParser = require("body-parser");
const { Client } = require("pg");
const connectionString =
  "postgres://postgres:postgres@localhost:5432/plant-parent";

exports.register = async function (req, res) {
  const password = req.body.password;
  const encryptedPassword = await bcrypt.hash(password, saltRounds);

  let users = {
    email: req.body.email,
    password: encryptedPassword,
  };

  connection.query("INSERT INTO users SET ?", users, function (
    error,
    results,
    fields
  ) {
    if (error) {
      res.send({
        code: 400,
        failed: "error occured",
      });
    } else {
      res.send({ code: 200, success: "user registered succesfully" });
    }
  });
};

exports.login = async function (req, res) {
  let email = req.body.email;
  let password = req.body.password;
  connection.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async function (error, results, fields) {
      if (error) {
        res.send({
          code: 400,
          failed: "error ocurred",
        });
      } else {
        if (results.length > 0) {
          const comparison = await bcrypt.compare(
            password,
            results[0].password
          );
          if (comparison) {
            res.send({
              code: 200,
              success: "login successful",
            });
          } else {
            res.send({
              code: 204,
              success: "Email and password do not match",
            });
          }
        } else {
          res.send({
            code: 206,
            success: "Email does not exist",
          });
        }
      }
    }
  );
};
