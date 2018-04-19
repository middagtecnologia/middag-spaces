
# middag-spaces
For DigitalOcean Spaces (AWS S3 Compatibility)   
Upload files to Objects Storage and return URL PreSigned

#### Get Started

Install dependencies   
```
npm install
```

Create **.middagspace** file in HOME_DIR to values **EDIT_**:

```
MIDDAGSPACE_KEY=EDIT_KEY
MIDDAGSPACE_SECRET=EDIT_SECRET
MIDDAGSPACE_BUCKET=EDIT_SPACENAME
MIDDAGSPACE_ENDPOINT=EDIT_REGION.digitaloceanspaces.com
MIDDAGSPACE_EXPIRESECONDS=63072000 # Value to 2 years
```

#### How use

```
node bin/middagspaces SOURCE [PATH]
```

#### Example

```
node bin/middagspaces README.md projects/middag/spaces
```
Output

```
https://SPACENAME.ams3.digitaloceanspaces.com/projects/middag/spaces/README.md?AWSAccessKeyId=LBSSX7IJVYLSLECOGLP7&Expires=1512013444&Signature=nOIYfAI5CIBp8sKG5pllDzKKHHI%3D
```
