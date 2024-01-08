const express = require('express');
var bodyParser = require('body-parser')
const {PORT} = require('./config/ServerConfig');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/home/:id", (req,res) => {
    const data  =req.params.id;
    res.status(200).json({
        response : data
    })
})


const setupAndStartServer = async ()=>{
    app.listen(PORT , ()=>{
        console.log(`Server started at PORT ${PORT}`);
    })
}

setupAndStartServer();