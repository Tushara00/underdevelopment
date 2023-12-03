
var Image = [
  "images/IMG-5.jpg",
  "images/IMG-2.jpg",
  "images/IMG-3.jpg",
  "images/IMG-4.jpg",
];

var myImage = document.getElementById("myImage");
var count_index = 0;

function fadeIn() {
  var opacity = 0.5;
  myImage.style.opacity = opacity;

  var fadeInInterval = setInterval(function () {
    if (opacity >= 1) {
      clearInterval(fadeInInterval);
    } else {
      opacity += 0.01;
      myImage.style.opacity = opacity;
    }
  }, 10); // Adjust the interval time for a smoother fade effect
}

function fadeOut() {
  var opacity = 1;

  var fadeOutInterval = setInterval(function () {
    if (opacity <= 0) {
      clearInterval(fadeOutInterval);
      myImage.src = Image[count_index];
      fadeIn();
      count_index++;
      if (count_index >= Image.length) {
        count_index = 0;
      }
    } else {
      opacity -= 0.05;
      myImage.style.opacity = opacity;
    }
  }, 10); // Adjust the interval time for a smoother fade effect
}

function image_change() {
  fadeOut();
  setTimeout(image_change, 5000);
}

window.onload = image_change();


/*portfolio js */


var video = document.querySelectorAll('video');
video.forEach(play =>play.addEventListener('click',() =>{
  play.classList.toggle('active-play');
  if(play.paused){
    play.play();
  }else{
    play.pause();
    play.currentTime = 0;
  }
}))