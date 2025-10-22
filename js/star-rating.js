function initializeRatingSystem() {
    const ratingContainer = document.querySelector('.product-rating-container');
    if (!ratingContainer) return;

    const stars = document.querySelectorAll('.rating-star');
    let currentRating = 0;

    stars.forEach((star, index) => {
        star.addEventListener('click', function() {
            currentRating = index + 1;
            updateStars(stars, currentRating);

            const ratingText = document.querySelector('.user-rating-text');
            if (ratingText) {
                ratingText.textContent = `Your rating: ${currentRating}/5`;
                ratingText.style.color = '#ffc107';
            }
        });

        star.addEventListener('mouseenter', function() {
            updateStars(stars, index + 1);
        });
    });

    ratingContainer.addEventListener('mouseleave', function() {
        updateStars(stars, currentRating);
    });
}

function updateStars(stars, rating) {
    stars.forEach((star, index) => {
        if (index < rating) {
            star.style.color = '#ffc107';
            star.style.transform = 'scale(1.2)';
        } else {
            star.style.color = '#ddd';
            star.style.transform = 'scale(1)';
        }
    });
}

document.addEventListener('DOMContentLoaded', initializeRatingSystem);
