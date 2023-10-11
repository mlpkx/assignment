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
    if (theme === 'river') 
    switch (element) {
        case 'wood':
            window.location.href = 'river-wood.html';
        break;
        case 'water':
            window.location.href = 'river-water.html';
        break;
    }
}

