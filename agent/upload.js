'use strict'

const args = process.argv.slice(2);
const source = args[0]
const folder = args[1]

if (source === undefined) {
    console.log("Require file to upload")
    process.exit(1);
}

const fs = require("fs");
const path = require('path');
const mime = require('mime')
const spaces = require('./../config/spaces')
const signature = require('./../config/url_signed')

const filename = (folder !== undefined) ? folder + '/' + path.basename(source) : path.basename(source);
const destination = `/${filename}`

spaces.putFile(source, destination, {
    'Content-Length': fs.statSync(source).size,
    'Content-Type': mime.getType(source),
}, function (err, res) {
    if (err) throw err;
    if (res.statusCode === 200) {
        console.log(signature.url_signed(destination.substr(1)))
    } else {
        console.log("Failed to upload file. Check your credentials.")
    }
});
