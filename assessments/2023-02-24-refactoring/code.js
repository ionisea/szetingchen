const drawBackground = (horizon) => {
  drawFilledRect(0, 0, width, horizon, '#ddeeff');
  drawFilledRect(0, horizon, width, height, 'white');
  drawLine(0, horizon, width, horizon, '#bbb');
};

const drawHead = (x, headRadius, headY) => {
  drawCircle(x, headY, headRadius + 2, 'black', 3);
  drawFilledCircle(x, headY, headRadius, 'white', 3);
};

const drawEyes = (x, headRadius, headY) => {
  const eyeSpacing = headRadius * 0.25;
  drawFilledCircle(x - eyeSpacing, headY - eyeSpacing, 4, 'black');
  drawFilledCircle(x + eyeSpacing, headY - eyeSpacing, 4, 'black');
};

const drawNose = (x, headRadius, headY) => {
  const noseLength = headRadius * 0.8;
  drawFilledTriangle(x, headY, x + noseLength, headY + noseLength * 0.2, x, headY + noseLength * 0.3, 'orange');
};

const drawMouth = (x, headRadius, headY) => {
  for (let i = 0; i < 5; i++) {
    const dy = -2 * (2.1 ** Math.abs(i - 2));
    drawFilledCircle(x - (i - 2.3) * headRadius * 0.21, headY + headRadius * 0.65 + dy, 4, 'black');
  };
};

const drawHat = (x, headRadius, headY) => {
  const brimTop = headY - headRadius * 0.9;
  const brimWidth = headRadius * 2.25;
  const brimHeight = brimWidth * 0.08;
  const hatWidth = brimWidth * 0.7;
  const hatHeight = headRadius * 1.25;
  drawFilledRect(x - brimWidth / 2, brimTop, brimWidth, brimHeight, 'black');
  drawFilledRect(x - hatWidth / 2, brimTop - hatHeight, hatWidth, hatHeight, 'black');
};

const drawTorso = (x, torsoRadius, torsoY) => {
  drawCircle(x, torsoY, torsoRadius + 2, 'black', 3);
  drawFilledCircle(x, torsoY, torsoRadius, 'white', 3);
};

const drawArms = (x, torsoRadius, torsoY) => {
  let x1 = x + torsoRadius * 0.6;
  let x2 = x + torsoRadius * 2.35;
  drawLine(x1, torsoY - torsoRadius * 0.25, x2, torsoY - torsoRadius * 0.85, 'black', 3);
  x1 = x + torsoRadius * 0.6 * -1;
  x2 = x + torsoRadius * 2.35 * -1;
  drawLine(x1, torsoY - torsoRadius * 0.25, x2, torsoY - torsoRadius * 0.85, 'black', 3);
};

const drawButtons = (x, torsoRadius, torsoY) => {
  for (let i = 0; i < 3; i++) {
    drawFilledCircle(x, torsoY - torsoRadius * 0.5 + i * torsoRadius * 0.5, 4, 'black');
  };
};

const drawButt = (x, buttRadius, buttY) => {
  drawCircle(x, buttY, buttRadius + 2, 'black', 3);
  drawFilledCircle(x, buttY, buttRadius, 'white', 3);
};


const drawPicture = (horizon, base, size) => {
  const x = width / 2;
  const proportions = [3, 4, 5];
  const [headP, torsoP, buttP] = proportions;
  const total = proportions.reduce((tot, p) => tot + p, 0);

  const headSize = size * (headP / total);
  const torsoSize = size * (torsoP / total);
  const buttSize = size * (buttP / total);

  const headRadius = headSize / 2;
  const torsoRadius = torsoSize / 2;
  const buttRadius = buttSize / 2;

  const headY = (base - size) + headSize / 2;
  const torsoY = headY + headSize / 2 + torsoSize / 2;
  const buttY = torsoY + torsoSize / 2 + buttSize / 2;

  drawBackground(horizon);
  drawHead(x, headRadius, headY);
  drawEyes(x, headRadius, headY);
  drawNose(x, headRadius, headY);
  drawMouth(x, headRadius, headY);
  drawHat(x, headRadius, headY);
  drawTorso(x, torsoRadius, torsoY);
  drawArms(x, torsoRadius, torsoY);
  drawButtons(x, torsoRadius, torsoY);
  drawButt(x, buttRadius, buttY);
};

drawPicture(height * 0.7, height * 0.9, height * 0.7);