const themes = ['metal', 'wood', 'water', 'fire', 'earth'];

function zoomIn(selectedTheme) {
    themes.forEach(theme => {
        if (theme === selectedTheme) {
            document.querySelector(`.${theme}`).style.transform = 'scale(1.2)';
        } else {
            document.querySelector(`.${theme}`).style.transform = 'scale(0.9)';
        }
    });
}

function zoomOut() {
    themes.forEach(theme => {
        document.querySelector(`.${theme}`).style.transform = 'scale(1)';
    });
}

function goToPoem(theme, element) {
    if (theme === 'sakura') 
    switch (element) {
        case 'wood':
            window.location.href = 'sakura-wood.html';
        break;
        case 'water':
            window.location.href = 'sakura-water.html';
        break;
        case 'earth':
            window.location.href = 'sakura-earth.html';
        break;
        case 'metal':
            window.location.href = 'sakura-metal.html';
        break;
         case 'fire':
            window.location.href = 'sakura-fire.html';
        break;
            }
        }


