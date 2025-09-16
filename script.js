// Hire Me button
document.getElementById("hireBtn").addEventListener("click", () => {
  launchConfetti(); // 🎉 Confetti starts here
});

// Confetti function
function launchConfetti() {
  const container = document.getElementById("confetti-container");

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    // Random position
    confetti.style.left = Math.random() * 100 + "vw";

    // Random color
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

    // Random size
    const size = Math.random() * 8 + 5;
    confetti.style.width = size + "px";
    confetti.style.height = size + "px";

    // Random animation duration
    confetti.style.animationDuration = (Math.random() * 3 + 2) + "s";

    container.appendChild(confetti);

    // Remove after animation ends
    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}

document.addEventListener("mousemove", (e) => {
  const emoji = document.createElement("div");
  emoji.textContent = "😂";
  emoji.style.position = "absolute";
  emoji.style.left = e.pageX + "px";
  emoji.style.top = e.pageY + "px";
  emoji.style.fontSize = "20px";
  document.body.appendChild(emoji);
  setTimeout(() => emoji.remove(), 500);
});

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


const text = "Helloji, I am Lakshya Agarwal!!!";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("heroTitle").textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 150);
  }
}
typeWriter();


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

