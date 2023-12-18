document.addEventListener('DOMContentLoaded', function() {
    const mapImg = document.querySelector('.map-container img');
    let zoomLevel = 1;

    const zoomIn = document.getElementById('zoomIn');
    const zoomOut = document.getElementById('zoomOut');

    zoomIn.addEventListener('click', function() {
        zoomLevel += 0.1;
        updateZoom();
    });

    zoomOut.addEventListener('click', function() {
        zoomLevel -= 0.1;
        updateZoom();
    });

    function updateZoom() {
        mapImg.style.transform = `scale(${zoomLevel})`;
    }
});
