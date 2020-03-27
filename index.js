require('dotenv');
const express = require('express');
const app = express();
const { PORT = 3000 } = process.env;   


app.get('/', (req,res) =>{
    const { message = 'This is a custom message!' } = req.query;
    return res.json({ message });
});


app.listen(PORT, ()=>{
  console.log('Listening on port: ', PORT)
});