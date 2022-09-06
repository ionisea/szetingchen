drawFilledRect (0, 0, 500,600, 'rgba(115,215,255,1)')
drawFilledRect (0,(2*height/3)+(height/6), width, (2*height/3), 'rgba(0, 64, 0, 1')
var rect = 1000
while (rect>= 2*height/3) {
  drawLine (0, rect, width, rect, 'rgba(0,128,0, 1', 0)
  var rect = rect - 2
  while (rect >= 3*height/4){
  drawLine (0, rect, width, rect, 'rgba(0,128,0, 1', 0)
   var rect = rect - 1
  }
}
drawFilledCircle (0,0, 100,'rgba(250,253,15,1)')