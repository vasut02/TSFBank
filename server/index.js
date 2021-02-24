const express = require('express')
const app = express()
const http = require('http').Server(app);

const cors = require("cors");
app.use(cors());

const bodyParser = require('body-parser');
var jsonParser = bodyParser.json()

app.post('/send', jsonParser ,  (req, res) => {
    console.log(req.body);
    res.send('Req recieved')
})

//Start Up Server 
const PORT = process.env.PORT || 8000;
http.listen(PORT, () => {
    console.log('Backend Server listing at PORT:', PORT);
})