function moveFigure(e) {
    var progressBar = e.currentTarget;
    var scientistFigure = progressBar.querySelector('.scientist-figure');
    var mouseX = e.pageX - progressBar.getBoundingClientRect().left;
    var containerWidth = progressBar.offsetWidth;
    var scientistWidth = scientistFigure.offsetWidth;
    
    var newLeft = mouseX - scientistWidth / 2;
    newLeft = Math.max(0, Math.min(newLeft, containerWidth - scientistWidth));
    scientistFigure.style.left = newLeft + 'px';
  }
  
  function redirectToPage(element) {
    var href = element.getAttribute('data-href');
    window.location.href = href;
  }
  
  document.querySelectorAll('.progress-bar-container').forEach(function(bar) {
    bar.addEventListener('mousemove', moveFigure);
    bar.addEventListener('click', function() { redirectToPage(bar); });
  });
  