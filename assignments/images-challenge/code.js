const radius = 23
const diameter = 2*radius
const dist = Math.floor(width/diameter)*diameter
const extra = width-dist
while (dist < width){ 
  drawFilledCircle(dist-extra/2, height/2, radius, 'red')
  dist = dist+diameter
}