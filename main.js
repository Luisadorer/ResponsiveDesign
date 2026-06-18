const panels = document.querySelectorAll('.panel');
const scroller = document.getElementById('scroller');
const nav = document.getElementById('nav');
const dotsContainer = document.getElementById('dots');
const scrollHint = document.getElementById('scrollHint');

let current = 0;
let isAnimating = false;

// ── DOTS ERSTELLEN ──
panels.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goTo(i));
  dotsContainer.appendChild(dot);
});

// ── ZU PANEL SCROLLEN ──
function goTo(index) {
  if (isAnimating) return;
  if (index < 0 || index >= panels.length) return;

  isAnimating = true;
  current = index;

  scroller.style.transform = `translateY(-${current * 100}vh)`;

  updateNav();
  updateDots();
  updateScrollHint();

  setTimeout(() => { isAnimating = false; }, 900);
}

// ── NAV FARBE ──
function updateNav() {
  const theme = panels[current].dataset.theme;
  nav.className = theme === 'dark' ? 'dark' : 'light';
}

// ── DOTS FARBE + AKTIV ──
function updateDots() {
  const theme = panels[current].dataset.theme;
  dotsContainer.className = theme === 'dark' ? 'dark' : 'light';

  document.querySelectorAll('.dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === current);
  });
}

// ── SCROLL HINT VERSTECKEN ──
function updateScrollHint() {
  if (current > 0) {
    scrollHint.classList.add('hidden');
  } else {
    scrollHint.classList.remove('hidden');
  }
}

// ── MAUSRAD ──
window.addEventListener('wheel', (e) => {
  if (isAnimating) return;
  if (e.deltaY > 0) {
    goTo(current + 1);
  } else {
    goTo(current - 1);
  }
}, { passive: true });

// ── TASTATUR ──
window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown' || e.key === 'PageDown') goTo(current + 1);
  if (e.key === 'ArrowUp' || e.key === 'PageUp') goTo(current - 1);
});

// ── TOUCH ──
let touchStart = 0;

window.addEventListener('touchstart', (e) => {
  touchStart = e.touches[0].clientY;
}, { passive: true });

window.addEventListener('touchend', (e) => {
  const diff = touchStart - e.changedTouches[0].clientY;
  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      goTo(current + 1);
    } else {
      goTo(current - 1);
    }
  }
}, { passive: true });

// ── MENU ──
function openMenu() {
  document.getElementById('overlay').classList.add('open');
}

function closeMenu() {
  document.getElementById('overlay').classList.remove('open');
}

// ── INIT ──
updateNav();
updateDots();