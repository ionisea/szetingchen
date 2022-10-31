const player1 = 'X'
const player2 = 'O'

drawFilledRect(0, 0, width, height, 'rgba(115,175,255,1)')
const coordArray = [
  [[''], [''], ['']],
  [[''], [''], ['']],
  [[''], [''], ['']],
]
const max = Math.max(width, height)
const min = Math.min(width, height)
for (let editConst = 1 / 3; editConst < 1; editConst += 1 / 3) {
  drawLine(max / 2 - min / 2 + min * editConst, height, max / 2 - min / 2 + min * editConst, 0, 'black', 5)
  drawLine(max / 2 - min / 2, height * editConst, max / 2 + min / 2, height * editConst, 'black', 5)
}

let gameOver = false;
const isGameOver = (array) => {
  let moves;
  for (const element of array) {
    if (element == ! '') {
      moves += 0
    } else {
      moves++
    }
  }
  if (moves = 9) {
    gameOver = true
  }
}

if (gameOver = true) {
  console.log('ree')
}

let xPos;
let yPos;
let player = player1;
registerOnclick((x, y) => {
  if (x < max / 2 - min / 2 || x > max / 2 + min / 2) {
    /* this is the gambling machine
    let ree = 0;
    let yee = 0;
    let pee = 1;
    let lee = 1;
    for (let i = 0; i < 500000000; i++) {
      ree = Math.random()
      yee < ree ? yee = ree : 0
    }
    for (let i = 0; i < 500000000; i++) {
      pee = Math.random()
      lee > pee &&! pee == 0? lee = pee : 0
    }
    console.log(yee/lee)
    */
    drawText('🦖 yee', x - height / 3, y + height / 6, 'yellow', height / 2)
  } else {
    y < 1 / 3 * height ? yPos = 0 : y < 2 / 3 * height ? yPos = 1 : yPos = 2;
    x < max / 2 - min / 6 ? xPos = 0 : x < max / 2 + min / 6 ? xPos = 1 : xPos = 2
    if (coordArray[yPos][xPos] == '') {
      coordArray[yPos][xPos].pop()
      coordArray[yPos][xPos].push(player)
      console.log('coords: ', x, y)
      drawText(player, max / 2 - min / 2 - min * 0.15 + min / 6 + (min * xPos / 3), min * 0.11 + min / 6 + min * yPos / 3, 'black', min * 0.3)
      player == player1 ? player = player2 : player = player1;
      console.log(coordArray)
      isGameOver(coordArray);
    }
  }
});
