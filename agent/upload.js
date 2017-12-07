'use strict'

const args = process.argv.slice(2);
const source = args[0]
const client = args[1]
const folder = args[2]

if (typeof source === undefined) {
  console.log("Informe o arquivo a ser carregado")
} else if (typeof client === undefined) {
  console.log("Informe o nome do cliente.")
  process.exit();
}

const fs = require("fs");
const path = require('path');
const mime = require('mime')
const spaces = require('./../config/spaces')
const signature = require('./../config/url_signed')

const filename = (folder !== undefined) ? folder + '/' + path.basename(source) : path.basename(source);
const destination = `/${client}/${filename}`

spaces.putFile(source, destination, {
  'Content-Length': fs.statSync(source).size,
  'Content-Type': mime.lookup(source),
}, function (err, res) {
  if (err) throw err;
  if (res.statusCode === 200) {
    console.log(signature.url_signed(destination.substr(1)))
    fs.unlink(source)
  }
});
