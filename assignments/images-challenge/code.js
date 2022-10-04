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
  for (let x = 0; x < width - extra; x += diameter) {
    color = color === 'blue' ? 'red' : 'blue'
    drawFilledCircle(x + radius + extra / 2, height / 2, radius, color)
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
      if (Math.random() > probability) {
        drawCircle(x + radius + xextra / 2, y + radius + yextra / 2, radius, 'blue')
      } else {
        drawFilledCircle(x + radius + xextra / 2, y + radius + yextra / 2, radius, 'blue')
      }
      x += diameter
    }
    y += diameter
  }
}
//fillWithCirclesRand (23, 0.5);

const concentricCircles = (amountCircles) => {
  let largestDiameter = Math.min(width, height)
  drawFilledCircle(width / 2, height / 2, largestDiameter / 2, 'blue')
  const radiuses = (largestDiameter / 2) / (amountCircles)
  let color = 'red'
  for (let p = 0; p < largestDiameter / 2; p += radiuses) {
    color = color === 'red' ? 'blue' : 'red'
    drawFilledCircle(width / 2, height / 2, largestDiameter / 2 - p, color)
  }
}
//concentricCircles(13);

const checkerboard = (n) => {
  const smallerValue = Math.min(width, height)
  const largerValue = Math.max(width, height)
  const squareSide = smallerValue / n
  const widthExtra = (width - smallerValue) / 2
  const heightExtra = (height - smallerValue) / 2
  drawFilledRect(Math.max(widthExtra, heightExtra), 0, smallerValue, smallerValue, 'black')
  let startpos = 0
  for (let i = 0; i < smallerValue - squareSide / (squareSide + 1); i += squareSide) {
    for (let j = startpos; j < largerValue; j += 2 * squareSide) {
      drawFilledRect(i + widthExtra, j + heightExtra, squareSide, squareSide, 'white')
    }
    startpos = startpos === 0 ? squareSide : 0
  }
}
//checkerboard(8); //currently set to a chessboard (black/white)

const notReallyCurved = (lines) => {
  const gap = height / lines
  for (let p = 0; p != lines + 1; p++) {
    const shift = height - p * gap
    drawLine(0, shift, shift, height, 'black')
  }
}
//notReallyCurved(25);

const squareOfCircles = (radius, color) => {
  const diameter = 2 * radius
  const cNum = Math.floor(height / diameter)
  const cExtra = (height - (diameter * cNum)) / 2
  for (let xPos = (width - height + diameter)/2 + cExtra; xPos < (width + height)/2- cExtra; xPos += diameter) {
    drawCircle(xPos, height - radius - cExtra, radius, color)
    drawCircle(xPos, cExtra + radius, radius, color)
  }
  for (let yPos = cExtra + 3*radius; yPos < height - cExtra - diameter; yPos += diameter) {
    drawCircle((width - height + diameter)/2 + cExtra, yPos, radius, color)
    drawCircle((width + height - diameter)/2 - cExtra, yPos, radius, color)
  }
}
squareOfCircles(35, 'blue');

const z_sqr = (x, y) => {
  return [x ** 2 - y ** 2, 2 * x * y];
}
const f = (z, c) => {
  return [z_sqr(z[0], z[1])[0] + c[0], z_sqr(z[0], z[1])[1] + c[1]]
}
const isPixelInSet = (c, iterations) => {
  let z = [0, 0]
  let i = 0
  for (i; i < iterations; i++) {
    z = f(z, c);
    if (!isFinite(z[0]) || !isFinite(z[1])) {
      return i
    }
  }
  if (z[0] > 2 || z[1] > 2) {
    return i
  }
  return 0
}
const drawmandel = (iterations, bx, by, centerx, centery, zoom, c) => {
  const ofx = -((centerx / (width / bx)) * zoom);
  const ofy = ((centery / (height / by)) * zoom);
  let xm;
  let ym;
  drawLine(by / 2, 0, bx / 2, by, 'black')
  drawLine(0, by / 2, bx, by / 2, 'black')
  for (let y = -ofy; y <= by - ofy; y++) {
    for (let x = -ofx; x <= bx - ofx; x++) {
      xm = (-2 - (ofx / bx)) / zoom + ((4 / zoom) / bx) * x
      ym = (2 + (ofy / by)) / zoom - ((4 / zoom) / by) * y
      let pixelinset = isPixelInSet([xm, ym], iterations)
      pixelinset === 0 ? drawLine(x + ofx, y + ofy, x + 1 + ofx, y + ofy, c) : drawLine(x + ofx, y + ofy, x + 1 + ofx, y + ofy, 'hsl(' + (pixelinset * 2) + ', 100%, 50%)')
    }
  }
}
const x = 0
const y = 0
const maxiterations = 10000
const zoom = 1
//drawmandel(maxiterations, height, height, x, y, 2, 'black')
//thx Luke