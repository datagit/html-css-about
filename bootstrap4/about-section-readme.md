- guide: https://www.freecodecamp.org/news/learn-bootstrap-4-in-30-minute-by-building-a-landing-page-website-guide-for-beginners-f64e03833f33/#wrap-up-and-conclusion
```
class => "col-lg-4 col-md-4 col-sm-12"
    xl: screen >= 1200
    lg: screen >= 992
    md: screen >= 768
        12/4=1/3
    sm: screen >= 576
    xs: screen >= 375
        12/12=1
```
```html
<div class="container">
    <div class="row">
      <div class="col-12 d-flex justify-content-center">
        <h1>About Me</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 col-md-4 col-sm-12">
        <div class="img-title text-center">
          <img src="https://dummyimage.com/400x300/000/fff" alt="avatar" class="img-fluid rounded-circle">
          <div>S.Web Developer</div>
        </div>
      </div>
      <div class="col-lg-8 col-md-8 col-sm-12">
        <div class="description">
          <h3>D.John</h3>
          <p>
            ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  </div>
```