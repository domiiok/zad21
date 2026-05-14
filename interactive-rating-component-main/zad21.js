const ratingButtons = document.querySelectorAll('.rating-btn');
const submitButton = document.getElementById('submit-btn');
const ratingCard = document.getElementById('rating-card');
const thankYouCard = document.getElementById('thank-you-card');
const selectedRatingText = document.getElementById('selected-rating');

let selectedRating = null;

ratingButtons.forEach((button) => {
  button.addEventListener('click', () => {

    ratingButtons.forEach((btn) => {
      btn.classList.remove('active');
    });

    button.classList.add('active');

    selectedRating = button.textContent;
  });
});

submitButton.addEventListener('click', () => {

  if (selectedRating === null) {
    alert('Select a rating first!');
    return;
  }

  selectedRatingText.textContent = `You selected ${selectedRating} out of 5`;

  ratingCard.classList.add('hidden');
  thankYouCard.classList.remove('hidden');
});