const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors  = require('cors');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

// IMPORT ROUTES 
const AuthRoute = require('./Routes/Auth');


// USE MIDDLEWARE 
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors())

app.use('/', AuthRoute)


mongoose.connect(process.env.MONGO_DB, () => console.log('Server is connected to database'));
app.listen(5000, () => console.log("Server is upto 5000!"));