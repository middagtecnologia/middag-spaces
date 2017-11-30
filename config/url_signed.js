'use strict'

require('dotenv').config()
const AWS = require('aws-sdk')

exports.url_signed = file => {
  const spacesEndpoint = new AWS.Endpoint(process.env.ENDPOINT);
  const s3 = new AWS.S3({
    endpoint: spacesEndpoint,
    accessKeyId: process.env.KEY,
    secretAccessKey: process.env.SECRET
  });
  return s3.getSignedUrl('getObject', {
    Bucket: process.env.BUCKET,
    Key: file,
    Expires: process.env.EXPIRESECONDS
  })
}
