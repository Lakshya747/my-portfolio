// Hire Me button
document.getElementById("hireBtn").addEventListener("click", () => {
  launchConfetti(); // 🎉 Confetti starts here
});

// Gravity Mode
function gravityMode() {
  document.querySelectorAll("h1, h2, p, .project-card, nav, footer, button").forEach(el => {
    el.style.transition = "transform 1s ease";
    el.style.transform = "translateY(20px) rotate(2deg)";
  });

  // reset after 2 seconds
  setTimeout(() => {
    document.querySelectorAll("h1, h2, p, .project-card, nav, footer, button").forEach(el => {
      el.style.transform = "none";
    });
  }, 2000);
}

// Typing effect for heroTitle
const text = "Helloji, I am Lakshya Agarwal!!!";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("heroTitle").textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 150);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("heroTitle").textContent = "";
  typeWriter();
});

// Emoji Rain
function emojiRain() {
  const container = document.getElementById("emoji-container");
  const emojis = ["😂","🐱","🍕","💻","🔥","🚀"];

  for (let i = 0; i < 30; i++) {
    const e = document.createElement("div");
    e.classList.add("emoji");
    e.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    e.style.left = Math.random() * 100 + "vw";
    e.style.fontSize = Math.random() * 20 + 20 + "px";
    e.style.animationDuration = (Math.random() * 3 + 2) + "s";

    container.appendChild(e);

    setTimeout(() => e.remove(), 5000);
  }
}
