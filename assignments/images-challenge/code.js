const radius = 23
const diameter = 2*radius
const dist = Math.floor(width/diameter)*diameter
const extra = width-dist
let x = extra/2
while (x < width-extra){ 
  drawFilledCircle(x+extra/2, height/2, radius, 'red')
  x += diameter
}