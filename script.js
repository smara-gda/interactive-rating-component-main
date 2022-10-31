function toggleCard(result) {
  const submitButton = document.querySelector('.card-button');
  const sumbitCard = document.querySelector('.card-submit');
  const thankYouCard = document.querySelector('.thankyou-card');

  submitButton.addEventListener('click', () => {
    let finalResult = document.querySelector('.card-rate-selected .value');
    const selectedCircle = document.querySelector('.card-rating__clicked');
    if (!selectedCircle) {
      alert('Please select a rating');
    }
    sumbitCard.style.display = 'none';
    thankYouCard.style.display = 'flex';
    finalResult.innerText = result;
  });
}
function selectedRating() {
  const ratings = document.querySelectorAll('.card-rating__circle');
  const selectedCircle = document.querySelector('.card-rating__clicked');
  ratings.forEach((item) => {
    item.addEventListener(
      'click',
      (e) => {
        let targetedEl = e.target;
        if (selectedCircle) {
          selectedCircle.classList.remove('card-rating__clicked');
        }
        targetedEl.classList.add('card-rating__clicked');
        let ratingChosen = targetedEl.innerText;
        toggleCard(ratingChosen);
      },
      false,
    );
  });
}

document.addEventListener('DOMContentLoaded', () => {
  selectedRating();
});
