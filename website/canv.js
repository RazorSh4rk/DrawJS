// wiggly circles on the menubar

const
    canvMenu = new DrawJS('menu-canvas')
menubar = document.getElementById('menu')
canvMenu.resize(menubar.clientWidth, menubar.clientHeight)

let points = []

menubar.addEventListener('mousemove', function (e) {
    canvMenu.background('#124559')
    canvMenu.circle(e.layerX, e.layerY, 10, '#d8dbe2')
    canvMenu.circle(
        e.layerX + Math.random() * 20 - 5, e.layerY + Math.random() * 20 - 5, 3, '#d8dbe2'
    )
    canvMenu.circle(
        e.layerX + Math.random() * 20 - 5, e.layerY + Math.random() * 20 - 5, 3, '#d8dbe2'
    )
    canvMenu.circle(
        e.layerX + Math.random() * 20 - 5, e.layerY + Math.random() * 20 - 5, 3, '#d8dbe2'
    )
})

//----------
// the cute animal

let animalC = new DrawJS('animal-canv')
animalC.resize(400, 400)
animalC.circle(200, 250, 100, 'yellow', true)
var ear0 = [
    new Vertex(190, 150),
    new Vertex(150, 100),
    new Vertex(100, 250)
]
var ear1 = [
    new Vertex(210, 150),
    new Vertex(250, 100),
    new Vertex(300, 250)
]
animalC.polygon(ear0, 'yellow', true)
animalC.polygon(ear1, 'yellow', true)
animalC.circle(160, 230, 15, 'black', true)
animalC.point(150, 225, 'white')
animalC.circle(240, 230, 15, 'black', true)
animalC.point(230, 225, 'white')

//----------
// the Ghibli data

let gh = new DrawJS('ghibli-canv')
let scores = []
x = 8
gh.resize(400, 200)
gh.background('#fff')

fetch('https://ghibliapi.herokuapp.com/films')
    .then(resp => resp.json())
    .then(function (resp) {
        resp.forEach(e => {
            scores.push(new Vertex(x, parseInt(e.rt_score)))
            x += 20
        })
        scores.forEach(e => {
            gh.point(e.x, 200 - e.y, 'black')
            gh.write(e.y, e.x, 200 - e.y - 10, 'black', true)
        })
        scores.forEach(e => e.y = 200 - e.y)
        gh.polygon(scores, '000')
    })