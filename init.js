// Init
document.getElementById('fcard-total').textContent = FLASHCARDS.length;
applyFilters();updateStats();pickRandom();updateFCStats();showCard(0);
if (location.hash.startsWith('#book/')) switchTab('book');  // deep links into the book