const express = require('express');
const app = express();
const tasksRouter = require('./routes/tasksRoutes');
const notFound = require('./middleware/notfound');
const errorHandlerMiddleware = require('./middleware/error-Handler');

// Middleware
app.use(express.static('./public'));
app.use(express.json());

// Routes
app.use('/api/v1/tasks', tasksRouter);

app.use(notFound);
app.use(errorHandlerMiddleware);

module.exports = app;