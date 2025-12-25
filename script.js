/* =========================
   DATE CONFIGURATION
   ========================= */

// CHANGE YEAR IF NEEDED
const birthday = new Date("2026-01-28T00:00:00").getTime();

/* =========================
   ELEMENT REFERENCES
   ========================= */

const song = document.getElementById("birthdaySong");
const card = document.getElementById("card");
const secretLink = document.getElementById("secretLink");

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

/* =========================
   COUNTDOWN LOGIC
   ========================= */

function updateCountdown() {
  const now = Date.now();
  const diff = birthday - now;

  if (diff <= 0) {
    document.getElementById("countdown").style.display = "none";

    document.getElementById("message").innerHTML =
      "Happy Birthday Cherry 🍒<br><br>" +
      "You don’t just make moments special.<br>" +
      "You make them unforgettable 💖";

    if (card) card.classList.add("active");
    if (secretLink) secretLink.style.display = "inline-block";

    song.volume = 0.6;
    song.play();

    startConfetti();
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  daysEl.textContent = d;
  hoursEl.textContent = h;
  minutesEl.textContent = m;
  secondsEl.textContent = s;
}

setInterval(updateCountdown, 1000);
updateCountdown();

/* =========================
   CONFETTI (ENHANCED)
   ========================= */

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

function startConfetti() {
  const pieces = Array.from({ length: 320 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 3,
    d: Math.random() * 6 + 2,
    tiltAngle: Math.random() * Math.PI
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
      p.tiltAngle += 0.05;
      p.x += Math.sin(p.tiltAngle);

      if (p.y > canvas.height) {
        p.y = -10;
        p.x = Math.random() * canvas.width;
      }
    });

    requestAnimationFrame(draw);
  }

  draw();
}

/* =========================
   CHERRY FIELD GENERATOR
   ========================= */

const cherryField = document.querySelector(".cherry-field");

if (cherryField) {
  for (let i = 0; i < 80; i++) {
    const cherry = document.createElement("div");
    cherry.className = "cherry";
    cherry.textContent = "🍒";

    const size = Math.random() * 26 + 16;
    cherry.style.fontSize = `${size}px`;
    cherry.style.left = `${Math.random() * 100}vw`;
    cherry.style.animationDuration = `${Math.random() * 25 + 15}s`;
    cherry.style.animationDelay = `${Math.random() * -30}s`;

    cherryField.appendChild(cherry);
  }
}
