require('newrelic');
const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
const proxy = require("http-proxy-middleware");

app.use("/", express.static(path.resolve(__dirname, "../public")));

// proxy request to localhost:3004 that serves the gallery microservice 
app.use('/airbnb/listings/:id', proxy({ target: 'http://localhost:3004', changeOrigin: true }))

app.listen(port, () => {
  console.log(`listening to port ${port}...`);
});
