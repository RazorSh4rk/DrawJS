# DrawJS

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

Easy to use HTML5 canvas drawing library.
The point is wrapping the canvas functions into a readable, OOP format, so you don't need to write 3 lines of code for one blue line.

To use it, just 
```html
<script src="./draw.js"></script>
```

Or pull it from the raw GitHub source
```html
<script src="https://rawgit.com/RazorSh4rk/DrawJS/master/draw.js"></script>
```

Use the minified versions in production. The first url will be stable, but changes are reflected slower, it is the one recommended for high traffic sites.
```html
<script src="https://cdn.rawgit.com/RazorSh4rk/DrawJS/8fe13774/draw.min.js"></script>
<script src="https://rawgit.com/RazorSh4rk/DrawJS/master/draw.min.js"></script>
```

Check the documentation for more info about the built in functions.

Drawing a cute animal is just 10 lines of code:
```html
<canvas id="c"></canvas>
```

```javascript
let d = new DrawJS('c')
d.circle(250, 250, 100, 'yellow', true)
var ear0=[
    new Vertex(240, 150),
    new Vertex(200, 100),
    new Vertex(150, 250)
]
var ear1=[
    new Vertex(260, 150),
    new Vertex(300, 100),
    new Vertex(350, 250)
]

//Draw the ears
d.polygon(ear0, 'yellow', true)
d.polygon(ear1, 'yellow', true)

//Draw the kawaii anime eyes (✧ω✧)
d.circle(210, 230, 15, 'black', true)
d.point(200, 225, 'white')
d.circle(290, 230, 15, 'black', true)
d.point(280, 225, 'white')
```

![img](https://i.imgur.com/GpSWMKF.png)
