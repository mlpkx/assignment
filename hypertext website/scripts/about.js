document.addEventListener("DOMContentLoaded", function() {
    const poetFigure = document.getElementById("poetFigure");

poetFigure.addEventListener("mouseover", function() {
    poetFigure.style.transform = "translateX(10px)";
    setTimeout(() => {
        poetFigure.style.transform = "translatex(-10px)";
    }, 100);
    setTimeout(() => {  
        poetFigure.style.transform = "translateX(0)";
    }, 200);
});
});