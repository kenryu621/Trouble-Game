var player1loc = window.location.href.indexOf("player1");
var player2loc = window.location.href.indexOf("player2");
var player3loc = window.location.href.indexOf("player3");
var player4loc = window.location.href.indexOf("player4");
if (window.location.href.indexOf("player2") == -1) {
  var player2loc = window.location.href.length + 1;
};
if (window.location.href.indexOf("player3") == -1) {
  var player3loc = window.location.href.length + 1;
};
if (window.location.href.indexOf("player4") == -1) {
  var player4loc = window.location.href.length + 1;
};

var player1Name = window.location.href.substring(player1loc + 8, player2loc - 1);
var player2Name = window.location.href.substring(player2loc + 8, player3loc - 1);
var player3Name = window.location.href.substring(player3loc + 8, player4loc - 1);
var player4Name = window.location.href.substring(player4loc + 8, window.location.href.length);

function addName() {
  if (player3Name == "" && player4Name == "") {
    player3Name = player1Name;
    player4Name = player2Name;
  };
  player1Name = player1Name.split('+').join(' ');
  player2Name = player2Name.split('+').join(' ');
  player3Name = player3Name.split('+').join(' ');
  player4Name = player4Name.split('+').join(' ');
  document.getElementById('firstNameOnBoard').innerHTML = player1Name;
  document.getElementById('secondNameOnBoard').innerHTML = player2Name;
  document.getElementById('thirdNameOnBoard').innerHTML = player3Name;
  document.getElementById('fourthNameOnBoard').innerHTML = player4Name;
};

var whoGoFirst = 0

function goFirst() {
  document.getElementById('rollButton').setAttribute('onclick', '');
  rollDiceAnimat();
  let player1GoFirst = Math.floor(Math.random() * 6) + 1;
  let player2GoFirst = Math.floor(Math.random() * 6) + 1;
  let player3GoFirst = Math.floor(Math.random() * 6) + 1;
  let player4GoFirst = Math.floor(Math.random() * 6) + 1;
  setTimeout(function() {
    if (player1Name == player3Name && player2Name == player4Name) {
      if (player1GoFirst == player2GoFirst) {
        alert("Oh! Looks like you guys need to roll again!\n\n" + player1Name + " got " + player1GoFirst + "\n" + player2Name + " got " + player2GoFirst);
        document.getElementById('dice').getElementsByTagName('p')[0].innerHTML = "Aww.. roll again please.";
        document.getElementById('rollButton').setAttribute('onclick', 'goFirst()');
        return;
      } else if (player1GoFirst > player2GoFirst) {
        alert("Oh! Looks like " + player1Name + " will go first!\n\n" + player1Name + " got " + player1GoFirst + "\n" + player2Name + " got " + player2GoFirst);
        document.getElementById('dice').getElementsByTagName('h1')[0].innerHTML = "Now is " + player1Name + "\'s turn.";
        document.getElementById('dice').getElementsByTagName('p')[0].innerHTML = "Now roll your dice!";
        whoGoFirst = "1"
      } else if (player1GoFirst < player2GoFirst) {
        alert("Oh! Looks like " + player2Name + " will go first!\n\n" + player1Name + " got " + player1GoFirst + "\n" + player2Name + " got " + player2GoFirst);
        document.getElementById('dice').getElementsByTagName('h1')[0].innerHTML = "Now is " + player2Name + "\'s turn.";
        document.getElementById('dice').getElementsByTagName('p')[0].innerHTML = "Now roll your dice!";
        whoGoFirst = "2"
      }
    } else if (player4Name == "") {
      if (player1GoFirst > player2GoFirst && player1GoFirst > player3GoFirst) {
        alert("Oh! Looks like " + player1Name + " will go first!\n\n" + player1Name + " got " + player1GoFirst + "\n" + player2Name + " got " + player2GoFirst + "\n" + player3Name + " got " + player3GoFirst);
        document.getElementById('dice').getElementsByTagName('h1')[0].innerHTML = "Now is " + player1Name + "\'s turn.";
        document.getElementById('dice').getElementsByTagName('p')[0].innerHTML = "Now roll your dice!";
        whoGoFirst = "1"
      } else if (player2GoFirst > player1GoFirst && player2GoFirst > player3GoFirst) {
        alert("Oh! Looks like " + player2Name + " will go first!\n\n" + player1Name + " got " + player1GoFirst + "\n" + player2Name + " got " + player2GoFirst + "\n" + player3Name + " got " + player3GoFirst);
        document.getElementById('dice').getElementsByTagName('h1')[0].innerHTML = "Now is " + player2Name + "\'s turn.";
        document.getElementById('dice').getElementsByTagName('p')[0].innerHTML = "Now roll your dice!";
        whoGoFirst = "2"
      } else if (player3GoFirst > player1GoFirst && player3GoFirst > player2GoFirst) {
        alert("Oh! Looks like " + player3Name + " will go first!\n\n" + player1Name + " got " + player1GoFirst + "\n" + player2Name + " got " + player2GoFirst + "\n" + player3Name + " got " + player3GoFirst);
        document.getElementById('dice').getElementsByTagName('h1')[0].innerHTML = "Now is " + player3Name + "\'s turn.";
        document.getElementById('dice').getElementsByTagName('p')[0].innerHTML = "Now roll your dice!";
        whoGoFirst = "3"
      } else {
        alert("Oh! Looks like you guys need to roll again!\n\n" + player1Name + " got " + player1GoFirst + "\n" + player2Name + " got " + player2GoFirst + "\n" + player3Name + " got " + player3GoFirst);
        document.getElementById('rollButton').setAttribute('onclick', 'goFirst()');
        document.getElementById('dice').getElementsByTagName('p')[0].innerHTML = "Aww.. roll again please."
        return;
      }
    } else {
      if (player1GoFirst > player2GoFirst && player1GoFirst > player3GoFirst && player1GoFirst > player4GoFirst) {
        alert("Oh! Looks like " + player1Name + " will go first!\n\n" + player1Name + " got " + player1GoFirst + "\n" + player2Name + " got " + player2GoFirst + "\n" + player3Name + " got " + player3GoFirst + "\n" + player4Name + " got " + player4GoFirst);
        document.getElementById('dice').getElementsByTagName('h1')[0].innerHTML = "Now is " + player1Name + "\'s turn.";
        document.getElementById('dice').getElementsByTagName('p')[0].innerHTML = "Now roll your dice!";
        whoGoFirst = "1"
      } else if (player2GoFirst > player1GoFirst && player2GoFirst > player3GoFirst && player2GoFirst > player4GoFirst) {
        alert("Oh! Looks like " + player2Name + " will go first!\n\n" + player1Name + " got " + player1GoFirst + "\n" + player2Name + " got " + player2GoFirst + "\n" + player3Name + " got " + player3GoFirst + "\n" + player4Name + " got " + player4GoFirst);
        document.getElementById('dice').getElementsByTagName('h1')[0].innerHTML = "Now is " + player2Name + "\'s turn.";
        document.getElementById('dice').getElementsByTagName('p')[0].innerHTML = "Now roll your dice!";
        whoGoFirst = "2"
      } else if (player3GoFirst > player1GoFirst && player3GoFirst > player2GoFirst && player3GoFirst > player4GoFirst) {
        alert("Oh! Looks like " + player3Name + " will go first!\n\n" + player1Name + " got " + player1GoFirst + "\n" + player2Name + " got " + player2GoFirst + "\n" + player3Name + " got " + player3GoFirst + "\n" + player4Name + " got " + player4GoFirst);
        document.getElementById('dice').getElementsByTagName('h1')[0].innerHTML = "Now is " + player3Name + "\'s turn.";
        document.getElementById('dice').getElementsByTagName('p')[0].innerHTML = "Now roll your dice!";
        whoGoFirst = "3"
      } else if (player4GoFirst > player1GoFirst && player4GoFirst > player2GoFirst && player4GoFirst > player3GoFirst) {
        alert("Oh! Looks like " + player4Name + " will go first!\n\n" + player1Name + " got " + player1GoFirst + "\n" + player2Name + " got " + player2GoFirst + "\n" + player3Name + " got " + player3GoFirst + "\n" + player4Name + " got " + player4GoFirst);
        document.getElementById('dice').getElementsByTagName('h1')[0].innerHTML = "Now is " + player4Name + "\'s turn.";
        document.getElementById('dice').getElementsByTagName('p')[0].innerHTML = "Now roll your dice!";
        whoGoFirst = "4"
      } else {
        alert("Oh! Looks like you guys need to roll again!\n\n" + player1Name + " got " + player1GoFirst + "\n" + player2Name + " got " + player2GoFirst + "\n" + player3Name + " got " + player3GoFirst + "\n" + player4Name + " got " + player4GoFirst);
        document.getElementById('rollButton').setAttribute('onclick', 'goFirst()');
        document.getElementById('dice').getElementsByTagName('p')[0].innerHTML = "Aww.. roll again please."
        return;
      }
    }
    document.getElementById('rollButton').setAttribute('onclick', 'rollDice(' + whoGoFirst + ')');
  }, 1400)
}

function rollDice(playerNo) {
  document.getElementById('rollButton').setAttribute('onclick', '');
  let diceNum = Math.floor(Math.random() * 6) + 1;
  rollDiceAnimat();
  setTimeout(function() {
    document.getElementById('dice').getElementsByTagName('img')[0].src = "img/dice/" + diceNum + ".svg";
    if (diceNum == 1) {
      document.getElementById('dice').getElementsByTagName('p')[0].innerHTML = "You move " + diceNum + " step."
    } else if (diceNum != 6) {
      document.getElementById('dice').getElementsByTagName('p')[0].innerHTML = "You move " + diceNum + " steps."
    } else {
      document.getElementById('dice').getElementsByTagName('p')[0].innerHTML = "Congrat! You get extra turn! You move " + diceNum + " steps."
    }
    if (playerNo == '1') {
      if (pos57.childElementCount + pos58.childElementCount + pos59.childElementCount + pos60.childElementCount == 4) {
        if (diceNum != 6) {
          document.getElementById('dice').getElementsByTagName('h1')[0].innerHTML = "Now is " + player2Name + "\'s turn."
          document.getElementById('dice').getElementsByTagName('p')[0].innerHTML = "Sorry, you need a 6 to start a peg."
          document.getElementById('rollButton').setAttribute('onclick', 'rollDice(2)');
        } else {
          for (let i = 0; i <= 3; i++) {
            document.getElementsByClassName('player' + playerNo + 'peg')[i].setAttribute('onclick', 'movePeg(' + playerNo + ',' + diceNum + ',' + 'this.id' + ')');
            document.getElementsByClassName('player' + playerNo + 'peg')[i].classList.add('enableClick');
          }
        }
      } else {
        for (let i = 0; i <= 3; i++) {
          document.getElementsByClassName('player' + playerNo + 'peg')[i].setAttribute('onclick', 'movePeg(' + playerNo + ',' + diceNum + ',' + 'this.id' + ')');
          document.getElementsByClassName('player' + playerNo + 'peg')[i].classList.add('enableClick');
        }
        if (diceNum != 6) {
          for (let i = 57; i <= 60; i++) {
            if (document.getElementById('pos' + i).firstElementChild == null) {
              continue;
            }
            document.getElementById('pos' + i).firstElementChild.setAttribute('onclick', '');
            document.getElementById('pos' + i).firstElementChild.classList.remove('enableClick');
          }
        } else if (diceNum == 6 && document.getElementById('pos1').firstElementChild != null && document.getElementById('pos1').firstElementChild.classList.value.substr(0, 10) == 'player1peg') {
          for (let i = 57; i <= 60; i++) {
            if (document.getElementById('pos' + i).firstElementChild == null) {
              continue;
            }
            document.getElementById('pos' + i).firstElementChild.setAttribute('onclick', '');
            document.getElementById('pos' + i).firstElementChild.classList.remove('enableClick');
          }
        }
      }
    }
    if (playerNo == '2') {
      if (pos61.childElementCount + pos62.childElementCount + pos63.childElementCount + pos64.childElementCount == 4) {
        if (diceNum != 6) {
          document.getElementById('dice').getElementsByTagName('h1')[0].innerHTML = "Now is " + player3Name + "\'s turn."
          document.getElementById('dice').getElementsByTagName('p')[0].innerHTML = "Sorry, you need a 6 to start a peg."
          document.getElementById('rollButton').setAttribute('onclick', 'rollDice(3)');
        } else {
          for (let i = 0; i <= 3; i++) {
            document.getElementsByClassName('player' + playerNo + 'peg')[i].setAttribute('onclick', 'movePeg(' + playerNo + ',' + diceNum + ',' + 'this.id' + ')');
            document.getElementsByClassName('player' + playerNo + 'peg')[i].classList.add('enableClick');
          }
        }
      } else {
        for (let i = 0; i <= 3; i++) {
          document.getElementsByClassName('player' + playerNo + 'peg')[i].setAttribute('onclick', 'movePeg(' + playerNo + ',' + diceNum + ',' + 'this.id' + ')');
          document.getElementsByClassName('player' + playerNo + 'peg')[i].classList.add('enableClick');
        }
        if (diceNum != 6) {
          for (let i = 61; i <= 64; i++) {
            if (document.getElementById('pos' + i).firstElementChild == null) {
              continue;
            }
            document.getElementById('pos' + i).firstElementChild.setAttribute('onclick', '');
            document.getElementById('pos' + i).firstElementChild.classList.remove('enableClick');
          }
        } else if (diceNum == 6 && document.getElementById('pos31').firstElementChild != null && document.getElementById('pos31').firstElementChild.classList.value.substr(0, 10) == 'player2peg') {
          for (let i = 61; i <= 64; i++) {
            if (document.getElementById('pos' + i).firstElementChild == null) {
              continue;
            }
            document.getElementById('pos' + i).firstElementChild.setAttribute('onclick', '');
            document.getElementById('pos' + i).firstElementChild.classList.remove('enableClick');
          }
        }
      }
    }
    if (playerNo == '4') {
      if (pos69.childElementCount + pos70.childElementCount + pos71.childElementCount + pos72.childElementCount == 4) {
        if (diceNum != 6) {
          document.getElementById('dice').getElementsByTagName('h1')[0].innerHTML = "Now is " + player1Name + "\'s turn."
          document.getElementById('dice').getElementsByTagName('p')[0].innerHTML = "Sorry, you need a 6 to start a peg."
          document.getElementById('rollButton').setAttribute('onclick', 'rollDice(1)');
        } else {
          for (let i = 0; i <= 3; i++) {
            document.getElementsByClassName('player' + playerNo + 'peg')[i].setAttribute('onclick', 'movePeg(' + playerNo + ',' + diceNum + ',' + 'this.id' + ')');
            document.getElementsByClassName('player' + playerNo + 'peg')[i].classList.add('enableClick');
          }
        }
      } else {
        for (let i = 0; i <= 3; i++) {
          document.getElementsByClassName('player' + playerNo + 'peg')[i].setAttribute('onclick', 'movePeg(' + playerNo + ',' + diceNum + ',' + 'this.id' + ')');
          document.getElementsByClassName('player' + playerNo + 'peg')[i].classList.add('enableClick');
        }
        if (diceNum != 6) {
          for (let i = 69; i <= 72; i++) {
            if (document.getElementById('pos' + i).firstElementChild == null) {
              continue;
            }
            document.getElementById('pos' + i).firstElementChild.setAttribute('onclick', '');
            document.getElementById('pos' + i).firstElementChild.classList.remove('enableClick');
          }
        } else if (diceNum == 6 && document.getElementById('pos11').firstElementChild != null && document.getElementById('pos11').firstElementChild.classList.value.substr(0, 10) == 'player4peg') {
          for (let i = 69; i <= 72; i++) {
            if (document.getElementById('pos' + i).firstElementChild == null) {
              continue;
            }
            document.getElementById('pos' + i).firstElementChild.setAttribute('onclick', '');
            document.getElementById('pos' + i).firstElementChild.classList.remove('enableClick');
          }
        }
      }
    }
    if (playerNo == '3') {
      if (pos65.childElementCount + pos66.childElementCount + pos67.childElementCount + pos68.childElementCount == 4) {
        if (diceNum != 6) {
          if (player4Name == "") {
            document.getElementById('dice').getElementsByTagName('h1')[0].innerHTML = "Now is " + player1Name + "\'s turn."
            document.getElementById('dice').getElementsByTagName('p')[0].innerHTML = "Sorry, you need a 6 to start a peg."
            document.getElementById('rollButton').setAttribute('onclick', 'rollDice(1)');
          } else {
            document.getElementById('dice').getElementsByTagName('h1')[0].innerHTML = "Now is " + player4Name + "\'s turn."
            document.getElementById('dice').getElementsByTagName('p')[0].innerHTML = "Sorry, you need a 6 to start a peg."
            document.getElementById('rollButton').setAttribute('onclick', 'rollDice(4)');
          }
        } else {
          for (let i = 0; i <= 3; i++) {
            document.getElementsByClassName('player' + playerNo + 'peg')[i].setAttribute('onclick', 'movePeg(' + playerNo + ',' + diceNum + ',' + 'this.id' + ')');
            document.getElementsByClassName('player' + playerNo + 'peg')[i].classList.add('enableClick');
          }
        }
      } else {
        for (let i = 0; i <= 3; i++) {
          document.getElementsByClassName('player' + playerNo + 'peg')[i].setAttribute('onclick', 'movePeg(' + playerNo + ',' + diceNum + ',' + 'this.id' + ')');
          document.getElementsByClassName('player' + playerNo + 'peg')[i].classList.add('enableClick');
        }
        if (diceNum != 6) {
          for (let i = 65; i <= 68; i++) {
            if (document.getElementById('pos' + i).firstElementChild == null) {
              continue;
            }
            document.getElementById('pos' + i).firstElementChild.setAttribute('onclick', '');
            document.getElementById('pos' + i).firstElementChild.classList.remove('enableClick');
          }
        } else if (diceNum == 6 && document.getElementById('pos21').firstElementChild != null && document.getElementById('pos21').firstElementChild.classList.value.substr(0, 10) == 'player3peg') {
          for (let i = 65; i <= 68; i++) {
            if (document.getElementById('pos' + i).firstElementChild == null) {
              continue;
            }
            document.getElementById('pos' + i).firstElementChild.setAttribute('onclick', '');
            document.getElementById('pos' + i).firstElementChild.classList.remove('enableClick');
          }
        }
      }
    }
  }, 1400);
};

function movePeg(playerNo, num, pegId) {
  let parentId = document.getElementById(pegId).parentNode.id;
  if (playerNo == '1') {
    if (parentId == 'pos57') {
      if (document.getElementById('pos1').firstElementChild != null && document.getElementById('pos1').firstElementChild.classList.value.substr(0, 10) == "player1peg") {
        alert("Sorry, you already have a peg at the next position!");
        return;
      } else if (document.getElementById('pos1').firstElementChild != null) {
        let hitPegClass = document.getElementById('pos1').firstElementChild.classList.value;
        let hitPegId = document.getElementById('pos1').firstElementChild.id;
        hitPegBack(hitPegClass, hitPegId);
      }
      document.getElementById('pos57').innerHTML = "";
      document.getElementById('pos1').innerHTML = "<button class=\"player1peg\" id=\"" + pegId + "\"></button>";
    } else if (parentId == "pos58") {
      if (document.getElementById('pos1').firstElementChild != null && document.getElementById('pos1').firstElementChild.classList.value.substr(0, 10) == "player1peg") {
        alert("Sorry, you already have a peg at the next position!");
        return;
      } else if (document.getElementById('pos1').firstElementChild != null) {
        let hitPegClass = document.getElementById('pos1').firstElementChild.classList.value;
        let hitPegId = document.getElementById('pos1').firstElementChild.id;
        hitPegBack(hitPegClass, hitPegId);
      }
      document.getElementById('pos58').innerHTML = "";
      document.getElementById('pos1').innerHTML = "<button class=\"player1peg\" id=\"" + pegId + "\"></button>";
    } else if (parentId == "pos59") {
      if (document.getElementById('pos1').firstElementChild != null && document.getElementById('pos1').firstElementChild.classList.value.substr(0, 10) == "player1peg") {
        alert("Sorry, you already have a peg at the next position!");
        return;
      } else if (document.getElementById('pos1').firstElementChild != null) {
        let hitPegClass = document.getElementById('pos1').firstElementChild.classList.value;
        let hitPegId = document.getElementById('pos1').firstElementChild.id;
        hitPegBack(hitPegClass, hitPegId);
      }
      document.getElementById('pos59').innerHTML = "";
      document.getElementById('pos1').innerHTML = "<button class=\"player1peg\" id=\"" + pegId + "\"></button>";
    } else if (parentId == "pos60") {
      if (document.getElementById('pos1').firstElementChild != null && document.getElementById('pos1').firstElementChild.classList.value.substr(0, 10) == "player1peg") {
        alert("Sorry, you already have a peg at the next position!");
        return;
      } else if (document.getElementById('pos1').firstElementChild != null) {
        let hitPegClass = document.getElementById('pos1').firstElementChild.classList.value;
        let hitPegId = document.getElementById('pos1').firstElementChild.id;
        hitPegBack(hitPegClass, hitPegId);
      }
      document.getElementById('pos60').innerHTML = "";
      document.getElementById('pos1').innerHTML = "<button class=\"player1peg\" id=\"" + pegId + "\"></button>";
    } else {
      let currentPosition = Number(parentId.substr(3, 2));
      let nextPosition = currentPosition + num;
      if (nextPosition > 44 && num == 6) {
        alert('Sorry, you don\'t have the exact number to land on finish line, but you can roll the dice again!');
        document.getElementById('rollButton').setAttribute('onclick', 'rollDice(1);cleanClick(' + playerNo + ')');
        return;
      } else if (nextPosition > 44 && num != 6) {
        alert('Sorry, you don\'t have the exact number to land on finish line.');
        if (document.getElementsByClassName('playingButton')[0].childElementCount != 2) {
          let parentDiv = document.getElementsByClassName('playingButton')[0];
          let buttonDiv = document.createElement('button');
          buttonDiv.setAttribute('id', 'nextPlayer');
          buttonDiv.setAttribute('onclick', 'nextPlayer(' + playerNo + ');cleanClick(' + playerNo + ')');
          buttonDiv.innerHTML = "Next Player";
          parentDiv.appendChild(buttonDiv);
        }
        return;
      } else if (document.getElementById('pos' + nextPosition).firstElementChild != null && document.getElementById('pos' + nextPosition).firstElementChild.classList.value.substr(0, 10) == "player1peg") {
        alert("Sorry, you already have a peg at the next position!");
        return;
      } else if (document.getElementById('pos' + nextPosition).firstElementChild != null) {
        let hitPegClass = document.getElementById('pos' + nextPosition).firstElementChild.classList.value;
        let hitPegId = document.getElementById('pos' + nextPosition).firstElementChild.id;
        hitPegBack(hitPegClass, hitPegId);
        document.getElementById('pos' + nextPosition).innerHTML = "<button class=\"player1peg\" id=\"" + pegId + "\"></button>";
        document.getElementById(parentId).innerHTML = "";
      } else {
        document.getElementById('pos' + nextPosition).innerHTML = "<button class=\"player1peg\" id=\"" + pegId + "\"></button>";
        document.getElementById(parentId).innerHTML = "";
      }
    }
    for (let i = 0; i <= 3; i++) {
      document.getElementsByClassName('player' + playerNo + 'peg')[i].setAttribute('onclick', '');
      document.getElementsByClassName('player' + playerNo + 'peg')[i].classList.remove('enableClick')
    }
    if (num == 6) {
      document.getElementById('rollButton').setAttribute('onclick', 'rollDice(1)');
    } else {
      document.getElementById('rollButton').setAttribute('onclick', 'rollDice(2)');
      document.getElementById('dice').getElementsByTagName('h1')[0].innerHTML = "Now is " + player2Name + "\'s turn.";
    }
  }
  if (playerNo == '2') {
    if (parentId == 'pos61') {
      if (document.getElementById('pos31').firstElementChild != null && document.getElementById('pos31').firstElementChild.classList.value.substr(0, 10) == "player2peg") {
        alert("Sorry, you already have a peg at the next position!");
        return;
      } else if (document.getElementById('pos31').firstElementChild != null) {
        let hitPegClass = document.getElementById('pos31').firstElementChild.classList.value;
        let hitPegId = document.getElementById('pos31').firstElementChild.id;
        hitPegBack(hitPegClass, hitPegId);
      }
      document.getElementById('pos61').innerHTML = "";
      document.getElementById('pos31').innerHTML = "<button class=\"player2peg\" id=\"" + pegId + "\"></button>";
    } else if (parentId == "pos62") {
      if (document.getElementById('pos31').firstElementChild != null && document.getElementById('pos31').firstElementChild.classList.value.substr(0, 10) == "player2peg") {
        alert("Sorry, you already have a peg at the next position!");
        return;
      } else if (document.getElementById('pos31').firstElementChild != null) {
        let hitPegClass = document.getElementById('pos31').firstElementChild.classList.value;
        let hitPegId = document.getElementById('pos31').firstElementChild.id;
        hitPegBack(hitPegClass, hitPegId);
      }
      document.getElementById('pos62').innerHTML = "";
      document.getElementById('pos31').innerHTML = "<button class=\"player2peg\" id=\"" + pegId + "\"></button>";
    } else if (parentId == "pos63") {
      if (document.getElementById('pos31').firstElementChild != null && document.getElementById('pos31').firstElementChild.classList.value.substr(0, 10) == "player2peg") {
        alert("Sorry, you already have a peg at the next position!");
        return;
      } else if (document.getElementById('pos31').firstElementChild != null) {
        let hitPegClass = document.getElementById('pos31').firstElementChild.classList.value;
        let hitPegId = document.getElementById('pos31').firstElementChild.id;
        hitPegBack(hitPegClass, hitPegId);
      }
      document.getElementById('pos63').innerHTML = "";
      document.getElementById('pos31').innerHTML = "<button class=\"player2peg\" id=\"" + pegId + "\"></button>";
    } else if (parentId == "pos64") {
      if (document.getElementById('pos31').firstElementChild != null && document.getElementById('pos31').firstElementChild.classList.value.substr(0, 10) == "player2peg") {
        alert("Sorry, you already have a peg at the next position!");
        return;
      } else if (document.getElementById('pos31').firstElementChild != null) {
        let hitPegClass = document.getElementById('pos31').firstElementChild.classList.value;
        let hitPegId = document.getElementById('pos31').firstElementChild.id;
        hitPegBack(hitPegClass, hitPegId);
      }
      document.getElementById('pos64').innerHTML = "";
      document.getElementById('pos31').innerHTML = "<button class=\"player2peg\" id=\"" + pegId + "\"></button>";
    } else {
      let currentPosition = Number(parentId.substr(3, 2));
      let nextPosition = currentPosition + num;
      if (nextPosition > 40 && currentPosition < 45) {
        nextPosition = nextPosition - 40
      } else if (currentPosition >= 25 && currentPosition <= 30 && nextPosition > 30) {
        nextPosition = nextPosition + 14
      }
      if (nextPosition > 48 && num == 6) {
        alert('Sorry, you don\'t have the exact number to land on finish line, but you can roll the dice again!');
        document.getElementById('rollButton').setAttribute('onclick', 'rollDice(2);cleanClick(' + playerNo + ')');
        return;
      } else if (nextPosition > 48 && num != 6) {
        alert('Sorry, you don\'t have the exact number to land on finish line.');
        if (document.getElementsByClassName('playingButton')[0].childElementCount != 2) {
          let parentDiv = document.getElementsByClassName('playingButton')[0];
          let buttonDiv = document.createElement('button');
          buttonDiv.setAttribute('id', 'nextPlayer');
          buttonDiv.setAttribute('onclick', 'nextPlayer(' + playerNo + ');cleanClick(' + playerNo + ')');
          buttonDiv.innerHTML = "Next Player";
          parentDiv.appendChild(buttonDiv);
        }
        return;
      } else if (document.getElementById('pos' + nextPosition).firstElementChild != null && document.getElementById('pos' + nextPosition).firstElementChild.classList.value.substr(0, 10) == "player2peg") {
        alert("Sorry, you already have a peg at the next position!");
        return;
      } else if (document.getElementById('pos' + nextPosition).firstElementChild != null) {
        let hitPegClass = document.getElementById('pos' + nextPosition).firstElementChild.classList.value;
        let hitPegId = document.getElementById('pos' + nextPosition).firstElementChild.id;
        hitPegBack(hitPegClass, hitPegId);
        document.getElementById('pos' + nextPosition).innerHTML = "<button class=\"player2peg\" id=\"" + pegId + "\"></button>";
        document.getElementById(parentId).innerHTML = "";
      } else {
        document.getElementById('pos' + nextPosition).innerHTML = "<button class=\"player2peg\" id=\"" + pegId + "\"></button>";
        document.getElementById(parentId).innerHTML = "";
      }
    }
    for (let i = 0; i <= 3; i++) {
      document.getElementsByClassName('player' + playerNo + 'peg')[i].setAttribute('onclick', '');
      document.getElementsByClassName('player' + playerNo + 'peg')[i].classList.remove('enableClick')
    }
    if (num == 6) {
      document.getElementById('rollButton').setAttribute('onclick', 'rollDice(2)');
    } else {
      document.getElementById('rollButton').setAttribute('onclick', 'rollDice(3)');
      document.getElementById('dice').getElementsByTagName('h1')[0].innerHTML = "Now is " + player3Name + "\'s turn.";
    }
  }
  if (playerNo == '3') {
    if (parentId == 'pos65') {
      if (document.getElementById('pos21').firstElementChild != null && document.getElementById('pos21').firstElementChild.classList.value.substr(0, 10) == "player3peg") {
        alert("Sorry, you already have a peg at the next position!");
        return;
      } else if (document.getElementById('pos21').firstElementChild != null) {
        let hitPegClass = document.getElementById('pos21').firstElementChild.classList.value;
        let hitPegId = document.getElementById('pos21').firstElementChild.id;
        hitPegBack(hitPegClass, hitPegId);
      }
      document.getElementById('pos65').innerHTML = "";
      document.getElementById('pos21').innerHTML = "<button class=\"player3peg\" id=\"" + pegId + "\"></button>";
    } else if (parentId == "pos66") {
      if (document.getElementById('pos21').firstElementChild != null && document.getElementById('pos21').firstElementChild.classList.value.substr(0, 10) == "player3peg") {
        alert("Sorry, you already have a peg at the next position!");
        return;
      } else if (document.getElementById('pos21').firstElementChild != null) {
        let hitPegClass = document.getElementById('pos21').firstElementChild.classList.value;
        let hitPegId = document.getElementById('pos21').firstElementChild.id;
        hitPegBack(hitPegClass, hitPegId);
      }
      document.getElementById('pos66').innerHTML = "";
      document.getElementById('pos21').innerHTML = "<button class=\"player3peg\" id=\"" + pegId + "\"></button>";
    } else if (parentId == "pos67") {
      if (document.getElementById('pos21').firstElementChild != null && document.getElementById('pos21').firstElementChild.classList.value.substr(0, 10) == "player3peg") {
        alert("Sorry, you already have a peg at the next position!");
        return;
      } else if (document.getElementById('pos21').firstElementChild != null) {
        let hitPegClass = document.getElementById('pos21').firstElementChild.classList.value;
        let hitPegId = document.getElementById('pos21').firstElementChild.id;
        hitPegBack(hitPegClass, hitPegId);
      }
      document.getElementById('pos67').innerHTML = "";
      document.getElementById('pos21').innerHTML = "<button class=\"player3peg\" id=\"" + pegId + "\"></button>";
    } else if (parentId == "pos68") {
      if (document.getElementById('pos21').firstElementChild != null && document.getElementById('pos21').firstElementChild.classList.value.substr(0, 10) == "player3peg") {
        alert("Sorry, you already have a peg at the next position!");
        return;
      } else if (document.getElementById('pos21').firstElementChild != null) {
        let hitPegClass = document.getElementById('pos21').firstElementChild.classList.value;
        let hitPegId = document.getElementById('pos21').firstElementChild.id;
        hitPegBack(hitPegClass, hitPegId);
      }
      document.getElementById('pos68').innerHTML = "";
      document.getElementById('pos21').innerHTML = "<button class=\"player3peg\" id=\"" + pegId + "\"></button>";
    } else {
      let currentPosition = Number(parentId.substr(3, 2));
      let nextPosition = currentPosition + num;
      if (nextPosition > 40 && currentPosition < 49) {
        nextPosition = nextPosition - 40
      } else if (currentPosition >= 15 && currentPosition <= 20 && nextPosition > 20) {
        nextPosition = nextPosition + 28
      }
      if (nextPosition > 52 && num == 6) {
        alert('Sorry, you don\'t have the exact number to land on finish line, but you can roll the dice again!');
        document.getElementById('rollButton').setAttribute('onclick', 'rollDice(3);cleanClick(' + playerNo + ')');
        return;
      } else if (nextPosition > 52 && num != 6) {
        alert('Sorry, you don\'t have the exact number to land on finish line.');
        if (document.getElementsByClassName('playingButton')[0].childElementCount != 2) {
          let parentDiv = document.getElementsByClassName('playingButton')[0];
          let buttonDiv = document.createElement('button');
          buttonDiv.setAttribute('id', 'nextPlayer');
          buttonDiv.setAttribute('onclick', 'nextPlayer(' + playerNo + ');cleanClick(' + playerNo + ')');
          buttonDiv.innerHTML = "Next Player";
          parentDiv.appendChild(buttonDiv);
        }
        return;
      } else if (document.getElementById('pos' + nextPosition).firstElementChild != null && document.getElementById('pos' + nextPosition).firstElementChild.classList.value.substr(0, 10) == "player3peg") {
        alert("Sorry, you already have a peg at the next position!");
        return;
      } else if (document.getElementById('pos' + nextPosition).firstElementChild != null) {
        let hitPegClass = document.getElementById('pos' + nextPosition).firstElementChild.classList.value;
        let hitPegId = document.getElementById('pos' + nextPosition).firstElementChild.id;
        hitPegBack(hitPegClass, hitPegId);
        document.getElementById('pos' + nextPosition).innerHTML = "<button class=\"player3peg\" id=\"" + pegId + "\"></button>";
        document.getElementById(parentId).innerHTML = "";
      } else {
        document.getElementById('pos' + nextPosition).innerHTML = "<button class=\"player3peg\" id=\"" + pegId + "\"></button>";
        document.getElementById(parentId).innerHTML = "";
      }
    }
    for (let i = 0; i <= 3; i++) {
      document.getElementsByClassName('player' + playerNo + 'peg')[i].setAttribute('onclick', '');
      document.getElementsByClassName('player' + playerNo + 'peg')[i].classList.remove('enableClick')
    }
    if (num == 6) {
      document.getElementById('rollButton').setAttribute('onclick', 'rollDice(3)');
    } else {
      if (player4Name == "") {
        document.getElementById('rollButton').setAttribute('onclick', 'rollDice(1)');
        document.getElementById('dice').getElementsByTagName('h1')[0].innerHTML = "Now is " + player1Name + "\'s turn.";
      } else {
        document.getElementById('rollButton').setAttribute('onclick', 'rollDice(4)');
        document.getElementById('dice').getElementsByTagName('h1')[0].innerHTML = "Now is " + player4Name + "\'s turn.";
      }
    }
  }
  if (playerNo == '4') {
    if (parentId == 'pos69') {
      if (document.getElementById('pos11').firstElementChild != null && document.getElementById('pos11').firstElementChild.classList.value.substr(0, 10) == "player4peg") {
        alert("Sorry, you already have a peg at the next position!");
        return;
      } else if (document.getElementById('pos11').firstElementChild != null) {
        let hitPegClass = document.getElementById('pos11').firstElementChild.classList.value;
        let hitPegId = document.getElementById('pos11').firstElementChild.id;
        hitPegBack(hitPegClass, hitPegId);
      }
      document.getElementById('pos69').innerHTML = "";
      document.getElementById('pos11').innerHTML = "<button class=\"player4peg\" id=\"" + pegId + "\"></button>";
    } else if (parentId == "pos70") {
      if (document.getElementById('pos11').firstElementChild != null && document.getElementById('pos11').firstElementChild.classList.value.substr(0, 10) == "player4peg") {
        alert("Sorry, you already have a peg at the next position!");
        return;
      } else if (document.getElementById('pos11').firstElementChild != null) {
        let hitPegClass = document.getElementById('pos11').firstElementChild.classList.value;
        let hitPegId = document.getElementById('pos11').firstElementChild.id;
        hitPegBack(hitPegClass, hitPegId);
      }
      document.getElementById('pos70').innerHTML = "";
      document.getElementById('pos11').innerHTML = "<button class=\"player4peg\" id=\"" + pegId + "\"></button>";
    } else if (parentId == "pos71") {
      if (document.getElementById('pos11').firstElementChild != null && document.getElementById('pos11').firstElementChild.classList.value.substr(0, 10) == "player4peg") {
        alert("Sorry, you already have a peg at the next position!");
        return;
      } else if (document.getElementById('pos11').firstElementChild != null) {
        let hitPegClass = document.getElementById('pos11').firstElementChild.classList.value;
        let hitPegId = document.getElementById('pos11').firstElementChild.id;
        hitPegBack(hitPegClass, hitPegId);
      }
      document.getElementById('pos71').innerHTML = "";
      document.getElementById('pos11').innerHTML = "<button class=\"player4peg\" id=\"" + pegId + "\"></button>";
    } else if (parentId == "pos72") {
      if (document.getElementById('pos11').firstElementChild != null && document.getElementById('pos11').firstElementChild.classList.value.substr(0, 10) == "player4peg") {
        alert("Sorry, you already have a peg at the next position!");
        return;
      } else if (document.getElementById('pos11').firstElementChild != null) {
        let hitPegClass = document.getElementById('pos11').firstElementChild.classList.value;
        let hitPegId = document.getElementById('pos11').firstElementChild.id;
        hitPegBack(hitPegClass, hitPegId);
      }
      document.getElementById('pos72').innerHTML = "";
      document.getElementById('pos11').innerHTML = "<button class=\"player4peg\" id=\"" + pegId + "\"></button>";
    } else {
      let currentPosition = Number(parentId.substr(3, 2));
      let nextPosition = currentPosition + num;
      if (nextPosition > 40 && currentPosition < 52) {
        nextPosition = nextPosition - 40
      } else if (currentPosition >= 5 && currentPosition <= 10 && nextPosition > 10) {
        nextPosition = nextPosition + 42
      }
      if (nextPosition > 56 && num == 6) {
        alert('Sorry, you don\'t have the exact number to land on finish line, but you can roll the dice again!');
        document.getElementById('rollButton').setAttribute('onclick', 'rollDice(4);cleanClick(' + playerNo + ')');
        return;
      } else if (nextPosition > 56 && num != 6) {
        alert('Sorry, you don\'t have the exact number to land on finish line.');
        if (document.getElementsByClassName('playingButton')[0].childElementCount != 2) {
          let parentDiv = document.getElementsByClassName('playingButton')[0];
          let buttonDiv = document.createElement('button');
          buttonDiv.setAttribute('id', 'nextPlayer');
          buttonDiv.setAttribute('onclick', 'nextPlayer(' + playerNo + ');cleanClick(' + playerNo + ')');
          buttonDiv.innerHTML = "Next Player";
          parentDiv.appendChild(buttonDiv);
        }
        return;
      } else if (document.getElementById('pos' + nextPosition).firstElementChild != null && document.getElementById('pos' + nextPosition).firstElementChild.classList.value.substr(0, 10) == "player4peg") {
        alert("Sorry, you already have a peg at the next position!");
        return;
      } else if (document.getElementById('pos' + nextPosition).firstElementChild != null) {
        let hitPegClass = document.getElementById('pos' + nextPosition).firstElementChild.classList.value;
        let hitPegId = document.getElementById('pos' + nextPosition).firstElementChild.id;
        hitPegBack(hitPegClass, hitPegId);
        document.getElementById('pos' + nextPosition).innerHTML = "<button class=\"player4peg\" id=\"" + pegId + "\"></button>";
        document.getElementById(parentId).innerHTML = "";
      } else {
        document.getElementById('pos' + nextPosition).innerHTML = "<button class=\"player4peg\" id=\"" + pegId + "\"></button>";
        document.getElementById(parentId).innerHTML = "";
      }
    }
    for (let i = 0; i <= 3; i++) {
      document.getElementsByClassName('player' + playerNo + 'peg')[i].setAttribute('onclick', '');
      document.getElementsByClassName('player' + playerNo + 'peg')[i].classList.remove('enableClick')
    }
    if (num == 6) {
      document.getElementById('rollButton').setAttribute('onclick', 'rollDice(4)');
    } else {
      document.getElementById('rollButton').setAttribute('onclick', 'rollDice(1)');
      document.getElementById('dice').getElementsByTagName('h1')[0].innerHTML = "Now is " + player1Name + "\'s turn.";
    }
  }
  checkWinner();
}

function rollDiceAnimat() {
  for (var i = 1; i <= 6; i++) {
    (function Loop(i) {
      let diceNumAnimat = Math.floor(Math.random() * 6) + 1;
      setTimeout(function() {
        document.getElementById('dice').getElementsByTagName('img')[0].src = "img/dice/" + diceNumAnimat + ".svg";
        document.getElementById('dice').getElementsByTagName('p')[0].innerHTML = "Rolling..."
      }, 200 * i);
    })(i);
  };
};

function getPegs() {
  for (var i = 1; i <= 72; i++) {
    let parentDiv = document.getElementById('pegPosition');
    let pegDiv = document.createElement('div');
    pegDiv.setAttribute('id', 'pos' + i)
    parentDiv.appendChild(pegDiv);
  }
  document.getElementById('rollButton').setAttribute('onclick', 'goFirst()');
  document.getElementById('dice').getElementsByTagName('p')[0].innerHTML = "Let\'s see who goes first!";
  document.getElementById('rollButton').innerHTML = "Roll Dice";
  if (player1Name == player3Name && player2Name == player4Name) {
    for (var i = 57; i <= 72; i++) {
      if (i >= 57 && i <= 60) {
        document.getElementById('pos' + i).innerHTML = "<button class=\"player1peg\"></button>";
      };
      if (i >= 61 && i <= 64) {
        document.getElementById('pos' + i).innerHTML = "<button class=\"player2peg\"></button>";
      };
      if (i >= 65 && i <= 68) {
        document.getElementById('pos' + i).innerHTML = "<button class=\"player3peg\"></button>";
      };
      if (i >= 69 && i <= 72) {
        document.getElementById('pos' + i).innerHTML = "<button class=\"player4peg\"></button>";
      };
    }
    for (let player = 1; player <= 4; player++) {
      for (let peg = 0; peg <= 3; peg++) {
        document.getElementsByClassName('player' + player + 'peg')[peg].setAttribute('id', 'peg' + player + peg);
      }
    }
  } else if (player4Name == "") {
    for (var i = 57; i <= 68; i++) {
      if (i >= 57 && i <= 60) {
        document.getElementById('pos' + i).innerHTML = "<button class=\"player1peg\"></button>";
      };
      if (i >= 61 && i <= 64) {
        document.getElementById('pos' + i).innerHTML = "<button class=\"player2peg\"></button>";
      };
      if (i >= 65 && i <= 68) {
        document.getElementById('pos' + i).innerHTML = "<button class=\"player3peg\"></button>";
      };
    }
    for (let player = 1; player <= 3; player++) {
      for (let peg = 0; peg <= 3; peg++) {
        document.getElementsByClassName('player' + player + 'peg')[peg].setAttribute('id', 'peg' + player + peg);
      }
    }
  } else {
    for (var i = 57; i <= 72; i++) {
      if (i >= 57 && i <= 60) {
        document.getElementById('pos' + i).innerHTML = "<button class=\"player1peg\"></button>";
      };
      if (i >= 61 && i <= 64) {
        document.getElementById('pos' + i).innerHTML = "<button class=\"player2peg\"></button>";
      };
      if (i >= 65 && i <= 68) {
        document.getElementById('pos' + i).innerHTML = "<button class=\"player3peg\"></button>";
      };
      if (i >= 69 && i <= 72) {
        document.getElementById('pos' + i).innerHTML = "<button class=\"player4peg\"></button>";
      };
    }
    for (let player = 1; player <= 4; player++) {
      for (let peg = 0; peg <= 3; peg++) {
        document.getElementsByClassName('player' + player + 'peg')[peg].setAttribute('id', 'peg' + player + peg);
      }
    }
  }
}

function hitPegBack(pushClass, pushId) {
  let classNum = Number(pushClass.substr(6, 1));
  for (let i = 53 + (4 * classNum); i <= 56 + (4 * classNum); i++) {
    if (document.getElementById('pos' + i).firstElementChild != null) {
      continue;
    }
    document.getElementById('pos' + i).innerHTML = "<button class=\'" + pushClass + "\' id=\'" + pushId + "\'>";
    break;
  }
}

function cleanClick(No) {
  for (let i = 0; i <= 3; i++) {
    document.getElementsByClassName('player' + No + 'peg')[i].setAttribute('onclick', '');
    document.getElementsByClassName('player' + No + 'peg')[i].classList.remove('enableClick')
  }
}

function nextPlayer(No) {
  let magicButton = document.getElementById('rollButton');
  let magicText = document.getElementById('dice').getElementsByTagName('h1')[0];
  if (No == '1') {
    magicText.innerHTML = "Now is " + player2Name + "\'s turn.";
    magicButton.setAttribute('onclick', 'rollDice(2)');
  } else if (No == '2') {
    magicText.innerHTML = "Now is " + player3Name + "\'s turn.";
    magicButton.setAttribute('onclick', 'rollDice(3)');
  } else if (No == '3' && player4Name == '') {
    magicText.innerHTML = "Now is " + player1Name + "\'s turn.";
    magicButton.setAttribute('onclick', 'rollDice(1)');
  } else if (No == '3' && player4Name != '') {
    magicText.innerHTML = "Now is " + player4Name + "\'s turn.";
    magicButton.setAttribute('onclick', 'rollDice(4)');
  } else if (No == '4') {
    magicText.innerHTML = "Now is " + player1Name + "\'s turn.";
    magicButton.setAttribute('onclick', 'rollDice(1)');
  }
  let parent = document.getElementsByClassName('playingButton')[0];
  let but = document.getElementById('nextPlayer')
  parent.removeChild(but);
}

function checkWinner() {
  let player1Finish = 0;
  let player2Finish = 0;
  let player3Finish = 0;
  let player4Finish = 0;
  for (var i = 41; i <= 44; i++) {
    if (document.getElementById('pos' + i).firstElementChild != null) {
      player1Finish++
    }
  }
  for (var i = 45; i <= 48; i++) {
    if (document.getElementById('pos' + i).firstElementChild != null) {
      player2Finish++
    }
  }
  for (var i = 49; i <= 52; i++) {
    if (document.getElementById('pos' + i).firstElementChild != null) {
      player3Finish++
    }
  }
  for (var i = 53; i <= 56; i++) {
    if (document.getElementById('pos' + i).firstElementChild != null) {
      player4Finish++
    }
  }
  if (player1Finish == 4) {
    document.getElementById('dice').getElementsByTagName('h1')[0].innerHTML = "Looks like our WINNER will be " + player1Name + "!!!";
    document.getElementById('dice').getElementsByTagName('p')[0].innerHTML = "Congratulation! " + player1Name + ", you are the WINNER!";
    document.getElementById('rollButton').setAttribute('onclick', '');
  } else if (player2Finish == 4) {
    document.getElementById('dice').getElementsByTagName('h1')[0].innerHTML = "Looks like our WINNER will be " + player2Name + "!!!";
    document.getElementById('dice').getElementsByTagName('p')[0].innerHTML = "Congratulation! " + player2Name + ", you are the WINNER!";
    document.getElementById('rollButton').setAttribute('onclick', '');
  } else if (player3Finish == 4) {
    document.getElementById('dice').getElementsByTagName('h1')[0].innerHTML = "Looks like our WINNER will be " + player3Name + "!!!";
    document.getElementById('dice').getElementsByTagName('p')[0].innerHTML = "Congratulation! " + player3Name + ", you are the WINNER!";
    document.getElementById('rollButton').setAttribute('onclick', '');
  } else if (player4Finish == 4) {
    document.getElementById('dice').getElementsByTagName('h1')[0].innerHTML = "Looks like our WINNER will be " + player4Name + "!!!";
    document.getElementById('dice').getElementsByTagName('p')[0].innerHTML = "Congratulation! " + player4Name + ", you are the WINNER!";
    document.getElementById('rollButton').setAttribute('onclick', '');
  }
}