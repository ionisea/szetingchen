// Some constants you will need. No need to do anything to these
const JUPITER_GRAVITY = 24.79;
const EARTH_GRAVITY = 9.8;
const G = 6.6743e-11;

// Write your code here. Remember that you get partial credit for a
// syntactically correct function skeleton, more credit for a skeleton with a
// reasonable argument list, yet more credit for a working function, and full
// credit for a clear and simple working function.

const itemsLeftOver = (people, items) => {
  return people % items
}

const areaOfCircle = (radius) => {
  return (radius ** 2) * Math.PI
}

const areaOfCube = (sideLength) => {
  return sideLength ** 3
}

const populationGrowth = (size, rate) => {
  return size * rate
}

const earnedRunAverage = (earnedRuns, innings) => {
  return (earnedRuns / innings) * 9
}

const valueOfJewels = (diamonds, emeralds, diaGold, emeGold) => {
  return (diamonds * diaGold) + (emeralds * emeGold)
}

const payWithOvertime = (hours, hourlyRate, overtimeRate) => {
  if (hours > 8) {
    return (8 * hourlyRate) + ((hours - 8) * overtimeRate)
  } else {
    return (8 - hours) * hourlyRate
  }
}

const firstClassPostage = (weight) => {
  return 60 + (24 * Math.ceil(weight - 1))
}

const weightOnJupiter = (weight) => {
  return weight * (JUPITER_GRAVITY/EARTH_GRAVITY)
}

const gravity = (mass1, mass2, distance) => {
  return G*((mass1*mass2)/(distance**2))
}