// This is a bit of a new thing. registerOnclick is a function provided by the
// framework. But the argument we're passing to it is *another* function. Notice
// how the argument here looks like what we normally put on the righthand side
// of the equals sign in our normal `const foo = ...` function definition. This
// is called an anonymous function. We'll discuss this in more detail in a few
// weeks but for now you can just adapt this code.

const min = Math.min(width, height)
const max = Math.max(width, height)

drawLine (max/2 + (min*0.2), 0, max/2 + (min*0.3), min, 'black', 7)
drawLine (max/2 - (min*0.2), 0, max/2 - (min*0.3), min, 'black', 7)
let player = 'X'
registerOnclick((x, y) => {
  drawText(player, x-25, y+25, 'black', Math.min(width, height) * 0.3);
  player == 'X' ? player = 'O' : player = 'X'
});