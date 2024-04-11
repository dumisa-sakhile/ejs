const aboutController = (req, res) => {
  data = {
    title: "About",
    description: "This is the about page",
  };

  res.render("about", data);
};

const indexRouter = (req, res) => {
  data = {
    title: "Home",
    description: "This is the home page",
  };

  res.render("index", data);
};


module.exports = {
  aboutController,
  indexRouter,
};