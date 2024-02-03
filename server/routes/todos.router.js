const router = require('express').Router();
const pool = require('../modules/pool');
const pg = require('pg'); // importing pg



//GET

router.get('/', (req, res) => {

 // get To-do items from the database
 //write a query as a string
 
let queryText = `SELECT * FROM "todos";`;

 //need to send the query to the db

pool.query(queryText)
    .then (
        (result) => {
            let todoItems = result.rows;

            //Send them back to to the client
            res.send(todoItems);
        }
    )
    .catch(
        (error) => {
            console.log (`Error making query ${queryText}`, error);
            res.sendStatus(500);
        }
    );
});

//POST

router.post ('/', (req, res) => {

    console.log (req.body);
    let newTodoItem = req.body;

    let queryText = `
    INSERT INTO "todos" ("text", "isComplete")
    VALUES
    ($1, $2)
    ;`;

    //Need to pass the query into the pool, along with a second parameter
    // The second parameter is the list of things we want pg to safely put into the template

    pool.query(queryText, [newTodoItem.text, newTodoItem.isComplete])
        .then(
            (result) => {
                console.log(`this POST query worked, ${queryText}`, result);
                res.sendStatus(201);
            }
        )
        .catch(
            (error) => {
                console.log (`this POST query failed, ${queryText}`, error);
                res.sendStatus(500)
            }
        );
});

module.exports = router;
