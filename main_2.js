img = "";

function preload() {
    img = loadImage("ta.jpg");
}

function setup() {
    canvas = createCanvas(600,400);
    canvas.center();
}
function draw(){
    
    image(img, 0, 0, 600, 400);
    fill("#000000");
    text("TV", 210, 190);
    noFill();
    stroke("#32a852");
    rect(200, 169, 290, 150);

    fill("#ffffff");
    text("AC", 220, 20);
    noFill();
    stroke("#000000");
    rect(210, 3, 300, 130);

}