const squares = (num) => {
  const numbers = []
  for (let x = 1; x < num + 1; x++) {
    numbers.push (x)
  }
  for (const element of numbers) {
    console.log(element*element)
  }
}
squares(300);