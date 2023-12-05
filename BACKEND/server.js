// Import a tool called 'express' that helps in making web applications with Node.js.
const express = require('express')
// Create a new web application using the express tool.
const app = express()

app.listen(3000, () => {
    console.log("Server running on port 3000");
});