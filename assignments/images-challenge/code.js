/*
const radius = 29
const diameter = 2*radius
const dist = Math.floor(width/diameter)*diameter
const extra = width-dist
let x = 0
while (x < width-extra){ 
  drawFilledCircle(x+radius+extra/2, height/2, radius, 'red')
  x += diameter
}
*/

const lineOfCircles = (29) => {
  const radius = 29
  const diameter = 2*radius
  const dist = Math.floor(width/diameter)*diameter
  const extra = width-dist
  let x = 0
  while (x < width-extra){ 
  drawFilledCircle(x+radius+extra/2, height/2, radius, 'red')
  x += diameter
}