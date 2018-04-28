# DrawJS Documentation
[Initializing a DrawJS Variable](DOCUMENTATION.md#initializing-a-drawjs-variable)

<<<<<<< Updated upstream
=======
[Resizing the Canvas](DOCUMENTATION.md#resizing-the-canvas)

[Setting the Background](DOCUMENTATION.md#setting-the-background)

[Drawing Circular Shapes](Drawing Circular Shapes)

[Drawing Points]()


>>>>>>> Stashed changes
### Initializing a DrawJS Variable

```html
<canvas id="canvas_id"></canvas>
```
```javascript
let d = new DrawJS('canvas_id')
```
---

### Resizing the Canvas
``` javascript
d.resize(100, 100)
d.fullscreen()
```
---

### Setting the Background
```javascript
d.background('black')
```

(Note: this draws over everything, resetting the canvas.)

---

### Drawing Circular Shapes
```javascript
d.arc(x, y, radius, startAngle, endAngle, counterclockwise, color, fill)
//e.g.
d.arc(100, 100, 100, 0, Math.PI, false, 'red', false)
//will give you a half, red circle

d.circle(x, y, radius, color, fill)
d.circle(100, 100, 50, 'black', true)
//will give you a black, filled in circle

d.point(x, y, color)

d.pixel(x, y, color)
```
---

### Drawing Points
```javascript
d.point(x, y, color)
```

### Drawing Rectangles
```javascript
d.rect(topLeftX, topLeftY, width, height, color, fill)
```
---

### Drawing Polygons

DrawJS ha a built in Vertex type, but generally, every object with x and y members should work.
```javascript
let v = new Vertex(10, 10)

d.polygon(vertices, color, fill)

//e.g.
d.polygon([
    new Vertex(100, 150),
    new Vertex(250, 100),
    new Vertex(1000, 500)
],'blue', true)
//will give you a big, filled out, blue triangle
```
---

### Drawing Lines

The DrawJS built in line takes two Vertex objects(or anything with x, y members).
```javascript
d.line(fromVertex, toVertex, color)

//e.g.
d.line(new Vertex(500, 500), new Vertex(500, 520),'red')
```
---

### Writing Text
```javascript
d.write(text, x, y, color, fill, font)
//where fill is a boolean, and font is e.g. '30px Arial'
```

### Scaling and Rotating the Canvas
```javascript
d.rotate(degrees)

d.flipX()
d.flipY()
//these will mirror the canvas according to the current origo (0, 0) point

d.translate(x, y)
//places the origo at (x, y)

d.center()
//centers the origo

d.resetTranslation
//places the origo in the initial to left position
```
