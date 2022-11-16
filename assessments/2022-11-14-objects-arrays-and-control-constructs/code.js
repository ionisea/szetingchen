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
  return (p1.x = p2.x) && (p1.y = p2.y)
};

const totalWithTip = (bill, tipPercentage) => {
  return ({ subtotal: bill.subtotal, tip: bill.subtotal * tipPercentage, total: bill.subtotal + (bill.subtotal * tipPercentage) })
};

const isWinner = (player) => {
  return player.score > 100
};

const updateWins = (players) => {
  for (const element of players) {
    if (isWinner(element)) {
      element.wins++
    }
  }
};

const bigWinners = (players) => {
  return players.filter(x => x.wins > 10)
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
  const zeroArray = [0]
  const reference = zeroArray.concat(cells).concat(zeroArray)
  const array = Array(reference).fill(1)
  for (let i = 1; i < cells.length + 1; i++) {
    if (reference[i - 1] === 0 && reference[i] === 0 && reference[i + 1] === 0) {
      array[i] = 0
    } else if (reference[i - 1] === 1 && reference[i] === 0 && reference[i + 1] === 0) {
      array[i] = 0
    } else if (reference[i - 1] === 1 && reference[i] === 1 && reference[i + 1] === 1) {
      array[i] = 0
    } 
  }
  return array
};
