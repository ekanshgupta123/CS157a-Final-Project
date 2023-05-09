package main

import (
    "database/sql"
    "fmt"
    _ "github.com/go-sql-driver/mysql"
)

func main() {
    // Open a connection to the MySQL database
    db, err := sql.Open("mysql", "root:p@$$word123@tcp(localhost:3306)/final_project")
    if err != nil {
        panic(err.Error())
    }
    defer db.Close()

    // Insert a new applicant into the Address table
    stmt, err := db.Prepare("INSERT INTO Address (Address_ID, Address, Zip_Code, City, State) VALUES (?, ?, ?, ?, ?)")
    if err != nil {
        panic(err.Error())
    }
    _, err = stmt.Exec(1, "123 Street", 94536, "Fremont", "CA")
    if err != nil {
        panic(err.Error())
    }

    // Query the Applicant table to retrieve all Address
    rows, err := db.Query("SELECT * FROM Address")
    if err != nil {
        panic(err.Error())
    }
    defer rows.Close()

    // Iterate over the result set and print each row
    for rows.Next() {
        var Address_ID int
        var Address string
        var Zip_Code int
        var City string
        var State string
        err = rows.Scan(&Address_ID, &Address, &Zip_Code, &City, &State)
        if err != nil {
            panic(err.Error())
        }
        fmt.Printf("Address ID: %d, Address: %s, Zipcode: %d, City: %s, State: %s\n", Address_ID, Address, Zip_Code, City, State)
    }

    // Insert a new skill into the Skill table
    stmt, err = db.Prepare("INSERT INTO Skill (Skill_ID, Skill_Name) VALUES (?, ?)")
    if err != nil {
        panic(err.Error())
    }
    _, err = stmt.Exec(1, "Java")
    if err != nil {
        panic(err.Error())
    }

    // // Insert a new row into the Applicant_Skill table to link an applicant to a skill
    // stmt, err = db.Prepare("INSERT INTO Applicant_Skill (Applicant_ID, Skill_ID) VALUES (?, ?)")
    // if err != nil {
    //     panic(err.Error())
    // }
    // _, err = stmt.Exec(1, 1)
    // if err != nil {
    //     panic(err.Error())
    // }

    // // Query the Applicant_Skill table to retrieve all applicants and their skills
    // rows, err = db.Query("SELECT Applicant.First_Name, Skill.Skill_Name FROM Applicant_Skill JOIN Applicant ON Applicant_Skill.Applicant_ID = Applicant.Applicant_ID JOIN Skill ON Applicant_Skill.Skill_ID = Skill.Skill_ID")
    // if err != nil {
    //     panic(err.Error())
    // }
    // defer rows.Close()

    // // Iterate over the result set and print each row
    // for rows.Next() {
    //     var firstName string
    //     var skillName string
    //     err = rows.Scan(&firstName, &skillName)
    //     if err != nil {
    //         panic(err.Error())
    //     }
    //     fmt.Printf("%s has skill %s\n", firstName, skillName)
    // }
}
