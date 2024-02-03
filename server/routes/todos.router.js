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




module.exports = router;
