import express from 'express'
import morgan from 'morgan'

const app = express()
const port = 3000

// serve static files from the public directory (built-in middleware) 
// app.use(express.static("public"))

// use morgan for logging (every request)
// app.use(morgan("combined"))

// parsing json body 
app.use(express.json())

// middleware functions have access to the request and response objects
// they can also modify the request and response objects

// custom middleware function
// apply to every request
// app.use((req, res, next) => {
//   // log the 'date' and time, the 'http' method and the 'path' of every request
//   console.log(`[${new Date().toISOString()}] ${req.method} to ${req.path}`)
//   // call next() to pass the request to the next middleware function
//   next(); // Don't forget to call next() otherwise the application will hang!!!!!!
// })

// custom middleware function to check if user is authenticated before allowing access to route
// const isAuthenticated = (req, res, next) => {
// if ()
// }

// GET request function with specific middleware handler
// when a get request is made to the root path, send a response
app.get("/", morgan("tiny"), (req, res) => {
  // send a response
  res.send("Hello World!")
});

// app.get("/", (req, res) => {
//   res.send("Hello World!")
// })

// app.get("/about", (req, res) => {
//   res.send("I am velly confuse!")
// })

// POST Route handler that returns the json body to the client
app.post("/", (req, res) => {
  res.json(req.body)
})

// listen for requests on port 3000 and log a message
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}!`)
})