const express = require('express');

express().get('/', (req, res) => {
  res.write('<h1>Hello Node!</h1>');
  res.end('<p>Hello Node!<p>');
})
  .listen(8080, () =>{  // 서버 연결
  console.log('http://localhost:8080 서버 대기중입니다.');
});

