- guide: https://www.youtube.com/watch?v=VrLpZo5pSXQ
- index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Init Document</title>

    <!-- bootstrap -->
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
      crossorigin="anonymous"
    />
    <!-- font-awesome -->
    <script
      src="https://kit.fontawesome.com/4a96aab4b7.js"
      crossorigin="anonymous"
    ></script>
    <!-- fonts.google -->
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400;1,700&display=swap"
      rel="stylesheet"
    />

    <!-- reset css -->
    <link rel="stylesheet" href="../css/reset.css" />
    <!-- my css -->
    <link rel="stylesheet" href="../css/my_style_first.css" />
  </head>

  <body>
    <p>
      <img
        src="https://images.unsplash.com/photo-1601762923275-51ce14a3d490?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=991&q=80"
        alt=""
      />
    </p>
  </body>
</html>
```
- style.css
```css
/*init setting for CSS*/
html {
    /*1rem = 10px*/
    font-size: 62.5%;
}

*,
*:before,
*:after {
    /*all elements box-sizing*/
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
}
/**/
img {
    /*
    - default is inline
    - changed to block
    - max-width: 100% => width của img không thể vượt quá width của cha gần nhất của nó
    */
    display: block;
    max-width: 100%;
}
```