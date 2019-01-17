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

function showPosition(rover){
  console.log("Position: (" + rover.x + ", " + rover.y + ")");
}

function badTurn(){
  console.log("Wrong Direction!");
}

function badForwBack(){
  console.log("Impossible to go!");
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

function moveForward(rover){
  console.log("moveForward was called!");
  switch (rover.direction){
    case "N":
      if ((rover.y - 1) >= 0){
        rover.y--;
        rover.travelLog.push([rover.x, rover.y]);
      }
      else{
        badForwBack();
      }
      break;
    case "S":
      if ((rover.y + 1) <= 9){
        rover.y++;
        rover.travelLog.push([rover.x, rover.y]);
      }
      else{
        badForwBack();
      }
      break;
    case "E":
      if ((rover.x + 1) <= 9){
        rover.x++;
        rover.travelLog.push([rover.x, rover.y]);
      }
      else{
        badForwBack();
      }
      break;
    case "W":
      if ((rover.x - 1) >= 0){
        rover.x--;
        rover.travelLog.push([rover.x, rover.y]);
      }
      else{
        badForwBack();
      }
      break;
    default:
    badForwBack();
  };
  showPosition(rover);
}

function moveBackward(rover){
  console.log("moveBackward was called!");
  switch (rover.direction){
    case "N":
      if ((rover.y + 1) <= 9){
        rover.y++;
        rover.travelLog.push([rover.x, rover.y]);
      }
      else{
        badForwBack();
      }
      break;
    case "S":
      if ((rover.y - 1) >= 0){
        rover.y--;
        rover.travelLog.push([rover.x, rover.y]);
      }
      else{
        badForwBack();
      }
      break;
    case "E":
      if ((rover.x - 1) >= 0){
        rover.x--;
        rover.travelLog.push([rover.x, rover.y]);
      }
      else{
        badForwBack();
      }
      break;
    case "W":
      if ((rover.x + 1) <= 9){
        rover.x++;
        rover.travelLog.push([rover.x, rover.y]);
      }
      else{
        badForwBack();
      }
      break;
    default:
      badForwBack();
  };
  showPosition(rover);
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

//var moves = "ffzzy";
var moves = "rffrfflfrrr";
//var moves = "lbbbbbbbblffrflbbbbu";

commands(moves);
printTravel(rover);
