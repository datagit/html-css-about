- grunt:
  - https://gruntjs.com/
  - https://xuanthulab.net/thiet-lap-grunt-chay-1-tac-vu-don-gian.html
```js
// define packages
npm init
// update package.json
{
  "name": "grunt-tutorial-demo",
  "version": "1.0.0",
  "devDependencies": {
    "grunt": "~1.3.0",
    "grunt-contrib-uglify": "~5.0.0",
    "grunt-contrib-watch": "^1.1.0"
  }
}

// install packages
npm install
grunt -version
    grunt-cli v1.3.2
    grunt v1.3.0
// create file Gruntfile.js
touch Gruntfile.js
```