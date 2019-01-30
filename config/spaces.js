'use strict'

const fs = require('fs')
const os = require('os')
let env_filename = '.middagspace'

if (!fs.existsSync(env_filename)) {
    env_filename = os.homedir() + '/.middagspace'
}

if (!fs.existsSync(env_filename)) {
    console.error('File ' + env_filename + ' not exists!')
    process.exit(1)
}

require('dotenv').config({path: env_filename})

const knox = require('knox-s3')

const spaces = knox.createClient({
    key: process.env.MIDDAGSPACE_KEY,
    secret: process.env.MIDDAGSPACE_SECRET,
    bucket: process.env.MIDDAGSPACE_BUCKET,
    endpoint: process.env.MIDDAGSPACE_ENDPOINT
});

module.exports = spaces
