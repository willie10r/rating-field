const ratingBtn = document.querySelector('.rating');
const submit = document.querySelector('.sub-btn');
const dispAfter = document.querySelector('.after');
const dispBefore = document.querySelector('.before');
let finalMessage = document.querySelector('.selected')
let rating = '0';

ratingBtn.addEventListener('click', (e) => {
    console.log(e.target.className);
    if (e.target.className == 'rate-btn') {
        e.target.style.background = ' hsl(216, 12%, 54%)';
        rating = e.target.textContent
        console.log(rating);
        return rating;
    }
});

submit.addEventListener('click', (e) => {
    dispBefore.style.display = 'none';
    dispAfter.style.display = 'block';
    finalMessage.innerHTML = `You selected ${rating} out of 5`;
    console.log(finalMessage);
});