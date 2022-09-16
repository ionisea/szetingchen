let radius = 14

/*
const lineOfCircles = (radius) => {
  const diameter = 2*radius
  const dist = Math.floor(width/diameter)*diameter
  const extra = width-dist
  let x = 0
  while (x < width-extra){ 
    drawFilledCircle(x+radius+extra/2, height/2, radius, 'red')
    x += diameter
  }
}
lineOfCircles (radius);
*/

const lineOfAltCircles = (radius) => {
  const diameter = 2 * radius
  const dist = Math.floor(width / diameter) * diameter
  const extra = width - dist
  let x = 0
  while (x < width - extra) {
    drawFilledCircle(x + radius + extra / 2, height / 2, radius, 'red')
    drawFilledCircle(x + 3 * radius + extra / 2, height / 2, radius, 'blue')
    x += diameter
  }
}

/*
const fillWithCircles = (radius) => {
  const diameter = 2*radius
  const xdist = Math.floor(width/diameter)*diameter
  const xextra = width-xdist
  const ydist = Math.floor(height/diameter)*diameter
  const yextra = height-ydist
  let y = 0
  while (y < height-yextra) {
    let x = 0
    while (x < width-xextra) {
      drawCircle(x+radius+xextra/2, y+radius+yextra/2, radius, 'blue')
      x += diameter
    }
    y += diameter
  }
}
fillWithCircles (radius);
*/