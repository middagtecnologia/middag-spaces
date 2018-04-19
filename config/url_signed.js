'use strict'

const os = require('os')
const env_filename = os.homedir() + '/.middagspace'
require('dotenv').config({path: env_filename})
const AWS = require('aws-sdk')

exports.url_signed = file => {
    const spacesEndpoint = new AWS.Endpoint(process.env.MIDDAGSPACE_ENDPOINT);
    const s3 = new AWS.S3({
        endpoint: spacesEndpoint,
        accessKeyId: process.env.MIDDAGSPACE_KEY,
        secretAccessKey: process.env.MIDDAGSPACE_SECRET
    });
    return s3.getSignedUrl('getObject', {
        Bucket: process.env.MIDDAGSPACE_BUCKET,
        Key: file,
        Expires: process.env.MIDDAGSPACE_EXPIRESECONDS
    })
}
