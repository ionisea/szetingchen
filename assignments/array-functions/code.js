const timesTable = (rows) => {
  const numbers = Array(rows).fill().map((_, i) => i + 1)
  for (const element of numbers) {
    const print = numbers.map(x => x * element)
    console.log(print)
  }
}
timesTable(3)