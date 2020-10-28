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
- Dùng grunt tạo dự án biên dịch SASS thành CSS tùy biến thư viện CSS Bootstrap: 
- https://xuanthulab.net/dung-grunt-tao-du-an-bien-dich-sass-thanh-css-tuy-bien-thu-vien-css-bootstrap.html
- https://xuanthulab.net/su-dung-sass-scss/
```js
// grunt-sass
npm install --save-dev node-sass grunt-sass
```