require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const appRouter = require('./routes/index');

const app = express();
const bodyParser  = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//Routers

app.use('/api', appRouter);

//404 router
app.use((req,res,next) => {
    return res
            .status(404)
            .json({
                success: false,
                message: "Page not found"
            })
})


mongoose
  .connect(process.env.MONGO_CONNECTION_URL)
  .then(result => {
    console.log("Connected to database");
    console.log(`Listening on ${process.env.PORT}`);
    app.listen(process.env.PORT  ||  8000);
  })
  .catch(err => {
    console.log("Error connecting to database");
  });