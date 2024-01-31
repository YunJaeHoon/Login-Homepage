const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const helmet = require('helmet');

const indexRouter = require('./routes/index.js');
const logRouter = require('./routes/log.js');

const app = express();
const PORT = 3000;

app.use(express.static('src'));     // 정적 파일 사용
app.use(compression());             // 데이터 압축
app.use(helmet());                  // 보안
app.use(bodyParser.urlencoded({ extended: false }));  // POST 방식 전송의 데이터를 받기 위한 처리

// --------------------------------------------------------------------------------------------

app.use('/', indexRouter);

app.use('/log', logRouter);

// --------------------------------------------------------------------------------------------

// 예외 처리 (등록되지 않은 url 사용 시)
app.use((req, res, next) => {
  res.status(404).send('404 Not Found');
});

// 예외 처리 (에러 발생 시)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('500 Error');
});

app.listen(PORT, () => {
  console.log('working...');
});