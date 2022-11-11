const WHITE_KING   = '♔';
const WHITE_QUEEN  = '♕';
const WHITE_ROOK   = '♖';
const WHITE_BISHOP = '♗';
const WHITE_KNIGHT = '♘';
const WHITE_PAWN   = '♙';
const BLACK_KING   = '♚';
const BLACK_QUEEN  = '♛';
const BLACK_ROOK   = '♜';
const BLACK_BISHOP = '♝';
const BLACK_KNIGHT = '♞';
const BLACK_PAWN   = '♟';

// Example of drawing one of the pieces
drawText(WHITE_KING, width/2, height/2, 'black', 64);

const chessArray = [
  ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
  ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
  ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'],
]

const checkerboard = (color1, color2) => {
  const bigSquareSide = Math.min(width, height)
  const squareSide = bigSquareSide / 8
  const widthExtra = (width - bigSquareSide) / 2
  const heightExtra = (height - bigSquareSide) / 2
  drawFilledRect(Math.max(widthExtra, heightExtra), 0, bigSquareSide, bigSquareSide, color1)
  for (let i = 0; i < 8; i++) {
    for (let j = i % 2; j < 8; j += 2) {
      drawFilledRect(j * squareSide + widthExtra, i * squareSide + heightExtra, squareSide, squareSide, color2)
    }
  }
}
checkerboard('black', 'white');