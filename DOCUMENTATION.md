# DrawJS Documentation
[Initializing a DrawJS Variable](DOCUMENTATION.md#initializing-a-drawjs-variable)<br>
[Resizing the Canvas](DOCUMENTATION.md#resizing-the-canvas)<br>
[Setting the Background](DOCUMENTATION.md#setting-the-background)<br>
[Drawing Circular Shapes](DOCUMENTATION.md#drawing-circular-shapes)<br>
[Drawing Points](DOCUMENTATION.md#drawing-points)<br>
[Drawing Rectangles](DOCUMENTATION.md#drawing-rectangles)<br>
[Drawing Polygons](DOCUMENTATION.md#drawing-polygons)<br>
[Drawing Lines](DOCUMENTATION.md#drawing-lines)<br>
[Drawing Images](DOCUMENTATION.md#drawing-images)<br>
[Writing Text](DOCUMENTATION.md#writing-text)<br>
[Scaling and Rotating the Canvas](DOCUMENTATION.md#scaling-and-rotating-the-canvas)<br>
NEW: [Tilemaps](DOCUMENTATION.md#tilemaps)

---

### Initializing a DrawJS Variable

```html
<canvas id="canvas_id"></canvas>
```
```javascript
let d = new DrawJS('canvas_id')

d.getCanvas() // returns the DOM element
d.getContext() // returns the 2d context of the canvas
```

### Resizing the Canvas
``` javascript
d.resize(100, 100)
d.fullscreen()
```

### Setting the Background
```javascript
d.background('black')
```

(Note: this draws over everything, resetting the canvas.)

### Drawing Circular Shapes
```javascript
d.arc(x, y, radius, startAngle, endAngle, counterclockwise, color, fill)
//E.g.
d.arc(100, 100, 100, 0, Math.PI, false, 'red', false)
//Will give you a half, red circle

d.circle(x, y, radius, color, fill)
d.circle(100, 100, 50, 'black', true)
//Will give you a black, filled in circle

d.point(x, y, color)

d.pixel(x, y, color)
```

### Drawing Points
```javascript
d.point(x, y, color)
```

### Drawing Rectangles
```javascript
d.rect(topLeftX, topLeftY, width, height, color, fill)
```

### Drawing Polygons

DrawJS ha a built in Vertex type, but generally, every object with x and y members should work.
```javascript
let v = new Vertex(10, 10)

d.polygon(vertices, color, fill)

//E.g.
d.polygon([
    new Vertex(100, 150),
    new Vertex(250, 100),
    new Vertex(1000, 500)
],'blue', true)
//Will give you a big, filled out, blue triangle
```

### Drawing Lines

The DrawJS built in line takes two Vertex objects(or anything with x, y members).
```javascript
d.line(fromVertex, toVertex, color)

//e.g.
d.line(new Vertex(500, 500), new Vertex(500, 520),'red')
```

### Drawing Images
```javascript
d.image(path, x, y, width, height)
//where path is the path of the image as a string, e.g. './big_meme.jpg'
// x and y are the top left corner of the images on the canvas
// width and height will scale the image

//you can also crop images
d.imageCrop(path, x, y, width, height, cropX, cropY, cropWidth, cropHeight)
// x, y, width and height are the same
// cropX and cropY will be the top left point at which the original picture will be cropped
// cropWidth and cropHeight will be the width and height of the cropped piece
```

### Writing Text
```javascript
d.write(text, x, y, color, fill, font)
//Where fill is a boolean, and font is e.g. '30px Arial'
```

### Scaling and Rotating the Canvas
```javascript
d.rotate(degrees)

d.flipX()
d.flipY()
//These will mirror the canvas according to the current origin (0, 0) point

d.translate(x, y)
//Places the origin at (x, y)

d.center()
//Centers the origin

d.resetTranslation
//Places the origin in the initial to left position
```

### Tilemaps

(Experimental, report issues if you find any)

The tilemap class only supports even sized tile as of now. That means each tile has to be the same size.
```javascript
let tm  = new TileMap('tilemap.png', tileWidth, tileHeight)
tm.drawTile(drawJSInstance, x, y, rowIndex, columnIndex)
// you must supply an instanced DrawJS variable, in our case 'd'
// x and y are the top left corner of the displayed tile
// row and column index are a the number on which the tile can be found
// example under the code
```

Indexing example: 

![img](https://i.imgur.com/LoWp5wA.jpg)
