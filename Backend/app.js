const mongoose = require('mongoose');
const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');

const DB = 'mongodb+srv://srivastavaanushka3:LiberMajorProject@cluster0.xbteq4v.mongodb.net/Liber?retryWrites=true';


async function main(){
  
  const uri = "mongodb+srv://srivastavaanushka3:LiberMajorProject@cluster0.xbteq4v.mongodb.net/Liber?retryWrites=true&w=majority";


  const client = new MongoClient(uri);

  try {
      // Connect to the MongoDB cluster
      await client.connect();
// Make the appropriate DB calls
      await  listDatabases(client);

  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
}

main().catch(console.error);

async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

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
