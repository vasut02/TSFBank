const express = require('express')
const app = express()
const http = require('http').Server(app);

const cors = require("cors");
app.use(cors());

const bodyParser = require('body-parser');
var jsonParser = bodyParser.json()

const BankController = require('./routes/authRoutes.js')
app.use(BankController);

//DataBase

// JMlD7TTzPCAml3zD

const mongoose = require('mongoose');
// const mongoDB = "mongodb://127.0.0.1:27017/TSFBank"
const mongoDB = "mongodb+srv://vasutiwari:JMlD7TTzPCAml3zD@cluster0.vbxue.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

//connect local database 
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database Connected...'))
    .catch(err => console.log('Error connecting database', err));

//To remove depreceate warning
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);


//Start Up Server 
const PORT = process.env.PORT || 8000;
http.listen(PORT, () => {
    console.log('Backend Server listing at PORT:', PORT);
})