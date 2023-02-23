
const favoriteDivs = document.querySelectorAll('.favorite');
favoriteDivs.forEach((div) => {
  div.addEventListener('click', toggleFavorite);
});

function toggleFavorite() {
  const icon = this.querySelector('i');
  const isFavorite = icon.classList.contains('fas');
  if (isFavorite) {
    // Remove from favorites
    icon.classList.remove('fas');
    icon.classList.add('far');
  } else {
    // Add to favorites
    icon.classList.remove('far');
    icon.classList.add('fas');
  }
}





















/*const favoriteDiv = document.getElementById('favorite');
favoriteDiv.addEventListener('click', toggleFavorite);

function toggleFavorite() {
  const icon = document.getElementById('star-icon1');
  const isFavorite = icon.classList.contains('fas');
  if (isFavorite) {
    // Remove from favorites
    icon.classList.remove('fas');
    icon.classList.add('far');
  } else {
    // Add to favorites
    icon.classList.remove('far');
    icon.classList.add('fas');
  }
} */
