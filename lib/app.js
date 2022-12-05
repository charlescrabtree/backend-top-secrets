const express = require('express');
const cookierParser = require('cookie-parser');
const app = express();

// Built in middleware
app.use(express.json());
app.use(cookierParser());
// App routes
app.use('/api/v1/users', require('./controllers/users'));

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
