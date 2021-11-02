const express = require("express");
const app = express();
const cors = require("cors");

const { randomBytes } = require("crypto");

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
  res.status(200).send(posts);
});

app.post("/posts", (req, res) => {
  const { title } = req.body;
  const id = randomBytes(4).toString("hex");
  posts[id] = { id, title };
  console.log(posts);
  res.sendStatus(201);
});

app.listen(4000, () => console.log("listening on 4000"));
