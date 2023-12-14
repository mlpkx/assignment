let samples = [];
const ladderPositions = [500, 450, 400, 350, 300, 250, 200, 150]; // DNA ladder 
const bandPositions = { 'aa': 400, 'AA': 350, 'Aa': [400, 350] }; // Fixed band positions 
let sampleTypes = ['aa', 'aa', 'aa', 'aa', 'aa', 'AA', 'AA', 'AA', 'Aa', 'Aa']; // Sample types
let taskCompleted = false;

function setup() {
  let cnv= createCanvas(1000, 600);
  cnv.parent('sketch-holder');
  textSize(18);
  textAlign(CENTER, CENTER);

  
  shuffleArray(sampleTypes);
  
 
  let sampleXPositions = Array.from({ length: 10 }, (_, i) => 150 + i * (width - 300) / 9);

  
  for (let i = 0; i < sampleTypes.length; i++) {
    let type = sampleTypes[i];
    let positions = type === 'Aa' ? bandPositions[type] : [bandPositions[type]];
   samples.push({ x: sampleXPositions[i], type: type, positions: positions, clicked: false });
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

function drawArrow (x, y, length) {
  let arrowSize = 10;
  stroke(0);
  line(x, y, length, y + length);
  line(x, y + length, x - arrowSize / 2, y + length - arrowSize);
  line(x, y + length, x + arrowSize / 2, y + length - arrowSize);
}

function draw() {
  background(255);
  drawLadder();
  drawSamples();
  drawArrow(100, 500, 100);
}

function drawLadderToSamplesConnector() {
  stroke(0);
let separatorX = 100;
  line(separatorX, 0, separatorX, height);
  fill(0);
  noStroke();
  text('Samples', 450, 50);
}
  

function drawLadder() {
  fill(0);
  noStroke();
  text('DNA Ladder', 50, 50);
  for (let y of ladderPositions) {
    drawBand(50, y);
  }
  drawLadderToSamplesConnector();
}

function drawBand(x, y) {
  drawingContext.shadowOffsetX = 3;
  drawingContext.shadowOffsetY = 3;
  drawingContext.shadowBlur = 6;
  drawingContext.shadowColor = 'rgba(0, 0, 0, 0.5)';
  fill(0);
  rect(x, y, 20, 5);
}


  
  
function drawSamples() {
  for (let i=0; i<samples.length; i++) {
    let sample = samples[i];
    stroke(sample.clicked ? color(255, 0, 0) : color(0)); // Red color if for clicked samples
    for (let y of sample.positions) {
      line(sample.x, y, sample.x + 20, y); 
    }
    fill(0);
    noStroke();
    text(i+1, sample.x + 10, height - 10);

    if (sample.type === 'Aa' && sample.clicked) {
      fill(0);
      noStroke();
      text('(Aa)', sample.x + 10, height - 50);
    }
  
}
}

function checkAllSamples() {
  return samples.every(sample => sample.type !== 'Aa' || sample.clicked);
}

function mouseClicked() {
  for (let sample of samples) {
    if (sample.type === 'Aa') {
      let sampleAreaX = sample.x - 10;
      let sampleAreaWidth = 40;
      if (mouseX >= sampleAreaX && mouseX <= sampleAreaX + sampleAreaWidth) {
      
        if (sample.positions.some(y => mouseY >= y - 5 && mouseY <= y + 5)) {
          sample.clicked = !sample.clicked; 
        }
      }
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
    <button class="button-style" onclick="proceedToNextTask()">Proceed to the next task</button>
  `;
}

function goBackToTaskList() {
  window.location.href = 'virtual exp.html';
}

function proceedToNextTask() {
  window.location.href = 'data.html';
}
