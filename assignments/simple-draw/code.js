drawFilledRect (0, 0, 500,600, 'rgba(115,215,255,1)')
var rect = 1000
while (rect>= 2*height/3) {
  drawLine (0, rect, width, rect, 'rgba(0,128,0, 1', 0)
  var rect = rect - 1
  drawLine (0, rect, width, rect, 'rgba(0,128,0, 1', 0)
  var rect = rect - 2
  drawLine (0, rect, width, rect, 'rgba(0,128,0, 1', 0)
  var rect = rect - 4
}
