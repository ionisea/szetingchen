const pigLatin = (s) => {
  let v = s.search(/[aeiou]/)
  return s.substring(v, s.length) + s.substring(0, v) + 'ay'
}

const advancedPigLatin = (s) => {
  let v = s.search(/[aeiou]/)
  return v === 0 ? s + 'way' : s.substring(v, s.length) + s.substring(0, v) + 'ay'
}