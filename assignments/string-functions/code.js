const findFnord = (s) => {
  return s.search("fnord")
}

const stringContains = (s1, s2) => {
  return s1.search(s2) != -1
}

const firstAndLast = (s) => {
  return s[0] + s[s.length - 1]
}

const swapFrontAndBack = (s) => {
  return s.substring(s.length / 2) + s.substring(0, s.length / 2)
}

const simplePigLatin = (s, num) => {
  return s.substring(num) + s.substring(0, num) + 'ay'
}

const isAllUpperCase = (s) => {
  return s.search(/[abcdefghijklmnopqrstuvwxyz]/) == -1
}

const sameIgnoringCase = (s1, s2) => {
  return s1.toLowerCase() == s2.toLowerCase()
}

const firstHalf = (s) => {
  return s.substring(0, s.length / 2)
}

const secondHalf = (s) => {
  return s.substring(s.length / 2)
}

const upDown = (s) => {
  return s.toUpperCase() + s.toLowerCase()
}

const everyOther = (s) => {
  return s[0] + s[2] + s[4]
}

const upDownLastCharacter = (s) => {
  return s[s.length-1].toUpperCase() + s[s.length-1].toLowerCase()
}

const firstName = (s) => {
  //const space = s.search (/[ ]/)
  return s.substring (0, s.search(/[ ]/))
}

