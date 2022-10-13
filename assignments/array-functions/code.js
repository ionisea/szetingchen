const timesTable = (row) => {
  const numbers = []
  for (let x = 0; x < row + 1; x++) {
    numbers.push (x)
  }
  for (const element of numbers) {
    const print = numbers.map(element * row)
      console.log (print)
  }
}
timesTable(10);