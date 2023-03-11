const express = require("express");
const app = express();
//the instance of express server is created when express() is called and now store this instance in app variable
//console.log(app);
app.get("/", (request, response) => {
  response.send("Hello world");
  //console.log(request);
});

app.get("/date", (request, response) => {
  const date = new Date();
  response.send(date);
});
app.listen(3000);

app.get("/page", (request, response) => {
  response.sendFile("./page.html", { root: __dirname });
});
