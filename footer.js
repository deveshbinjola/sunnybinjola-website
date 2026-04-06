/**
 * Shared Footer Component — Sunny Binjola
 * ----------------------------------------
 * Single source of truth for the site footer.
 * Edit links, text, or layout here — changes apply to ALL pages.
 *
 * Usage: Add these two lines where your footer should appear:
 *   <div id="footer"></div>
 *   <script src="footer.js"></script>
 */

(function () {
  const container = document.getElementById('footer');
  if (!container) return;

  // ─── AUTO-DETECT BASE PATH ───
  const scriptTag = document.querySelector('script[src*="footer.js"]');
  const basePath = scriptTag ? scriptTag.getAttribute('src').replace('footer.js', '') : '';

  const year = new Date().getFullYear();

  // ─── FOOTER LINKS (edit here to add/remove) ───
  const LINKS = [
    { label: 'Privacy', href: basePath + 'privacy.html' },
    { label: 'Terms', href: basePath + 'privacy.html' },
    { label: 'Contact', href: basePath + 'contact.html' },
  ];

  const SOCIAL = [
    { label: 'Instagram', href: 'https://instagram.com/sunnybinjola' },
    { label: 'X', href: 'https://x.com/sunnybinjola' },
    { label: 'YouTube', href: 'https://youtube.com/sunnybinjola' },
  ];

  const linkClass = 'text-stone-500 hover:text-emerald-400 transition-colors underline-offset-8 underline hover:translate-y-[-2px] duration-200';

  const footerLinks = [...LINKS, ...SOCIAL].map(link => {
    const ext = link.external || link.href.startsWith('http') ? ' target="_blank" rel="noopener"' : '';
    return `<a class="${linkClass}" href="${link.href}"${ext}>${link.label}</a>`;
  }).join('\n        ');

  container.innerHTML = `
<footer class="bg-[#f1f1ec] w-full py-16 px-10">
  <div class="flex flex-col md:flex-row justify-between items-end w-full max-w-[1440px] mx-auto gap-8">
    <div class="w-full md:w-auto">
      <div class="flex items-center gap-3 mb-2">
        <img src="${basePath}logo.png" alt="Sunny Binjola" class="h-12">
      </div>
      <div class="font-['Manrope'] text-xs tracking-wide text-stone-500 italic mb-3">Live from your depth.</div>
      <div class="font-['Manrope'] text-sm tracking-wide uppercase text-stone-500">&copy; ${year} Sunny Binjola. All rights reserved.</div>
      <div class="font-['Manrope'] text-xs tracking-wide text-stone-400 mt-2">Built by <a href="https://elevateaisystem.com" target="_blank" rel="noopener" class="text-stone-400 hover:text-emerald-400 transition-colors underline underline-offset-4">Elevate AI</a></div>
    </div>
    <div class="flex flex-wrap gap-10 font-['Manrope'] text-sm tracking-wide uppercase">
      ${footerLinks}
    </div>
  </div>
</footer>`;
})();
