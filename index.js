const express = require('express');
const path = require('path');
//const mongoose = require('mongoose');

const router = require('./routes/index');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

/*
const mongoDB = 'mongodb+srv://annika:EineGrosseMango@cluster0-t32vk.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
*/

app.use(express.json({limit: '50mb'})); 
app.use(express.urlencoded({limit: '50mb', extended: true}));

app.use('/', router);

app.use((req, res, next) => {
    res.status(404).send("Sorry, can't find that!")
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;

    console.log(err.message);

    res.locals.error = req.app.get('env') === 'development' ? err: {};

    res.status(err.status || 500).send("Something broke!");
});

/*
const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});
*/

app.listen(3000);
console.log('3000 is the magic port');