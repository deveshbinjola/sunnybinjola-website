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
 * Structure:
 *   Home · About · Blog · Work With Me ▾ · [Book a Free Call]
 *   └─ Heal Your Heartbreak
 *   └─ Embody Live
 *   └─ Testimonials
 *   └─ Free Resources
 *   └─ FAQ
 */

(function () {
  // ─── AUTO-DETECT BASE PATH ───
  const scriptTag = document.querySelector('script[src*="navbar.js"]');
  const basePath = scriptTag ? scriptTag.getAttribute('src').replace(/navbar\.js.*$/, '') : '';

  // ─── TOP-LEVEL NAV LINKS ───
  const NAV_LINKS = [
    { label: 'About', href: basePath + 'about.html', matchPaths: ['/about.html'] },
    { label: 'Blog', href: basePath + 'blog.html', matchPaths: ['/blog.html'] },
    { label: 'Heal Your Heartbreak', href: basePath + 'heal-your-heartbreak.html', matchPaths: ['/heal-your-heartbreak.html'] },
  ];

  // ─── "WORK WITH ME" DROPDOWN LINKS ───
  const WORK_LINKS = [
    { label: '1:1 Coaching', href: basePath + 'one-on-one.html', matchPaths: ['/one-on-one.html'], desc: 'Bespoke transformation work' },
    { label: 'Embody Live', href: basePath + 'embody-live.html', matchPaths: ['/embody-live.html'], desc: 'Group coaching cohort' },
    { label: 'Testimonials', href: basePath + 'testimonials.html', matchPaths: ['/testimonials.html'], desc: 'Real stories from real men' },
    { label: 'Free Resources', href: basePath + 'resources.html', matchPaths: ['/resources.html'], desc: 'Guides, tools & practices' },
    { label: 'FAQ', href: basePath + 'faq.html', matchPaths: ['/faq.html'], desc: 'Common questions answered' },
  ];

  const CTA_URL = 'https://cal.com/sunny-binjola/discovery-call';
  const CTA_TEXT = 'Book a Free Call';

  // ─── DETECT CURRENT PAGE ───
  const path = window.location.pathname;
  const currentFile = path.split('/').pop() || 'index.html';
  const isHomepage = (currentFile === '' || currentFile === '/' || currentFile === 'index.html') && basePath === '';
  const isBlogPost = basePath.includes('../') || path.includes('/blog/');
  const isRecoveryPage = path.includes('/recovery/');

  function isActive(link) {
    return link.matchPaths.some(p => {
      const match = p.split('/').pop() || 'index.html';
      return match === currentFile;
    });
  }

  // Check if current page is inside the Work With Me dropdown
  const activeInWork = WORK_LINKS.some(l => isActive(l))
    || currentFile === 'work-with-me.html'
    || isRecoveryPage;

  // ─── LINK STYLING ───
  function linkClass(link, scrolled) {
    const active = isActive(link);
    if (isHomepage && !scrolled) {
      return active
        ? 'text-white font-bold border-b-2 border-white/50 pb-1'
        : 'text-white/75 font-semibold pb-1 hover:text-white transition-all duration-300';
    } else {
      return active
        ? 'text-primary font-bold border-b-2 border-primary pb-1'
        : 'text-on-surface-variant font-semibold pb-1 hover:text-primary transition-all duration-300';
    }
  }

  // ─── BUILD DESKTOP NAV ───
  function desktopLinks(scrolled) {
    const mainLinks = NAV_LINKS.map(link =>
      `<a class="${linkClass(link, scrolled)}" href="${link.href}">${link.label}</a>`
    ).join('\n        ');

    // "Work With Me" dropdown trigger
    let triggerCls, dropdownLinkCls;

    if (isHomepage && !scrolled) {
      triggerCls = activeInWork
        ? 'text-white font-bold border-b-2 border-white/50 pb-1'
        : 'text-white/75 font-semibold pb-1 hover:text-white transition-all duration-300';
      dropdownLinkCls = 'text-on-surface-variant hover:text-primary hover:bg-surface-container-low';
    } else {
      triggerCls = activeInWork
        ? 'text-primary font-bold border-b-2 border-primary pb-1'
        : 'text-on-surface-variant font-semibold pb-1 hover:text-primary transition-all duration-300';
      dropdownLinkCls = 'text-on-surface-variant hover:text-primary hover:bg-surface-container-low';
    }

    const dropdownItems = WORK_LINKS.map(link => {
      const active = isActive(link);
      const cls = active
        ? 'block px-5 py-3 text-primary font-bold bg-surface-container-low rounded-xl'
        : `block px-5 py-3 ${dropdownLinkCls} rounded-xl transition-colors`;
      return `<a href="${link.href}" class="${cls}">
                <span class="block font-semibold">${link.label}</span>
                <span class="block text-xs text-on-surface-variant/60 mt-0.5">${link.desc}</span>
              </a>`;
    }).join('\n          ');

    return `${mainLinks}
        <div class="relative" id="workDropdown">
          <button class="${triggerCls} flex items-center gap-1.5 cursor-pointer" id="workBtn" aria-expanded="false" aria-haspopup="true">
            Work With Me
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transition-transform duration-200" id="workChevron" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <div id="workMenu" class="absolute top-full right-0 mt-4 bg-[#f7f7f2] shadow-xl border border-outline-variant/15 rounded-2xl py-3 px-2 min-w-[260px] opacity-0 invisible transition-all duration-200 z-50 font-['Manrope'] text-sm font-medium">
            ${dropdownItems}
          </div>
        </div>`;
  }

  // ─── BUILD MOBILE NAV ───
  function mobileLinks() {
    const topLinks = NAV_LINKS.map(link => {
      const active = isActive(link);
      const cls = active
        ? 'text-primary font-bold text-lg'
        : 'text-on-surface-variant font-semibold text-lg hover:text-primary transition-all';
      return `<a href="${link.href}" class="${cls}">${link.label}</a>`;
    }).join('\n        ');

    const workLabel = `<span class="text-xs font-bold uppercase tracking-[0.15em] text-primary mt-4 mb-1 block">Work With Me</span>`;

    const workLinks = WORK_LINKS.map(link => {
      const active = isActive(link);
      const cls = active
        ? 'text-primary font-bold text-base'
        : 'text-on-surface-variant font-medium text-base hover:text-primary transition-all';
      return `<a href="${link.href}" class="${cls} pl-3 border-l-2 border-primary/20">${link.label}</a>`;
    }).join('\n        ');

    return `${topLinks}
        <div class="border-t border-outline-variant/20 pt-2 mt-2"></div>
        ${workLabel}
        ${workLinks}`;
  }

  // ─── RENDER NAVBAR ───
  const container = document.getElementById('navbar');
  if (!container) return;

  const navInitialClass = isHomepage
    ? 'fixed top-0 left-0 right-0 z-50 transition-all duration-500'
    : isBlogPost
      ? 'sticky top-0 z-50 bg-[#f7f7f2] shadow-sm transition-all duration-500'
      : 'fixed top-0 left-0 right-0 z-50 bg-[#f7f7f2]/80 backdrop-blur-3xl shadow-sm transition-all duration-500';

  const logoClass = isHomepage
    ? 'h-20 nav-logo transition-all duration-500'
    : 'h-16 transition-all duration-500';

  const hambColor = isHomepage ? 'text-white' : 'text-primary';

  container.innerHTML = `
<nav id="mainNav" class="${navInitialClass}">
  <div class="flex justify-between items-center px-10 py-5 max-w-[1440px] mx-auto">
    <a href="${basePath}index.html" class="hover:opacity-80 transition-opacity nav-brand">
      <img src="${basePath}logo.png" alt="Sunny Binjola" class="${logoClass}">
    </a>
    <div class="hidden lg:flex gap-9 items-center font-['Manrope'] text-base tracking-tight" id="desktopLinks">
      ${desktopLinks(false)}
    </div>
    <a href="${CTA_URL}" target="_blank" rel="noopener"
       class="vibrant-gradient text-white px-8 py-3.5 rounded-full font-bold text-base tracking-wide hover:opacity-90 active:scale-95 transition-all hidden lg:block text-center shadow-lg shadow-primary/20">
      ${CTA_TEXT}
    </a>
    <button id="hamburger" class="lg:hidden ${hambColor} text-2xl" aria-label="Open menu">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    </button>
  </div>

  <!-- Mobile Nav -->
  <div id="navLinks" class="hidden lg:hidden bg-[#f7f7f2] border-t border-outline-variant/20 px-10 py-6 font-['Manrope']">
    <div class="flex flex-col gap-3">
      ${mobileLinks()}
      <a href="${CTA_URL}" target="_blank" rel="noopener"
         class="vibrant-gradient text-white px-8 py-3.5 rounded-full font-bold tracking-wide hover:opacity-90 active:scale-95 transition-all w-full mt-5 text-center shadow-lg shadow-primary/20">
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

  // ─── DROPDOWN LOGIC ───
  function bindDropdown() {
    const workBtn = document.getElementById('workBtn');
    const workMenu = document.getElementById('workMenu');
    const workChevron = document.getElementById('workChevron');

    if (!workBtn || !workMenu) return;

    let dropdownOpen = false;

    function openDropdown() {
      dropdownOpen = true;
      workMenu.classList.remove('opacity-0', 'invisible');
      workMenu.classList.add('opacity-100', 'visible');
      if (workChevron) workChevron.style.transform = 'rotate(180deg)';
      workBtn.setAttribute('aria-expanded', 'true');
    }

    function closeDropdown() {
      dropdownOpen = false;
      workMenu.classList.add('opacity-0', 'invisible');
      workMenu.classList.remove('opacity-100', 'visible');
      if (workChevron) workChevron.style.transform = 'rotate(0deg)';
      workBtn.setAttribute('aria-expanded', 'false');
    }

    workBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdownOpen ? closeDropdown() : openDropdown();
    });

    document.addEventListener('click', (e) => {
      if (dropdownOpen && !workMenu.contains(e.target) && !workBtn.contains(e.target)) {
        closeDropdown();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && dropdownOpen) closeDropdown();
    });
  }

  bindDropdown();

  // ─── HOMEPAGE: TRANSPARENT → SOLID SCROLL EFFECT ───
  if (isHomepage) {
    const nav = document.getElementById('mainNav');
    const logoImg = nav.querySelector('.nav-logo');
    const desktopLinksContainer = document.getElementById('desktopLinks');

    function updateNav() {
      const scrolled = window.scrollY > 80;

      if (scrolled) {
        nav.classList.add('bg-[#f7f7f2]/80', 'backdrop-blur-3xl', 'shadow-sm');
        if (logoImg) {
          logoImg.classList.remove('h-20');
          logoImg.classList.add('h-16');
        }
        if (hamburger) {
          hamburger.classList.remove('text-white');
          hamburger.classList.add('text-primary');
        }
      } else {
        nav.classList.remove('bg-[#f7f7f2]/80', 'backdrop-blur-3xl', 'shadow-sm');
        if (logoImg) {
          logoImg.classList.remove('h-16');
          logoImg.classList.add('h-20');
        }
        if (hamburger) {
          hamburger.classList.remove('text-primary');
          hamburger.classList.add('text-white');
        }
      }

      // Re-render desktop links with correct color scheme
      if (desktopLinksContainer) {
        desktopLinksContainer.innerHTML = desktopLinks(scrolled);
        bindDropdown();
      }
    }

    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();
  }
})();
