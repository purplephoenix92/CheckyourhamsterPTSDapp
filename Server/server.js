const express = require('express')
const app = express()
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
//  SQl query to create test table if it doesn't exist
db.run('CREATE TABLE IF NOT EXISTS TEST_TABLE (id INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT);');
//   create hamster table
db.run(`CREATE TABLE IF NOT EXISTS Hamsters(
   HamsterID int,
   ReportedAnger int,
   ReportedDepression int,
   ReportedAnxiety int
);`);
app.get('/', (req, res) => {
  res.send('Table created!')
});
app.post('/insert', (req, res) => {
  const name = req.body.name;
  console.log(req.body);
  // The first arguement is your SQL with parameters indicated by ?, the order of the parameters is the order
  //   they will be applied. The second arguement is the array of parameters. In this case only one
  db.run('INSERT INTO Hamsters(HamsterID) VALUES (?)', [name], function (err) {
    if (err) {
      return console.log(err.message);
    }
    // get the last insert id
    console.log(name);
    console.log(`A row has been inserted with rowid ${this.lastID}`);
  });
  app.get('/', (req, res) => {
    res.send('READ!')
  });
  res.sendStatus(200)
});
// MRD you specified 3 arguements to insert but were only passing 1, I am just inserting garbage data here
db.run('INSERT INTO Hamsters(ReportedAnger,ReportedDepression,ReportedAnxiety) VALUES(?, ?, ?)', [1, 2, 3], function (err) {
  if (err) {
    return console.log(err.message);
  }
  console.log("A column has been inserted");
});
let data = ['23', '29'];
// MRD this was looking like it wanted to use the TEST_TABLE construct so made the column names match
let sql = `UPDATE Hamsters
            SET ReportedAnger = ?
            WHERE HamsterID = ?`;
db.run(sql, data, function (err) {
  if (err) {
    return console.error(err.message);
  }
  console.log(`Row(s) updated: ${this.changes}`);
});
app.post('/insert', (req, res) => {
  const name = req.body.name;
  console.log(req.body);
  // The first arguement is your SQL with parameters indicated by ?, the order of the parameters is the order
  //   they will be applied. The second arguement is the array of parameters. In this case only one
  // There are multiple values placeholders, as there are multiple values that will be inputted by the user
  db.run('INSERT INTO Hamsters(ReportedAnger,ReportedDepression,ReportedAnxiety) VALUES (?, ?, ?)', [req.body.anger, req.body.depression, req.body.anxiety], function (err) {
    if (err) {
      return console.log(err.message);
    }
    // get the last insert id
    console.log(name);
    console.log(`A row has been inserted with rowid ${this.lastID}`);
  });
  app.get('/', (req, res) => {
    res.send('Table updated!')
  });
  res.sendStatus(200)
});
// MRD Hamsters is the tableName and HamsterId is your column your wanting to compare here
db.run("DELETE FROM Hamsters WHERE HamsterID = 27");
app.post('/insert', (req, res) => {
  const name = req.body.name;
  console.log(req.body);
  // The first arguement is your SQL with parameters indicated by ?, the order of the parameters is the order
  //   they will be applied. The second arguement is the array of parameters. In this case only one
  // Values not needed, though this looks to be an insert call that is deleting
  db.run('DELETE ReportedAnger FROM Hamsters WHERE (HamsterID = 23)', [name], function (err) {
    if (err) {
      return console.log(err.message);
    }
    // get the last insert id
    console.log(name);
    console.log(`A row has been inserted with rowid ${this.lastID}`);
  });
  app.get('/', (req, res) => {
    res.send('Table deleted!')
  });
  res.sendStatus(200)
});
app.get('/select', (req, res) => {
  const results = [];
  const name = req.query.name;
  db.all('SELECT * FROM TEST_TABLE WHERE NAME = ?', [name], (err, rows) => {
    rows.forEach((row) => {
      // NOTE the row.<field> must match the casing of the database, ie row.name does not work
      results.push(row.NAME);
    });
    res.send(JSON.stringify(results));
  });
});
app.get('/selectall', (req, res) => {
  const results = [];
  const name = req.query.name;
  db.all('SELECT HamsterID FROM Hamsters', (err, rows) => {
    rows.forEach((row) => {
      results.push(row);
    });
    res.send(JSON.stringify(results));
  });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))