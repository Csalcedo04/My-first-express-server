const express= require("express");
const app = express();

app.get("/", function(req,res){
    res.send(`index.html`);
})

app.get("/about", function(req,res){
    res.send(`hey baby girl, ru from the getto?`);
})
app.get("/sex", function(req,res){
    res.send(`p`);
})


app.listen(3000);
