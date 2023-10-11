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
    if (theme === 'shrine') 
    switch (element) {
        case 'metal':
        window.location.href = 'shrine-metal.html';
        break;
    }
}
