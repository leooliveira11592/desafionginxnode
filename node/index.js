const express = require('express');
const app = express();
const port = 3000;
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql');


app.get('/', (req, res) => {

    const connection = mysql.createConnection(config);

    // retorna a pessoa inserida
    const query = `SELECT * FROM PEOPLE ORDER BY NAME`;

    connection.query(query, function (err, result, fields) {
        if (err) {
            res.send('<h1>ERRO</h1><br><br>' + err);
            console.log(`Select -> ${err}\nCode:${err.code}\nSQL:${err.sql}`);
        }
        console.log(result);
        var html = '<h1>Full Cycle Rocks!</h1><br><br>';
        
        for (let pessoa of result) {
          html += `<h3>${pessoa.ID} - ${pessoa.NAME}</h3><br>`;
        }

        res.send(html);
      });

    connection.end()
})

app.listen(port, () => {
  console.log('==========================================')
  console.log('Rodando internamente na porta ' + port)
  console.log('Chame no navegador: http://localhost:8080')
})