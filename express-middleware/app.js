import express from 'express'

const app = express()
const port = 3000

// serve static files from the public directory (built-in middleware) 
app.use(express.static("public"))

// middleware functions have access to the request and response objects
// they can also modify the request and response objects

// custom middleware function
// apply to every request
app.use((req, res, next) => {
  // log the 'date' and time, the 'http' method and the 'path' of every request
  console.log(`[${new Date().toISOString()}] ${req.method} to ${req.path}`)
  // call next() to pass the request to the next middleware function
  next(); // Don't forget to call next() otherwise the application will hang!!!!!!
})

// get request function
// when a get request is made to the root path, send a response
app.get("/", (req, res) => {
  // send a response
  res.send("My brain hurts!")
})

// listen for requests on port 3000 and log a message
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}!`)
})