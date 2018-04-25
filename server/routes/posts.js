const express = require('express');
const router = express.Router();

const axios = require('axios');

const postAPI = 'https://jsonplaceholder.typicode.com/';


//GET POST

router.get('/', (req, res)=>{
//console.log('iii');


//   axios.get('${postAPI}/posts').then(posts=>{

//    console.log(posts.data);

// });
//for checking only
axios.get(postAPI+'posts')
  .then(function (posts) {
   // console.log(posts.data);
     res.status(200).json(posts.data);  

})
   .catch(error=>{
       res.status(500).send(error);
   })

});


module.exports =router;