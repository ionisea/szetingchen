// rotation code
const rotate = (cx, cy, x, y, angle) => {
  let radians = (Math.PI / 180) * angle;
  cos = Math.cos(radians),
    sin = Math.sin(radians),
    nx = (cos * (x - cx)) + (sin * (y - cy)) + cx,
    ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
  return [nx, ny];
}

//vector manipulation
const vector = (angle, magnitude) => {
  return ({ angle: angle * Math.PI / 180, magnitude })
}

const add2Vectors = (a) => {
  const x1 = Math.cos(a[0].angle) * a[0].magnitude
  const x2 = Math.cos(a[1].angle) * a[1].magnitude
  const y1 = Math.sin(a[0].angle) * a[0].magnitude
  const y2 = Math.sin(a[1].angle) * a[1].magnitude
  const angle = Math.atan2(y1 + y2, x1 + x2)
  const mag = Math.sqrt((x1 + x2) ** 2 + (y1 + y2) ** 2)
  return ({ angle, magnitude: mag })
}

const vectorMultiply = (o, n) => {
  if (n >= 0) {
    return ({ angle: o.angle, magnitude: o.magnitude * n })
  } else {
    return ({ angle: o.angle + Math.PI, magnitude: o.magnitude * -n })
  }
}
const addGrav = (obj, array) => {
  const gravAttraction = (o1, o2) => {
    // currently nonfunctional, need to figure out how to get angle between the two objects.
    const distance = Math.hypot(Math.abs(o1.centerX - o2.centerX), Math.abs(o1.centerX - o2.centerX))
    const angle = Math.atan2(o2.y - o1.y, o2.x - o1.x)
    if (distance === 0) {
      return vector(0, 0)
    } else {
      return vector(angle, (o1.mass * o2.mass * 6.6743e-11) / distance ** 2)
    }
  }
  for (const element of array) {
    obj.actingForce.push(gravAttraction(obj, element))
  }
}

const addNumVectors = (a, mode) => {
  if (mode === 'degrees') {
    const r = a.reduce((acc, x) => add2Vectors([acc, x]), vector(0, 0))
    r.angle = r.angle * 180 / Math.PI
    return r
  } else {
    return a.reduce((acc, x) => add2Vectors([acc, x]), vector(0, 0))
  }
}

// shape/object manipulation
const ObjArray = []
let CoordsArray = []

const getBoundOfObject = (shape) => {
  let currX = 0;
  let currY = 0;
  let array = []
  let n;
  for (let i = 0; i < shape.sides.length; i++) {
    let rotatedSideCords = rotate(shape.centerX, shape.centerY, shape.centerX + shape.sides[i].xAdd, shape.centerY + shape.sides[i].yAdd, shape.rotation)
    let numOfSidePixels = Math.floor(Math.sqrt(shape.sides[i].xAdd ** 2 + shape.sides[i].yAdd ** 2))
    let xAddperpix = (rotatedSideCords[0] - shape.centerX) / numOfSidePixels
    let yAddperpix = (rotatedSideCords[1] - shape.centerY) / numOfSidePixels

    for (n = 0; n < numOfSidePixels; n++) {
      array.push({ "x": shape.centerX + (currX + (xAddperpix * n)), "y": shape.centerY + (currY + (yAddperpix * n)) })

    }
    currX = currX + (xAddperpix * n);
    currY = currY + (yAddperpix * n);
  }
  return array;
}
// registerOn.. functions are in quotes as they will not work in this environment
//registerOnClick((x,y) =>{
const simulateClick = (x, y) => {
  CoordsArray.push({ x, y })
}
//})


class Shape {
  constructor(mass, actingForces, coordArray) {
    this.startingX = coordArray[0].x
    this.startingY = coordArray[0].y
    this.sides = createSides(coordArray)
    this.mass = mass
    // todo this.centerX =
    // todo this.centerY =  
    this.rotation = 0
    this.actingForce = [addNumVectors(actingForces)]
  }
  clearCoordsArray() {
    CoordsArray = []
  }
}


const createSides = (array) => {
  const returnArray = []
  for (let v = 0; v < array.length - 1; v++) {
    returnArray.push({ xMove: array[v].x - array[v + 1].x, yMove: array[v].y - array[v + 1].y })
  }
  returnArray.push({ xMove: array[array.length - 1].x - array[0].x, yMove: array[array.length - 1].y - array[0].y })
  return returnArray
}
//registerOnKeyDown((Space)=>{
const simulateSpacePress = (mass, actingforces) => {
  ObjArray.push(new Shape(mass, actingforces, CoordsArray))
}
//})

// draw on canvas and make changes to shapes
const drawShape = (shape) => {
  let rotaionalPercent = shape.rotation;
  let currX = shape.x;
  let currY = shape.y;
  for (let i = 0; i < shape.sides.length; i++) {
    drawLine(currX, currY, currX + shape.sides[i].xAdd, currY + shape.sides[i].yAdd, 'black', ctx);
    currX += shape.sides[i].xAdd;
    currY += shape.sides[i].yAdd;
  }
}

const drawFrame = (time) => {
  if (time > next) {

    clear();
    for (const element of ObjArray) {
      addGravity(element, ObjArray)
      addNumVectors(element.actingForce)
      const objectBound = element.getBoundOfObject();
      console.log(objectBound);

      element.drawShape();
      element.rotation = countFrame * 1;
      next += 10;
      countFrame++;
    }
  }
}

//animate(drawFrame)

//pts is an array of objects, each having a x and y value
/*
const findCentroid = (pts) => {
  let off = pts[0];
  let twicearea = 0;
  let x = 0;
  let y = 0;
  let p1, p2;
  let f;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    p1 = pts[i];
    p2 = pts[j];
    f = (p1.lat - off.lat) * (p2.lng - off.lng) - (p2.lat - off.lat) * (p1.lng - off.lng);
    twicearea += f;
    x += (p1.lat + p2.lat - 2 * off.lat) * f;
    y += (p1.lng + p2.lng - 2 * off.lng) * f;
  }
  f = twicearea * 3;
  return ({ centerX: x / f + off.lat, centerY: y / f + off.lng });
}
*/

/*
const sigma = (start, end) => {
  const length = end - start + 1
  return Array(length).fill().map((_, i) => i).map(i => modifier).reduce((acc, x) => acc + x, 0)
}
*/

const sigma = (start, end, funct) => {
  let sum = 0
  for (let n = start; n <= end; n++) {
    sum += funct(n)
  }
  return sum
}

const findCentroid = (pts) => {
  const area = (sigma(0, pts.length - 1, i => (pts[i].x * pts[i + 1].y) - (pts[i + 1].x * pts[i].y))) / 2
  const x = (sigma(0, pts.length - 1, i => (pts[i].x + pts[i + 1].x) * ((pts[i].x * pts[i + 1].y) - (pts[i + 1].x * pts[i].y)))) / (6 * area)
  const y = (sigma(0, pts.length - 1, i => (pts[i].y + pts[i + 1].y) * ((pts[i].x * pts[i + 1].y) - (pts[i + 1].x * pts[i].y)))) / (6 * area)
  return ({x, y})
}

console.log(findCentroid([{ x: 114, y: 86 }, { x: 123, y: 128 }, { x: 147, y: 170}, { x: 188, y: 207 }, { x: 277, y: 236 }, { x: 310, y: 233 }, 
{ x: 338, y: 215 }, { x: 358, y: 192 }, { x: 375, y: 163 }, { x: 388, y: 124}, { x: 393, y: 76 }, { x: 391, y: 64 }, { x: 247, y: 31 }]))