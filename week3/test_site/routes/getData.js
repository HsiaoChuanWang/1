const express = require('express');
const app = express.Router();

app.get('/', function(req, res) {
  const keyList = Object.keys(req.query)
  if(keyList.length == 0 || req.query.number== ""){
    res.send("Lack of Parameter")
  }
  else{
    const number = Number(req.query.number);
    if(!Number.isInteger(number)){
      res.send("Wrong Parameter")
    }
    else{
      const result = ((1 + number) * number) / 2
      res.send(`${result}`)
    }
  }
});

module.exports = app;