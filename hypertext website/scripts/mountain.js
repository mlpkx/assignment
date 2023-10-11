function zoomIn(theme) {
    const otherTheme = theme === 'wood' ? 'water' : 'wood';
    document.querySelector(`.${theme}`).style.transform = 'scale(1.2)';
    document.querySelector(`.${otherTheme}`).style.transform = 'scale(0.9)';
}

function zoomOut(theme) {
    const otherTheme = theme === 'wood' ? 'water' : 'wood';
    document.querySelector(`.${theme}`).style.transform = 'scale(1)';
    document.querySelector(`.${otherTheme}`).style.transform = 'scale(1)';
}

function goToPoem(theme, element) {
    if (theme === 'mountain') 
    switch (element) {
        case 'earth':
            window.location.href = 'mountain-earth.html';
        break;
        case 'fire':
            window.location.href = 'mountain-fire.html';
        break;
    }
}