/*
 * Important facts about the birds of Booleana.
 *
 * Coloration and markings:
 *
 *   - Flobby Birds and Bloggy Birds are red.
 *   - Flibble Birds and Globby Birds are not red.
 *   - Flobby Birds and Flibble Birds are spotted.
 *   - Bloggy Birds and Globby Birds are not spotted.
 *
 * Diet:
 *
 *   - Flobby Birds eat fish, nuts, and worms.
 *   - Bloggy Birds eat mice, nuts, and worms.
 *   - Flibble Birds eat fish, mice, and worms.
 *   - Globby Birds eat fish, mice, and nuts.
 *
 */

const isFlobbyBird = (isBirdRed, isBirdSpotted) => {
  return isBirdRed&&isBirdSpotted
}

function isBloggyBird (isBirdRed, isBirdSpotted) {
  return isBirdRed&&!isBirdSpotted
}

const isFlibbleBird = (isBirdRed, isBirdSpotted) => {
  return !isBirdRed&&isBirdSpotted
}

const isGlobbyBird = (isBirdRed, isBirdSpotted) => {
  return !isBirdRed&&!isBirdSpotted
}

const eatsWorms = (isBirdRed, isBirdSpotted) => {
  return isBirdRed||isBirdSpotted
}

const eatsNuts = (isBirdRed, isBirdSpotted) => {
  return isBirdRed||!isBirdSpotted
}

const eatsFish = (isBirdRed, isBirdSpotted) => {
  return !isBirdRed||isBirdSpotted
}

const eatsMice = (isBirdRed, isBirdSpotted) => {
  return !isBirdRed||!isBirdSpotted
}

function isRed (Flobby, Bloggy, Flibble, Globby) {
  b1 = Flobby
  b2 = Bloggy
  b3 = Flibble
  b4 = Globby
  return b1 || b2 &&! b3 &&! b4
}
