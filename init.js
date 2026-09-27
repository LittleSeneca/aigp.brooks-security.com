// Init
// phones start with the footer folded; desktop keeps it open (its summary is hidden there)
const foldFooter = () => { document.querySelector('.site-footer').open = !phone.matches; };
foldFooter(); phone.addEventListener('change', foldFooter);
document.getElementById('fcard-total').textContent = FLASHCARDS.length;
applyFilters();updateStats();pickRandom();updateFCStats();showCard(0);
if (location.hash.startsWith('#book/')) switchTab('book');  // deep links into the book