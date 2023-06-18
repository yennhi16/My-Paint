const subHeaderDown = document.querySelector("#sub-header-item-down");
let subHeaderMenuDown = document.querySelector(".sub-header-down");

const tabNameFile = document.querySelector("#tabNameFile");
const fileMenu = document.querySelector(".file-menu");
subHeaderDown.addEventListener("click", function () {
  if (subHeaderMenuDown.style.display === "none") {
    // Nếu box đang ẩn, hiển thị box
    subHeaderMenuDown.style.display = "block";
  } else {
    // Nếu box đang hiển thị, ẩn box
    subHeaderMenuDown.style.display = "none";
  }
});

// ==============================================
// ==============================================
const tabHome = document.querySelector("#tabNameHome");

const tabView = document.querySelector("#tabNameView");

const tabNames = document.querySelectorAll(".tool-name-left-item");

const toolHome = document.querySelector(".toolHome-cantainer");

const iconShowStatusBar = document.querySelector("#icon-show-status");

const toolView = document.querySelector(".toolView");

const iconHideStatusBar = document.querySelector("#icon-hide-status");
tabHome.addEventListener("click", function () {
  if (tabView.classList.contains("active-tool")) {
    tabView.classList.remove("active-tool");
  }
  tabHome.classList.add("active-tool", "active-tab");
  toolView.style.display = "none";
  toolHome.style.display = "flex";
});
tabView.addEventListener("click", function () {
  if (tabHome.classList.contains("active-tool")) {
    tabHome.classList.remove("active-tool");
  }
  tabView.classList.add("active-tool", "active-tab");
  toolView.style.display = "block";
  toolHome.style.display = "none";
});
iconShowStatusBar.addEventListener("click", function () {
  toolView.style.display = "none";
  toolHome.style.display = "none";
  iconHideStatusBar.style.display = "block";
  iconShowStatusBar.style.display = "none";
  tabView.classList.remove("active-tool");
  tabHome.classList.remove("active-tool");
});
iconHideStatusBar.addEventListener("click", function () {
  if (tabView.classList.contains("active-tab")) {
    toolView.style.display = "block";
    tabView.classList.add("active-tool");
    toolHome.style.display = "none";
  } else {
    toolView.style.display = "none";
    toolHome.style.display = "flex";
    tabHome.classList.add("active-tool");
  }

  iconHideStatusBar.style.display = "none";
  iconShowStatusBar.style.display = "block";
});

// ==============================================
// ==============================================

tabNameFile.addEventListener("click", function () {
  // console.log(fileMenu);
  fileMenu.style.display = "block";
});
// ============================
// ============================

var colors = [
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FF00FF", // Mã màu 1-5
  "#FFA500",
  "#800080",
  "#008080",
  "#FFC0CB",
  "#008000", // Mã màu 6-10
  "#FFD700",
  "#00FFFF",
  "#FF4500",
  "#8A2BE2",
  "#00FF7F", // Mã màu 11-15
  "#DC143C",
  "#00CED1",
  "#FF1493",
  "#1E90FF",
  "#c8bfe7", // Mã màu 16-20
  "#f5f6f7",
  "#f5f6f7",
  "#f5f6f7",
  "#f5f6f7",
  "#f5f6f7", // Mã màu 21-25
  "#f5f6f7",
  "#f5f6f7",
  "#f5f6f7",
  "#f5f6f7",
  "#f5f6f7",
]; // Mã màu 26-30];

const listColorDiv = document.querySelector(".list-color");

colors.forEach(function (color) {
  var colorContainer = document.createElement("div");
  colorContainer.classList.add("color-container"); // Class của thẻ div bọc ngoài
  let colorBox = document.createElement("div");
  colorBox.classList.add("color-box");
  colorBox.style.backgroundColor = color;
  colorContainer.appendChild(colorBox);
  listColorDiv.appendChild(colorContainer);
});

const squareColors = document.querySelectorAll(".color-box");

const color1 = document.querySelector(".toolHome-color1");

const color2 = document.querySelector(".toolHome-color2");

let colorCanvas = "#000000";
const favcolor = document.querySelector("#favcolor");
color2.addEventListener("click", () => {
  color1.classList.remove("active-color");
  color2.classList.add("active-color");
});
color1.addEventListener("click", () => {
  color1.classList.add("active-color");
  color2.classList.remove("active-color");
});

for (let i = 0; i < squareColors.length; i++) {
  squareColors[i].addEventListener("click", function (e) {
    // Lấy giá trị backgroundColor của phần tử được nhấp chuột
    const backgroundColor = window.getComputedStyle(e.target).backgroundColor;
    if (color1.classList.contains("active-color")) {
      let color1 = document.querySelector(".color1");
      color1.style.background = backgroundColor;

      console.log(color1);
    } else if (color2.classList.contains("active-color")) {
      let color2 = document.querySelector(".color2");
      color2.style.background = backgroundColor;
      console.log(color2);
    }
    colorCanvas = backgroundColor;

    // In giá trị backgroundColor ra console
  });
}

favcolor.addEventListener("change", (e) => {
  let color = e.target.value;
  if (color1.classList.contains("active-color")) {
    let color1 = document.querySelector(".color1");
    color1.style.background = color;

    console.log(color1);
  } else if (color2.classList.contains("active-color")) {
    let color2 = document.querySelector(".color2");
    color2.style.background = color;
  }
  colorCanvas = color;
  console.log(e.target.value);
});

const paste = document.querySelector("#paste-toolhome");

const pasteMenu = document.querySelector(".paste-toolhome-menu");

paste.addEventListener("click", () => {
  if (paste.classList.contains("active-paste")) {
    paste.classList.remove("active-paste");
  } else {
    paste.classList.add("active-paste");
  }
});

const brushes = document.querySelector(".toolHome-brushes");

const brushesMenu = document.querySelector(".brushes-menu");

brushes.addEventListener("click", () => {
  if (brushes.classList.contains("active-brushes")) {
    brushes.classList.remove("active-brushes");
  } else {
    brushes.classList.add("active-brushes");
  }
});
const listImgBrushes = document.querySelectorAll(".brush-img");

const brushSelectImg = document.querySelector(".brush-select");
for (let i = 0; i < listImgBrushes.length; i++) {
  listImgBrushes[i].addEventListener("click", function () {
    const src = this.src;

    // In giá trị src ra console
    brushSelectImg.src = src;
  });
}

const sizeTool = document.querySelector(".toolHome-size");

const listSize = document.querySelector(".size-menu");

sizeTool.addEventListener("click", () => {
  if (sizeTool.classList.contains("active-size")) {
    sizeTool.classList.remove("active-size");
  } else {
    sizeTool.classList.add("active-size");
  }
});

const rotateTab = document.querySelector(".rotate-tab");

const rotateMenu = document.querySelector(".rotateMune");

rotateTab.addEventListener("click", function () {
  if (rotateTab.classList.contains("active-rotate")) {
    rotateTab.classList.remove("active-rotate");
  } else {
    rotateTab.classList.add("active-rotate");
  }
});

const selectedTab = document.querySelector("#selectTab");

const selectMenu = document.querySelector(".select-menu");

selectedTab.addEventListener("click", function () {
  if (selectedTab.classList.contains("active-selected")) {
    selectedTab.classList.remove("active-selected");
  } else {
    selectedTab.classList.add("active-selected");
  }
});

document.addEventListener("click", function (event) {
  // Kiểm tra xem click có xảy ra bên ngoài box hay không
  if (
    !subHeaderMenuDown.contains(event.target) &&
    !subHeaderDown.contains(event.target)
  ) {
    // Nếu click xảy ra bên ngoài, ẩn box
    subHeaderMenuDown.style.display = "none";
  }
  // ================================================
  // ================================================

  if (!tabNameFile.contains(event.target) && !fileMenu.contains(event.target)) {
    // Nếu click xảy ra bên ngoài, ẩn box
    fileMenu.style.display = "none";
  }
  if (!paste.contains(event.target) && !pasteMenu.contains(event.target)) {
    paste.classList.remove("active-paste");
  }
  if (!brushes.contains(event.target) && !brushesMenu.contains(event.target)) {
    brushes.classList.remove("active-brushes");
  }
  if (!listSize.contains(event.target) && !sizeTool.contains(event.target)) {
    sizeTool.classList.remove("active-size");
  }

  if (!rotateMenu.contains(event.target) && !rotateTab.contains(event.target)) {
    rotateTab.classList.remove("active-rotate");
  }
  if (
    !selectedTab.contains(event.target) &&
    !selectMenu.contains(event.target)
  ) {
    selectedTab.classList.remove("active-selected");
  }
});
// const percentSize = document.querySelector(".percentSize");
// const progress = document.querySelector(".progress");

// percentSize.innerHTML = progress.style.width;

function updateProgress(event) {
  let progressBar = document.querySelector(".progress");
  let progressBarWidth = progressBar.parentNode.offsetWidth;
  const percentSize = document.querySelector(".percentSize");
  let clickPosition = event.clientX - event.target.offsetLeft;
  let progressPercentage = (clickPosition / progressBarWidth) * 100;
  progressBar.style.width = progressPercentage + "%";
  percentSize.textContent = Math.floor(progressPercentage) + "%";
}

// ============================================
// ============================================
// Handle canvas events

let canvas = document.getElementById("canvas");
let widthDiv = document.querySelector(".move-width");
let heightDiv = document.querySelector(".move-height");
let sizeDiv = document.querySelector(".move-size");
const canvasSize = document.querySelector(".canvasSize");
const toolOptions = document.querySelectorAll(".tool-options");
const fillColor = document.querySelector("#fillColorSelect");
const locationMouse = document.querySelector(".locationMouse");
let toolSelected = "pencile";

let isChechFillColor = false;
let isResizingWidth = false;
let isResizingHeight = false;
let isResizingSize = false;
let lineWidthDraw = 5;
let preMouseX, prevMouseY, snapshot;
let startX;
let startY;
let startWidth;
let startHeight;
let text = "";

let saveCanvas = document.querySelector("#saveCanvas");

saveCanvas.addEventListener("click", function () {
  const link = document.createElement("a");
  link.download = `${Date.now()}.jpg`;
  link.href = canvas.toDataURL();
  link.click();
});
let checkdrawText = false;

const cornerRadius = 10;

const lineOptions = document.querySelectorAll(".size-menu-item");

for (let i = 0; i < lineOptions.length; i++) {
  lineOptions[i].addEventListener("click", () => {
    lineWidthDraw = (i + 1) * 4;
  });
}

let startPt = { x: 0, y: 0 };
let controlPt1 = { x: 0, y: 0 };
let controlPt2 = { x: 0, y: 0 };
let endPt = { x: 0, y: 0 };

let ctx = canvas.getContext("2d");
let isDrawing = false;
console.log({ canvas });
// let canvasOffset = canvas.offset();
let offsetX = canvas.offsetLeft;
let offsetY = canvas.offsetTop;

fillColor.addEventListener("click", () => {
  isChechFillColor = !isChechFillColor;
  if (isChechFillColor) {
    fillColor.classList.add("activeFillColor");
  } else {
    fillColor.classList.remove("activeFillColor");
  }
  console.log(isChechFillColor);
});
window.addEventListener("load", () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
});

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);

const drawRect = (e) => {
  if (isChechFillColor) {
    ctx.fillRect(
      e.offsetX,
      e.offsetY,
      preMouseX - e.offsetX,
      prevMouseY - e.offsetY
    );
  } else {
    ctx.strokeRect(
      e.offsetX,
      e.offsetY,
      preMouseX - e.offsetX,
      prevMouseY - e.offsetY
    );
  }
};

const drawLine = function (e) {
  ctx.beginPath();
  ctx.moveTo(preMouseX, prevMouseY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
};

const drawTriangle = function (e) {
  ctx.beginPath();
  ctx.moveTo(preMouseX, prevMouseY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.lineTo(preMouseX * 2 - e.offsetX, e.offsetY);
  ctx.closePath();
  isChechFillColor ? ctx.fill() : ctx.stroke();
};

function drawOval(x1, y1, x2, y2) {
  var radiusX = Math.abs(x2 - x1) / 2;
  var radiusY = Math.abs(y2 - y1) / 2;
  var centerX = x1 < x2 ? x1 + radiusX : x1 - radiusX;
  var centerY = y1 < y2 ? y1 + radiusY : y1 - radiusY;

  ctx.beginPath();
  ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
  isChechFillColor ? ctx.fill() : ctx.stroke();
}

function drawRightTriangle(event) {
  console.log("ff");

  let endX = event.offsetX;
  let endY = event.offsetY;

  ctx.beginPath();
  ctx.moveTo(preMouseX, prevMouseY);
  ctx.lineTo(preMouseX, endY);
  ctx.lineTo(endX, endY);
  ctx.closePath();

  ctx.lineWidth = lineWidthDraw;

  isChechFillColor ? ctx.fill() : ctx.stroke();
}

function drawDiamond(event) {
  // if (!startX || !startY) return;

  let endX = event.offsetX;
  let endY = event.offsetY;

  const centerX = (preMouseX + endX) / 2;
  const centerY = (prevMouseY + endY) / 2;

  const width = Math.abs(endX - preMouseX);
  const height = Math.abs(endY - prevMouseY);

  ctx.beginPath();
  ctx.moveTo(centerX, prevMouseY);
  ctx.lineTo(endX, centerY);
  ctx.lineTo(centerX, endY);
  ctx.lineTo(preMouseX, centerY);
  ctx.closePath();

  ctx.lineWidth = lineWidthDraw;

  isChechFillColor ? ctx.fill() : ctx.stroke();
}

function drawPentagon(event) {
  let endX = event.offsetX;
  let endY = event.offsetY;

  const centerX = (preMouseX + endX) / 2;
  const centerY = (prevMouseY + endY) / 2;

  const radius =
    Math.sqrt(Math.pow(endX - preMouseX, 2) + Math.pow(endY - prevMouseY, 2)) /
    2;
  const angle = (Math.PI * 2) / 5; // Góc của mỗi cạnh trong ngũ giác

  ctx.beginPath();
  ctx.moveTo(centerX + radius * Math.cos(0), centerY + radius * Math.sin(0));

  for (let i = 1; i <= 5; i++) {
    const x = centerX + radius * Math.cos(angle * i);
    const y = centerY + radius * Math.sin(angle * i);
    ctx.lineTo(x, y);
  }

  ctx.closePath();

  ctx.lineWidth = lineWidthDraw;

  isChechFillColor ? ctx.fill() : ctx.stroke();
}
function drawHexagon(event) {
  let endX = event.offsetX;
  let endY = event.offsetY;

  const centerX = (preMouseX + endX) / 2;
  const centerY = (prevMouseY + endY) / 2;

  const radius = Math.abs(endX - preMouseX) / 2;

  ctx.clearRect(0, 0, canvas.width, canvas.height); // Xóa canvas

  ctx.beginPath();
  ctx.moveTo(centerX + radius * Math.cos(0), centerY + radius * Math.sin(0));

  for (let i = 1; i <= 6; i++) {
    const angle = (Math.PI / 3) * i;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    ctx.lineTo(x, y);
  }

  ctx.closePath();

  ctx.lineWidth = lineWidthDraw;

  isChechFillColor ? ctx.fill() : ctx.stroke();
}
function startDrawing(event) {
  isDrawing = true;

  preMouseX = event.offsetX;
  prevMouseY = event.offsetY;
  startPt = { x: event.offsetX, y: event.offsetY };
  ctx.beginPath();
  ctx.lineWidth = lineWidthDraw;
  ctx.strokeStyle = colorCanvas;
  ctx.fillStyle = colorCanvas;
  snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
  if (toolSelected === "text") {
    if (canvas.classList.contains("canvas-drawing")) {
      canvas.classList.remove("canvas-drawing");
    }
    canvas.classList.add("canvas-text");
    checkdrawText = true;
  }

  // ctx.moveTo(
  //   event.clientX - canvas.offsetLeft,
  //   event.clientY - canvas.offsetTop
  // );
}

const drawCurve = function (event) {
  controlPt1 = { x: event.clientX, y: event.clientY };
  controlPt2 = { x: event.clientX, y: event.clientY };
  endPt = { x: event.offsetX, y: event.offsetY };

  // Xóa nội dung cũ trên canvas

  // Vẽ đường cong từ startPt đến endPt với điểm điều khiển controlPt1 và controlPt2
  ctx.beginPath();
  ctx.moveTo(startPt.x, startPt.y);
  ctx.bezierCurveTo(50, 100, 200, 100, endPt.x, endPt.y);
  ctx.lineWidth = lineWidthDraw;

  ctx.stroke();
};

function drawRoundedRectangle(event) {
  let endX = event.offsetX;
  let endY = event.offsetY;

  // const width = endX - startX;
  // const height = endY - startY;

  ctx.beginPath();
  ctx.moveTo(preMouseX + cornerRadius, prevMouseY);
  ctx.lineTo(endX - cornerRadius, prevMouseY);
  ctx.quadraticCurveTo(endX, prevMouseY, endX, prevMouseY + cornerRadius);
  ctx.lineTo(endX, endY - cornerRadius);
  ctx.quadraticCurveTo(endX, endY, endX - cornerRadius, endY);
  ctx.lineTo(preMouseX + cornerRadius, endY);
  ctx.quadraticCurveTo(preMouseX, endY, preMouseX, endY - cornerRadius);
  ctx.lineTo(preMouseX, prevMouseY + cornerRadius);
  ctx.quadraticCurveTo(
    preMouseX,
    prevMouseY,
    preMouseX + cornerRadius,
    prevMouseY
  );
  ctx.closePath();

  ctx.lineWidth = lineWidthDraw;

  isChechFillColor ? ctx.fill() : ctx.stroke();
}

function drawArrow(event) {
  endX = event.offsetX;
  endY = event.offsetY;
  const arrowLength = Math.sqrt(
    Math.pow(endX - preMouseX, 2) + Math.pow(endY - prevMouseY, 2)
  );
  const arrowWidth = 10;
  const triangleHeight = 20;

  const dx = (endX - preMouseX) / arrowLength;
  const dy = (endY - prevMouseY) / arrowLength;

  const arrowEndX = endX - dx * triangleHeight;
  const arrowEndY = endY - dy * triangleHeight;

  const arrowBaseX = arrowEndX - dx * arrowWidth;
  const arrowBaseY = arrowEndY - dy * arrowWidth;

  const arrowLeftX = arrowBaseX + (dy * arrowWidth) / 2;
  const arrowLeftY = arrowBaseY - (dx * arrowWidth) / 2;

  const arrowRightX = arrowBaseX - (dy * arrowWidth) / 2;
  const arrowRightY = arrowBaseY + (dx * arrowWidth) / 2;

  ctx.beginPath();
  ctx.moveTo(preMouseX, prevMouseY);
  ctx.lineTo(arrowBaseX, arrowBaseY);
  ctx.lineTo(arrowLeftX, arrowLeftY);
  ctx.lineTo(arrowEndX, arrowEndY);
  ctx.lineTo(arrowRightX, arrowRightY);
  ctx.lineTo(arrowBaseX, arrowBaseY);
  ctx.closePath();

  ctx.lineWidth = lineWidthDraw;
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
  ctx.stroke();
  ctx.fill();
}

function drawStar(event, point) {
  let endX = event.offsetX;
  let endY = event.offsetY;

  const radius = Math.sqrt(
    Math.pow(endX - preMouseX, 2) + Math.pow(endY - prevMouseY, 2)
  );
  const innerRadius = radius / 2;
  const spikes = point;
  const rotation = Math.PI / 4;

  ctx.beginPath();
  ctx.moveTo(
    preMouseX + radius * Math.cos(rotation),
    prevMouseY + radius * Math.sin(rotation)
  );

  for (let i = 0; i < spikes; i++) {
    const outerX =
      preMouseX + radius * Math.cos(rotation + (i * 2 * Math.PI) / spikes);
    const outerY =
      prevMouseY + radius * Math.sin(rotation + (i * 2 * Math.PI) / spikes);
    ctx.lineTo(outerX, outerY);

    const innerX =
      preMouseX +
      innerRadius * Math.cos(rotation + ((i + 0.5) * 2 * Math.PI) / spikes);
    const innerY =
      prevMouseY +
      innerRadius * Math.sin(rotation + ((i + 0.5) * 2 * Math.PI) / spikes);
    ctx.lineTo(innerX, innerY);
  }

  ctx.closePath();

  ctx.lineWidth = 2;
  ctx.lineWidth = lineWidthDraw;

  isChechFillColor ? ctx.fill() : ctx.stroke();
  // ctx.fill();
}

function drawHeart(x, y, width, height, fillColor, strokeColor, strokeWidth) {
  ctx.beginPath();
  ctx.moveTo(x + width / 2, y + height / 4);
  ctx.bezierCurveTo(x + width / 2, y, x, y, x, y + height / 4);
  ctx.bezierCurveTo(
    x,
    y + (height * 5) / 8,
    x + width / 2,
    y + (height * 3) / 4,
    x + width / 2,
    y + height
  );
  ctx.bezierCurveTo(
    x + width / 2,
    y + (height * 3) / 4,
    x + width,
    y + (height * 5) / 8,
    x + width,
    y + height / 4
  );
  ctx.bezierCurveTo(
    x + width,
    y,
    x + width / 2,
    y,
    x + width / 2,
    y + height / 4
  );
  ctx.closePath();

  if (fillColor) {
    ctx.fillStyle = fillColor;
    ctx.lineWidth = lineWidthDraw;

    isChechFillColor ? ctx.fill() : ctx.stroke();
  }

  if (strokeColor && strokeWidth) {
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = strokeWidth;
    ctx.stroke();
  }
}

function draw(event) {
  locationMouse.textContent = `${event.offsetX}, ${event.offsetY} px`;
  if (!isDrawing) return;
  ctx.putImageData(snapshot, 0, 0);
  if (toolSelected === "pencile" || toolSelected === "eraser") {
    ctx.lineTo(event.offsetX, event.offsetY);
    if (toolSelected === "eraser") {
      ctx.strokeStyle = "#fff";
    }
    ctx.stroke();
  } else if (toolSelected === "rectangle") {
    drawRect(event);
  } else if (toolSelected === "oval") {
    var currentX = event.offsetX;
    var currentY = event.offsetY;

    drawOval(preMouseX, prevMouseY, currentX, currentY);
  } else if (toolSelected === "line") {
    drawLine(event);
  } else if (toolSelected === "triangle") {
    drawTriangle(event);
  } else if (toolSelected === "curve") {
    drawCurve(event);
  } else if (toolSelected === "right-triangle") {
    drawRightTriangle(event);
  } else if (toolSelected === "diamond") {
    drawDiamond(event);
  } else if (toolSelected === "pentagon") {
    drawPentagon(event);
  } else if (toolSelected === "rounded-rectangle") {
    drawRoundedRectangle(event);
  } else if (toolSelected === "hexagon-") {
    drawHexagon(event);
  } else if (toolSelected === "right-arrow") {
    drawArrow(event);
  } else if (toolSelected === "four-point-star") {
    drawStar(event, 4);
  } else if (toolSelected === "start") {
    drawStar(event, 5);
  } else if (toolSelected === "six-point-star") {
    drawStar(event, 6);
  } else if (toolSelected === "heart") {
    drawHeart(
      event.offsetX,
      event.offsetY,
      preMouseX - event.offsetX,
      prevMouseY - event.offsetY,
      "red",
      "black",
      2
    );
  }
}
document.addEventListener("keydown", function (event) {
  console.log(checkdrawText);
  if (checkdrawText) {
    console.log(event.key);
    text += event.key;
    // Lưu trữ ký tự đã nhập vào biến text
    console.log({
      preMouseX,
      prevMouseY,
    });
    drawText(preMouseX, prevMouseY);
  }
  // Vẽ lại nội dung văn bản trên canvas
});

function drawText(x, y) {
  ctx.font = "30px Comic Sans MS";
  ctx.fillStyle = "red";

  ctx.fillText(text, x, y);
}

function stopDrawing() {
  isDrawing = false;
  startPt = { x: 0, y: 0 };
  controlPt1 = { x: 0, y: 0 };
  controlPt2 = { x: 0, y: 0 };
  endPt = { x: 0, y: 0 };
}

for (let i = 0; i < toolOptions.length; i++) {
  toolOptions[i].addEventListener("click", () => {
    console.log(toolOptions[i].id);
    toolSelected = toolOptions[i].id;
    toolOptions.forEach((item) => {
      item.classList.remove("tool-active");
    });
    toolOptions[i].classList.add("tool-active");
    if (toolSelected === "text") {
      canvas.classList.add("canvas-text");
    } else {
      canvas.classList.remove("canvas-text");
      canvas.classList.add("canvas-drawing");
    }
  });
}

// =====================================
// =====================================
// handle resize canvas

widthDiv.addEventListener("mousedown", function (event) {
  isResizingWidth = true;
  startX = event.clientX;
  startWidth = canvas.width;
});

heightDiv.addEventListener("mousedown", function (event) {
  isResizingHeight = true;
  startY = event.clientY;
  startHeight = canvas.height;
});

sizeDiv.addEventListener("mousedown", function (event) {
  isResizingSize = true;
  startX = event.clientX;
  startY = event.clientY;
  startWidth = canvas.width;
  startHeight = canvas.height;
});

document.addEventListener("mousemove", function (event) {
  if (isResizingWidth) {
    var deltaX = event.clientX - startX;
    var newWidth = startWidth + deltaX;
    newWidth = Math.max(newWidth, 10);

    canvas.style.width = newWidth + "px";
    canvas.width = newWidth;
    canvasSize.textContent = Math.floor(newWidth) + ` X ${canvas.height} px`;
  }

  if (isResizingHeight) {
    var deltaY = event.clientY - startY;
    var newHeight = startHeight + deltaY;
    newHeight = Math.max(newHeight, 10);

    canvas.style.height = newHeight + "px";
    canvas.height = newHeight;

    canvasSize.textContent = `${canvas.width} X ${canvas.height} px`;
  }

  if (isResizingSize) {
    var deltaX = event.clientX - startX;
    var deltaY = event.clientY - startY;
    var newWidth = startWidth + deltaX;
    var newHeight = startHeight + deltaY;
    newWidth = Math.max(newWidth, 10);
    newHeight = Math.max(newHeight, 10);

    canvas.style.width = newWidth + "px";
    canvas.style.height = newHeight + "px";
    canvas.width = newWidth;
    canvas.height = newHeight;
    canvasSize.textContent = `${canvas.width} X ${canvas.height} px`;
  }
});

document.addEventListener("mouseup", function (event) {
  isResizingWidth = false;
  isResizingHeight = false;
  isResizingSize = false;
});

// ========================================
// ========================================
