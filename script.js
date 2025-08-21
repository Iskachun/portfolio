// Dark/light toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
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
  "Hi, I'm Alex!",
  "Welcome to my website", 
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