var express = require('express');
var router = express.Router();
const axios = require("axios");
/* GET Post listing. */
router.get('/', function(req, res, next) {
    axios.get("https://jsonplaceholder.typicode.com/posts")
         .then(response => res.json(response.data))
         .catch(err => res.send(err));
});

module.exports = router;
