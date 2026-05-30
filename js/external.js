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
      'Led end-to-end UI development for government & enterprise platforms — translated high-fidelity Figma designs into responsive, production-ready React & HTML/CSS interfaces.',
      'Designed and scaled a company-wide design system across NCERT, DataForAll, GAVI, and CPD MTNDP — reduced page load times by <span class="exp-metric">30%.</span>',
      'Converted Figma designs to React/Next.js components using Cursor & GitHub Copilot — accelerating feature delivery by <span class="exp-metric">30%.</span>',
      'Increased user engagement by <span class="exp-metric">25–30%</span> through intuitive, user-focused interface redesigns.',
      'Integrated Highcharts & custom JS data visualisations for government dashboards (DataForAll multi-country platforms).',
      'Mentored junior designers & developers, improving team quality and delivery timelines.'
    ]
  },
  {
    title: 'Codenote IT Solutions',
    bullets: [
      'Designed user flows, wireframes & interactive prototypes for web applications — improving usability and user experience across client projects.',
      'Developed responsive UIs using HTML5, CSS3/SCSS, JavaScript & React — enhancing scalability and maintainability.',
      'Built reusable UI component libraries aligned with design systems to ensure consistency across multiple products.',
      'Reduced development time by <span class="exp-metric">20–25%</span> by optimising design-to-development handoff workflows and documentation.',
      'Improved accessibility and WCAG compliance through structured UI/UX enhancements.',
      'Collaborated with stakeholders to define design strategies aligned with business goals.'
    ]
  },
  {
    title: 'Advantal Technologies',
    bullets: [
      'Designed dashboards & admin interfaces for enterprise applications — simplifying complex workflows and improving user efficiency.',
      'Worked on Angular-based applications ensuring consistent UI and seamless user experience across platforms.',
      'Created reusable UI components & design patterns to support scalable product development.',
      'Collaborated with development teams to ensure accurate, pixel-perfect implementation of designs.',
      'Delivered high-quality branding and visual design assets aligned with project requirements.'
    ]
  },
  {
    title: 'Throughout Technologies',
    bullets: [
      'Designed wireframes, prototypes & visual interfaces for web applications with focus on usability and clarity.',
      'Developed responsive UIs using HTML, CSS & JavaScript — improved user experience through structured UI enhancements.',
      'Collaborated with cross-functional teams to deliver user-centered design solutions on time.',
      'Reduced development time by <span class="exp-metric">20–25%</span> through efficient design-to-development workflows.',
      'Delivered consistent, high-quality UI across multiple client projects.'
    ]
  },
  {
    title: 'Tuosi Technologies',
    bullets: [
      'Developed responsive web interfaces using HTML, CSS & JavaScript for multiple client projects.',
      'Designed visual assets, layouts & branding materials aligned with project requirements.',
      'Built strong foundation in design-to-development workflows — self-taught, zero guidance.',
      'Delivered consistent UI across diverse client projects from day one.',
      'Established core skills in HTML, CSS, JavaScript and visual design that became the base of 10+ year career.'
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