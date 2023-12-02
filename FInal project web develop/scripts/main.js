document.addEventListener('DOMContentLoaded', function() {

    const dcElement = document.getElementById('dc');
    const mainfigureElement = document.getElementById('mainfigure');
    
    
    const mainfigureLeftBoundary = mainfigureElement.getBoundingClientRect().left;

    let x = Math.random() * mainfigureLeftBoundary; 
    let y = Math.random() * window.innerHeight; 
    const step = 20; 
    const moveInterval = 1000; 

    setInterval(() => {
        const dx = (Math.random() < 0.5 ? -1 : 1) * step;
        const dy = (Math.random() < 0.5 ? -1 : 1) * step;

        
        x += dx;
        y += dy;

        
        if (x < 0) x = mainfigureLeftBoundary;
        if (y < 0) y = window.innerHeight;
        if (x > mainfigureLeftBoundary) x = 0;
        if (y > window.innerHeight) y = 0;

        
        dcElement.style.left = x + 'px';
        dcElement.style.top = y + 'px';
    }, moveInterval);

    const tregElement = document.getElementById('treg');
    const graphicElement = document.getElementById('graphic');
    
    const graphicLeftBoundary = graphicElement.getBoundingClientRect().left;

    let tregX = Math.random() * graphicLeftBoundary; 
    let tregY = Math.random() * window.innerHeight; 
    const tregStep = 20; 
    const tregMoveInterval = 1000; 

    setInterval(() => {
        const dx = (Math.random() < 0.5 ? -1 : 1) * tregStep;
        const dy = (Math.random() < 0.5 ? -1 : 1) * tregStep;

       
        tregX += dx;
        tregY += dy;

      
        if (tregX < 0) tregX = graphicLeftBoundary;
        if (tregY < 0) tregY = window.innerHeight;
        if (tregX > graphicLeftBoundary) tregX = 0;
        if (tregY > window.innerHeight) tregY = 0;

     
        tregElement.style.left = tregX + 'px';
        tregElement.style.top = tregY + 'px';
    }, tregMoveInterval);


    let audioUnlocked = false;
    var audio = document.getElementById('hover-sound');

    document.body.addEventListener('click', function() {
    if (!audioUnlocked) {
        
        audio.play().then(() => {
            audio.pause();
            audio.currentTime = 0;
            audioUnlocked = true;
        }).catch(() => {
            
        });
    }
});

    var flowmachine = document.querySelector('#flowmachine img');
    var originalFlowmachineSrc = flowmachine.getAttribute('src');
    var newFlowmachineSrc = 'assets/image/exp.svg'; 
  

    flowmachine.addEventListener('mouseenter', function() {
        if (audioUnlocked) {
            flowmachine.setAttribute('src', newFlowmachineSrc);
        audio.play();
        }
    });

    flowmachine.addEventListener('mouseleave', function() {
        flowmachine.setAttribute('src', originalFlowmachineSrc);
        audio.pause();
        audio.currentTime = 0;
    });

    flowmachine.addEventListener('click', function() {
        window.location.href = 'virtual exp.html';
    });

    var microscope = document.querySelector('#microscope img');
    var originalMicroscopeSrc = microscope.getAttribute('src');
    var newMicroscopeSrc = 'assets/image/cell.svg'; 

    microscope.addEventListener('mouseenter', function() {
        if (audioUnlocked) {
        microscope.setAttribute('src', newMicroscopeSrc);
        audio.play();
        }
    });

    microscope.addEventListener('mouseleave', function() {
        microscope.setAttribute('src', originalMicroscopeSrc);
        audio.pause();
        audio.currentTime = 0;
    });

    var graphic = document.querySelector('#graphic img');
    var originalGraphicSrc = graphic.getAttribute('src');
    var newGraphicSrc = 'assets/image/paper.svg'; 

    graphic.addEventListener('mouseenter', function() {
        if (audioUnlocked) {
        graphic.setAttribute('src', newGraphicSrc);
        audio.play();
        }
    });

    graphic.addEventListener('mouseleave', function() {
        graphic.setAttribute('src', originalGraphicSrc);
        audio.pause();
        audio.currentTime = 0;
    });

    var mainfigure = document.querySelector('#mainfigure img');
    var originalMainfigureSrc = mainfigure.getAttribute('src');
    var newMainfigureSrc = 'assets/image/me.svg'; 

    mainfigure.addEventListener('mouseenter', function() {
        if (audioUnlocked) {
        mainfigure.setAttribute('src', newMainfigureSrc);
        audio.play();
        }
    });

    mainfigure.addEventListener('mouseleave', function() {
        mainfigure.setAttribute('src', originalMainfigureSrc);
        audio.pause();
        audio.currentTime = 0;
    });



});
