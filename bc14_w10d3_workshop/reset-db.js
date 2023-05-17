// Setup your project ✅
// Create a new directory named “db-scripts” and navigate into it. ✅
// Initialize a new Node.js project and configure it to allow ESM syntax. ✅
// Install necessary packages ✅
// Install the “pg” and “dotenv” packages using npm. ✅
// Set up your .env file ✅
// Create a new file in your project directory named “.env” - This file will hold your ElephantSQL database connection string. ✅
// Populate it like so: (Be sure to replace your_connection_string with the one from ElephantSQL.) ✅
// DB_CONNECTION_STRING=your_connection_string ✅
// 4. Create your script 
// Create a new file in your project directory named “reset-db.js”. ✅
// Add a script to your “package.json” file named “reset-db” that runs the following command: node -r dotenv/config reset-db.js Now whenever you run npm run reset-db in the terminal, the script will run and attach the environment variables in your “.env” file to the process.env object. ✅
// 5. Write your code!
// Import the pg Client at the top of the file. ✅
// Create a new client instance and pass in your configuration details. ✅
// Create an async function named resetDB ✅
// 6. Inside the function, use the client to:
// Connect to the database. ✅
// Drop the existing tables (If they exist) ✅
// Create the authors table ✅
// Create the books table ✅
// Populate the authors table. ✅
// Populate the books table. ✅
// Log a success message to the console. ✅
// End the client connection. ✅
// Use “Try, catch, finally”. The try block will contain the code that does the actual work. The catch block can handle/log any errors to the console. The finally block can close the client connection. ✅
// Finally, at then end of the file call resetDb() and check your ElephantSQL database to check it worked. ✅

import pg from 'pg';

// Set the database connection string from .env
const connectionString = process.env.DB_CONNECTION_STRING;

// Create a new client to use 
const client = new pg.Client({
  connectionString,
});

async function resetDB() {
  try {
  // Connect to the database
  await client.connect();
  // Drop the existing tables (If they exist)
  await client.query(`DROP TABLE IF EXISTS books;`);
  await client.query(`DROP TABLE IF EXISTS authors;`);
  // Create the authors table
  await client.query(`CREATE TABLE authors (id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, first_name TEXT NOT NULL, last_name TEXT NOT NULL);`);
  // Create the books table
  await client.query(`CREATE TABLE books (id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, author_id INTEGER REFERENCES authors(id), title TEXT NOT NULL, published_date DATE);`);
  // Populate the authors table
  await client.query(`INSERT INTO authors (first_name, last_name) VALUES ('Stephen', 'King'), ('George', 'Orwell'), ('J.K.', 'Rowling'), ('J.R.R.', 'Tolkien'), ('Agatha', 'Christie');`);
  // Populate the books table
  await client.query(`INSERT INTO books (author_id, title, published_date) VALUES (1, 'Carrie', '1974-04-05'), (2, '1984', '1949-06-08'), (3, 'Harry Potter and the Philosopher''s Stone', '1997-06-26'), (4, 'The Lord of the Rings', '1954-07-29'), (5, 'And Then There Were None', '1939-11-06');`);
    // Send a query to the database
  const result = await client.query("SELECT * FROM books;");
  // Log a success message to the console.
  console.log(result.rows);

  } catch (error) {
    console.error('An error occurred:', error);
    console.log('Resetting the database failed.')
  }
  finally {
    // Close the connection
    await client.end();
}
}

resetDB();