const pg = require('pg')
let pool;

let databaseName = 'weekend-to-do-app'

if (process.env.NODE_ENV === 'test') {
  databaseName = 'prime_testing'
}

// const pool = new pg.Pool({
//     host: 'localhost',
//     port: 5432,
//     database: databaseName,
//     allowExitOnIdle: true 
// })

if (process.env.DATABASE_URL) {
  pool = new pg.Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: {
          rejectUnauthorized: false
      }
  });
}
// When we're running this app on our own computer
// we'll connect to the postgres database that is 
// also running on our computer (localhost)
else {
  pool = new pg.Pool({
      host: 'localhost',
      port: 5432,
      database: databaseName 
  });
}


module.exports = pool
