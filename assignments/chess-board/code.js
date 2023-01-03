const WHITE_KING = '♔';
const WHITE_QUEEN = '♕';
const WHITE_ROOK = '♖';
const WHITE_BISHOP = '♗';
const WHITE_KNIGHT = '♘';
const WHITE_PAWN = '♙';
const BLACK_KING = '♚';
const BLACK_QUEEN = '♛';
const BLACK_ROOK = '♜';
const BLACK_BISHOP = '♝';
const BLACK_KNIGHT = '♞';
const BLACK_PAWN = '♟';

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

const boardSide = Math.min(width, height)
const squareSide = boardSide / 8
const widthExtra = (width - boardSide) / 2
const heightExtra = (height - boardSide) / 2
drawFilledRect(Math.max(widthExtra, heightExtra), 0, boardSide, boardSide, 'black')
for (let i = 0; i < 8; i++) {
  for (let j = i % 2; j < 8; j += 2) {
    drawFilledRect(j * squareSide + widthExtra, i * squareSide + heightExtra, squareSide, squareSide, 'white')
  }
}

drawText(WHITE_KING, 0, 0, 'black', 64);
drawText(WHITE_QUEEN, width / 2, height / 2, 'black', 64);
drawText(WHITE_ROOK, width / 2, height / 2, 'black', 64);
drawText(WHITE_KNIGHT, width / 2, height / 2, 'black', 64);
drawText(WHITE_BISHOP, width / 2, height / 2, 'black', 64);
drawText(WHITE_PAWN, width / 2, height / 2, 'black', 64)

drawText(BLACK_KING, width / 2, height / 2, 'black', 64);
drawText(BLACK_QUEEN, width / 2, height / 2, 'black', 64);
drawText(BLACK_ROOK, width / 2, height / 2, 'black', 64);
drawText(BLACK_KNIGHT, width / 2, height / 2, 'black', 64);
drawText(BLACK_BISHOP, width / 2, height / 2, 'black', 64);
drawText(BLACK_PAWN, width / 2, height / 2, 'black', 64);