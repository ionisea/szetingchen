const array = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]
  const slotCycle = (array) =>{
    const max = 9000001
    const min = 10000
    const thisArray = array
    thisArray[0].map(x => x=Math.floor(Math.random() * (max - min) + min);)
    thisArray[1] = array[0]
  }