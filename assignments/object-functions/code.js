const getX = (o) => {
  return o['x']
}

const point = (n1, n2) => {
  return {"x" : n1, "y" : n2}
}

const emptyObject = () => {
  return {}
}

const distance = (o1, o2) => {
  return Math.sqrt((o1['x'])**2 + (o2['x'])**2)
}