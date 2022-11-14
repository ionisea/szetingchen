// For a change of pace, I'm providing you with all the function skeletons. This
// should save you some time.

const area = (rect) => {
  return rect.width * rect.height
};

const higherPaid = (e1, e2) => {
  return ({ salary: (Math.max(e1.salary, e2.salary)) })
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

};

const sums = (n) => {
  let sumsArray = []
  for (x = 0; x < n; x++) {
    sumsArray.push(x)
  }
};

const rule110 = (cells) => {
};
