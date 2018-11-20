require('dotenv').config();

const fs = require('fs');
const https = require('https');
const express = require('express');
const bootstrap = require('./app/middleware/bootstrap');

const PORT = process.env.PORT;
const app = express();

bootstrap(app);

app.listen(PORT, () => console.log(`SDP Client listening on port ${PORT}`));
