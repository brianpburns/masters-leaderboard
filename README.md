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

For UI development only:
```
npm start
```
This runs the UI locally on port 8082 and mocks the backend using MSW.

For full app:
```
npm run server
```
This runs the whole app locally on port 8080.

## Production Build

```
npm run build:prod
```

## Testing

```
npm test
```

Launches the application test runner.
Run with the `--watch` flag (`npm test -- --watch`) to run in interactive watch mode.

## Google Login
[OAuth config](https://console.developers.google.com/apis/credentials/oauthclient/723926103233-g005d40jcth75hr0o09r088n2ug2cqv8.apps.googleusercontent.com?authuser=1&project=graphite-byte-156900&supportedpurview=project)
