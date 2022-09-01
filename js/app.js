const ratingBtn = document.querySelector('.rating');
const submit = document.querySelector('.sub-btn');
const dispAfter = document.querySelector('.after');
const dispBefore = document.querySelector('.before');
let finalMessage = document.querySelector('.selected')
let rating = '0';


ratingBtn.addEventListener('click', (e) => {
    rating = e.target.innerHTML
    console.log(rating);
    return rating;

});

submit.addEventListener('click', (e) => {
    dispBefore.style.display = 'none';
    dispAfter.style.display = 'block';
    finalMessage.innerHTML = `You selected ${rating} out of 5`;
    console.log(finalMessage);
});