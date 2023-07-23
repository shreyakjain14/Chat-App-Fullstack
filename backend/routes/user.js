// Register
// Login

const express = require("express");
const pool = require("../utils/database");
const {
  registerUserController,
  loginController,
} = require("../controlllers/user");

const router = express.Router();

router.post("/register", registerUserController);

router.post("/login", loginController);

module.exports = router;
