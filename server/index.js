const express = require('express')
const app = express()
const mysql = require('mysql2')
const cors = require('cors')
const bodyParser = require('body-parser')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'p@$$word123',
    database: 'final_project'
});

app.get('/', (req, res) => {
    const sqlInsert = "INSERT INTO Applicant (FirstName, LastName, School, GradYear, Resume, ExperienceID, LocationID) VALUES ('sdf', 'sdf', 'sdf', 2023, 'sdf', 2, 2);"
    // const sqlInsert2 = "INSERT INTO MostRecentExperience (Company, Role, Description, StartDate, EndDate) VALUES ('Poop', 'Pee', 'Poo', '2020-01-01', '2021-01-01');"
    db.query(sqlInsert, (err, result) => {
        res.send("Hello Bob")
    })
});

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))


app.get('/api/get/location', (req, res) => {
    const sqlSelect = "SELECT * FROM Location;"
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})

app.get('/api/get/company', (req, res) => {
    const sqlSelect = "SELECT * FROM MostRecentExperience;"
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})

app.get('/api/get/applicant', (req, res) => {
    const sqlSelect = "SELECT * FROM Applicant;"
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})

app.post('/api/insertLocation', (req, res) => {
    
    const address = req.body.address
    const city = req.body.city
    const state = req.body.state
    
    const sqlInsert = "INSERT INTO Location (Address, City, State) VALUES (?, ?, ?);"
    db.query(sqlInsert, [address, city, state], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'An error occurred while inserting the location.' });
          } else {
            console.log('Location inserted successfully.');
            res.status(200).json({ success: true, insertId: result.insertId });
          }
    })
})

app.post('/api/insertCompany', (req, res) => {
    
    const company = req.body.company
    const role = req.body.role
    const description = req.body.description
    const startDate = req.body.startDate
    const endDate = req.body.endDate
    
    const sqlInsert = "INSERT INTO MostRecentExperience (Company, Role, Description, StartDate, EndDate) VALUES (?, ?, ?, ?, ?);"
    db.query(sqlInsert, [company, role, description, startDate, endDate], (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'An error occurred while inserting the company.' });
        } else {
          console.log('Company inserted successfully.');
          res.status(200).json({ success: true, insertId: result.insertId});
        }
      });
})

app.post('/api/insertApplicant', (req, res) => {
    
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const school = req.body.school
    const gradYear = req.body.gradYear
    const resume = req.body.resume
    const experienceID = req.body.experienceId
    const locationID = req.body.locationId
    const username = req.body.username
    
    const sqlInsert = "INSERT INTO Applicant (FirstName, LastName, School, GradYear, Resume, ExperienceID, LocationID, Username) VALUES (?, ?, ?, ?, ?, ?, ?, ?);"
    db.query(sqlInsert, [firstName, lastName, school, gradYear, resume, experienceID, locationID, username], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'An error occurred while inserting the Applicant.' });
          } else {
            console.log('Applicant inserted successfully.');
            res.status(200).json({ success: true , insertId: result.insertId});
          }  
    })
})

app.post('/api/insertRecruiter', (req, res) => {

    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const role = req.body.role
    const locationID = req.body.locationId
    const username = req.body.username

    const sqlInsert = "INSERT INTO Recruiter (FirstName, LastName, Role, LocationID, Username) VALUES (?, ?, ?, ?, ?);"
    db.query(sqlInsert, [firstName, lastName, role, locationID, username], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'An error occurred while inserting the Recruiter.' });
          } else {
            console.log('Recruiter inserted successfully.');
            res.status(200).json({ success: true , insertId: result.insertId});
          }  
    })
})

app.post('/api/createApplicant', (req, res) => {

    const username = req.body.username
    const password = req.body.password
    
    const sqlInsert = "INSERT INTO ApplicantAccount (Username, Password) VALUES (?, ?);"
    db.query(sqlInsert, [username, password], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'An error occurred while inserting the Applicant Account.' });
          } else {
            console.log('Applicant Account inserted successfully.');
            res.status(200).json({ success: true , insertId: result.insertId});
          }  
    })
})

app.post('/api/createRecruiter', (req, res) => {

    const username = req.body.username
    const password = req.body.password
    
    const sqlInsert = "INSERT INTO RecruiterAccount (Username, Password) VALUES (?, ?);"
    db.query(sqlInsert, [username, password], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'An error occurred while inserting the Recruiter Account.' });
          } else {
            console.log('Recruiter Account inserted successfully.');
            res.status(200).json({ success: true , insertId: result.insertId});
          }  
    })
})

app.listen(3001, () => {
    console.log('running on port 3001');
});