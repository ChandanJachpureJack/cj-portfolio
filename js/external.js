// Cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
function animateCursor() {
  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      // Animate skill bars
      const bars = e.target.querySelectorAll('.skill-bar-fill');
      bars.forEach(b => setTimeout(() => b.classList.add('animate'), 200));
    }
  });
}, { threshold: 0.12 });
reveals.forEach(r => observer.observe(r));

// Also observe skill section specifically for bars
const skillSection = document.getElementById('skills');
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      document.querySelectorAll('.skill-bar-fill').forEach(b => {
        setTimeout(() => b.classList.add('animate'), 300);
      });
    }
  });
}, { threshold: 0.1 });
skillSection && skillObserver.observe(skillSection);

// Experience detail switcher
const expData = [
  {
    title: 'Avalon Information Systems',
    bullets: [
      'Led end-to-end UI/UX design for enterprise-level web platforms across multiple industries.',
      'Designed scalable design systems, improving UI consistency — resulting in <span class="exp-metric">30% faster dev cycles.</span>',
      'Increased user engagement by <span class="exp-metric">25–30%</span> through user-centered design improvements.',
      'Reduced website load times by <span class="exp-metric">30%</span> through performance optimization.',
      'Integrated AI tools (ChatGPT, Copilot, Cursor) boosting team productivity by <span class="exp-metric">30%.</span>',
      'Mentored a cross-functional team of designers and developers.'
    ]
  },
  {
    title: 'Codenote IT Solutions',
    bullets: [
      'Delivered user-centric UI/UX solutions aligned with business goals for diverse clients.',
      'Designed wireframes, prototypes, and branding assets using Figma and Adobe tools.',
      'Developed responsive web interfaces using HTML, CSS, and JavaScript.',
      'Improved usability and accessibility across multiple web applications.',
      'Reduced development time by <span class="exp-metric">20–25%</span> through efficient design workflows.',
      'Collaborated with stakeholders and clients to define design strategies.'
    ]
  },
  {
    title: 'Advantal Technologies',
    bullets: [
      'Designed and developed responsive web interfaces and admin dashboards.',
      'Created wireframes, mockups, and prototypes for complex enterprise applications.',
      'Improved UI consistency and user experience across multiple platforms.',
      'Delivered high-quality branding and marketing design assets.',
      'Worked closely with development teams for seamless implementation.'
    ]
  },
  {
    title: 'Throughout Technologies',
    bullets: [
      'Delivered user-centric UI/UX solutions across multiple client engagements.',
      'Designed wireframes, prototypes, and branding assets using Figma and Adobe tools.',
      'Developed responsive web interfaces with HTML, CSS, and JavaScript.',
      'Improved usability and accessibility across multiple web applications.',
      'Reduced development time by <span class="exp-metric">20–25%</span> through efficient workflows.'
    ]
  },
  {
    title: 'Tuosi Technologies (First Role)',
    bullets: [
      'Kicked off professional career delivering user-centric UI/UX solutions.',
      'Designed wireframes, prototypes, and branding assets from scratch.',
      'Developed responsive web interfaces using HTML, CSS, and JavaScript.',
      'Improved usability and accessibility across web applications.',
      'Built strong foundation in design-to-development workflows.'
    ]
  }
];

function showExp(i) {
  const detail = document.getElementById('expDetail');
  const d = expData[i];
  detail.innerHTML = `
    <div class="exp-detail-title">${d.title}</div>
    <div class="exp-bullets">${d.bullets.map(b => `<div class="exp-bullet">${b}</div>`).join('')}</div>
  `;
}

// Nav active
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) nav.style.borderColor = 'rgba(255,255,255,0.06)';
  else nav.style.borderColor = 'var(--border)';
});