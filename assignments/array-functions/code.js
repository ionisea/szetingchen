const timesTable = (row) => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  for(const element of numbers) {
    console.log(element * row)
  }
};
timesTable (9);