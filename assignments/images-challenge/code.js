const radius = 10
const diameter = 2*radius
const dist = Math.floor(width/diameter)*diameter
const extra = width-dist
let x = 0
while (x < width-extra){ 
  drawFilledCircle(x+extra, height/2, radius, 'red')
  x += diameter
}