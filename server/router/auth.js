const express = require('express');
const User = require('../model/userSchema');
const router = express.Router();

router.get('/adopt', (req, res) => {
    res.send('Welcome to about Animal Welfare Trust router');
  });

  router.post('/submitform',(req,res)=>{
    const {name,email,subject,message}=req.body;
    const user =User({name,email,subject,message});
    user.save().then(()=>{
      res.status(201).json({message:"mesaage sent successfully"});
    }).catch((err)=>res.status(500).json({error:"failed to send message"}));
  });

module.exports =router;