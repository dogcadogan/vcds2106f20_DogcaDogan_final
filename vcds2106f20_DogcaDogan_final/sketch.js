let mic;
let lW;
let c;
let a, b;
let x;
let rot;

function preload() {


  lW = loadTable('historyBulk.csv', 'header');

}

function setup() {
  createCanvas(650, 850)

  mic = new p5.AudioIn();
  mic.start();
  x=10;


  //fill(255, 150);
}

function draw() {

  background(0);
push();
  c = map(mic.getLevel(), 0, 0.5, 5, 80);



  for (let i = 0; i < lW.getRowCount(); i++) {

    let windSpeed = lW.getNum(i, "wind_speed");
    let cloudyPercentage = lW.getNum(i, "clouds_all");
    let humidity = lW.getNum(i, "humidity");
    let windDeg= lW.getNum(i, "wind_deg");

    a = map(windSpeed, 0.5, 7.7, 0, width);
    b = map(cloudyPercentage, 0, 100, 0, height);
    d = map(humidity, 49, 88, 30, 255);
    e = map(windDeg, 0, 277, 0, 3.0);

    rot= random(map(d,49,88,60,180));

    fill(d,c);

    frameRate(random(c,a));


   //rotate(random(d,-e));
   rotate(rot);

    square(a , b, c);

      noFill();
      stroke(a,d,e);
      strokeWeight(windSpeed);


          line(x + a, 150 + b, x+40 + a, 20 + b);
          line(x+40 + a, 20 + b, x+90 + a, 150 + b);
          line(x+90 + a, 150 + b, x + a, 80 + b);
          line(x + a, 80 + b, x + 90 + a, 80 + b);
          line(x + 90 + a, 80 + b, x + a, 150 + b);




//star();
  }
//x = cloudyPercentage += 1;

}

function star() {

  for (let x = 0; x < 600; x+=90) {
    for (let y = 0; y < 750; y+=60) {
      //if(x > width/2 && y >height/2) strokeWeight(c);
      //else strokeWeight(3);
      //  translate(i * 90, j * 50);
      line(10 + x, 150 + y, 50 + x, 20 + y);
      line(50 + x, 20 + y, 100 + x, 150 + y);
      line(100 + x, 150 + y, 10 + x, 80 + y);
      line(10 + x, 80 + y, 100 + x, 80 + y);
      line(100 + x, 80 + y, 10 + x, 150 + y);
    }
  }
}
