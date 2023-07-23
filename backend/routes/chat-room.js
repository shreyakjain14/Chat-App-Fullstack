// create
// view
// join
// exchange messages
// online, offline status of other users

const express = require("express");
const pool = require("../utils/database");
const { createRoomController } = require("../controlllers/chat-room");

const router = express.Router();

router.post("/create-room", createRoomController);

module.exports = router;
