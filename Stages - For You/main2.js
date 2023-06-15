let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
cnv.width = 1260;
cnv.height = 655;

let yell = 0;
let bez = 0;
let frames = 0;
let percentage;
let hun;
let seventie;
let hun_fortie;
let two_hun_eightie;
let five_hun_tein;
let PCOLOR = "#00ff00"
let previousUp = "no"
let cube;
let wall1;
let wall2;
let wall3;
let wall4;
let wall5;
let wall6;
let wall7;
let wall8;
let wall9;
let wall10;
let wall11;
let wall12;
let wall13;
let wall14;
let wall15;


cube = {
  x: 0,
  y: 307.5,
  w: 40,
  h: 40,
  g: 0,
};

wall1 = {
    x: 200,
    y: 645,
    w: 1060,
    h: 10,
}

wall2 = {
    x: 200,
    y: 0,
    w: 1060,
    h: 10,
}

wall3 = {
    x: 300,
    y: 0,
    w: 20,
    h: 200,
}

wall4 = {
    x: 300,
    y: 455,
    w: 20,
    h: 200,
}

wall5 = {
    x: 175,
    y: 150,
    w: 25,
    h: 355,
}

wall6 = {
    x: 75,
    y: 150,
    w: 100,
    h: 25,
}

wall7 = {
    x: 75,
    y: 480,
    w: 100,
    h: 25,
}

wall8 = {
    x: 450,
    y: 25,
    w: 10,
    h: 110,
}

wall9 = {
    x: 485,
    y: 277,
    w: 40,
    h: 101,
}

wall10 = {
    x: 550,
    y: 520,
    w: 10,
    h: 110,
}

wall11 = {
    x: 560,
    y: 317,
    w: 700,
    h: 21,
}

wall12 = {
    x: 560,
    y: 20,
    w: 80,
    h: 140,
}

wall13 = {
    x: 560,
    y: 167,
    w: 80,
    h: 140,
}

wall14 = {
    x: 560,
    y: 348,
    w: 80,
    h: 140,
}

wall15 = {
    x: 560,
    y: 495,
    w: 80,
    h: 140,
}

let state;
let Wpresst = false
let Apresst = false
let Dpresst = false
let uppresst = false;
let leftpresst = false;
let rightpresst = false;
let mousepresst = false;
let spacepresst = false;

state = "Level";
window.addEventListener("load", draw);

function draw() {
  if (state == "Level") {
    runLevel();
  }

  requestAnimationFrame(draw);
}

document.addEventListener("mousedown", mousedHandle);
document.addEventListener("mouseup", mouseuHandle);
document.addEventListener("keydown", (event) => {
  if (event.code == "Space") {
    spacedHandle();
  }

  if (event.code == "ArrowUp") {
    updHandle();
  }

  if (event.code == "ArrowLeft") {
    leftdHandle();
  }

  if (event.code == "ArrowRight") {
    rightdHandle();
  }

  if (event.code == "KeyA") {
    AdHandle();
  }

  if (event.code == "KeyD") {
    DdHandle();
  }

  if (event.code == "KeyW") {
    WdHandle();
  }
});

document.addEventListener("keyup", (event) => {
  if (event.code == "Space") {
    spaceuHandle();
  }

  if (event.code == "ArrowUp") {
    upuHandle();
  }

  if (event.code == "ArrowLeft") {
    leftuHandle();
  }

  if (event.code == "ArrowRight") {
    rightuHandle();
  }

  if (event.code == "KeyA") {
    AuHandle();
  }

  if (event.code == "KeyD") {
    DuHandle();
  }

  if (event.code == "KeyW") {
    WuHandle();
  }
});

function mousedHandle() {
  mousepresst = true;
}

function mouseuHandle() {
  mousepresst = false;
}

function spacedHandle() {
  spacepresst = true;
}

function spaceuHandle() {
  spacepresst = false;
}

function updHandle() {
  uppresst = true;
}

function upuHandle() {
  uppresst = false;
}

function leftdHandle() {
  leftpresst = true;
}

function leftuHandle() {
  leftpresst = false;
}

function rightdHandle() {
  rightpresst = true;
}

function rightuHandle() {
  rightpresst = false;
}

function AdHandle() {
    Apresst = true;
}
  
function AuHandle() {
    Apresst = false;
}

function DdHandle() {
    Dpresst = true;
}
  
function DuHandle() {
    Dpresst = false;
}

function WdHandle() {
    Wpresst = true;
}
  
function WuHandle() {
    Wpresst = false;
}