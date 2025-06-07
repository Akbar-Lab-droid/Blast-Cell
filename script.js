// Page Transition Animation
function pageTransition() {
  gsap.to('body', {
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
      gsap.to('body', { opacity: 1, duration: 0.5 });
    }
  });
}

// Typing Effect for Hero Section
if (document.getElementById('typing-text')) {
  const text = 'Selamat Datang di Blast Cell';
  let index = 0;
  function type() {
    if (index < text.length) {
      document.getElementById('typing-text').textContent += text.charAt(index);
      index++;
      setTimeout(type, 80);
    }
  }
  window.addEventListener('load', () => {
    gsap.from('#typing-text', { duration: 1, opacity: 0, y: 30, ease: 'power3.out' });
    type();
  });
}

// Parallax Effect
gsap.to('.parallax-bg', {
  scrollTrigger: {
    trigger: '#beranda',
    scrub: true,
    start: 'top top',
    end: 'bottom top'
  },
  y: 100
});

// GSAP Animations
gsap.from('.neon-btn', {
  duration: 1,
  opacity: 0,
  scale: 0.9,
  ease: 'power2.out',
  scrollTrigger: { trigger: '#beranda, #kontak', start: 'top 80%' }
});

gsap.from('.card', {
  duration: 1,
  y: 50,
  opacity: 0,
  stagger: 0.2,
  ease: 'power3.out',
  scrollTrigger: { trigger: '#layanan', start: 'top 80%' }
});

gsap.from('#tentang p', {
  duration: 1,
  opacity: 0,
  y: 30,
  ease: 'power3.out',
  scrollTrigger: { trigger: '#tentang', start: 'top 80%' }
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;
themeToggle.addEventListener('click', () => {
  html.classList.toggle('dark');
  localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
});

// Load Saved Theme
if (localStorage.getItem('theme') === 'dark') {
  html.classList.add('dark');
}

// Contact Form Submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (name && email && message) {
      alert('Terima kasih atas pesan Anda! Kami akan segera menghubungi Anda.');
      contactForm.reset();
    } else {
      alert('Harap isi semua kolom dengan benar!');
    }
  });
}

// Smooth Navigation
document.querySelectorAll('.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    pageTransition();
    setTimeout(() => {
      window.location.href = href;
    }, 500);
  });
});
