const lineOfCircles = (radius) => {
  const diameter = 2 * radius
  const dist = Math.floor(width / diameter) * diameter
  const extra = width - dist
  let x = 0
  while (x < width - extra) {
    drawFilledCircle(x + radius + extra / 2, height / 2, radius, 'red')
    x += diameter
  }
}
//lineOfCircles (23);

const lineOfAltCircles = (radius) => {
  const diameter = 2 * radius
  const dist = Math.floor(width / diameter) * diameter
  const extra = width - dist
  let color = 'blue'
  let x = 0
  while (x < width - extra) {
    if (color === 'red') {
      color = 'blue'
    } else {
      color = 'red'
    }
    drawFilledCircle(x + radius + extra / 2, height / 2, radius, color)
    x += diameter
  }
}
//lineOfAltCircles (23);

const fillWithCircles = (radius) => {
  const diameter = 2 * radius
  const xdist = Math.floor(width / diameter) * diameter
  const xextra = width - xdist
  const ydist = Math.floor(height / diameter) * diameter
  const yextra = height - ydist
  let y = 0
  while (y < height - yextra) {
    let x = 0
    while (x < width - xextra) {
      drawCircle(x + radius + xextra / 2, y + radius + yextra / 2, radius, 'blue')
      x += diameter
    }
    y += diameter
  }
}
//fillWithCircles (23);

const fillWithCirclesRand = (radius, probability) => {
  const diameter = 2 * radius
  const xdist = Math.floor(width / diameter) * diameter
  const xextra = width - xdist
  const ydist = Math.floor(height / diameter) * diameter
  const yextra = height - ydist
  let y = 0
  while (y < height - yextra) {
    let x = 0
    while (x < width - xextra) {
      let rand = Math.random()
      if (rand > probability) {
        drawCircle(x + radius + xextra / 2, y + radius + yextra / 2, radius, 'blue')
      } else {
        drawFilledCircle(x + radius + xextra / 2, y + radius + yextra / 2, radius, 'blue')
      }
      x += diameter
    }
    y += diameter
  }
}
//fillWithCirclesRand (23, 0.2);

const concentricCircles = (amountCircles) => {
  let largestDiameter = Math.min(width, height)
  drawFilledCircle(width / 2, height / 2, largestDiameter / 2, 'blue')
  const radiuses = (largestDiameter / 2) / (amountCircles)
  let color = 'red'
  for (let p = 0; p < largestDiameter / 2; p += radiuses) {
    if (color === 'red') {
      color = 'blue'
    } else {
      color = 'red'
    }
    drawFilledCircle(width / 2, height / 2, largestDiameter / 2 - p, color)
  }
}
//concentricCircles(13);

const checkerboard = (n) => {
  const smallerValue = Math.min(width, height)
  const largerValue = Math.max(width, height)
  const squareSide = smallerValue / n
  const widthExtra = (width-smallerValue)/ 2
  const heightExtra = (height-smallerValue)/2
  drawFilledRect(Math.max(widthExtra, heightExtra), 0, smallerValue, smallerValue, 'black')
  let startpos = 0
  for (let i = 0; i < smallerValue - squareSide / (squareSide + 1); i += squareSide) {
    for (let j = startpos; j < largerValue; j += 2 * squareSide) {
      drawFilledRect(i+widthExtra, j+heightExtra, squareSide, squareSide, 'white')
    }
    if (startpos == 0) {
      startpos += squareSide
    } else {
      startpos -= squareSide
    }
  }
}
//checkerboard(8); //currently set to 

const notReallyCurved = (lines) => {
  for (let position = 0; position != lines; position++) {
    drawLine(0, height - (position * (height / lines)), height - (position * (height / lines)), height, 0)
  }
}
notReallyCurved(25);