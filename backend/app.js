const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const userRoutes = require("./routes/user");
const chatRoutes = require("./routes/chat-room");
const contactsRoutes = require("./routes/contacts");
const pool = require("./utils/database");

const app = express();
const port = 8000;

app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(userRoutes);
app.use(contactsRoutes);
// app.use(chatRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});

const server = app.listen(port);

const { Server } = require("socket.io", {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);
  socket.on("send_message", (message) => {
    console.log(message);
  });
});
