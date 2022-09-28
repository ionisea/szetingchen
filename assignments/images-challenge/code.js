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
  if (width >= height) {
    var flipValue1 = height
    var flipValue2 = width
  } else {
    var flipValue1 = width
    var flipValue2 = height
  }
  drawFilledCircle(width / 2, height / 2, flipValue1 / 2, 'blue')
  const radiuses = (flipValue1 / 2) / (amountCircles)
  let p = 0
  let color = 'red'
  while (p < flipValue1 / 2) {
    if (color === 'red') {
      color = 'blue'
    } else {
      color = 'red'
    }
    drawFilledCircle(width / 2, height / 2, flipValue2 / 2 - p, color)
    p += radiuses
  }
}
concentricCircles(13);
//I'm thinking of a solution to the if/else massive loop problem, so I'll leave this as is for now

const checkerboard = (n) => {
  if (height <= width) {
    const squareSide = height / n
    const widthextra = (width - height) / 2
    drawFilledRect(widthextra, 0, height, height, 'red')
    let startpos = 0
    for (let x = 0; x < height - squareSide / (squareSide + 1); x += squareSide) {
      for (let y = startpos; y < height; y += 2 * squareSide) {
        drawFilledRect(x + widthextra, y, squareSide, squareSide, 'blue')
      }
      if (startpos == 0) {
        startpos += squareSide
      } else {
        startpos -= squareSide
      }
    }
  } else {
    const squareSide = width / n;
    const heightextra = (height - width) / 2
    drawFilledRect(0, heightextra + 0, width, width, 'red')
    let startpos = 0
    for (let y = 0; y < width - squareSide / (squareSide + 1); y += squareSide) {
      for (let x = startpos; x < width; x += 2 * squareSide) {
        drawFilledRect(x, y + heightextra, squareSide, squareSide, 'blue')
      }
      if (startpos == 0) {
        startpos += squareSide
      } else {
        startpos -= squareSide
      }
    }
  }
}
//checkerboard(10);

const notReallyCurved = (lines) => {
  for (let position = 0; position != lines + 1; position++) {
    drawLine(0, height - (position * (height / lines)), height - (position * (height / lines)), height, 0)
  }
}
//notReallyCurved(50);