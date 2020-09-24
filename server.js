const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
// const db = require("./models/workout.js");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);


require("./routes/html-routes.js")(app);
require("./routes/api-routes")(app);

// Listen on port 3000
app.listen(3000, () => {
    console.log("App running on port 3000!");
});
