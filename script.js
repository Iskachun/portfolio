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


const text = "Hi, I'm Alex!";
let i = 0;
const speed = 150; // slow typing

function typeWriter() {
  if (i < text.length) {
    const typedElement = document.getElementById("typed-text");
    typedElement.innerHTML += text.charAt(i);
    typedElement.style.opacity = "1"; // fade-in effect for each character
    i++;
    setTimeout(typeWriter, speed);
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
