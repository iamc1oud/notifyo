const express = require('express');
const mongoose = require('mongoose');

const serve = async () => {
    const app = express();

    const PORT = process.env.PORT || 9000;

    // Connect to database.
    mongoose.connect('mongodb://notifyo_db:27017', {
        authMechanism: 'DEFAULT',
        directConnection: true,
    }).then(() => {
        console.log(`🛰️ Connected to database`)
    }).catch((e) => {
        console.log("Error connecting to database", e)
    })

    app.listen(PORT, () => {
        console.log(`🚀 Server is listening on: ${PORT}`);
    });
}

serve();

