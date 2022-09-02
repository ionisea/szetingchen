drawFilledRect (0, 0, 500,600, 'rgba(115,215,255,1)')
var rect = 1000
while (3*height/4<=rect>= 2*height/3) {
  drawLine (0, rect, width, rect, 'rgba(0,128,0, 1', 0)
  var rect = rect - 4
  drawLine (0, rect, width, rect, 'rgba(0,128,0, 1', 0)
  var rect = rect - 2
    while (rect >= 3*height/4){
      drawLine (0, rect, width, rect, 'rgba(0,128,0, 1', 0)
     var rect = rect - 1
    }
}
