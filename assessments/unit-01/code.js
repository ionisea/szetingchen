// You will use this function in one of the problems. You don't need to change
// it or even worry about how exactly it works.
const emit = (a, b, product) => {
  console.log(`${a} times ${b} is ${product}`);
};

// Write your code here ...
const averageWeight = (totalWeight, numItems) => {
  return (totalWeight/numItems)
}

const hypotenuse = (a, b) => {
  return Math.sqrt(a**2 + b**2)
}

const maxRadius = (widthOfArea, heightOfArea) => {
  return (Math.min (widthOfArea, heightOfArea))/2
}

const numCircles = (radius, widthOfArea) => {
  return Math.floor (widthOfArea/radius)
}

const offset = (widthOfArea, widthOfFigure) => {
  return (widthOfArea-((Math.floor(widthOfArea/widthOfFigure))*widthOfFigure))/2
}

const canSleepIn = (isWeekday, onVacation) => {
  return !isWeekday || onVacation
}

const canGoToProm = (isASenior, invitedBySenior, onExclusionList) => {
  return isASenior || invitedBySenior &&! onExclusionList
}

const getsSpeedingTicket = (mph, isCopGrouchy) => {
  if (isCopGrouchy === true) {
    if (mph > 65) {
      return true
    } else {
      return false
    }
  } else {
    if (mph > 70) {
      return true
    } else {
      return false
    }
  }
}

const moreThanTwiceAsLong = (a, b) => {
  if (a.length > (b.length)*2) {
    return true
  } else {
    return false
  }
}

const aFartherThanB = (a, b, c) => {
  if (Math.abs (a-c) > Math.abs (b-c)) {
    return true
  } else {
    return false
  }
}

const firstHalf = (s) => {
  return s.substring (0, Math.floor(s.length/2))
}

const secondHalf = (s) => {
  return s.substring (Math.floor(s.length/2), s.length)
}

const upDown = (s) => {
  return (s.substring(0, s.length).toUpperCase + s.subtring(0, s.length).toLowerCase)
}