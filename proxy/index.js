require('newrelic');
const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
const proxy = require("http-proxy-middleware");
app.use("/*", express.static(path.resolve(__dirname, "../public")));

// proxy request to the gallery service hosted on ec2
app.use('/airbnb/listings/:id', proxy({ target: 'http://54.177.59.24:3008/', changeOrigin: true }))

app.listen(port, () => {
  console.log(`listening to port ${port}...`);
});
