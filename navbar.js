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
  // ─── MAIN NAV LINKS (shown directly in the navbar) ───
  const NAV_LINKS = [
    { label: 'Home', href: 'index.html', matchPaths: ['/', '/index.html', ''] },
    { label: 'Heal Your Heartbreak', href: 'heal-your-heartbreak.html', matchPaths: ['/heal-your-heartbreak.html'] },
    { label: 'About', href: 'about.html', matchPaths: ['/about.html'] },
    { label: 'Blog', href: 'blog.html', matchPaths: ['/blog.html'] },
    { label: 'Work With Me', href: 'work-with-me.html', matchPaths: ['/work-with-me.html'] },
  ];

  // ─── MORE LINKS (shown in dropdown on desktop, flat in mobile menu) ───
  const MORE_LINKS = [
    { label: 'Find Your Purpose', href: 'find-your-purpose.html', matchPaths: ['/find-your-purpose.html'] },
    { label: 'Testimonials', href: 'testimonials.html', matchPaths: ['/testimonials.html'] },
    { label: 'Free Resources', href: 'resources.html', matchPaths: ['/resources.html'] },
    { label: 'FAQ', href: 'faq.html', matchPaths: ['/faq.html'] },
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

  // Check if active page is in MORE_LINKS
  const activeInMore = MORE_LINKS.some(l => isActive(l));

  // ─── BUILD DESKTOP LINK ───
  function linkClass(link, scrolled) {
    const active = isActive(link);
    if (isHomepage && !scrolled) {
      return active
        ? 'nav-link text-white/90 font-bold border-b-2 border-white/40 pb-1'
        : 'nav-link text-white/70 font-medium pb-1 hover:text-white transition-all duration-300';
    } else {
      return active
        ? 'text-emerald-900 font-bold border-b-2 border-emerald-500 pb-1'
        : 'text-stone-600 font-medium pb-1 hover:text-emerald-600 transition-all duration-300';
    }
  }

  function desktopLinks(scrolled) {
    const mainLinks = NAV_LINKS.map(link =>
      `<a class="${linkClass(link, scrolled)}" href="${link.href}">${link.label}</a>`
    ).join('\n        ');

    // "More" dropdown trigger
    const moreActive = activeInMore;
    let moreTriggerCls, moreSvgCls, dropdownBg, dropdownLinkCls;

    if (isHomepage && !scrolled) {
      moreTriggerCls = moreActive
        ? 'nav-link text-white/90 font-bold border-b-2 border-white/40 pb-1'
        : 'nav-link text-white/70 font-medium pb-1 hover:text-white transition-all duration-300';
      moreSvgCls = 'w-3.5 h-3.5';
      dropdownBg = 'bg-[#f7f7f2] shadow-lg border border-outline-variant/20';
      dropdownLinkCls = 'text-stone-600 hover:text-emerald-600 hover:bg-surface-container-low';
    } else {
      moreTriggerCls = moreActive
        ? 'text-emerald-900 font-bold border-b-2 border-emerald-500 pb-1'
        : 'text-stone-600 font-medium pb-1 hover:text-emerald-600 transition-all duration-300';
      dropdownBg = 'bg-[#f7f7f2] shadow-lg border border-outline-variant/20';
      dropdownLinkCls = 'text-stone-600 hover:text-emerald-600 hover:bg-surface-container-low';
    }

    const dropdownItems = MORE_LINKS.map(link => {
      const active = isActive(link);
      const cls = active
        ? 'block px-5 py-2.5 text-emerald-900 font-bold bg-surface-container-low rounded-lg'
        : `block px-5 py-2.5 ${dropdownLinkCls} rounded-lg transition-colors`;
      return `<a href="${link.href}" class="${cls}">${link.label}</a>`;
    }).join('\n          ');

    return `${mainLinks}
        <div class="relative" id="moreDropdown">
          <button class="${moreTriggerCls} flex items-center gap-1 cursor-pointer" id="moreBtn" aria-expanded="false" aria-haspopup="true">
            More
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 transition-transform duration-200" id="moreChevron" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <div id="moreMenu" class="absolute top-full right-0 mt-3 ${dropdownBg} rounded-xl py-2 min-w-[220px] opacity-0 invisible transition-all duration-200 z-50 font-['Manrope'] text-sm font-medium">
            ${dropdownItems}
          </div>
        </div>`;
  }

  // ─── BUILD MOBILE LINKS (all links flat) ───
  function mobileLinks() {
    const allLinks = [...NAV_LINKS, ...MORE_LINKS];
    return allLinks.map(link => {
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

  const navInitialClass = isHomepage
    ? 'fixed top-0 left-0 right-0 z-50 transition-all duration-500'
    : 'fixed top-0 left-0 right-0 z-50 bg-[#f7f7f2]/80 backdrop-blur-3xl shadow-sm transition-all duration-500';

  const logoClass = isHomepage
    ? 'h-20 nav-logo transition-all duration-500'
    : 'h-16 transition-all duration-500';

  // No CSS filters — logo has transparent background, displays naturally everywhere
  const logoStyle = '';

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

  // ─── "MORE" DROPDOWN LOGIC ───
  const moreBtn = document.getElementById('moreBtn');
  const moreMenu = document.getElementById('moreMenu');
  const moreChevron = document.getElementById('moreChevron');

  if (moreBtn && moreMenu) {
    let dropdownOpen = false;

    function openDropdown() {
      dropdownOpen = true;
      moreMenu.classList.remove('opacity-0', 'invisible');
      moreMenu.classList.add('opacity-100', 'visible');
      if (moreChevron) moreChevron.style.transform = 'rotate(180deg)';
      moreBtn.setAttribute('aria-expanded', 'true');
    }

    function closeDropdown() {
      dropdownOpen = false;
      moreMenu.classList.add('opacity-0', 'invisible');
      moreMenu.classList.remove('opacity-100', 'visible');
      if (moreChevron) moreChevron.style.transform = 'rotate(0deg)';
      moreBtn.setAttribute('aria-expanded', 'false');
    }

    moreBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdownOpen ? closeDropdown() : openDropdown();
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (dropdownOpen && !moreMenu.contains(e.target) && !moreBtn.contains(e.target)) {
        closeDropdown();
      }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && dropdownOpen) closeDropdown();
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

        // Re-bind dropdown after re-render
        const newMoreBtn = document.getElementById('moreBtn');
        const newMoreMenu = document.getElementById('moreMenu');
        const newMoreChevron = document.getElementById('moreChevron');
        if (newMoreBtn && newMoreMenu) {
          let open = false;
          function openDd() {
            open = true;
            newMoreMenu.classList.remove('opacity-0', 'invisible');
            newMoreMenu.classList.add('opacity-100', 'visible');
            if (newMoreChevron) newMoreChevron.style.transform = 'rotate(180deg)';
          }
          function closeDd() {
            open = false;
            newMoreMenu.classList.add('opacity-0', 'invisible');
            newMoreMenu.classList.remove('opacity-100', 'visible');
            if (newMoreChevron) newMoreChevron.style.transform = 'rotate(0deg)';
          }
          newMoreBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            open ? closeDd() : openDd();
          });
          document.addEventListener('click', (e) => {
            if (open && !newMoreMenu.contains(e.target) && !newMoreBtn.contains(e.target)) closeDd();
          });
        }
      }
    }

    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();
  }
})();
