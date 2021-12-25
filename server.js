const express = require('express'); //Line 1
const cors = require('cors')
const app = express(); //Line 2
const mongoose = require("mongoose");
const port = 5000; 

mongoose.connect("mongodb://localhost/todo", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

const User = mongoose.model("User", userSchema);

app.use(cors());
app.use(express.json());

app.post('/register', async(req, res) => { 
  const {username, password} = req.body;

  const user = await User.findOne({ username }).exec();
  if(user){
    res.status(500);
    res.json({
      message: "User already exists",
    });
    return;
  }
  else{
    await User.create({username, password})
    res.json({
      message: "success"
    });
  }
}); 

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
});



