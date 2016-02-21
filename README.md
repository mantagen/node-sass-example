# Using node-sass with Hapi and watching with scripts

An example app using the [node-sass](https://github.com/sass/node-sass) npm module to compile .scss to CSS.
I am using Hapi to create a simple server serving a static file, but the approach below will work with other frameworks or indeed no frameworks.

## SASS?

http://sass-lang.com/guide

## Dependencies

[nodemon](https://github.com/remy/nodemon)
`npm install -g nodemon`
[node-sass](https://github.com/sass/node-sass)
`npm install node-sass`

## The scripts

In the scripts section of package.json:

``` json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build-css": "node-sass --include-path scss sass/main.scss public/css/main.css",
  "watch-css": "nodemon -e scss -x \"npm run build-css\"",
  "devstart": "nodemon server.js"
}
```

`build-css`: Uses [node-sass](https://github.com/sass/node-sass) to compile .scss to css (in specified paths).
`watch-css`: Uses [nodemon](https://github.com/remy/nodemon) to watch for changes to scss files and run `build-css` when changes are made.
`devstart`: Starts the server, watching for changes and restarting the server when changes are made.

## How to use

In one terminal:
`npm run watch-css`
In another terminal:
`npm run devstart`
