
const c = document.getElementById("canvas");
console.log(c.clientHeight)

const timeTillUpdate = 1000
let next = 0;
let array1 = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]



const slotCycle = (array) => {
  const thisArray = JSON.parse(JSON.stringify(array));
  const firstRow = thisArray[0].map(x => x = (Math.round(Math.random() * 100)))
  thisArray[0] = firstRow
  thisArray[1] = array[0]
  thisArray[2] = array[1]
  return thisArray;
}

const drawSlot = (array) => {
  let color = "black"
  const size = 100;
  for (let y = 0; y < array.length; y++) {
    for (let x = 0; x < array[0].length; x++) {
      color = array[y][x] >= 60 && array[y][x] <= 80 ? 'red' : "black"
      drawText(array[y][x].length === 1 ? array[y][x] + "  " : array[y][x] + " ", x * size, size + y * size, size, color)
    }
  }

}

const drawFrame = (time) => {
  if (time > next) {
    clear();
    array1 = slotCycle(array1)
    drawSlot(array1)
    next += timeTillUpdate;
  }
}

animate(drawFrame)



