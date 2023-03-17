require('dotenv').config();
const connection = require('./db-config');
const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./routes/index.routes');

const port = process.env.PORT || 8000;

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
  } else {
    console.log('connected as id ' + connection.threadId);
  }
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())
app.use('/api', router);

app.get("/", (req, res) => {
    res.send("Welcome");
});
const getProduct = (req,res) => {
  res.status(200).json(products)
}
app.get("/product", getProduct
)

app.listen(port, (err) => {
  if (err) {
    console.error('Something bad happened');
  } else {
    console.log(`Server is listening on ${port}`);
  }
});

module.exports = app;