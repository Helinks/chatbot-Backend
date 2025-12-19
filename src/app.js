const express = require('express');
const webhookRoutes = require('./routes/webhook.routes');

const app = express();
app.use(express.json);

app.use('/webhook',webhookRoutes);

module.exports = app;