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
      moves = [],
      board = {};

var canvas, ctx, width, height;

document.addEventListener("DOMContentLoaded", init)

function init() {
  canvas = document.querySelector("canvas");
  ctx = canvas.getContext("2d");
  width = canvas.width = boardSize;
  height = canvas.height = boardSize;
  setup();
  drawBoard();
  drawPieces();
}

function setupPieces(){
  //preload piece images
}

function setup(){
  let squareSize = boardSize/8;
  board.a8 = { x: squareSize * 0, y: squareSize * 0, piece: "br" };
  	board.a7 = { x: squareSize * 0, y: squareSize * 1, piece: "bp" };
  	board.a6 = { x: squareSize * 0, y: squareSize * 2, piece: null };
  	board.a5 = { x: squareSize * 0, y: squareSize * 3, piece: null };
    board.a4 = { x: squareSize * 0, y: squareSize * 4, piece: null };
    board.a3 = { x: squareSize * 0, y: squareSize * 5, piece: null };
    board.a2 = { x: squareSize * 0, y: squareSize * 6, piece: "wp" };
    board.a1 = { x: squareSize * 0, y: squareSize * 7, piece: "wr" };
  	board.b8 = { x: squareSize * 1, y: squareSize * 0, piece: "bn" };
  	board.b7 = { x: squareSize * 1, y: squareSize * 1, piece: "bp" };
  	board.b6 = { x: squareSize * 1, y: squareSize * 2, piece: null };
  	board.b5 = { x: squareSize * 1, y: squareSize * 3, piece: null };
    board.b4 = { x: squareSize * 1, y: squareSize * 4, piece: null };
    board.b3 = { x: squareSize * 1, y: squareSize * 5, piece: null };
    board.b2 = { x: squareSize * 1, y: squareSize * 6, piece: "wp" };
    board.b1 = { x: squareSize * 1, y: squareSize * 7, piece: "wn" };
   	board.c8 = { x: squareSize * 2, y: squareSize * 0, piece: "bb" };
  	board.c7 = { x: squareSize * 2, y: squareSize * 1, piece: "bp" };
  	board.c6 = { x: squareSize * 2, y: squareSize * 2, piece: null };
  	board.c5 = { x: squareSize * 2, y: squareSize * 3, piece: null };
    board.c4 = { x: squareSize * 2, y: squareSize * 4, piece: null };
    board.c3 = { x: squareSize * 2, y: squareSize * 5, piece: null };
    board.c2 = { x: squareSize * 2, y: squareSize * 6, piece: "wp" };
    board.c1 = { x: squareSize * 2, y: squareSize * 7, piece: "wb" };
    board.d8 = { x: squareSize * 3, y: squareSize * 0, piece: "bq" };
  	board.d7 = { x: squareSize * 3, y: squareSize * 1, piece: "bp" };
  	board.d6 = { x: squareSize * 3, y: squareSize * 2, piece: null };
  	board.d5 = { x: squareSize * 3, y: squareSize * 3, piece: null };
    board.d4 = { x: squareSize * 3, y: squareSize * 4, piece: null };
    board.d3 = { x: squareSize * 3, y: squareSize * 5, piece: null };
    board.d2 = { x: squareSize * 3, y: squareSize * 6, piece: "wp" };
    board.d1 = { x: squareSize * 3, y: squareSize * 7, piece: "wq" };
   	board.e8 = { x: squareSize * 4, y: squareSize * 0, piece: "bk" };
  	board.e7 = { x: squareSize * 4, y: squareSize * 1, piece: "bp" };
  	board.e6 = { x: squareSize * 4, y: squareSize * 2, piece: null };
  	board.e5 = { x: squareSize * 4, y: squareSize * 3, piece: null };
    board.e4 = { x: squareSize * 4, y: squareSize * 4, piece: null };
    board.e3 = { x: squareSize * 4, y: squareSize * 5, piece: null };
    board.e2 = { x: squareSize * 4, y: squareSize * 6, piece: "wp" };
    board.e1 = { x: squareSize * 4, y: squareSize * 7, piece: "wk" };
    board.f8 = { x: squareSize * 5, y: squareSize * 0, piece: "bb" };
  	board.f7 = { x: squareSize * 5, y: squareSize * 1, piece: "bp" };
  	board.f6 = { x: squareSize * 5, y: squareSize * 2, piece: null };
  	board.f5 = { x: squareSize * 5, y: squareSize * 3, piece: null };
    board.f4 = { x: squareSize * 5, y: squareSize * 4, piece: null };
    board.f3 = { x: squareSize * 5, y: squareSize * 5, piece: null };
    board.f2 = { x: squareSize * 5, y: squareSize * 6, piece: "wp" };
    board.f1 = { x: squareSize * 5, y: squareSize * 7, piece: "wb" };
    board.g8 = { x: squareSize * 6, y: squareSize * 0, piece: "bn" };
  	board.g7 = { x: squareSize * 6, y: squareSize * 1, piece: "bp" };
  	board.g6 = { x: squareSize * 6, y: squareSize * 2, piece: null };
  	board.g5 = { x: squareSize * 6, y: squareSize * 3, piece: null };
    board.g4 = { x: squareSize * 6, y: squareSize * 4, piece: null };
    board.g3 = { x: squareSize * 6, y: squareSize * 5, piece: null };
    board.g2 = { x: squareSize * 6, y: squareSize * 6, piece: "wp" };
    board.g1 = { x: squareSize * 6, y: squareSize * 7, piece: "wn" };
    board.h8 = { x: squareSize * 7, y: squareSize * 0, piece: "br" };
  	board.h7 = { x: squareSize * 7, y: squareSize * 1, piece: "bp" };
  	board.h6 = { x: squareSize * 7, y: squareSize * 2, piece: null };
  	board.h5 = { x: squareSize * 7, y: squareSize * 3, piece: null };
    board.h4 = { x: squareSize * 7, y: squareSize * 4, piece: null };
    board.h3 = { x: squareSize * 7, y: squareSize * 5, piece: null };
    board.h2 = { x: squareSize * 7, y: squareSize * 6, piece: "wp" };
    board.h1 = { x: squareSize * 7, y: squareSize * 7, piece: "wr" };
  	moves.length = 1; // empty out moves array
  	moves[0] = JSON.parse(JSON.stringify(board)); // deep copy of board
}

/* Drawing */
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
function drawPieces(){
  let lastPosition = moves[moves.length-1]; //get last element of moves array
  boardCtx.fillStyle = "black"; // text placeholder
  boardCTX.textBaseline="top"; // text placeholder
  boardCTX.font="30px Verdana" // text placeholder
  for (let square in lastPosition){ // iterate through the most recent game statement
    if (lastPosition[square].piece){
      boardCTX.fillText(lastPosition[square].piece, lastPosition[square].x, lastPosition[square].y); // text placeholder
    }

  }
}
