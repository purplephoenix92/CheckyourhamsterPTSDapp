const express = require('express');
const app = express();
app.get('/', (request, response) => {
  response.send('I love mental health awareness');
});
const port = 5000
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// MRD This should have been Hamster.db, I converted your csv to a db using the sqlite tool
let db = new sqlite3.Database('./Hamsters.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the database.');
});

//   create hamster table
db.run(`CREATE TABLE IF NOT EXISTS Hamsters(
   HamsterID INTEGER PRIMARY KEY AUTOINCREMENT,
   ReportedAnger INTEGER,
   ReportedDepression INTEGER,
   ReportedAnxiety INTEGER
);`);

app.get('/hamster/:id', (req, res) => {

    let id = req.params.id;
    db.all('SELECT * FROM Hamsters WHERE HamsterID = ?', [id], (err, rows) => {
        console.log(rows)
      res.send(rows[0]);
    });
});

app.post('/hamster', (req, res) => {
    let hamsterid = 0;
    console.log(req.body);
  // The first arguement is your SQL with parameters indicated by ?, the order of the parameters is the order
  //   they will be applied. The second arguement is the array of parameters. In this case only one
  // There are multiple values placeholders, as there are multiple values that will be inputted by the user
  db.run('INSERT INTO Hamsters(ReportedAnger,ReportedDepression,ReportedAnxiety) VALUES (?, ?, ?)', [req.body.anger, req.body.depression, req.body.anxiety], function (err) {
    if (err) {
      return console.log(err.message);
    }
    hamsterid = this.lastID;
    console.log(`A row has been inserted with HamsterID ${this.lastID}`);
    res.send({"HamsterID": hamsterid})
  });

});
// The mistake that kept messing me up at first was using app.post for UPDATE and DELETE. It should be
// POST for INSERT, PUT for UPDATE, GET for SELECT, and Delete to DELETE
app.put('/hamster/:id', (req, res) => {
  let id = req.params.id;

  let sql = `UPDATE Hamsters
              SET ReportedAnger = ?,
              ReportedDepression = ?,
              ReportedAnxiety = ?
              WHERE HamsterID = ?`;

  db.run(sql, [req.body.anger, req.body.depression, req.body.anxiety, id], function (err) {
    if (err) {
      res.sendStatus(400)
      return console.log(err.message);
    }
    res.sendStatus(200)
  });

});

app.delete('/hamster/:id', (req, res) => {
  let id = req.params.id;

  db.run('DELETE FROM Hamsters WHERE (HamsterID = ?)', [id], function (err) {
    if (err) {
      res.sendStatus(400)
      return console.log(err.message);
    }
    res.sendStatus(200)
  });

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
