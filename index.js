const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

var contactList=[
    {
        name:"Aditya",
        phone:9087654321
    },
    {
        name:"Aneja",
        phone:1234567890
    },
    {
        name:"Abhishek",
        phone:9087654321
    }
]

app.get('/',function(req,res){
    // console.log(__dirname);
    // res.send('<h1>It is runing as of now</h1>')
    return res.render('home',
    {
        title:'Contact List',
        cotact_list:contactList
});
});

app.get('/practice',function(req,res){
    return res.render('practice',{title:'Practice'});
});

app.post('/create-contact',function(req,res){
return res.redirect('/practice');
});

app.listen(port, function(err){
    if(err){
        console.log("Error in running the server",err)
    }
    console.log("The sever is running on port:",port)
})