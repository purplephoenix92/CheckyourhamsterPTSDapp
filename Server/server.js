const express = require('express')
const app = express()
app.get('/',(request, response) =>{
    response.send('I love mental health awareness');
  });
  
  const port = 5000
  
  const sqlite3 = require('sqlite3').verbose();
  const bodyParser = require('body-parser');
  
  app.use(bodyParser.json());
  
//   Connect sqlite to test db 
  let db = new sqlite3.Database('./test.db', (err) => {
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
  
  app.post('/insert', (req, res) =>  {
     const name = req.body.name;
     console.log(req.body); 
     // The first arguement is your SQL with parameters indicated by ?, the order of the parameters is the order
     //   they will be applied. The second arguement is the array of parameters. In this case only one
     db.run('INSERT INTO Hamsters(HamsterID) VALUES (?)', [name], function(err){
      if (err) {
          return console.log(err.message);
        }
        // get the last insert id
        console.log (name);
        console.log(`A row has been inserted with rowid ${this.lastID}`);
     });
     app.get('/', (req, res) => {
      res.send('READ!')
   });
     res.sendStatus(200)
  });
    db.run('INSERT INTO Hamsters(ReportedAnger,ReportedDepression,ReportedAnxiety) VALUES(?)', function(err)
    { if (err) {
      return console.log(err.message);
    }
    console.log ("A column has been inserted");
    });
    let data = ['23', '29'];
    let sql = `UPDATE HamsterID
            SET name = ?
            WHERE name = ?`;
    db.run(sql, data, function(err) {
      if (err) {
        return console.error(err.message);
      }
      console.log(`Row(s) updated: ${this.changes}`);
     
    });
    app.post('/insert', (req, res) =>  {
      const name = req.body.name;
      console.log(req.body); 
      // The first arguement is your SQL with parameters indicated by ?, the order of the parameters is the order
      //   they will be applied. The second arguement is the array of parameters. In this case only one
      db.run('INSERT INTO Hamsters(ReportedAnger,ReportedDepression,ReportedAnxiety) VALUES (?)', [name], function(err){
       if (err) {
           return console.log(err.message);
         }
         // get the last insert id
         console.log (name);
         console.log(`A row has been inserted with rowid ${this.lastID}`);
      });
      app.get('/', (req, res) => {
        res.send('Table updated!')
     });
      
      res.sendStatus(200)
   });
    db.run("DELETE FROM HamsterID WHERE Hamsters = 27"); 
    app.post('/insert', (req, res) =>  {
      const name = req.body.name;
      console.log(req.body); 
      // The first arguement is your SQL with parameters indicated by ?, the order of the parameters is the order
      //   they will be applied. The second arguement is the array of parameters. In this case only one
      db.run('DELETE ReportedAnger FROM Hamsters WHERE (HamsterID = 23) VALUES (?)', [name], function(err){
       if (err) {
           return console.log(err.message);
         }
         // get the last insert id
         console.log (name);
         console.log(`A row has been inserted with rowid ${this.lastID}`);
      });
      app.get('/', (req, res) => {
        res.send('Table deleted!')
     });
      res.sendStatus(200)
   });
  
  app.get('/select', (req, res) => 
  {
     const results = [];
     const name = req.query.name;
     db.all('SELECT * FROM TEST_TABLE WHERE NAME = ?', [name], (err,rows) => {
      rows.forEach((row) => {
          // NOTE the row.<field> must match the casing of the database, ie row.name does not work
          results.push(row.NAME);
      });
      res.send(JSON.stringify(results));
     });
  });
  app.get('/selectall', (req, res) =>
  {
    const results = [];
    const name = req.query.name;
    db.all('SELECT HamsterID FROM Hamsters', (err,rows) => {
      rows.forEach((row) => {
        results.push(row);

      });
      res.send(JSON.stringify(results));
    });
  });

  app.listen(port, () => console.log(`Example app listening on port ${port}!`))
  