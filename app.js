const http = require('http');
const routes = require('./routes');

console.log(routes.text)
// node.js 에서는 함수 안에 함수를 넣으면 안에 넣은 함수를 나중에 실행함 = 비동기식
const server = http.createServer(routes.handler);
server.listen(3000);

// 코드는 작성 순서대로 실행되는게 아님 !
