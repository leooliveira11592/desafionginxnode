const express = require('express');
const app = express();
const port = 3000;
const config = {
    host: 'banco',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql');


app.get('/', (req, res) => {

    console.log("entoru - 1");
    console.log("entoru - 2");

    // insere a pessoa
    const connection = mysql.createConnection(config);
    const sql = `INSERT INTO PEOPLE(NAME) VALUES('LEONARDO J OLIVEIRA');`
    connection.query(sql);
    connection.query(sql, function (err, rows, fields) {
        if (err) {
          console.log(`Insert -> ${err}\nCode:${err.code}\nSQL:${err.sql}\n\n\n`);
        }
      });
    // connection.end()

    console.log("entoru - 3");

    // retorna a pessoa inserida
    // const connection2 = mysql.createConnection(config)
    console.log("entoru - 4");
    const query = `SELECT * FROM PEOPLE`;

    console.log("entoru - 5");

    connection.query(query, function (err, result, fields) {
        if (err) {
            res.send('<h1>ERRO</h1><br><br>' + err);
            console.log(`Select -> ${err}\nCode:${err.code}\nSQL:${err.sql}`);
        }
        console.log(result);
        res.send('<h1>Full Cycle Rocks!</h1><br><br>' + result);
      });

    console.log("entoru - 6");
    connection.end()
})

app.listen(port, () => {
    console.log('rodando na porta ' + port)
    console.log('Chame no navegador: http://localhost:8080')
})