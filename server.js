const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const artists = require('./app/artists');
const albums = require('./app/albums');
const tracks = require('./app/tracks');

const app = express();

app.use(cors());
app.use(express.json());

const port = 8000;

const run = async () => {
    await mongoose.connect('mongodb://localhost/music', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    app.use('/artists', artists);
    app.use('/albums', albums);
    app.use('/tracks', tracks);
    app.listen(port, () => {
        console.log('Server is running on port: ', port);
    })
};

run().catch(e => console.error(e));
