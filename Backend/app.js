const mongoose = require('mongoose');
const express = require('express');
const app = express();

const DB = 'mongodb+srv://srivastavaanushka3:libermajorproject@cluster0.7nnisuo.mongodb.net/liber?retryWrites=true&w=majority';


mongoose.connect(DB, {
  userNewUrlParser:true,
  userCreateIndex: true,
  useUnifiedTopology: true,
  useFindandModify: false
}).then(() => {
  console.log(`connection successful`);
}).catch((err) => console.log(`no connection`));

const middleware = (req,res,next) => {
  console.log(`Hello middleware`);
  next();
}

app.get('/', (req,res) => {
  res.send(`Hello world from server`);
});


app.get('/techtrivia', (req,res) => {
  res.send(`Hello tech trivia world from server`);
});

app.get('/about', middleware, (req,res) => {
  console.log(`Hello my about`);
  res.send(`Hello about world from server`);
});


app.get('/contact', (req,res) => {
  res.send(`Hello contact world from server`);
});

app.listen(3000,() => {
  console.log(`server running at port 3000`);
})
