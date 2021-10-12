const express = require('express'); //Line 1
const cors = require('cors')
const app = express(); //Line 2
const port = process.env.PORT || 4000; //Line 3


app.use(cors());

app.post('/register', (req, res) => { 
  res.send("Hello World"); 
}); 


// This displays message that the server running and listening to specified port
app.listen(port, () => 
console.log(`Example app listing at ${port}`
)); //Line 6