var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

for(let i = 1; i <= 5; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/blackbear album cover original.jpg' + i + '.jpg');
  newImage.setAttribute('src', 'images/the avett brothers album cover.jpg' + i + '.jpg');
  newImage.setAtribute('src', 'images/rex orange county front album cover.jpg' + i + '.jpg');
  newImage.setAttribute('src', 'images/the lumineers album cover.jpg' + i + '.jpg');
  thumbBar.appendChild(newImage);
  }
}

btn.onclick = function() {
  var btnClass = btn.getAttribute('class');
  if(btnClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(197, 84, 34, 0.53)';
  }
  else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(197, 84, 34, 0.38)';
  }
}
