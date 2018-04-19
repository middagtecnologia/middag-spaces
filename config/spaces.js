'use strict'

const fs = require('fs')
const os = require('os')
const env_filename = os.homedir() + '/.middagspace'

if (!fs.existsSync(env_filename)) {
    console.error('File ' + env_filename + ' not exists!')
    process.exit(1)
}

require('dotenv').config({path: env_filename})

const knox = require('knox-s3')

const spaces = knox.createClient({
    key: process.env.KEY,
    secret: process.env.SECRET,
    bucket: process.env.BUCKET,
    endpoint: process.env.ENDPOINT
});

module.exports = spaces
