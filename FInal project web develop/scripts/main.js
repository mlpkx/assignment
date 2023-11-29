document.addEventListener('DOMContentLoaded', function() {
    var flowmachine = document.querySelector('#flowmachine img');
    var originalFlowmachineSrc = flowmachine.getAttribute('src');
    var newFlowmachineSrc = 'assets/image/exp.svg'; 
    var audio = document.getElementById('hover-sound');

    flowmachine.addEventListener('mouseenter', function() {
        flowmachine.setAttribute('src', newFlowmachineSrc);
        audio.play();
    });

    flowmachine.addEventListener('mouseleave', function() {
        flowmachine.setAttribute('src', originalFlowmachineSrc);
        audio.pause();
        audio.currentTime = 0;
    });

    flowmachine.addEventListener('click', function() {
        window.location.href = 'lablife.html';
    });

    var microscope = document.querySelector('#microscope img');
    var originalMicroscopeSrc = microscope.getAttribute('src');
    var newMicroscopeSrc = 'assets/image/cell.svg'; 

    microscope.addEventListener('mouseenter', function() {
        microscope.setAttribute('src', newMicroscopeSrc);
        audio.play();
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
        graphic.setAttribute('src', newGraphicSrc);
        audio.play();
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
        mainfigure.setAttribute('src', newMainfigureSrc);
        audio.play();
    });

    mainfigure.addEventListener('mouseleave', function() {
        mainfigure.setAttribute('src', originalMainfigureSrc);
        audio.pause();
        audio.currentTime = 0;
    });
});
