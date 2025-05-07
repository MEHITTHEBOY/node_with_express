// const express = require("express");
// const path = require("path");
// const { json } = require("stream/consumers");
// const PORT = 3000;
// const app = express();

// app.use(express.json());

// app.use(express.static("public"));

// app.post("/submit", (req, res) => {
//   const { username } = req.body;
//   res.send(`Hello, ${username}! Your form has been submitted.`);
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.use(express.static("public"));

app.post("/submit", (req, res) => {
  const { username } = req.body;
  res.send(`Hello, ${username}! Your Form has been submitted`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
