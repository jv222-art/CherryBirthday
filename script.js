// IMPORTANT: CHANGE YEAR IF NEEDED
// Example: "2025-01-28T00:00:00"
const birthday = new Date("2026-01-28T00:00:00").getTime();

const song = document.getElementById("birthdaySong");
const playBtn = document.getElementById("playMusic");

playBtn.addEventListener("click", () => {
  song.play();
  playBtn.innerText = "🎶 Playing...";
});

function updateCountdown() {
  const now = new Date().getTime();
  const diff = birthday - now;

  if (diff <= 0) {
    document.getElementById("countdown").style.display = "none";
    document.getElementById("message").innerHTML =
      "🎉 <strong>Happy Birthday Cherry</strong> 🍒💖<br>" +
      "Today isn’t special because it’s your birthday.<br>" +
      "It’s special because <strong>you</strong> exist 💕";
    song.play();
    playBtn.style.display = "none";
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  document.getElementById("days").innerText = d;
  document.getElementById("hours").innerText = h;
  document.getElementById("minutes").innerText = m;
  document.getElementById("seconds").innerText = s;
}

setInterval(updateCountdown, 1000);
updateCountdown();
