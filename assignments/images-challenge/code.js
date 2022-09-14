const radius = 23
let dist = radius/2
while (dist < width){
  dist = dist+radius/2
}
const center = width-dist
dist = center+radius/2
while (dist < width){ 
  drawFilledCircle(dist-center/2, height/2, bigness, 'red')
  dist = dist+radius/2
}