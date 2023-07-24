const video = document.querySelector('.gym__video');
const videoButton = document.querySelector('.gym__button');

function videoButtonOnClick() {
  if (video.paused) {
    video.play();
    videoButton.style.display = 'none';
  } else {
    video.pause();
  }
}

function videoOnClick() {
  video.pause();
  videoButton.style.display = 'block';
}

videoButton.addEventListener('click', videoButtonOnClick);
video.addEventListener('click', videoOnClick);

function changePoster() {
  if (window.innerWidth < 1366 && window.innerWidth > 767) {
    video.setAttribute('poster', './img/video-poster-tablet.jpg');
  } else if (window.innerWidth < 768) {
    video.setAttribute('poster', './img/video-poster-phone.jpg');
  }
}

changePoster();
window.addEventListener('resize', changePoster);
