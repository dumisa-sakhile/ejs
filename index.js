const express = require("express");
const expressLayouts = require("express-ejs-layouts");

require("dotenv").config();
const port = 5000 || process.env.PORT;
const app = express();

app.use(express.static("public"));
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("layout", "./layouts/defaultHeader");

app.use('/', require('./routes/landingRoute'));

app.all("*", (req, res) => {
  data = {
    title: "Not Found",
    description: "This page does not exist",
  };

  res.render("404", data);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
