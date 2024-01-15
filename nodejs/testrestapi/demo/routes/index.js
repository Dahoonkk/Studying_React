var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/get/nodjs-api', function(req, res) {
  res.status(200).json({
    "message" : "hello get api nodejs-api"
  });
});

router.post('/kakao/apitest/user', function(req, res) {
  const userId = req.userId;
  console.log("userId : ", userId)
  res.send(`your id is ${userId}`)
})

router.post('/kakao/apitest/user/kakao_account/profile', function(req, res) {
  const userName = req.userName;
  console.log("userName : ", userName);
  res.status(200).json({
    "message" : "Hello Kakao UserName"
  })
})

module.exports = router;
