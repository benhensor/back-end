import express from 'express';

const app = express();

const port = 3000;

// tell express to parse JSON body
app.use(express.json());

// Get methods
// JSON response and status code example
app.get("/", (req, res) => {
  res.status(418).json({
    msg:"Hello Bootcampers!"
  });
});

// Example url parameter
app.get("/quotes/:id", (req, res) => {
  console.log(req.params);
  res.send(`The quote you requested has an id of ${req.params.id}`);
})

// Query string example
app.get("/sami", function(req, res) {
  console.log(req.query);
  if (req.query.dog === "true") {
    return res.send("DOG");
  }
  res.send("Yo, whatups!");
})

// POST method
// Parsing request body example
app.post("/contact-form", (req, res) => {
  console.log(req.body);
  res.send("IT worked! (POST)");
})

app.listen(port, () => {
  console.log(`Server is up and running on port: ${port}`);
})