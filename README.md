# Node MVC Template

## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

## Install

    $ git clone https://github.com/logiconllc/node-mvc-template/
    $ cd global-pass-backend
    $ yarn install


## Running the project for

    $ yarn server:local //for local
    $ yarn server:dev //for development
    $ yarn server:prod  for production

## create env file for local 
 change file (.env.local example) to (.env.local)


## Node server env variables

PORT=8070
MONGO_URL=
JWT_SECRET=


GOOGLE_ACCESS_TOKEN=

EMAIL_HOST=
EMAIL_USER=
EMAIL_USER_PASSWORD=

S3_ACCESS_KEY_ID=
S3_SECRET_ACCESS_KEY=
S3_REGION=
s3_BUCKET_NAME=



## Node server status codes details

    $ 404 => recode not found.
    $ 403 => validation error.
    $ 201 => record created.
    $ 200 => success response.
    $ 406 => server validation error.
    $ 500 => server error.



 
