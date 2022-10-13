const timesTable = (row) => {
  const numbers = []
  for (let x = 0; x < row + 1; x++) {
    numbers.push (x)
  }
  for (const element of numbers) {
    console.log(element * row)
  }
}
timesTable(9);