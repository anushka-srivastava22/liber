const mongoose = require('mongoose');
const express = require('express');
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const bcrypt = require("bcryptjs");
//const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://srivastavaanushka3:LiberMajorProject@cluster0.xbteq4v.mongodb.net/Liber?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
}).then(() =>{
  console.log("Connect to Database");
}).catch((e) => console.log(e));

require("./userDetails");

const User = mongoose.model("users");

app.post("/register", async (req, res) => {
  const { fname,email, password } = req.body;
  console.log(fname, email, password);
  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.json({ error: "User Exists" });
    }
    await User.create({
      fname,
      email,
      password: encryptedPassword,
      
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

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


/*async function main(){
  
  const uri = "mongodb+srv://srivastavaanushka3:LiberMajorProject@cluster0.xbteq4v.mongodb.net/Liber?retryWrites=true&w=majority";


 const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB cluster
    await client.connect();
// Make the appropriate DB calls
    await  listDatabases(client);
    console.log("")
    await listCollections(client)
    console.log("")
    await listData(client);


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

async function listCollections(client){
  collectionList = await client.db("Liber").listCollections().toArray();

  console.log("Collections in Liber:");
  collectionList.forEach(collection => console.log(` - ${collection.name}`));

  return collectionList
};
async function listData(client){
  dataList = await client.db("Liber").collection("users").find({}).toArray();

  console.log("DataList in Liber:");
  console.log(dataList)
};
*/