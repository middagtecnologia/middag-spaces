'use strict'

require('dotenv').config()
const knox = require('knox-s3')

const spaces = knox.createClient({
    key: process.env.KEY,
    secret: process.env.SECRET,
    bucket: process.env.BUCKET,
    endpoint: process.env.ENDPOINT
});

module.exports = spaces
