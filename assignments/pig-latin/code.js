const v = s.search(/[aeiou]/)

const pigLatin = (s) => {
  return s.substring(v, s.length) + s.substring(0, v) + 'ay'
}

const advancedPigLatin = (s) => {
  return v === 0 ? s + 'way' : s.substring(v, s.length) + s.substring(0, v) + 'ay'
}