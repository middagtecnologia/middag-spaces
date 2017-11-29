'use strict'

var args = process.argv.slice(2);

const filename = args[0]
const client = args[1]
const destination =  args[2]

if (!filename) {
  console.log("Informe o arquivo a ser carregado")
  process.exit(1);
}

if (!client) {
  console.log("Informe o nome do cliente.")
  process.exit(1);
}

if (!destination) {
  console.log("Informe o destino do arquivo a ser carregado")
  process.exit(1);
}

require('dotenv').config()
const knox = require('knox')
const mime = require('mime')

var spaces = knox.createClient({
  key: process.env.KEY,
  secret: process.env.SECRET,
  bucket: process.env.BUCKET,
  endpoint: process.env.ENDPOINT
});

spaces.putFile(filename, `/${client}/${destination}/${filename}`, {
  'Content-Type': 'application/octet-stream'
}, function(err, res) {
  if (err) throw err;
  console.log(res.statusCode);
  console.log(res.headers);
});
