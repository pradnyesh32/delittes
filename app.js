var express =require("express");
var app = express();

app.get("/",function(req,resp){
    resp.send("<h1>Welcome To Delittes<\h1><div bgcolor='red'><h3>Products and Services Provided</h3></div><input type='text'>");
});

app.listen(8081);
console.log("server running at port 8081");