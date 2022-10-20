const express = require('express');
const mysql = require('mysql2');
const app = express();

require('dotenv').config({ path: 'MySQL/.env' }); // yarn add dotenv

app.get('/', function (req, res) {
  const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  });

  let body = '<h1>sigle row</h1>';
  connection.query(
    'SELECT * FROM topic WHERE id = ?', [1],
    (err, results, fields) => {
      console.log({ err, results, fields });
      let [row] = results;
      body += `<h2>${row.title}</h2>`;
      body += row.description;

      body += '<h1>multi row</h1>';
      connection.query(
        'SELECT * FROM topic',
        (err, results, fields) => {
          console.log({ err, results, fields });
          // for(var i = 0; i < results.length; i++){
          //   let row = results[i];
          for (let row of results) {
            let { title, description } = row;
            body += `<h2>${title}</h2>`;
            body += row.description;
          }
          res.send(body);
        }
      );
    }
  );
});

app.listen(3000, function () {
  console.log('Listening: http://localhost:3000');
});
