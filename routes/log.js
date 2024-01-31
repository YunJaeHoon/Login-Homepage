const express = require('express');
const connection = require('../database.js');

const app = express();
const router = express.Router();

// pug 사용
app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

router.post('/edit', (req, res) => {
  connection.query(`SELECT * FROM accounts WHERE id = '${req.body.id}'`, (err, rows, fields) => {
    res.render('signupPage.pug', { isDisplay: false, isDisabled: 'disabled', accountId:req.body.id, accountPassword:rows[0].password, accountNickname:rows[0].nickname, accountIntroduce:rows[0].introduce, count: rows[0].introduce.length, button_text: '수정' });
  });
});

router.post('/delete', (req, res) => {
  connection.query(`DELETE FROM accounts WHERE id = '${req.body.id}'`);
  res.redirect('/');
});

module.exports = router;