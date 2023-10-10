let poetFigure = document.getElementById("poetFigure");
let masaakiVoice = document.getElementById("masaakiVoice");
let startTime = Date.now();

let audioPlayed = false;

function oscillate() {
    let timePassed = Date.now() - startTime;
    let shift = Math.sin(timePassed / 2000) * 10; 
    poetFigure.style.transform = `translateY(${shift}px)`;
    requestAnimationFrame(oscillate);
}

oscillate();


function showChatBox() {
    if (!audioPlayed) {
        masaakiVoice.play();
        audioPlayed = true;
    }

    document.getElementById('poetFigure').style.display = 'none';
    document.getElementById("instructionBox").style.display = 'none';
    let chatBox = document.getElementById('chatBox');
    chatBox.style.display = 'block';
    setTimeout(function() {
        chatBox.style.opacity = 1;
    }, 50);
        
}

function submitName() {
    const userName = document.getElementById('userNameInput').value;
    
    if (!userName) {
        alert('Please enter your name.');
        return;
    }

    masaakiVoice.pause();
    masaakiVoice.currentTime = 0;
    

    document.getElementById('chatBox').style.display = 'none';

    const divinationContent = document.getElementById('divination');
    divinationContent.querySelector('h2').textContent = `Hello ${userName}, this is Masaaki again. Which view speaks to you today? Pick one!`;
    divinationContent.style.display = 'block';
    setTimeout(function() {
        divinationContent.style.opacity = 1;
    }, 50);
}

function goToPassage(theme) {
    alert(`You chose the ${theme}.`);
}

