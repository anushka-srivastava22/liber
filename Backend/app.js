const express = require('express');
const app = express();

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
