let clusters = [[], [], []];
const clusterSizes = [400, 100, 200]; 
const stdDevs = [40, 20, 25]; 
let centers = []; // centers 
let squares =[];
let taskCompleted = false;

function setup() {
  let cnv= createCanvas(1000, 600);
  cnv.parent('sketch-holder');
  centers = [
    createVector(200, 200), // Cluster 1 
    createVector(400, 350), // Cluster 2 
    createVector(400, 200)  // Cluster 3 
  ];

  for (let i = 0; i < centers.length; i++) {
    for (let j = 0; j < clusterSizes[i]; j++) {
      let x = centers[i].x + randomGaussian() * stdDevs[i];
      let y = centers[i].y + randomGaussian() * stdDevs[i];
      clusters[i].push(createVector(x, y));
    }
  }
}

function draw() {
  background(255);
  drawCoordinates();
  drawClusters();
  drawSquares(); 
}

function drawCoordinates() {

  const axisPadding = 50;
  const arrowSize = 10;

  
  stroke(0);
  // X-axis
  line(axisPadding, height - axisPadding, width - axisPadding, height - axisPadding);
  // Y-axis
  line(axisPadding, height - axisPadding, axisPadding, axisPadding);

 
  fill(0);
  triangle(
    width - axisPadding, height - axisPadding,
    width - axisPadding - arrowSize, height - axisPadding - arrowSize / 2,
    width - axisPadding - arrowSize, height - axisPadding + arrowSize / 2
  );
  
  triangle(
    axisPadding, axisPadding,
    axisPadding - arrowSize / 2, axisPadding + arrowSize,
    axisPadding + arrowSize / 2, axisPadding + arrowSize
  );

  // Add labels
  noStroke();
  textAlign(RIGHT, CENTER);
  text('Foxp3', axisPadding - arrowSize, height / 2); // Y-axis
  textAlign(CENTER, TOP);
  text('CD4', width / 2, height - axisPadding + arrowSize); // X-axis 
}

function drawClusters() {
  const colors = [
    { r: 0, g: 0, b: 255 },    
    { r: 255, g: 0, b: 0 },    
    { r: 0, g: 255, b: 0 }     
  ];
  noStroke();
  for (let i = 0; i < clusters.length; i++) {
    fill(colors[i].r, colors[i].g, colors[i].b, 127); 
    for (let point of clusters[i]) {
      ellipse(point.x, height - point.y, 5, 5);
    }

    let associatedSquare = squares.find(sq => sq.clusterIndex === i);
    if (i === 1 && associatedSquare && associatedSquare.clicked) {
      fill(0);
      noStroke();
      text('Regulatory T cells', centers[i].x, height - centers[i].y - squareSize / 2 - 10);
    }
  }
}


function drawSquares() {
   stroke(0);
  noFill(); 
  for (let sq of squares) {
    rect(sq.x, sq.y, squareSize, squareSize);
  }
}

function checkAllSamples() {
  return squares.length === centers.length;
}

const squareSize = 100; 
const clickThreshold = 50; 

function mousePressed() {
  for (let i = 0; i < clusters.length; i++) {
    let clusterCenter = centers[i];
  
    if (dist(mouseX, mouseY, clusterCenter.x, height - clusterCenter.y) < clickThreshold) {
     
      let squareX = clusterCenter.x - squareSize / 2;
      let squareY = height - clusterCenter.y - squareSize / 2;
    
      let existingSquare = squares.find(sq => sq.clusterIndex === i);
      if (existingSquare) {
        existingSquare.clicked = true; 
      } else {
        squares.push({ x: squareX, y: squareY, clusterIndex: i, clicked: true }); 
      }
      break; 
    }
  }



  if (!taskCompleted && checkAllSamples()) {
    taskCompleted = true;
    setTimeout(function() {
      alert("Cheers to you for a job well done!");
      showCompletionPage();
    }, 100);
}
}


function showCompletionPage() {
  document.getElementById('sketch-holder').style.display = 'none';
  document.querySelector('.note').style.display = 'none';

  let completionDiv = document.createElement('div');
  completionDiv.id = 'completion-page';
  document.body.appendChild(completionDiv);

  completionDiv.innerHTML = `
    <button class="button-style" onclick="goBackToTaskList()">Go back to the task list</button>
  `;
}

function goBackToTaskList() {
  window.location.href = 'virtual exp.html';
}

