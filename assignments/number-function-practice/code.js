const array1 = [
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  ['X', 'O', 'X'],
]
array1.pop()
//console.log(array1[2][2])

const timesTable = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
]
const row2 = timesTable[1].map(x => x * 2)
const row3 = timesTable[2].map(x => x * 3)
const row4 = timesTable[3].map(x => x * 4)
const row5 = timesTable[4].map(x => x * 5)
const row6 = timesTable[5].map(x => x * 6)
const row7 = timesTable[6].map(x => x * 7)
const row8 = timesTable[7].map(x => x * 8)
const row9 = timesTable[8].map(x => x * 9)

console.log (row5 [2])