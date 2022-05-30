# Digital wallet dashboard UI
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template.

## Features
- Login with users
- Show user wallets
- Set wallet as favorite
- Order wallets by favorites or creation date
- Show ETH value in USD or EUR
- Edit Rate for Eth regarding USD and EUR

## Available Scripts

In the project directory, you can run:\

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.\

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\

## TODOs
- More unit tests
- e2e tests
- Add action/reducers test
- Use nock to mock requests and test slices+services
- Error handling
- Routing and authentication
- Signup page
- Showing success/failure/confirmation alerts after each request to API
- Use dotenv and set environment variables (EX: API_URL)
- Move hardcoded styles from .tsx to .css
