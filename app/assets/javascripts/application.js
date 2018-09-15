// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

const boardSize = 400,
      darkSqColor = "brown",
      lightSqColor = "beige";

var canvas, ctx, width, height;

document.addEventListener("DOMContentLoaded", init)

function init() {
  canvas = document.querySelector("canvas");
  ctx = canvas.getContext("2d");
  width = canvas.width = boardSize;
  height = canvas.height = boardSize;
  drawBoard();
}

function drawBoard() {
  let squareSize = boardSize / 8,
    isLightSq = true;
  for (let x = 0; x < width; x += squareSize) {
    for (let y = 0; y < height; y += squareSize) {
      if (isLightSq) ctx.fillStyle = lightSqColor;
      else ctx.fillStyle = darkSqColor;
      ctx.fillRect(x, y, squareSize, squareSize);
      isLightSq = !isLightSq;
    }
    isLightSq = !isLightSq
  }
}
