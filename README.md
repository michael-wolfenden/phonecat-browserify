# phonecat-browserify #

A boilerplate using angular, gulp and browserify.

## Getting up and running

1. Clone this repo
2. Run `npm install` from the root directory
3. Run `npm start`
4. Your browser will automatically be opened and directed to the browser-sync proxy address (http://localhost:9999). 
5. Any changes in the `/app` directory will be automatically processed by gulp and any open browsers pointed at the proxy address will reload.

## Testing

1. Run `npm test`
2. All `*.specs.js` files will be executed by Karma. 
3. Any changes to any `*.specs.js` files will be automatically processed by gulp and the tests re-run.
