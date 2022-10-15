const timesTable = (rows, columns) => {
  const numbers = Array(rows).fill().map((_, i) => i + 1)
  for (let i = 1; i <= columns; i++) {
    const print = numbers.map(x => x * i)
    console.log(print)
  }
}
//timesTable(9, 9)

const countTens = (array) => {
  for (const element in array) {
    let count = 0
    if (element === 10) {
      count += 1
    }
  }
  return count
}