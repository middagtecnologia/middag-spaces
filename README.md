
# middag-spaces
For DigitalOcean Spaces (AWS S3 Compatibility)   
Upload files to Objects Storage, return URL PreSigned and delete file

#### Get Started

Configure **.env** file to values **EDIT_**:

```
KEY=EDIT_KEY
SECRET=EDIT_SECRET
BUCKET=EDIT_SPACENAME
ENDPOINT=EDIT_REGION.digitaloceanspaces.com
EXPIRESECONDS=63072000 # Value to 2 years
```

#### How use

```
node bin/middagspaces SOURCE MAIN_FOLDER SUBFOLDERS
```

#### Example

```
node bin/middagspaces README.md projects middag/spaces
```
Output

```
https://SPACENAME.ams3.digitaloceanspaces.com/middag/spaces/README.md?AWSAccessKeyId=LBSSX7IJVYLSLECOGLP7&Expires=1512013444&Signature=nOIYfAI5CIBp8sKG5pllDzKKHHI%3D
```
