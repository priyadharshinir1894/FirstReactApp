const express = require("express");
const app = express();

app.get("/api/", (req, res) => {
  res.json({
    Name: "Priyadharshini"
  });
});

app.listen(3100, () => {
  console.log("Server listening at port 3100...");
});
