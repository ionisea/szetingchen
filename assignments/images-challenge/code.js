const radius = 23
const diameter = 2*radius
let dist = diameter
while (dist < width){
  dist += diameter
}
const center = width-dist
dist = center+diameter
while (dist < width){ 
  drawFilledCircle(dist-center/2, height/2, radius, 'red')
  dist = dist+diameter
}