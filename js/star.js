    // 繁星闪烁代码↓
    var starsContainer = document.getElementById('stars');
    var numberOfStars = 200;

    for (var i = 0; i < numberOfStars; i++) {
      var star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.animationDelay = Math.random() + 's';
      starsContainer.appendChild(star);
    }
    // 繁星闪烁代码↑