/*
@title: Simple Graphing Calculator
@author: apinguen
@tags: ['utility','simulation']
@addedOn: 

Github: @apinguen

L: Switch between graphing/entering equation
WASD: Move cursor
I: Add character
K: Backspace
*/
graphStats = {
    //width: 159,
    //height: 127,
  
    scaling: 10
  }
  
  const UI = map`
hhhhhhhhhh
hhhhhhhhhh
hhhhhhhhhh
hhhhhhhhhh
0123456789
asmdefkl.x
hhhhhhhhhh
hhhhhhhhhh`;
  
  const CHARS = {
    ZERO: "0",
    ONE: "1",
    TWO: "2",
    THREE: "3",
    FOUR: "4",
    FIVE: "5",
    SIX: "6",
    SEVEN: "7",
    EIGHT: "8",
    NINE: "9",
    DECIMAL: ".",
    X: "X",
    ADDITION: "+",
    SUBTRACTION: "-",
    MULTIPLICATION: "*",
    DIVISION: "/",
    EXPONENT: "^",
    OPENPARENTHESIS: "(",
    CLOSEDPARENTHESIS: ")"
    
  }
  // Sprites from Sameer Murthy (@SameeraMurthy on Github)
  const 
  zero= "0",
  one = "1",
  two = "2",
  three= "3",
  four= "4",
  five= "5",
  six= "6",
  seven= "7",
  eight= "8",
  nine= "9",
  x= "x",
  y= "y",
  addition= "a",
  subtraction= "s",
  multiplication= "m",
  division= "d",
  exponent= "e",
  decimal= "f",
  point="g",
  axis1="h",
  axis2="i",
  cursor="j",
  openParenthesis="k",
  closedParenthesis="l";
  
  setLegend(
    
    [cursor, bitmap`
  3333333333333333
  3..............3
  3..............3
  3..............3
  3..............3
  3..............3
  3..............3
  3..............3
  3..............3
  3..............3
  3..............3
  3..............3
  3..............3
  3..............3
  3..............3
  3333333333333333`],
    [ one, bitmap`
  ................
  ................
  .......CCC......
  ......CCCC......
  .....CCCCC......
  .....CC.CC......
  ........CC......
  ........CC......
  ........CC......
  ........CC......
  ........CC......
  ........CC......
  .....CCCCCCC....
  .....CCCCCCC....
  ................
  ................`],
    [ two, bitmap`
  ................
  ................
  .....7777.......
  ....7777777.....
  .........777....
  ..........77....
  ..........77....
  ......777777....
  .....777777.....
  ....777.........
  ....77..........
  ....77..........
  ....77777777....
  ....77777777....
  ................
  ................`],
    [ three, bitmap`
  ................
  ................
  ....5555555.....
  ....55555555....
  .........555....
  ..........55....
  ..........55....
  ......555555....
  ......55555.....
  ..........55....
  ..........55....
  .........555....
  ....55555555....
  ....5555555.....
  ................
  ................`],
    [ four, bitmap`
  ................
  ................
  ........LL......
  .......LLL......
  ......LLLL......
  .....LLLLL......
  ....LLL.LL......
  ...LLL..LL......
  ...LL...LL......
  ...LLLLLLLLLL...
  ...LLLLLLLLLL...
  ........LL......
  ........LL......
  ........LL......
  ................
  ................`],
    [ five, bitmap`
  ................
  ................
  ....FFFFFFF.....
  ....FFFFFFF.....
  ....FF..........
  ....FF..........
  ....FFFF........
  .....FFFFFF.....
  ........FFF.....
  .........FF.....
  ........FFF.....
  .......FFFF.....
  ....FFFFFF......
  ....FFFFF.......
  ................
  ................`],
    [ six, bitmap`
  ................
  ................
  .....444444.....
  ....4444444.....
  ....44..........
  ...444..........
  ...44...........
  ...4444444......
  ...444444444....
  ...44....444....
  ...44.....44....
  ...444....44....
  ....44444444....
  .....444444.....
  ................
  ................`],
    [ seven, bitmap`
  ................
  ................
  ....DDDDDDDDD...
  ....DDDDDDDDD...
  ..........DDD...
  .........DDD....
  ........DDD.....
  .......DDD......
  ......DDD.......
  ......DD........
  .....DDD........
  .....DD.........
  .....DD.........
  .....DD.........
  ................
  ................`],
    [ eight, bitmap`
  ................
  ................
  .....888888.....
  ....88888888....
  ...88......88...
  ...88......88...
  ...88......88...
  .....888888.....
  ....88888888....
  ...88......88...
  ...88......88...
  ...888....888...
  ....88888888....
  .....888888.....
  ................
  ................`],
    [ nine, bitmap`
  ................
  ................
  .....HHHHHH.....
  ....HHHHHHHH....
  ....HH....HH....
  ....HH.....HH...
  ....HHH....HH...
  ....HHHHHHHHH...
  ......HHHHHHH...
  ...........HH...
  ..........HHH...
  .........HHH....
  .....HHHHHH.....
  .....HHHHH......
  ................
  ................`],
    [ zero, bitmap`
  ................
  ................
  .....999999.....
  ....99999999....
  ...99.....999...
  ...999.....99...
  ...9999....99...
  ...99.99...99...
  ...99..99..99...
  ...99...99.99...
  ...99....9999...
  ...999....999...
  ....99999999....
  .....999999.....
  ................
  ................`],
    [ addition, bitmap`
  ................
  ................
  ................
  ................
  .......00.......
  .......00.......
  .......00.......
  ....00000000....
  ....00000000....
  .......00.......
  .......00.......
  .......00.......
  ................
  ................
  ................
  ................`],
    [ subtraction, bitmap`
  ................
  ................
  ................
  ................
  ................
  ................
  ................
  ....00000000....
  ....00000000....
  ................
  ................
  ................
  ................
  ................
  ................
  ................`],
    [ multiplication, bitmap`
  ................
  ................
  ................
  ................
  ................
  .....LL...00....
  .....LLL.000....
  ......LLL00.....
  .......L0L......
  ......00LLL.....
  .....000.LLL....
  .....00...LL....
  ................
  ................
  ................
  ................`],
    [ division, bitmap`
  ................
  ................
  ................
  ................
  .......00.......
  .......00.......
  ................
  ....00000000....
  ....00000000....
  ................
  .......00.......
  .......00.......
  ................
  ................
  ................
  ................`],
    [ exponent, bitmap`
  ................
  ................
  ................
  .......000......
  ......00000.....
  .....000.000....
  ....000...000...
  ....00.....00...
  ................
  ................
  ................
  ................
  ................
  ................
  ................
  ................`],
    [ decimal, bitmap`
  ................
  ................
  ................
  ................
  ................
  ................
  ................
  ................
  ................
  ................
  ......000.......
  ......000.......
  ......000.......
  ................
  ................
  ................`],
    [ point, bitmap`
  5555555555555555
  5555555555555555
  5555555555555555
  5555555555555555
  5555555555555555
  5555555555555555
  5555555555555555
  5555555555555555
  5555555555555555
  5555555555555555
  5555555555555555
  5555555555555555
  5555555555555555
  5555555555555555
  5555555555555555
  5555555555555555`],
    [ x, bitmap`
  ................
  ................
  ................
  ................
  ................
  ....00.....0....
  .....00...00....
  ......00.00.....
  .......000......
  ......00000.....
  .....00...00....
  ....00.....0....
  ................
  ................
  ................
  ................`],
    [openParenthesis, bitmap`
  ................
  .....000........
  .....00.........
  ....00..........
  ....00..........
  ...000..........
  ...00...........
  ...00...........
  ...00...........
  ...00...........
  ...000..........
  ....00..........
  ....00..........
  .....00.........
  .....000........
  ................`],
    [closedParenthesis, bitmap`
  ................
  ........000.....
  .........00.....
  ..........00....
  ..........00....
  ..........000...
  ...........00...
  ...........00...
  ...........00...
  ...........00...
  ..........000...
  ..........00....
  ..........00....
  .........00.....
  ........000.....
  ................`],
    [axis1, bitmap`
  1111111111111111
  1111111111111111
  1111111111111111
  1111111111111111
  1111111111111111
  1111111111111111
  1111111111111111
  1111111111111111
  1111111111111111
  1111111111111111
  1111111111111111
  1111111111111111
  1111111111111111
  1111111111111111
  1111111111111111
  1111111111111111`],
    [axis2, bitmap`
  0000000000000000
  0000000000000000
  0000000000000000
  0000000000000000
  0000000000000000
  0000000000000000
  0000000000000000
  0000000000000000
  0000000000000000
  0000000000000000
  0000000000000000
  0000000000000000
  0000000000000000
  0000000000000000
  0000000000000000
  0000000000000000`]
  )
  
  class Game {
    constructor() {
        this.state = "UI";
      this.cursorPos = {x:0,y:4};
      this.selectedChar = CHARS.ZERO;
      this.equation = "";
      this.errorMessage = "";
      this.equationCheck = "";
      this.errorOccured = false;
    }
  
    renderUI() {
      clearText();
      setMap(UI);
      if (getFirst(cursor) != null) {
          getFirst(cursor).remove();
      }
      addSprite(this.cursorPos.x, this.cursorPos.y, cursor);
  
      addText("y="+this.equation,{x:1,y:4});

      try {
        this.equationCheck = Function(`'use strict'; return (${this.equation.replaceAll("X",1)})`)();
      }
      catch(err) {
        this.errorOccured = true;
        //console.log(err);
        //console.log(this.equation);
      }
      if (this.errorOccured) {
        this.errorMessage = "Error with equation";
      } else {
        this.errorMessage = "";
        console.log(this.equationCheck);
      }

      if (this.equationCheck == "Infinity") {
        this.errorMessage = "Divide by 0";
        this.errorOccured = true;
      }
      
      addText(this.errorMessage,{x:1,y:2});
      this.errorOccured = false;
      

      switch (this.cursorPos.y) {
          case 4:
              switch (this.cursorPos.x) {
                  case 0: this.selectedChar = CHARS.ZERO; break;
                  case 1: this.selectedChar = CHARS.ONE; break;
                  case 2: this.selectedChar = CHARS.TWO; break;
                  case 3: this.selectedChar = CHARS.THREE; break;
                  case 4: this.selectedChar = CHARS.FOUR; break;
                  case 5: this.selectedChar = CHARS.FIVE; break;
                  case 6: this.selectedChar = CHARS.SIX; break;
                  case 7: this.selectedChar = CHARS.SEVEN; break;
                  case 8: this.selectedChar = CHARS.EIGHT; break;
                  case 9: this.selectedChar = CHARS.NINE; break;
              }
              break;
          case 5:
              switch (this.cursorPos.x) {
                  case 0: this.selectedChar = CHARS.ADDITION; break;
                  case 1: this.selectedChar = CHARS.SUBTRACTION; break;
                  case 2: this.selectedChar = CHARS.MULTIPLICATION; break;
                  case 3: this.selectedChar = CHARS.DIVISION; break;
                  case 4: this.selectedChar = CHARS.EXPONENT; break;
                  case 5: this.selectedChar = CHARS.DECIMAL; break;
                  case 6: this.selectedChar = CHARS.OPENPARENTHESIS; break;
                  case 7: this.selectedChar = CHARS.CLOSEDPARENTHESIS; break;
                  case 9: this.selectedChar = CHARS.X; break;
              }
              break;
      }
  }
  
    resetGraph() {
      clearText();
      let graph = "";
      for (let i = 0; i<graphStats.height;i++) {
        let row = "";
        for (let j = 0; j<graphStats.width;j++) {
  
          if (j == (graphStats.width-1)/2){
            if ((i+0)%graphStats.scaling == 0 ) {
              console.log(j%20);
              console.log(j);
              row = row + "i";
            } else {
              row = row + "h";
            }
          } else if (i == ((graphStats.height-1)/2)) {
            if ((j+0)%graphStats.scaling == 0) {
              row = row + "i";
            } else {
              row = row + "h";
            } 
          } else {
            row = row + ".";
          }
        };
        graph = graph + row + "\n";
      };
      setMap(graph);
    }
  
    confirmSelection() {
        if (this.equation.length < 16) {
            this.equation += this.selectedChar;
        }
    }
  
    plotPoint(x, y) {
      addSprite(x, y, point);
    }
  
    drawGraph() {
        for (let i = 0-graphStats.width/2; i<graphStats.width; i++) {
    }
  } 
  let game = new Game();
  
  game.renderUI();
  // Enter key
  onInput("i", () => {
    game.confirmSelection();
  });

  onInput("k", () => {
    if (game.equation != "") {
      game.equation = game.equation.slice(0, -1);
    }
  });
  
  // Left select
  onInput("a", () => {
    if (game.cursorPos.x > 0) {
      game.cursorPos.x--;
    }
  });
  
  // Right select
  onInput("d", () => {
    if (game.cursorPos.x < 9) {
      game.cursorPos.x++;
    }
  });
  
  // Up select
  onInput("w", () => {
    if (game.cursorPos.y > 4) {
      game.cursorPos.y--;
    }
  });
  
  // Down select
  onInput("s", () => {
    if (game.cursorPos.y < 5) {
      game.cursorPos.y++;
    }
  });

  // Switch between UI and graph
  onInput("l", () => {
    if (game.state == "UI") {
      game.state = "graph";
    } else if (game.state == "graph") {
      game.state = "UI";
    }
  });
  
  afterInput(() => {
      if (game.state == "UI") {
          game.renderUI();
      } else if (game.state == "graph") {
          game.resetGraph();
          game.drawGraph();
      }
  })