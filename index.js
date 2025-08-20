const viewMoreBtn = document.getElementById('view-more-btn');
const cardFour = document.getElementById('card-4');
const cardFive = document.getElementById('card-5');
const cardSix = document.getElementById('card-6');

viewMoreBtn.addEventListener('click', () => {
    if (cardFour.classList.contains('hidden')) {
        cardFour.classList.remove('hidden');
        cardFive.classList.remove('hidden');
        cardSix.classList.remove('hidden');
        viewMoreBtn.textContent = 'View Less';
    } else {
        cardFour.classList.add('hidden');
        cardFive.classList.add('hidden');
        cardSix.classList.add('hidden');
        viewMoreBtn.textContent = 'View More';
    }
})
