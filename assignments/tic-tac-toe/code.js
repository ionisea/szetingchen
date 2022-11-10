const player1 = 'X'
const player2 = 'O'

//drawFilledRect(0, 0, width, height, 'rgba(115,175,255,1)')
const coordArray = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
]

const max = Math.max(width, height)
const min = Math.min(width, height)
const end1 = max / 2 - min / 2
const end2 = max / 2 + min / 2
for (let editConst = 1 / 3; editConst < 1; editConst += 1 / 3) {
  drawLine(max / 2 - min / 2 + min * editConst, height, max / 2 - min / 2 + min * editConst, 0, 'black', 5)
  drawLine(max / 2 - min / 2, height * editConst, max / 2 + min / 2, height * editConst, 'black', 5)
}

const winnerLine = (win) => {
  if (win == undefined) {
    return 'No Winner'
  } else if (win.winType == 'h') {
    drawLine(end1, win.winLoca * (min / 3) + min / 6, end2, win.winLoca * (min / 3) + (min / 6), 'black', 8)
  } else if (win.winType == 'v') {
    drawLine(win.winLoca * (min / 3) + max / 2 - min / 2 + min / 6, 0, win.winLoca * (min / 3)  + max / 2 - min / 2 + min / 6, min, 'black', 8)
  } else if (win.winType == 'd') {
    if (win.winLoca == 0) {
      drawLine(end1, 0, end2, min, 'black', 8)
    } else if (win.winLoca = 1) {
      drawLine(end2, 0, end1, min, 'black', 8)
    }
  }
}

let winner;
const isWinner = (player) => {
  for (let p = 0; p <= 2; p++) {
    if ((coordArray[p][0] == player) && (coordArray[p][1] == player) && (coordArray[p][2] == player)) {
      winner = ({ player: player, winType: 'h', winLoca: p })
    } else if ((coordArray[0][p] == player) && (coordArray[1][p] == player) && (coordArray[2][p] == player)) {
      winner = ({ player: player, winType: 'v', winLoca: p })
    }
  }
  if ((coordArray[0][0] == player) && (coordArray[1][1] == player) && (coordArray[2][2] == player)) {
    winner = ({ player: player, winType: 'd', winLoca: 0 })
  } else if ((coordArray[0][2] == player) && (coordArray[1][1] == player) && (coordArray[2][0] == player)) {
    winner = ({ player: player, winType: 'd', winLoca: 1 })
  }
  return winner
}

let xPos;
let yPos;
let player = player1;
let turns = 0
registerOnclick((x, y) => {
  if (x < max / 2 - min / 2 || x > max / 2 + min / 2) {
    drawText('🦖 yee', x - height / 3, y + height / 6, 'yellow', height / 2)
  } else {
    y < 1 / 3 * height ? yPos = 0 : y < 2 / 3 * height ? yPos = 1 : yPos = 2;
    x < max / 2 - min / 6 ? xPos = 0 : x < max / 2 + min / 6 ? xPos = 1 : xPos = 2
    if (coordArray[yPos][xPos] == '' && winner == undefined && turns < 9) {
      coordArray[yPos][xPos] = player
      drawText(player, max / 2 - min / 4 + (min * xPos / 3), min * 0.11 + min / 6 + min * yPos / 3, 'black', min * 0.3);
      winnerLine(isWinner(player))
      player == player1 ? player = player2 : player = player1
      turns++
      if (winner == undefined && turns === 9) {
        drawText('Draw', max / 2 )
      }
    }
  }
});