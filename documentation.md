# DrawJS Documentation

## initializing a DrawJS variable
    <canvas id="canvas_id"></canvas>
    let d = new DrawJS('canvas_id')
---

### resizing the canvas
    d.resize(100, 100)

    d.fullscreen()
---

## setting the background

    d.background('black')

(note: this draws over everything, resetting the canvas)


---

## drawing circular shapes
    d.arc(x, y, radius, startAngle, endAngle, counterclockwise, color, fill)
    //e.g.
    d.arc(100, 100, 100, 0, Math.PI, false, 'red', false)
    //will give you a half, red circle

    d.circle(x, y, radius, color, fill)
    d.circle(100, 100, 50, 'black', true)
    //will give you a black, filled in circle

    d.point(x, y, color)

    d.pixel(x, y, color)
---

## drawing points
    d.point(x, y, color)

## drawing rectangles
    d.rect(topLeftX, topLeftY, width, height, color, fill)
---

## drawing polygons

DrawJS ha a built in Vertex type, but generally, every object with x and y members should work.

    let v = new Vertex(10, 10)

    d.polygon(vertices, color, fill)

    //e.g.
    d.polygon([
        new Vertex(100, 150),
        new Vertex(250, 100),
        new Vertex(1000, 500)
    ],'blue', true)
    //will give you a big, filled out, blue triangle
---

## drawing lines

The DrawJS built in line takes two Vertex objects(or anything with x, y members).

    d.line(fromVertex, toVertex, color)

    //e.g.
    d.line(new Vertex(500, 500), new Vertex(500, 520),'red')

## scaling and rotating the canvas
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
