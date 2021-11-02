const express = require("express");
const app = express();
const cors = require("cors");

const { randomBytes } = require("crypto");

const commentsByPostId = {};

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;
  const comments = commentsByPostId[req.params.id] || [];
  comments.push({ id: commentId, content });
  commentsByPostId[req.params.id] = comments;
  console.log(commentsByPostId);
  res.sendStatus(201);
});

app.listen(5000, () => {
  console.log("comments server running");
});
