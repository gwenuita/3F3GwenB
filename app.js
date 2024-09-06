const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Import routes
const indexRoutes = require('./routes/index');

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Use the routes defined in routes/index.js
app.use('/', indexRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});