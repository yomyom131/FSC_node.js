const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'});
  res.write('<h1>Hello Node!</h1>');
  res.end('<p>Hello Node!<p>');
})
  .listen(8080, () =>{  // 서버 연결
  console.log('http://localhost:8080 서버 대기중입니다.');
});

