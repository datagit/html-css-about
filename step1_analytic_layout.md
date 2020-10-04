- install extension: Visual Studio Code HTML Boilerplate
- guide: https://www.youtube.com/watch?v=4Md08rfio6Q
```
#ex:
section.top-bar>div.container>div.row>div.col*2
    ul.top-bar__social-list>li>a>i*6
```
- case 1: div.container>div.row>div.col*2
```html
<!-- 2 col chia đều trên màn hình -->
<div class="container">
    <div class="row">
        <div class="col"></div>
        <div class="col"></div>
    </div>
</div>
```
- case 2: div.container>div.row>div.col-auto*2
```html
<!-- 2 col chỉ chiếm đủ phần nội dung của mình -->
<div class="container">
    <div class="row">
        <div class="col-auto"></div>
        <div class="col-auto"></div>
    </div>
</div>
```
- case 3: div.row.justify-content-between>div.container>div.row>div.col-auto*2
```html
<!-- row: justify-content: space-between!important; -->
<!-- 2 col chỉ chiếm đủ phần nội dung của mình -->
<div class="container">
    <div class="row justify-content-between">
        <div class="col-auto"></div>
        <div class="col-auto"></div>
    </div>
</div>
```