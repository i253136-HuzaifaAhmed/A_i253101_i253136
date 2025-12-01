
document.addEventListener('DOMContentLoaded', () => {
    
    // Console Welcome Message
    console.log(`
    ╔═══════════════════════════════════════╗
    ║                                       ║
    ║         Welcome to Luminox            ║
    ║   Where Light Meets Precision         ║
    ║                                       ║
    ║  Crafted with love for photographers  ║
    ║                                       ║
    ╚═══════════════════════════════════════╝
    `);

    const gearSearchInput = document.querySelector('.gear-search-input');
    const searchBtn = document.querySelector('.search-btn');
    
    const gearSuggestions = {
      "vlogging": "DJI Osmo Pocket 3",
      "travel":   "Sony ZV-1",
      "sports":   "GoPro Hero 12",
    };
    
    if (searchBtn && gearSearchInput) {
      searchBtn.addEventListener('click', () => {
        const value = gearSearchInput.value.toLowerCase().trim();
        if (value && gearSuggestions[value]) {
          alert("Suggested Gear: " + gearSuggestions[value]);
        } else {
          alert("Suggested Gear: " + (gearSuggestions[value] || "No suggestion for that niche"));
        }
      });
    
      gearSearchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          searchBtn.click();
        }
      });
    }



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



