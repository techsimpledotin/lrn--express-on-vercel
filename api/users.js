var express = require('express');
var router = express.Router();
const axios = require("axios");
/* GET users listing. */
router.get('/', function(req, res, next) {
  axios.get("https://jsonplaceholder.typicode.com/users")
       .then(response => res.json(response.data))
       .catch(err => res.send(err));
});

module.exports = router;
