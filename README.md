# Loracle Web Application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Pipeline

This application uses a variant of Git-Flow to prevent environmental variables from being hard coded into the production environment. All development should be on branches, which will automatically deploy to staging servers once the request is merged. Once they clear staging the application will be manually pushed to production.

In the project directory, you can run:

### `npm start`

Runs the app locally.\
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

if the application fails to build due to the lack of `node_modules` run `npm install` before attempting again. 

## API Connections

An environmental variable is used to set up the API url at `src/http-common.js:4`.
The environmental variable for the local environment is set at `.env:1`. 
Within a local environment, by default the application connects to a local API running on `PORT: 3000`.

## Code formatting

The VSCode extension `Prettier` was used to standardise the javascript code format within the application.
