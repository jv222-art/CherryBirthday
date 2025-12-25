/* ======================
   DATE CONFIG
   ====================== */

const birthday = new Date("2026-01-28T00:00:00").getTime();

/* ======================
   ELEMENTS
   ====================== */

const song = document.getElementById("birthdaySong");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

/* ======================
   COUNTDOWN
   ====================== */

function updateCountdown() {
  const now = Date.now();
  const diff = birthday - now;

  if (diff <= 0) {
    document.getElementById("countdown").style.display = "none";
    document.getElementById("message").innerHTML =
      "Happy Birthday Cherry 🍒<br>" +
      "Today the world is softer because of you 💖";

    song.volume = 0.6;
    song.play();
    startConfetti();
    return;
  }

  daysEl.textContent = Math.floor(diff / (1000 * 60 * 60 * 24));
  hoursEl.textContent = Math.floor((diff / (1000 * 60 * 60)) % 24);
  minutesEl.textContent = Math.floor((diff / (1000 * 60)) % 60);
  secondsEl.textContent = Math.floor((diff / 1000) % 60);
}

setInterval(updateCountdown, 1000);
updateCountdown();

/* ======================
   CONFETTI
   ====================== */

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

window.addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});

function startConfetti() {
  const pieces = Array.from({ length: 350 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 3,
    d: Math.random() * 6 + 2,
    angle: Math.random() * Math.PI
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pieces.forEach(p => {
      ctx.beginPath();
      ctx.fillStyle = ["#ff4f9a", "#ffd1e8", "#ffffff", "#ff85b8"]
        [Math.floor(Math.random() * 4)];
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();

      p.y += p.d;
      p.angle += 0.05;
      p.x += Math.sin(p.angle);

      if (p.y > canvas.height) {
        p.y = -10;
        p.x = Math.random() * canvas.width;
      }
    });

    requestAnimationFrame(draw);
  }

  draw();
}

/* ======================
   CHERRY GENERATOR
   ====================== */

const cherryField = document.querySelector(".cherry-field");

for (let i = 0; i < 90; i++) {
  const cherry = document.createElement("div");
  cherry.className = "cherry";
  cherry.textContent = "🍒";

  const size = Math.random() * 28 + 16;
  cherry.style.fontSize = `${size}px`;
  cherry.style.left = `${Math.random() * 100}vw`;
  cherry.style.animationDuration = `${Math.random() * 25 + 15}s`;
  cherry.style.animationDelay = `${Math.random() * -30}s`;

  cherryField.appendChild(cherry);
}
