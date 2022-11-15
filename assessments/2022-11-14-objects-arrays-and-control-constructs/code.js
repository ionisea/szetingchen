// For a change of pace, I'm providing you with all the function skeletons. This
// should save you some time.

const area = (rect) => {
  return rect.width * rect.height
};

const higherPaid = (e1, e2) => {
  if (e1.salary > e2.salary) {
    return e1
  } else {
    return e2
  }
};

const isSamePoint = (p1, p2) => {
  return p1 === p2
};

const totalWithTip = (bill, tipPercentage) => {
  return ({ subtotal: bill, tip: bill * tipPercentage, total: bill + (bill * tipPercentage) })
};

const isWinner = (player) => {
  return player.score > 100
};

const updateWins = (players) => {
  for (const element of players) {
    if (isWinner(element) === true) {
      element.wins = 1
    }
  }
  return undefined
};

const bigWinners = (players) => {
  return players.map(x => x.wins > 10)
};

const fillTimesTable = (table) => {
  for (let x = 0; x < table.length; x++) {
    for (let y = 0; y < table.length; y++) {
      table[x][y] = (x + 1) * (y + 1)
    }
  }
  return table
};

const sums = (n) => {
  let sumsArray = []
  let numbers = 0
  for (let x = 0; x < n + 1; x++) {
    numbers += x
    sumsArray.push(numbers)
  }
  return sumsArray
};

const rule110 = (cells) => {
  const array = Array(cells.length).fill(1)
  return array
};
