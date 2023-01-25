# Masters Leaderboard

Live LP: http://unbouncepages.com/masters-2021-vancrewver/
Hosted app on Heroku.

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

Visit http://localhost:8082/team. This uses the real DB data in Render.

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

## Testing

```
npm test
```

Launches the application test runner.
Run with the `--watch` flag (`npm test -- --watch`) to run in interactive watch mode.

## Google Login

[OAuth config](https://console.developers.google.com/apis/credentials/oauthclient/723926103233-g005d40jcth75hr0o09r088n2ug2cqv8.apps.googleusercontent.com?authuser=1&project=graphite-byte-156900&supportedpurview=project)

## Feature Flags

The phase of selection needs to be updated manually. There are two places that need to be changed:

1. process.env.SELECTION_PHASE
2. The initial state for `selectionPhase` in `global-slice/index`
