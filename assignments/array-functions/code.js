const timesTable = (rows, columns) => {
  const numbers = Array(rows).fill().map((_, i) => i + 1)
  for (i = 0; i <= columns; i++) {
    const print = numbers.map(x => x * element)
    console.log(print)
  }
}
timesTable(9, 9)