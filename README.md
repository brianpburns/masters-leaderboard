# Masters Leaderboard

Hosted app on [Render](https://masters-app.onrender.com).

## Installation

If you're using NVM to manage your node version, you can sync your node version with that of the project by running:

```sh
nvm use
```

You may need to install the specified version if you haven't already. **Ensure you are using npm version 7.**

Now you can install the dependencies for all packages:

```
npm install
```

## Development

Development with both UI and backend API

```
npm start
npm run server
```

Visit http://localhost:8082/team.

This will run with local Postgres DB at `process.env.DATABASE_URL`.

Development of just the UI. This runs the UI locally on port 8082 and mocks the backend using MSW.

```
npm run start:standalone
```

## Production Build

```
npm run build:prod
```

## Deploying to Render

- After merging a change to main, open the Render [dashboard](https://dashboard.render.com/web/srv-cev1439gp3jjsh1cej2g).
- Select manual deploy from the dropdown

## Setting up the DB running on Render

Once the Masters has finished the DB is torn down to avoid having to pay for it. A new instance needs to be brought up.
- On the render dashboard, click on "New" and "PostgresQL"
- Give the DB instance a name. It doesn't really matter. Save and create.
- Once the instance has been provisioned, copy the "External Database URL"
- Update the `DATABASE_URL` env variable for the web service. **Append** `?ssl=true` to the end of the URL!
- Redeploy the web service

## Testing

```
npm test
```

Launches the application test runner.
Run with the `--watch` flag (`npm test -- --watch`) to run in interactive watch mode.

## Google Login

[OAuth config](https://console.developers.google.com/apis/credentials/oauthclient/723926103233-g005d40jcth75hr0o09r088n2ug2cqv8.apps.googleusercontent.com?authuser=1&project=graphite-byte-156900&supportedpurview=project)

React Native:
Followed this [guide](https://ibjects.medium.com/google-signin-tutorial-for-react-native-81a57fb67b18) to set it up for iOS. Still needs to be done for Android.

## Feature Flags

The phase of selection needs to be updated manually. The initial state for `selectionPhase` in `global-slice/index` needs to be changed.
