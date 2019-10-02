const express = require('express');
const routes = require('./routes');
const mongoose = require('./mongoose');

const app = express();

app.use(express.json());
app.use(routes);

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-eh1ls.mongodb.net/semana09?retryWrites=true&w=majority')



app.listen(3333);