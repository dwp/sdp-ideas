# UCM Client

The UCM Client

## Requirements

* Node version 10

## Install and run the application

### Running locally - without Docker

#### In isolation
* Clone the repo into your required directory
* Navigate to the directory in a terminal
* Run `cp ./dev/env/local/inIsolation/{.env,.env.testing} .`
* You will need to edit the absolute paths for certs and log files in the .env and .env.testing files if running locally.
* Run `npm install --production` in the terminal
* Run `npm run start` from the terminal.
* The application will be running on port 9300. This can be changed in the .env file.


### Running locally - with Docker

#### In isolation
Running the application dockerised will use pm2 to monitor the application, you can edit the number of instances of the application in ./ecosystem.config.js - By default this is set to 1. This value can be an string representation of an integer or max. This process will start the service in isolation and all required mock services.

* Clone the repo into your required directory
* Navigate to the directory in a terminal
* Run `cp ./dev/env/local-docker/inIsolation/{Dockerfile,ecosystem.config.js,.env,.env.testing} .`
* Run `docker build -t ucm-client .` from the terminal
* Run `docker run -d -p 9100:9100 --name ucm-client ucm-client` from the terminal
* The application will be running on port 9100. This can be changed in the .env file

#### With other services
Please visit https://bb-aw2c-civs-01.burbank.working-age.local/uc-migrate/ucm-event-service-docker-infra-local in order to get all required files to run the UCM-Event-Service as a service. Instructions for how to do this are included in the README of the repo you will find.

## Tests
A few tests are included - mainly integrations tests and a couple of unit tests. If you would like to run them, first run `npm install`, then either `npm run test` for a single run or `npm run testing` to run once and then on file change.

## Endpoints

TODO

## Creator

* **Joe Chapman** - [joechapman.digitaldwp@gmail.com](mailto:joechapman.digitaldwp@gmail.com)

## License

ISC
