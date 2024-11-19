// *** CAROUSEL ***
// TODO
const carousel = document.querySelector(".carousel__container");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");
console.log(carousel);
console.log(prevButton);
console.log(nextButton);

// Largeur de défilement d’un item
if (carousel) {
    // Scroll au clic sur le bouton précédent
    prevButton.addEventListener("click", () => {
        carousel.scrollBy({ left: -250, behavior: 'smooth' });
    });

    // Scroll au clic sur le bouton suivant
    nextButton.addEventListener("click", () => {
        carousel.scrollBy({ left: 250, behavior: 'smooth' });
    });
}