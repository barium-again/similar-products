const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");
const myEnv = dotenv.config();
dotenvExpand(myEnv);

const { app, startApp } = require("./app.js");

startApp().then(() =>
  app.listen(process.env.PORT, () => {
    console.log("Listening on port: ", process.env.PORT);
  })
);
