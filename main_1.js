img = "";

function preload() {
    img = loadImage("bed.jpg");
}

function setup() {
    canvas = createCanvas(600,400);
    canvas.center();
}
function draw(){
    
    image(img, 0, 0, 600, 400);
    fill("#000000");
    text("bed", 80, 160);
    noFill();
    stroke("#32a852");
    rect(70, 140, 450, 250);

    fill("#ffffff");
    text("Lamp", 120, 175);
    noFill();
    stroke("#000000");
    rect(95, 160, 80, 100);

}