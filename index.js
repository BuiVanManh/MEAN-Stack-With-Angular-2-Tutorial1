const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config=require('./config/database');
mongoose.Promise=global.Promise;
mongoose.connect(config.uri,(err)=>{
  if(err)
    {
      console.log('coud not  conect to database:',err);
    }
    else{
      console.log('conect to database:', config.db);
    }
});
app.get('*',(req,res)=> {
  res.send('<h1>Bui Van Manh</h1>');
})
app.listen(8080,()=>{
    console.log('listening on port 8080');
});


