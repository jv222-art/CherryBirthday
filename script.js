// CHANGE YEAR IF NEEDED
const birthday = new Date("2026-01-28T00:00:00").getTime();
const song = document.getElementById("birthdaySong");

function updateCountdown() {
  const now = Date.now();
  const diff = birthday - now;

  if (diff <= 0) {
    document.getElementById("countdown").style.display = "none";
    document.getElementById("message").innerHTML =
      "Happy Birthday Cherry 🍒<br><br>" +
      "Some people are special.<br>" +
      "You are rare.<br>" +
      "And today is yours 💖";

    song.volume = 0.6;
    song.play();
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  days.textContent = d;
  hours.textContent = h;
  minutes.textContent = m;
  seconds.textContent = s;
}

setInterval(updateCountdown, 1000);
updateCountdown();
