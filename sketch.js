var a = prompt("Enter first variable : ");
var b = prompt("Enter second variable : ");

function setup() {
  //createCanvas(400, 400);
  var b2 = createButton("Click here to swap numbers.");
  b2.mousePressed(swap);
}

function draw() {
  //background(220);
}

function swap() {
  [a, b] = [b, a];

  console.log("The value of 'a' after swapping:" ,+a);
  console.log("The value of 'b' after swapping:" ,+b);
}