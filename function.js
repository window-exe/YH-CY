// Photo Wall

const Images = document.querySelectorAll('.Image');
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");
const enlargedImage = document.getElementById("enlarged-image");
const imageDescriptionText = document.getElementById("image-description-text");
const photoWall = document.querySelector('.photo-wall');
const photoContainer = document.createElement('div');
const nextImage = document.getElementById("next-image");
const prevImage = document.getElementById("prev-image");
let currentIndex = 0;
photoContainer.setAttribute('id', 'photo-container');
photoWall.appendChild(photoContainer);


function showImage(index) {
  const Image = Images[index];
  const imageUrl = Image.querySelector("img").src;
  const description = Image.dataset.description;

  enlargedImage.src = imageUrl;
  imageDescriptionText.textContent = description;
}

Images.forEach((Image, index) => {
  Image.addEventListener("click", () => {
    showImage(index);
    currentIndex = index;
    modal.style.display = "block";
  });
});

nextImage.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % Images.length;
  showImage(currentIndex);
});

prevImage.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + Images.length) % Images.length;
  showImage(currentIndex);
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

var audioList = [
"music/music0.mp3",
"music/music1.mp3",
"music/music2.mp3",
"music/music3.mp3",
"music/music4.mp3",
"music/music5.mp3",
"music/music6.mp3",
  // Add more songs to the list
];
let audioIndex = Math.floor(Math.random() * audioList.length);
var audio = new Audio(audioList[audioIndex]);
audio.addEventListener('ended', function () {
  audioIndex++;
  if (audioIndex >= audioList.length) {
    audioIndex = 0;
  }
  audio.src = audioList[audioIndex];
  audio.play();
});

audio.play();

function toggleMute() {
  if (audio.muted) {
    audio.muted = false;
  } else {
    audio.muted = true;
  }
}

function nextAudio() {
  audioIndex++;
  if (audioIndex >= audioList.length) {
    audioIndex = 0;
  }
  audio.src = audioList[audioIndex];
  audio.play();
}


// Love Letter

const letterLogo = document.getElementById('love-letter-button');
const letterContainer = document.getElementById('letter-container');
const letterContent = document.getElementById('letter-content');
const closeLetter = document.getElementById('close-letter');
const loveLetter = `Dear my love,

I just wanted to take a moment to say how much I love you. You are the most important person in my life and I am so grateful for you. You bring so much joy and happiness into my life and I can't imagine my life without you.

Every moment I spend with you is a moment I cherish. You make me laugh, you make me feel loved, and you make me feel like I can conquer anything. I am so lucky to have you in my life and I promise to always love and cherish you.

Forever and always,
Your love`;

letterLogo.addEventListener('click', () => {
  letterContent.innerHTML = '';
  letterContainer.style.display = 'block';
  let index = 0;
  const typeLoveLetter = setInterval(() => {
    if (index === loveLetter.length) {
      clearInterval(typeLoveLetter);
      closeLetter.style.display = 'block';
    } else {
      letterContent.innerHTML += loveLetter.charAt(index);
      index++;
    }
  }, 50);
});

closeLetter.addEventListener('click', () => {
  letterContainer.style.display = 'none';
});

// Time

const startDate = new Date('2021-09-09T00:00:00');
const timeDisplay = document.getElementById('time-display');

function updateTime() {
  const currentDate = new Date();
  const totalSeconds = Math.floor((currentDate - startDate) / 1000);
  const years = Math.floor(totalSeconds / 31536000);
  const months = Math.floor((totalSeconds % 31536000) / 2592000);
  const days = Math.floor(((totalSeconds % 31536000) % 2592000) / 86400);
  const hours = Math.floor((((totalSeconds % 31536000) % 2592000) % 86400) / 3600);
  const minutes = Math.floor(((((totalSeconds % 31536000) % 2592000) % 86400) % 3600) / 60);
  const seconds = (((totalSeconds % 31536000) % 2592000) % 86400) % 3600 % 60;
  timeDisplay.innerHTML = `罗小善与陈大恶 已在一起 ${years} 年, ${months} 个月, ${days} 天, ${hours} 小时, ${minutes} 分钟, 和 ${seconds} 秒`;
}

updateTime();
setInterval(updateTime, 1000);

