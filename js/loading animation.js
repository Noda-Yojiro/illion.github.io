var starsContainer = document.querySelector('.stars');

for (var i = 0; i < 100; i++) {
  var star = document.createElement('span');
  star.style.left = Math.random() * 100 + '%';
  star.style.top = Math.random() * 100 + '%';
  star.style.animationDelay = Math.random() * 5 + 's';
  starsContainer.appendChild(star);
}
