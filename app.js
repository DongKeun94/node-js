// const http = require('http');

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const adminData = require('./routes/admin');
const clientRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')))


app.use('/admin',adminData.routes);
app.use(clientRoutes);

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname,'views','error.html'));
});

// node.js 에서는 함수 안에 함수를 넣으면 안에 넣은 함수를 나중에 실행함 = 비동기식
// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000); // 위 2줄 코드를 한줄로 줄여줌 -> 이런식으로 코딩하면 http를 import 해줄 필요도 없음
// 코드는 작성 순서대로 실행되는게 아님 !