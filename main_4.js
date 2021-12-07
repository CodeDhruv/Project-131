img = "";

function preload() {
    img = loadImage("b.jpg");
}

function setup() {
    canvas = createCanvas(700,400);
    canvas.center();
}
function draw(){

    image(img, 0, 0, 700, 400);
  /*fill("#000000");
    text("Laptop", 110, 56);
    noFill();
    stroke("#ffffff");
    rect(100, 40, 200, 100);
    */

    fill("#000000");
    text("Bottle", 320, 45);
    noFill();
    stroke("#000000");
    rect(300, 25, 130, 350);

    fill("#000000");
    text("Bottle", 10, 45);
    noFill();
    stroke("#000000");
    rect(5, 25, 150, 350);

    fill("#000000");
    text("Bottle", 320, 45);
    noFill();
    stroke("#000000");
    rect(300, 25, 130, 350);
   

}