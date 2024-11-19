const express = require("express")
const path = require("path");
const app = express()
const bodyParser = require("body-parser");


const usersRoute = require("./routes/http.routes/users");


// this middleware is to access data in the body
app.use(bodyParser.json());
app.use(express.json());


// setting the view engine for the frotnend
app.set('view engine' , "ejs");
app.set("views",path.join(__dirname , 'views'));

// making the public folder public to be access by anybody
app.use(express.static(path.join(__dirname , "public")));

app.get("/" , (req ,res) =>{
    res.render("index");
})

// Routing the req when it hit the end point /users
app.use("/users", usersRoute);





app.listen(3000 , () =>{
    console.log("Server is running on port 3000")
});