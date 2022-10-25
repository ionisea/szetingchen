drawFilledRect (0, 0, width, height, 'rgba(115,200,255,1)')
const coordArray = [
  [[], [], []],
  [[], [], []],
  [[], [], []],
]
const max = Math.max(width, height)
const min = Math.min(width, height)

for (let editConst = 0; editConst <= 1; editConst += 1 / 3) {
  drawLine(max / 2 - min / 2 + min * editConst, height, max / 2 - min / 2 + min * editConst, 0, 'maroon', 5)
  drawLine(max / 2 - min / 2, height * editConst, max / 2 + min / 2, height * editConst, 'maroon', 5)
}
let turns = 0;
let xPos;
let yPos;
let player = '⬜';
registerOnclick((x, y) => {
  if (turns < 9) {
    if (x < max / 2 - min / 2 || x > max / 2 + min / 2) {
      return console.log('dumbass')
    }
    y < 1 / 3 * height ? yPos = 0 : y < 2 / 3 * height ? yPos = 1 : yPos = 2;
    x < max / 2 - min / 6 ? xPos = 0 : x < max / 2 + min / 6 ? xPos = 1 : xPos = 2
    if (coordArray[yPos][xPos] == '') {
      coordArray[yPos][xPos].push(player)
      turns++
      console.log('turn: ' + turns, 'coords: ', x, y)
      drawText(player, max / 2 - min / 2 - min * 0.15 + min / 6 + (min * xPos / 3), min * 0.11 + min / 6 + min * yPos / 3, 'black', min * 0.3)
      player == '⬜' ? player = '⬛' : player = '⬜';
      console.log(coordArray)
    }
  }
});
