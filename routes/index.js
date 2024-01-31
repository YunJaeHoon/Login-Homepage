const express = require('express');
const connection = require('../database.js');

const app = express();
const router = express.Router();

// pug 사용
app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

router.get('/', (req, res) => {
  const errorCode = req.query.errorCode;

  if(errorCode == 1)
    res.render('mainPage.pug', { comment: '존재하지 않는 ID입니다.' });
  else if(errorCode == 2)
    res.render('mainPage.pug', { comment: '틀린 비밀번호입니다.' });
  else
    res.render('mainPage.pug', { comment: '' });
});

router.get('/signUp', (req, res) => {
  res.render('signupPage.pug', { isDisplay: false, isDisabled: false, accountId:'', accountPassword:'', accountNickname:'', accountIntroduce:'', count: 0, button_text: '회원가입' });
});

router.post('/log', (req, res) => {
  connection.query(`SELECT * FROM accounts WHERE id = '${req.body.id}'`, (err, rows, fields) => {
    if(rows.length === 0)
      res.redirect('/?errorCode=1');
    else if(rows[0].password !== req.body.password)
      res.redirect('/?errorCode=2');
    else
      res.render('logPage.pug', { id:rows[0].id, nickname:rows[0].nickname, introduce:rows[0].introduce });
  });
});

router.post('/signUp', (req, res) => {
  connection.query(`SELECT * FROM accounts WHERE id = '${req.body.id}'`, (err, rows, fields) => {
    if(rows.length >= 1)
      res.render('signUpPage.pug', { isDisplay: true, isDisabled: false, accountId:'', accountPassword:'', accountNickname:'', accountIntroduce:'', count: 0, button_text: '회원가입' });
    else
    {
      connection.query(`INSERT INTO accounts VALUES ('${req.body.id}', '${req.body.password}', '${req.body.nickname}', '${req.body.introduce}')`);
      res.redirect('/');
    }
  });
});

module.exports = router;