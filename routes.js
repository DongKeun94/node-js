const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></header>');
        // input 태그에 있는 name = "message" -> message를 키 , 우리가 입력하는 값이 value로 한쌍을 이룸...
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url==='/message' && method === 'POST'){
        const body = [];
        req.on('data',(chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            fs.writeFile('message.txt',message,(err) => {
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();
            });  // 이 줄을 코드는 밑에 response, 즉 응답이 일어난 후에 실행이 됨
        });
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></header>');
    res.write('<body><h1>Hello from my Node.js Server ! </h1></body>');
    res.write('</html>');
    res.end();
}

module.exports = {
    handler:requestHandler,
    text: "hard coding"
};
