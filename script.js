document.addEventListener("DOMContentLoaded", function() {
  createFireworks();
});

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.querySelector('.chinese-text').style.opacity = '1';
    document.querySelector('.flashing-text').style.opacity = '1';
  }, 1000);
});

function createFireworks() {
  var numFireworks = 30;
  var container = document.querySelector('.fireworks-container');
  var colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffffff']; // Add more colors as needed

  for (var i = 0; i < numFireworks; i++) {
    var firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.left = Math.random() * 100 + 'vw';
    firework.style.animationDuration = Math.random() * 2 + 1 + 's';
    firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]; // Randomly select a color
    container.appendChild(firework);
  }
}