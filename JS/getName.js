function makeNameField() {
  let dataNumPlayer = window.location.href.indexOf("playerNumber");
  let indexData = window.location.href.substr(dataNumPlayer + 13, 1);
  let makeNameArea = "";
  for (var i = 0; i < indexData; i++) {
    makeNameArea += "<label class=\"playerNameLabel\">Player ";
    makeNameArea += i + 1;
    makeNameArea += "</label>\n<input type=\"text\" value=\"\" name=\"player";
    makeNameArea += i + 1;
    makeNameArea += "\" class=\"playerNameIn\">\n";
  };
  makeNameArea += "<div>\n<input type=\"submit\" id=\"playerNameSubmit\" onclick=\"inputPlayerName()\">\n<input type=\"reset\" id=\"playerNameReset\">\n</div>";
  document.getElementById('nameForm').innerHTML = makeNameArea;
};

function inputPlayerName() {
  let myForm = document.forms["nameForm"];
  if (myForm.player1.value == "") {
    myForm.player1.value = "Player 1"
  };
  if (myForm.player2.value == "") {
    myForm.player2.value = "Player 2"
  };
  if (myForm.player3.value == "") {
    myForm.player3.value = "Player 3"
  };
  if (myForm.player4.value == "") {
    myForm.player4.value = "Player 4"
  };
}