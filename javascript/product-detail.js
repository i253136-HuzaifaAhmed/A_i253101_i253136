
document.addEventListener('DOMContentLoaded', () => {
    
     const exploreBtn = document.querySelector('.explore-btn');
    const barDefault = document.querySelector('.bar-default');
    const barLinks = document.querySelector('.bar-links');

    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            barDefault.style.display = 'none';
            barLinks.style.display = 'flex';
        });
    }

});

