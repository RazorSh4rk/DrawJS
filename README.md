# DrawJS

Easy to use HTML5 canvas drawing library.
Why exactly is this better than the existing 18481 canvas libraries?
It isn't, but you can attach DrawJS objects to different canvases so
the contexts don't get messed up. That ought to worth something.
The point is not writing a separate framework for canvas API, it's 
wrapping its code into a readable format.

To use it, just 

    <script src="./draw.js"></script>

Or pull it from the raw GitHub source

    <script src="https://rawgit.com/RazorSh4rk/DrawJS/master/draw.js"></script>

Check the documentation for more info about the built in functions.

Drawing a cute animal is just 10 lines of code:

```
<canvas id="c"></canvas>

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

//draw the ears
d.polygon(ear0, 'yellow', true)
d.polygon(ear1, 'yellow', true)

//draw the kawaii anime eyes
d.circle(210, 230, 15, 'black', true)
d.point(200, 225, 'white')
d.circle(290, 230, 15, 'black', true)
d.point(280, 225, 'white')
```

![img](https://i.imgur.com/GpSWMKF.png)
