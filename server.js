
const express = require('express');
const path = require('path');
const app = express();

//Getting our posts routes

const posts= require('./server/routes/posts');

app.use(express.static(path.join(__dirname,'dist')));

//using middleware

app.use('/posts',posts);

//catch all other routes request and return it to the index

 app.get('*',(req, res)=>{
    res.sendFile(path.join(__dirname,'dist/index.html'))
  
 });

 const port = process.env.PORT || 4600;

app.listen(port,(req, res)=>{
   console.log('RUNNING on port '+port);
});
