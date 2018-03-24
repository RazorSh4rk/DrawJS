class DrawJS {
    constructor(canvasID) {
        this.canvID = canvasID
        this.canv = document.getElementById(canvasID)
        this.ctx = this.canv.getContext('2d')
        this.width = this.canv.width
        this.height = this.canv.height
    }
    resize(x, y) {
        this.width = x
        this.canv.width = x
        this.height = y
        this.canv.height = y
    }
    fullscreen() {
        let x = document.createElement('STYLE'),
            t = document.createTextNode(
                '* { margin: 0; padding: 0;}' +
                'body, html { height:100%; }' +
                '#' + this.canvID + '{position:absolute; width:100%; height:100%; }'
            );
        x.appendChild(t)
        document.head.appendChild(x)
        this.resize(window.innerWidth, window.innerHeight)
    }
    background(color) {
        this.ctx.fillStyle = color
        this.ctx.fillRect(-this.width, -this.height, this.width, this.height)
    }
    arc(x, y, r, start, end, anticlock, color, fill) {
        if (fill) {
            this.ctx.fillStyle = color
            this.ctx.beginPath()
            this.ctx.arc(x, y, r, start, end, anticlock)
            this.ctx.fill()
        } else {
            this.ctx.strokeStyle = color
            this.ctx.beginPath()
            this.ctx.arc(x, y, r, start, end, anticlock)
            this.ctx.stroke()
        }
    }
    circle(x, y, r, color, fill) {
        if (fill) {
            this.arc(x, y, r, 0, 2 * Math.PI, false, color, true)
        } else {
            this.arc(x, y, r, 0, 2 * Math.PI, false, color, false)
        }
    }
    point(x, y, color) {
        this.circle(x, y, 3, color, true)
    }
    pixel(x, y, color) {
        this.circle(x, y, 1, color, true)
    }
    rect(x, y, w, h, color, fill) {
        if (fill) {
            this.ctx.fillStyle = color
            this.ctx.fillRect(x, y, w, h)
        } else {
            this.ctx.strokeStyle = color
            this.ctx.strokeRect(x, y, w, h)
        }
    }
    polygon(vertices, color, fill) {
        if (fill) {
            this.ctx.fillStyle = color
            this.ctx.beginPath()
            vertices.forEach(e => {
                this.ctx.lineTo(e.x, e.y)
            })
            this.ctx.closePath()
            this.ctx.fill()
        } else {
            this.ctx.strokeStyle = color
            this.ctx.beginPath()
            vertices.forEach(e => {
                this.ctx.lineTo(e.x, e.y)
                this.ctx.moveTo(e.x, e.y)
            })
            this.ctx.stroke()
        }
    }
    line(vertex0, vertex1, color) {
        this.ctx.strokeStyle = color
        this.ctx.moveTo(vertex0.x, vertex0.y)
        this.ctx.lineTo(vertex1.x, vertex1.y)
        this.ctx.stroke()
    }
    rotate(degrees){
        this.ctx.rotate(degrees * Math.PI / 180)
    }
    flipX(){
        this.ctx.scale(-1, 1)
    }
    flipY(){
        this.ctx.scale(1, -1)
    }
    translate(x, y){
        this.transLationX = x
        this.translationY = y
        this.ctx.translate(x, y)
    }
    center(){
        this.transLationX = this.canv.width / 2
        this.translationY = this.canv.height / 2
        this.translate(this.canv.width / 2, this.canv.height / 2)
    }
    resetTranslation(){
        this.translate(-this.transLationX, -this.translationY)
    }
}

class Vertex {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}
