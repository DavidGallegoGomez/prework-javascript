//
// @author: David Gallego Gómez
// @since: 15/01/2019
// Segundo ejercicio del prework, IronHack Madrid
//

// Rover Object Goes Here
// ======================
var rover = {
  direction: "N", // Posibles valores: N, S, E ó W
  x: 0,
  y: 0,
  travelLog: [[0, 0]]
};
// ======================

// Board Grid
// ======================
var board = [[]]; // Matriz para generar el tablero
// ======================

function showPosition(rover){
  console.log("Position: (" + rover.x + ", " + rover.y + ")");
}

function badTurn(){
  console.log("Wrong Direction!");
}

function badForwBack(){
  console.log("Impossible to go!");
}

function obstacleMsg(){
  console.log("Obstacle found!");
}

function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction){
    case "N":
      rover.direction = "W";
      console.log("Facing to WEST now");
      break;
    case "S":
      rover.direction = "E";
      console.log("Facing to EAST now");
      break;
    case "E":
      rover.direction = "N";
      console.log("Facing to NORTH now");
      break;
    case "W":
      rover.direction = "S";
      console.log("Facing to SOUTH now");
      break;
    default:
      badTurn();
  };
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction){
    case "N":
      rover.direction = "E";
      console.log("Facing to EAST now");
      break;
    case "S":
      rover.direction = "W";
      console.log("Facing to WEST now");
      break;
    case "E":
      rover.direction = "S";
      console.log("Facing to SOUTH now");
      break;
    case "W":
      rover.direction = "N";
      console.log("Facing to NORTH now");
      break;
    default:
      badTurn();
  };
}

function printBoard(board){
  for(var i=0; i<=9; i++){
    for(var j=0; j <=9; j++){
      document.write(board[j][i] + " ");
    }
    document.write('<br>');
  }
  document.write('<br>');
}

function moveForward(rover){
  console.log("moveForward was called!");
  switch (rover.direction){
    case "N":
      if ( ( (rover.y - 1) >= 0) && ( board[rover.x][rover.y - 1] !== "O" ) ){
        board[rover.x][rover.y] = "X";
        
        rover.y--;
        rover.travelLog.push( [rover.x, rover.y] );
        
        board[rover.x][rover.y] = "R";
      }
      else if ( board[rover.x][rover.y - 1] === "O" ){
        obstacleMsg();
      }
      else{
        badForwBack();
      }
      break;
    case "S":
      if ( ( (rover.y + 1) <= 9 ) && ( board[rover.x][rover.y + 1] !== "O" ) ){
        
        board[rover.x][rover.y] = "X";

        rover.y++;
        rover.travelLog.push([rover.x, rover.y]);
        
        board[rover.x][rover.y] = "R";
        
      }
      else if ( board[rover.x][rover.y + 1] === "O" ){
        obstacleMsg();
      }
      else{
        badForwBack();
      }
      break;
    case "E":
      if ( ( (rover.x + 1) <= 9 ) && ( board[rover.x + 1][rover.y] !== "O" ) ){
        board[rover.x][rover.y] = "X";
        
        rover.x++;
        rover.travelLog.push([rover.x, rover.y]);
        
        board[rover.x][rover.y] = "R";
      }
      else if ( board[rover.x + 1][rover.y] === "O" ){
        obstacleMsg();
      }
      else{
        badForwBack();
      }
      break;
    case "W":
      if ( ( (rover.x - 1) >= 0) && ( board[rover.x - 1][rover.y] !== "O" ) ){
        board[rover.x][rover.y] = "X";
        
        rover.x--;
        rover.travelLog.push([rover.x, rover.y]);
        
        board[rover.x][rover.y] = "R";
      }
      else if ( board[rover.x - 1][rover.y] === "O" ){
        obstacleMsg();
      }
      else{
        badForwBack();
      }
      break;
    default:
    badForwBack();
  };
  showPosition(rover);
  printBoard(board);
}

function moveBackward(rover){
  console.log("moveForward was called!");
  switch (rover.direction){
    case "N":
      if ( ( (rover.y + 1) <= 9) && ( board[rover.x][rover.y + 1] !== "O" ) ){
        board[rover.x][rover.y] = "X";
        
        rover.y++;
        rover.travelLog.push( [rover.x, rover.y] );
        
        board[rover.x][rover.y] = "R";
      }
      else if ( board[rover.x][rover.y + 1] === "O" ){
        obstacleMsg();
      }
      else{
        badForwBack();
      }
      break;
    case "S":
      if ( ( (rover.y - 1) >= 0 ) && ( board[rover.x][rover.y - 1] !== "O" ) ){
        
        board[rover.x][rover.y] = "X";

        rover.y--;
        rover.travelLog.push([rover.x, rover.y]);
        
        board[rover.x][rover.y] = "R";
        
      }
      else if ( board[rover.x][rover.y - 1] === "O" ){
        obstacleMsg();
      }
      else{
        badForwBack();
      }
      break;
    case "E":
      if ( ( (rover.x - 1) >= 0 ) && ( board[rover.x - 1][rover.y] !== "O" ) ){
        board[rover.x][rover.y] = "X";
        
        rover.x--;
        rover.travelLog.push([rover.x, rover.y]);
        
        board[rover.x][rover.y] = "R";
      }
      else if ( board[rover.x - 1][rover.y] === "O" ){
        obstacleMsg();
      }
      else{
        badForwBack();
      }
      break;
    case "W":
      if ( ( (rover.x + 1) <= 9) && ( board[rover.x + 1][rover.y] !== "O" ) ){
        board[rover.x][rover.y] = "X";
        
        rover.x++;
        rover.travelLog.push([rover.x, rover.y]);
        
        board[rover.x][rover.y] = "R";
      }
      else if ( board[rover.x + 1][rover.y] === "O" ){
        obstacleMsg();
      }
      else{
        badForwBack();
      }
      break;
    default:
    badForwBack();
  };
  showPosition(rover);
  printBoard(board);
}

function moveToDo(letter){
  switch(letter){
    case "f":
      moveForward(rover);
      break;
    case "r":
      turnRight(rover);
    break;
    case "l":
      turnLeft(rover);
    break;
    case "b":
      moveBackward(rover);
    break;
    default:
      console.log("Bad Command!");
  };
}

function commands(moves){
  for(var i = 0; i < moves.length; i++){
    moveToDo(moves[i]);
  };
}

function printTravel(rover){
  console.log("Travel: ");
  for(var i = 0; i < rover.travelLog.length; i++){
    console.log("(" + rover.travelLog[i][0] + ", " + rover.travelLog[i][1] + ")");
  }
}

function generateObstacle(board) {
  var x = Math.floor(Math.random() * 9);
  var y = Math.floor(Math.random() * 9);

  if ( board[x][y] !== "R" && board[x][y] !== "O" ) {
    board[x][y] = "O";
    console.log( "Obstacle: (" + x + ", " + y + ")" );
  }
  else {
    generateObstacle(board);
  }
  
}

for(var i=0; i<=9; i++) {
  board[i] = [];
  for(var j=0; j<=9; j++) {
      board[i][j] = "X";
  }
}
board[0][0] = "R"; // Posicionado del rover

var numObstacle = 20; // Número de obstáculos
for(var i = 0; i<numObstacle; i++){ // Generación de obstáculos
  generateObstacle(board);
}

printBoard(board); // Pinta tablero inicial

//var moves = "ffzzy";
//var moves = "rffrfflfrrr";
var moves = "lbbbbbbbblffrflbbbbu";
//var moves = "rrf";

commands(moves);
printTravel(rover);
