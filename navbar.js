/**
 * Shared Navbar Component — Sunny Binjola
 * ----------------------------------------
 * Single source of truth for the site navigation.
 * Edit nav links, styles, or structure here — changes apply to ALL pages.
 *
 * Usage: Add these two lines to any page:
 *   <div id="navbar"></div>
 *   <script src="navbar.js"></script>
 *
 * The script auto-detects:
 *   - Which page is active (highlights the correct link)
 *   - Whether this is the homepage (enables transparent hero navbar)
 */

(function () {
  // ─── NAV LINKS (edit here to add/remove pages) ───
  const NAV_LINKS = [
    { label: 'Home', href: 'index.html', matchPaths: ['/', '/index.html', ''] },
    { label: 'Heal Your Heartbreak', href: 'heal-your-heartbreak.html', matchPaths: ['/heal-your-heartbreak.html'] },
    { label: 'Blog', href: 'blog.html', matchPaths: ['/blog.html'] },
    { label: 'About', href: 'about.html', matchPaths: ['/about.html'] },
  ];

  const CTA_URL = 'https://cal.com/sunny-binjola/discovery-call';
  const CTA_TEXT = 'Book a Free Call';

  // ─── DETECT CURRENT PAGE ───
  const path = window.location.pathname;
  const currentFile = path.split('/').pop() || 'index.html';
  const isHomepage = currentFile === '' || currentFile === '/' || currentFile === 'index.html';

  function isActive(link) {
    return link.matchPaths.some(p => {
      const match = p.split('/').pop() || 'index.html';
      return match === currentFile;
    });
  }

  // ─── BUILD DESKTOP LINKS ───
  function desktopLinks(scrolled) {
    return NAV_LINKS.map(link => {
      const active = isActive(link);
      let cls;

      if (isHomepage && !scrolled) {
        // White text on transparent hero
        cls = active
          ? 'nav-link text-white/90 font-bold border-b-2 border-white/40 pb-1'
          : 'nav-link text-white/70 font-medium pb-1 hover:text-white transition-all duration-300';
      } else {
        // Dark text on solid cream bg
        cls = active
          ? 'text-emerald-900 font-bold border-b-2 border-emerald-500 pb-1'
          : 'text-stone-600 font-medium pb-1 hover:text-emerald-600 transition-all duration-300';
      }

      return `<a class="${cls}" href="${link.href}">${link.label}</a>`;
    }).join('\n        ');
  }

  // ─── BUILD MOBILE LINKS ───
  function mobileLinks() {
    return NAV_LINKS.map(link => {
      const active = isActive(link);
      const cls = active
        ? 'text-emerald-900 font-bold pb-2 border-b-2 border-emerald-500'
        : 'text-stone-600 font-medium pb-1 hover:text-emerald-600 transition-all';
      return `<a href="${link.href}" class="${cls}">${link.label}</a>`;
    }).join('\n        ');
  }

  // ─── RENDER NAVBAR HTML ───
  const container = document.getElementById('navbar');
  if (!container) return;

  // Initial nav classes differ for homepage (transparent) vs inner pages (solid)
  const navInitialClass = isHomepage
    ? 'fixed top-0 left-0 right-0 z-50 transition-all duration-500'
    : 'fixed top-0 left-0 right-0 z-50 bg-[#f7f7f2]/95 backdrop-blur-3xl shadow-sm transition-all duration-500';

  // Logo classes differ for homepage hero
  const logoClass = isHomepage
    ? 'h-16 nav-logo transition-all duration-500'
    : 'h-16 transition-all duration-500';

  const logoStyle = isHomepage
    ? ' style="filter: invert(1); mix-blend-mode: screen;"'
    : '';

  // Hamburger color
  const hambColor = isHomepage ? 'text-white' : 'text-primary';

  container.innerHTML = `
<nav id="mainNav" class="${navInitialClass}">
  <div class="flex justify-between items-center px-10 py-6 max-w-[1440px] mx-auto">
    <a href="index.html" class="hover:opacity-80 transition-opacity nav-brand">
      <img src="logo.png" alt="Sunny Binjola" class="${logoClass}"${logoStyle}>
    </a>
    <div class="hidden md:flex gap-8 items-center font-['Noto_Serif'] font-medium tracking-tight" id="desktopLinks">
      ${desktopLinks(false)}
    </div>
    <a href="${CTA_URL}" target="_blank" rel="noopener"
       class="vibrant-gradient text-white px-8 py-3 rounded-full font-bold tracking-wide hover:opacity-90 active:scale-95 transition-all hidden md:block text-center">
      ${CTA_TEXT}
    </a>
    <button id="hamburger" class="md:hidden ${hambColor} text-2xl" aria-label="Open menu">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    </button>
  </div>

  <!-- Mobile Nav -->
  <div id="navLinks" class="hidden md:hidden bg-[#f7f7f2] border-t border-outline-variant/20 px-10 py-6 font-['Noto_Serif']">
    <div class="flex flex-col gap-4">
      ${mobileLinks()}
      <a href="${CTA_URL}" target="_blank" rel="noopener"
         class="vibrant-gradient text-white px-8 py-3 rounded-full font-bold tracking-wide hover:opacity-90 active:scale-95 transition-all w-full mt-4 text-center">
        ${CTA_TEXT}
      </a>
    </div>
  </div>
</nav>`;

  // ─── MOBILE HAMBURGER TOGGLE ───
  const hamburger = document.getElementById('hamburger');
  const navLinksEl = document.getElementById('navLinks');
  if (hamburger && navLinksEl) {
    hamburger.addEventListener('click', () => {
      navLinksEl.classList.toggle('hidden');
    });
  }

  // ─── HOMEPAGE: TRANSPARENT → SOLID SCROLL EFFECT ───
  if (isHomepage) {
    const nav = document.getElementById('mainNav');
    const logoImg = nav.querySelector('.nav-logo');
    const desktopLinksContainer = document.getElementById('desktopLinks');

    function updateNav() {
      const scrolled = window.scrollY > 80;

      if (scrolled) {
        nav.classList.add('bg-[#f7f7f2]/95', 'backdrop-blur-3xl', 'shadow-sm');
        if (logoImg) {
          logoImg.style.filter = 'none';
          logoImg.style.mixBlendMode = 'normal';
        }
        if (hamburger) {
          hamburger.classList.remove('text-white');
          hamburger.classList.add('text-primary');
        }
      } else {
        nav.classList.remove('bg-[#f7f7f2]/95', 'backdrop-blur-3xl', 'shadow-sm');
        if (logoImg) {
          logoImg.style.filter = 'invert(1)';
          logoImg.style.mixBlendMode = 'screen';
        }
        if (hamburger) {
          hamburger.classList.remove('text-primary');
          hamburger.classList.add('text-white');
        }
      }

      // Re-render desktop links with correct color scheme
      if (desktopLinksContainer) {
        desktopLinksContainer.innerHTML = desktopLinks(scrolled);
      }
    }

    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();
  }
})();
