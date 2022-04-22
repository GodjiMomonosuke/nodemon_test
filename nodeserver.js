const express = require('express') //install express: Terminal >npm install express --save
const app = express()
const port = 8080

//Define Variables
var id = 65140322;
var status = "Single";
//add variables
var user_list = [
    { name: "Nester", address: "bkk", birth_year: 2003},
    { name: "Annie", address: "PKT", birth_year: 1999},
    { name: "Jasper", address: "CNX", birth_year: 2010},
];

//Add Content Fonts Variables
var contentfont1 = "Dog Community"
var contentfont2 = "By Thanavit"

//Set & Call EJS
app.set('view engine','ejs')

//Connect public folder
app.use(express.static('public'))

//Back-End NodeJS Display
app.get("/hello",(req,res) =>{
    res.send("Hello NodeJS Test!")
}) 

//New Font-End EJS Show HTML Display
app.get("/",(req,res) =>{
    res.render('index', {userid : id, status : status, obj_user_list : user_list})
})

//Connect index2.ejs
app.get("/index2",(req,res) =>{
    res.render('index2', {contentfont1 : contentfont1, contentfont2 : contentfont2})
})

//Open Server
app.listen(port,() => {
    console.log("Server is Listening on port: ", port)
})