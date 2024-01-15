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
  const userId = req.query.userId;
  console.log("userId Post Start-----");
  console.log("userId : ", userId)
  res.send(`your id is ${userId}`)
})

router.post('/kakao/apitest/user/kakao_account/profile', function(req, res) {
  const userName = req.query.userName;
  console.log("userName Post Start-----");
  console.log("userName : ", userName);
  res.status(200).json({
    "message" : "Hello Kakao UserName"
  })
})

router.post('/kakao/apitest/user', function(req, res) {
  /* user 객체 받아오기 */
})

module.exports = router;
