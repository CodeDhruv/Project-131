img = "";

function preload() {
    img = loadImage("desk.jpeg");
}

function setup() {
    canvas = createCanvas(600,400);
    canvas.center();
}
function draw(){
    
    image(img, 0, 0, 600, 400);
    fill("#000000");
    text("Laptop", 110, 56);
    noFill();
    stroke("#ffffff");
    rect(100, 40, 200, 100);

    fill("#ffffff");
    text("Lamp", 415, 20);
    noFill();
    stroke("#000000");
    rect(405, 3, 100, 130);

}