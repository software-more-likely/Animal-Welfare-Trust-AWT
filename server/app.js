const mongoose = require('mongoose');
const express = require('express');
const app = express();

const DB ='mongodb+srv://user2000:test123@cluster0.1rwtdix.mongodb.net/awt?retryWrites=true&w=majority';
mongoose.connect(DB,{}).then(() =>{
    console.log('connection successfull');
}).catch((err) => console.log('no connection'));
app.use(express.json());
//const User = require('./model/userSchema');
//link router fiole
app.use(require('./router/auth'))

app.get('/', (req, res) => {
    res.send('Welcome to the Animal Welfare Trust');
  });

  app.get('/about us', (req, res) => {
    res.send('Welcome to about Animal Welfare Trust');
  });


  app.get('/adopt', (req, res) => {
    res.send('Welcome to about Animal Welfare Trust');
  });


  


const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});