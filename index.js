var express=require("express");
var app=express();
app.use(express.static('src'));

app.get("/test",function(req,res){
  res.send("hello world");
})
app.listen(3000);
