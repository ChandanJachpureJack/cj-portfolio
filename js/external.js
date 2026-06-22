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
      'Led end-to-end product design and UI engineering for government, enterprise, and international development platforms, translating complex business requirements into intuitive user experiences and scalable frontend solutions.',
      'Designed user flows, wireframes, interactive prototypes, and design systems in Figma, ensuring consistency, accessibility, and seamless user experiences across multiple products.',
      'Converted high-fidelity Figma designs into production-ready HTML5, CSS3, SCSS, JavaScript, and React-based interfaces with a strong focus on responsiveness, performance, and cross-browser compatibility.',
      'Delivered key contributions to large-scale platforms including NCERT PARAKH (Government of India), DataForAll, GAVI, and other international initiatives serving millions of users across multiple regions.',
      'Developed reusable UI components and modern frontend interfaces, improving development efficiency and reducing repetitive implementation effort across projects.',
      'Built interactive dashboards and data visualizations using Highcharts and custom JavaScript solutions for data-driven reporting and decision-making.',
      'Collaborated with product managers, developers, QA teams, and stakeholders to streamline design-to-development workflows and improve delivery quality.',
      'Leveraged AI-assisted workflows using Cursor, GitHub Copilot, Claude, and ChatGPT to accelerate design exploration, frontend development, debugging, and documentation.'
    ]
  },
  {
    title: 'Codenote IT Solutions',
    bullets: [
      'Designed end-to-end user experiences for 10+ web applications, creating user flows, wireframes, high-fidelity prototypes, and scalable design systems aligned with business and user needs.',
      'Developed responsive and cross-browser compatible frontend interfaces using HTML5, CSS3, SCSS, and JavaScript, ensuring consistent user experiences across devices and platforms.',
      'Built reusable UI components and component libraries, improving design consistency, implementation efficiency, and long-term maintainability across multiple products.',
      'Collaborated closely with developers and stakeholders to bridge the gap between design and engineering, streamlining design-to-development handoffs and reducing implementation effort.',
      'Improved WCAG 2.1 accessibility compliance through structured UI audits, accessibility-focused design enhancements, and frontend implementation best practices.',
      'Reduced development time by 20–25% through optimized design specifications, component documentation, and reusable UI patterns.'
    ]
  },
  {
    title: 'Advantal Technologies',
    bullets: [
      'Designed enterprise dashboards, admin panels, and web application interfaces focused on usability, efficiency, and scalability.',
      'Created design systems, reusable UI patterns, and component libraries to ensure consistency across multiple products and platforms.',
      'Collaborated closely with development teams to translate business requirements and design concepts into responsive, user-friendly interfaces.',
      'Contributed to Angular-based enterprise applications by defining UI standards, interaction patterns, and visual design guidelines.'
    ]
  },
  {
    title: 'Throughout Technologies',
    bullets: [
      'Designed wireframes, interactive prototypes, and user interfaces for web applications with a strong focus on usability and conversion optimization.',
      'Developed responsive frontend interfaces using HTML5, CSS3, and JavaScript, ensuring consistent cross-browser and cross-device experiences.',
      'Worked closely with stakeholders and development teams to deliver user-centered digital solutions across multiple client projects.'
    ]
  },
  {
    title: 'Tuosi Technologies',
    bullets: [
      'Designed and developed responsive web interfaces using HTML, CSS, and JavaScript for a variety of client projects.',
      'Created visual designs, UI layouts, and branding assets aligned with business goals and user requirements.',
      'Collaborated with project teams to deliver high-quality digital experiences while maintaining design consistency and implementation standards.'
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