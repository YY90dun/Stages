function runLevel() {
  frames = frames + 1
  hun = Math.round(frames / 100 - 0.5) * 100
  seventie = Math.round(frames / 70 - 0.5) * 70
  hun_fortie = Math.round(frames / 140 - 0.5) * 140
  two_hun_eightie = Math.round(frames / 280 - 0.5) * 280
  five_hun_tein = Math.round(frames / 510 - 0.5) * 510
  moveGuy();
  moveWalls();
  checkCollisions();
  drawLevel();
}
  
function moveGuy() {
  if (leftpresst | Apresst) {
    cube.x = cube.x - 5;
  }

  if (rightpresst | Dpresst) {
    cube.x = cube.x + 5;
  }
  
  if (cube.x <= 0) {
    cube.x = 0;
  }

  if (cube.x > 1299) {
    console.log("win")
  }

  if (cube.y <= 0) {
    cube.g = 0;
    cube.y = 0;
  }

  cube.g = cube.g - 0.5;

  if (cube.y >= 615) {
    cube.g = 0;
    cube.y = 615;
  }

  if (uppresst | Wpresst) {
    if (previousUp == "no") {
      cube.g = 8.5;
    }
    previousUp = "yes"
  } else {
    previousUp = "no"
  }

  if (uppresst | Wpresst) {
    PCOLOR = "#0000ff"
  } else {
    PCOLOR = "#00ff00"
  }

  if (cube.g < -20) {
    cube.g = -20;
  }
  cube.y = cube.y - cube.g;
}

function moveWalls() {
  if (frames - seventie <= 34) {
    wall8.y = wall8.y + 15
    wall10.y = wall10.y - 15
  } else {
    wall8.y = wall8.y - 15
    wall10.y = wall10.y + 15
  }

  if (frames - hun_fortie <= 69) {
    wall13.x = wall13.x + 9
    wall14.x = wall14.x + 9
  } else {
    wall13.x = wall13.x - 9
    wall14.x = wall14.x - 9
  }

  if (frames - two_hun_eightie <= 139) {
    wall12.x = wall12.x + 4.5
    wall15.x = wall15.x + 4.5
  } else {
    wall12.x = wall12.x - 4.5
    wall15.x = wall15.x - 4.5
  }

  if (frames - five_hun_tein <= 254) {
    yell = yell + 1
  } else {
    yell = yell - 1
  }
}

function checkCollisions() {
  if (
    (cube.y > wall1.y - 40) &
    (cube.y < wall1.y + wall1.h) &
    (cube.x > wall1.x - 40) &
    (cube.x < wall1.x + wall1.w)
  ) {
    reset();
  }

  if (
    (cube.y > wall2.y - 40) &
    (cube.y < wall2.y + wall2.h) &
    (cube.x > wall2.x - 40) &
    (cube.x < wall2.x + wall2.w)
  ) {
    reset();
  }

  if (
    (cube.y > wall3.y - 40) &
    (cube.y < wall3.y + wall3.h) &
    (cube.x > wall3.x - 40) &
    (cube.x < wall3.x + wall3.w)
  ) {
    reset();
  }

  if (
    (cube.y > wall4.y - 40) &
    (cube.y < wall4.y + wall4.h) &
    (cube.x > wall4.x - 40) &
    (cube.x < wall4.x + wall4.w)
  ) {
    reset();
  }

  if (
    (cube.y > wall5.y - 40) &
    (cube.y < wall5.y + wall5.h) &
    (cube.x > wall5.x - 40) &
    (cube.x < wall5.x + wall5.w)
  ) {
    reset();
  }

  if (
    (cube.y > wall6.y - 40) &
    (cube.y < wall6.y + wall6.h) &
    (cube.x > wall6.x - 40) &
    (cube.x < wall6.x + wall6.w)
  ) {
    reset();
  }

  if (
    (cube.y > wall7.y - 40) &
    (cube.y < wall7.y + wall7.h) &
    (cube.x > wall7.x - 40) &
    (cube.x < wall7.x + wall7.w)
  ) {
    reset();
  }

  if (
    (cube.y > wall8.y - 40) &
    (cube.y < wall8.y + wall8.h) &
    (cube.x > wall8.x - 40) &
    (cube.x < wall8.x + wall8.w)
  ) {
    reset();
  }

  if (
    (cube.y > wall9.y - 40) &
    (cube.y < wall9.y + wall9.h) &
    (cube.x > wall9.x - 40) &
    (cube.x < wall9.x + wall9.w)
  ) {
    reset();
  }

  if (
    (cube.y > wall10.y - 40) &
    (cube.y < wall10.y + wall10.h) &
    (cube.x > wall10.x - 40) &
    (cube.x < wall10.x + wall10.w)
  ) {
    reset();
  }

  if (
    (cube.y > wall11.y - 40) &
    (cube.y < wall11.y + wall11.h) &
    (cube.x > wall11.x - 40) &
    (cube.x < wall11.x + wall11.w)
  ) {
    reset();
  }

  if (
    (cube.y > wall12.y - 40) &
    (cube.y < wall12.y + wall12.h) &
    (cube.x > wall12.x - 40) &
    (cube.x < wall12.x + wall12.w)
  ) {
    reset();
  }

  if (
    (cube.y > wall13.y - 40) &
    (cube.y < wall13.y + wall13.h) &
    (cube.x > wall13.x - 40) &
    (cube.x < wall13.x + wall13.w)
  ) {
    reset();
  }

  if (
    (cube.y > wall14.y - 40) &
    (cube.y < wall14.y + wall14.h) &
    (cube.x > wall14.x - 40) &
    (cube.x < wall14.x + wall14.w)
  ) {
    reset();
  }

  if (
    (cube.y > wall15.y - 40) &
    (cube.y < wall15.y + wall15.h) &
    (cube.x > wall15.x - 40) &
    (cube.x < wall15.x + wall15.w)
  ) {
    reset();
  }
}

function reset() {
  cube.x = 0
  cube.y = 307.5
  cube.w = 40
  cube.h = 40
  cube.g = 0
}

function drawLevel() {
  drawMC();
  drawWalls();
  drawCube();
}

function drawMC() {
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, cnv.width, cnv.height);
}

function drawWalls() {
  ctx.fillStyle = `rgb(255, ${yell}, 0)`;
  ctx.fillRect(wall1.x, wall1.y, wall1.w, wall1.h)
  ctx.fillRect(wall2.x, wall2.y, wall2.w, wall2.h)
  ctx.fillRect(wall3.x, wall3.y, wall3.w, wall3.h)
  ctx.fillRect(wall4.x, wall4.y, wall4.w, wall4.h)
  ctx.fillRect(wall5.x, wall5.y, wall5.w, wall5.h)
  ctx.fillRect(wall6.x, wall6.y, wall6.w, wall6.h)
  ctx.fillRect(wall7.x, wall7.y, wall7.w, wall7.h)
  ctx.fillRect(wall8.x, wall8.y, wall8.w, wall8.h)
  ctx.fillRect(wall9.x, wall9.y, wall9.w, wall9.h)
  ctx.fillRect(wall10.x, wall10.y, wall10.w, wall10.h)
  ctx.fillRect(wall11.x, wall11.y, wall11.w, wall11.h)
  ctx.fillRect(wall12.x, wall12.y, wall12.w, wall12.h)
  ctx.fillRect(wall13.x, wall13.y, wall13.w, wall13.h)
  ctx.fillRect(wall14.x, wall14.y, wall14.w, wall14.h)
  ctx.fillRect(wall15.x, wall15.y, wall15.w, wall15.h)
}

function drawCube() {
  ctx.fillStyle = PCOLOR;
  ctx.fillRect(cube.x, cube.y, cube.w, cube.h);
  percentage = Math.round(cube.x / 13)
  if (bez < percentage) {
    bez = percentage
  }
  if (percentage > 111) {
    wreset();
  }
  if (percentage > 100) {
    percentage = 100
  }
  document.getElementById("messwtitle").innerHTML = `<title>(${percentage}%) Platformer</title>`;
}

function wreset() {
  cube.x = 1300
  cube.y = 307.5
  cube.w = 40
  cube.h = 40
  cube.g = 0

  document.getElementById("win").innerHTML = "<p class='big'>Good job! That takes a bit of skill to pass, not a lot! But just a little bit. <a href='index4.html'>NICE</a></p>";

}