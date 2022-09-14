const bigness = 23
const radius = bigness*2
let dist = radius
while (dist < width){
  dist = dist+radius
}
const center = width-dist
dist = center+radius
while (dist < width){ 
  drawFilledCircle(dist-center/2, height/2, bigness, 'red')
  dist = dist+radius
}