// Dark/light toggle
const themeToggle = document.getElementById('theme-toggle');
let lightMode = false;
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  lightMode = !lightMode;
  themeToggle.textContent = lightMode ? '🌙' : '☀️';
});

// Back-to-top button
const backToTop = document.getElementById('back-to-top');
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Scroll progress bar
const progressBar = document.getElementById('progress-bar');
window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  const height = document.body.scrollHeight - window.innerHeight;
  progressBar.style.width = `${(scroll / height) * 100}%`;
});


const lines = [
  "Hello, I'm Alex!",
  "Welcome to my sanctuary", 
  "",
  "💜"
];

let lineIndex = 0;
let charIndex = 0;
const speed = 150; // typing speed in ms
const typedElement = document.getElementById("typed-text");

function typeWriter() {
  if (charIndex < lines[lineIndex].length) {
    typedElement.innerHTML += lines[lineIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, speed);
  } else {
    // finished one line → move to next
    lineIndex++;
    if (lineIndex < lines.length) {
      setTimeout(() => {
        typedElement.innerHTML += "<br>"; // line break
        charIndex = 0;
        typeWriter();
      }, 700); // small pause before next line
    }
  }
}

window.onload = typeWriter;


document.addEventListener("DOMContentLoaded", () => {
    const skillSection = document.querySelector("#skills");
    const bars = document.querySelectorAll(".fill");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          bars.forEach(bar => bar.classList.add("active"));
          observer.unobserve(skillSection); // run once
        }
      });
    }, { threshold: 0.3 });

    observer.observe(skillSection);
  });


  
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = '01';
const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = Array(Math.floor(columns)).fill(1);

function draw() {
  if (lightMode) {
    ctx.fillStyle = 'rgba(158, 240, 120, 0.05)';
  } else {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  }
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (lightMode) {
    ctx.fillStyle = '#8f5dfc';
  } else {
    ctx.fillStyle = 'rgba(0, 255, 0, 0.6)';
  }
  ctx.font = fontSize + 'px monospace';

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(draw, 33);