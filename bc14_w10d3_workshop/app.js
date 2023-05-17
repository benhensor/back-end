// Import the pg library
import pg from 'pg';

// Set the database connection string from .env
const connectionString = process.env.DB_CONNECTION_STRING;

// Create a new client to use 
const client = new pg.Client({
  connectionString,
});

// Connect to the database
await client.connect();

// Send a query to the database
const result = await client.query("SELECT * FROM books;");

// Print the specific result
console.log(result);

// Close the connection
await client.end();

