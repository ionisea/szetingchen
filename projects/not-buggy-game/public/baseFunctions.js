
const c = document.getElementById("canvas");
const ctx = c.getContext("2d");
const width = screen.width
const height = screen.height
const startTime = new Date();
let mouseX = null
let mouseY = null
const ThisCallFunc = null

const animate = (drawFrame) => {
  let running = true;

  const step = () => {
    drawFrame(performance.now());
    maybeStep();
  };

  const maybeStep = () => {
    if (running) {
      requestAnimationFrame(step);
    }
  };

  document.documentElement.onclick = (e) => {
    running = !running;
    maybeStep();
  };

  maybeStep();
};
c.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});
c.addEventListener("click", () =>{
  ThisCallFunc(mouseX, mouseY)
});

const registerOnClick = (callFunc) =>{
  ThisCallFunc = callFunc(mouseX, mouseY);
}

const drawLine = (x1, y1, x2, y2, color) => {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

const drawRect = (x1, y1, width, height, color) => {
  drawLine(x1, y1, x1 + width, y1, color);
  drawLine(x1 + width, y1, x1 + width, y1 + height, color);
  drawLine(x1 + width, y1 + height, x1, y1 + height, color);
  drawLine(x1, y1 + height, x1, y1, color);
}

const drawFilledRect = (x1, y1, side1, side2, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x1, y1, side1, side2);
}

const drawTriangle = (x1, y1, x2, y2, x3, y3, color) => {
  drawLine(x1, y1, x2, y2, color);
  drawLine(x2, y2, x3, y3, color);
  drawLine(x3, y3, x1, y1, color);
};

const drawFilledCircle = (x, y, size, color) => {
  ctx.fillStyle = color;
  ctx.arc(x, y, size, 0, Math.PI * 2, false);
  ctx.fill()
}

const drawText = (text, x, y, size) =>{
  ctx.fillText(text, x, y, size);
}

const clear = () =>{
  ctx.clearRect(0, 0, width, height)
}

//drawFilledCircle(100, 100, 10, "blue")
//drawLine(0, 0, 100, 20, 'red')
//drawRect(100, 100, 200, 100, 'red')
//drawFilledRect (200, 200, 100, 100, 'red')
//drawTriangle(100, 300, 500, 300, 250, 200, 'black')
//clear();