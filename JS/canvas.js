var c = document.getElementById("myCanvas");
var ctx = c.getContext('2d');

//corner red
ctx.fillStyle = "#f43336";
ctx.beginPath();
ctx.arc(110, 55, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();
ctx.fill();
ctx.fillStyle = "#f43336";
ctx.beginPath();
ctx.arc(55, 55, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();
ctx.fill();
ctx.fillStyle = "#f43336";
ctx.beginPath();
ctx.arc(55, 110, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();
ctx.fill();
ctx.fillStyle = "#f43336";
ctx.beginPath();
ctx.arc(110, 110, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();
ctx.fill();
//corner red

//corner yellow
ctx.fillStyle = "#efbb27";
ctx.beginPath();
ctx.arc(110, 895, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();
ctx.fill();
ctx.fillStyle = "#efbb27";
ctx.beginPath();
ctx.arc(55, 895, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();
ctx.fill();
ctx.fillStyle = "#efbb27";
ctx.beginPath();
ctx.arc(55, 840, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();
ctx.fill();
ctx.fillStyle = "#efbb27";
ctx.beginPath();
ctx.arc(110, 840, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();
ctx.fill();
//corner yellow


//corner green
ctx.fillStyle = "#65c070";
ctx.beginPath();
ctx.arc(840, 895, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();
ctx.fill();
ctx.fillStyle = "#65c070";
ctx.beginPath();
ctx.arc(895, 895, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();
ctx.fill();
ctx.fillStyle = "#65c070";
ctx.beginPath();
ctx.arc(895, 840, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();
ctx.fill();
ctx.fillStyle = "#65c070";
ctx.beginPath();
ctx.arc(840, 840, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();
ctx.fill();
//corner green


//corner blue
ctx.fillStyle = "#2495f1";
ctx.beginPath();
ctx.arc(840, 55, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();
ctx.fill();
ctx.fillStyle = "#2495f1";
ctx.beginPath();
ctx.arc(895, 55, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();
ctx.fill();
ctx.fillStyle = "#2495f1";
ctx.beginPath();
ctx.arc(840, 110, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();
ctx.fill();
ctx.fillStyle = "#2495f1";
ctx.beginPath();
ctx.arc(895, 110, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();
ctx.fill();
//corner blue

//line 1
ctx.stroke();
ctx.beginPath();
ctx.arc(420, 200, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.beginPath();
ctx.arc(420, 255, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.beginPath();
ctx.arc(420, 310, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.beginPath();
ctx.arc(420, 365, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.beginPath();
ctx.arc(420, 420, 25, 0, Math.PI * 2);
ctx.stroke();
//line 1

//line 2
ctx.beginPath();
ctx.arc(530, 255, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.beginPath();
ctx.arc(530, 310, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.beginPath();
ctx.arc(530, 365, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.beginPath();
ctx.arc(530, 420, 25, 0, Math.PI * 2);
ctx.stroke();
//line 2

//right lines
ctx.beginPath();
ctx.arc(585, 420, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.beginPath();
ctx.arc(640, 420, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.beginPath();
ctx.arc(695, 420, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.beginPath();
ctx.arc(750, 420, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.fillStyle = "#65c070";
ctx.beginPath();
ctx.arc(530, 475, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();
ctx.fill();
//right lines

//left from the right line
ctx.beginPath();
ctx.arc(695, 530, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.beginPath();
ctx.arc(640, 530, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.beginPath();
ctx.arc(585, 530, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.beginPath();
ctx.arc(530, 530, 25, 0, Math.PI * 2);
ctx.stroke();
//left from the right line

//down from right side
ctx.beginPath();
ctx.arc(530, 585, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.beginPath();
ctx.arc(530, 640, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.beginPath();
ctx.arc(530, 695, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.beginPath();
ctx.arc(530, 750, 25, 0, Math.PI * 2);
ctx.stroke();
//down from right side

//yellow bot 3
ctx.beginPath();
ctx.arc(475, 750, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.fillStyle = "#f8e3a8";
ctx.beginPath();
ctx.arc(420, 750, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();
ctx.fill();
//yellow bot 3

//yellow safe line
ctx.fillStyle = "#efbb27";
ctx.beginPath();
ctx.arc(475, 695, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();
ctx.fill();
ctx.fillStyle = "#efbb27";
ctx.beginPath();
ctx.arc(475, 640, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();
ctx.fill();
ctx.fillStyle = "#efbb27";
ctx.beginPath();
ctx.arc(475, 585, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();
ctx.fill();
ctx.fillStyle = "#efbb27";
ctx.beginPath();
ctx.arc(475, 530, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();
ctx.fill();
//yellow safe line

//left lines
ctx.beginPath();
ctx.arc(420, 695, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.beginPath();
ctx.arc(420, 640, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.beginPath();
ctx.arc(420, 585, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.beginPath();
ctx.arc(420, 530, 25, 0, Math.PI * 2);
ctx.stroke();
//left lines

//left wing lines
ctx.beginPath();
ctx.arc(365, 530, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.beginPath();
ctx.arc(310, 530, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.beginPath();
ctx.arc(255, 530, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.beginPath();
ctx.arc(200, 530, 25, 0, Math.PI * 2);
ctx.stroke();
//left wing lines

//top left 3
ctx.beginPath();
ctx.arc(200, 475, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.fillStyle = "#faadae";
ctx.beginPath();
ctx.arc(200, 420, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();
ctx.fill();
//top left 3

//left to right outside
ctx.beginPath();
ctx.arc(255, 420, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.beginPath();
ctx.arc(310, 420, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.beginPath();
ctx.arc(365, 420, 25, 0, Math.PI * 2);
ctx.stroke();
//left to right outside

//red safe zone
ctx.fillStyle = "#f43336";
ctx.beginPath();
ctx.arc(255, 475, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();
ctx.fill();
ctx.fillStyle = "#f43336";
ctx.beginPath();
ctx.arc(310, 475, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();
ctx.fill();
ctx.fillStyle = "#f43336";
ctx.beginPath();
ctx.arc(365, 475, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();
ctx.fill();
ctx.fillStyle = "#f43336";
ctx.beginPath();
ctx.arc(420, 475, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();
ctx.fill();

//red safe zone

// down line for blue safe zone
ctx.fillStyle = "#2495f1";
ctx.beginPath();
ctx.arc(475, 255, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();
ctx.fill();
ctx.fillStyle = "#2495f1";
ctx.beginPath();
ctx.arc(475, 310, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();
ctx.fill();
ctx.fillStyle = "#2495f1";
ctx.beginPath();
ctx.arc(475, 365, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();
ctx.fill();
ctx.fillStyle = "#2495f1";
ctx.beginPath();
ctx.arc(475, 420, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();
ctx.fill();
// down line for blue safe zone

//down 2 green safe zone
ctx.beginPath();
ctx.arc(750, 475, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.fillStyle = "#c1e5c5";
ctx.beginPath();
ctx.arc(750, 530, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();
ctx.fill();
//down 2 green safe zone

//down line for safe green
ctx.fillStyle = "#65c070";
ctx.beginPath();
ctx.arc(695, 475, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();
ctx.fill();
ctx.fillStyle = "#65c070";
ctx.beginPath();
ctx.arc(640, 475, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();
ctx.fill();
ctx.fillStyle = "#65c070";
ctx.beginPath();
ctx.arc(585, 475, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();
ctx.fill();
//down line for safe green

//top 3
ctx.stroke();
ctx.beginPath()
ctx.arc(475, 200, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.fillStyle = "#a7d4f9";
ctx.beginPath();
ctx.arc(530, 200, 25, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();
ctx.fill();
//top 3