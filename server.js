const express = require("express");

const app = express();

const port = process.env.PORT || 5000 ; 
app.use(express.urlencoded({extended:true}))
const weatherroute = require("./routes/weather")

app.use(express.json())
app.use(express.static('public'))
app.set("view engine" , "ejs")
//middleware route
app.use("/" , weatherroute);



app.listen(port , ()=>{
    console.log("Server has been started");
})