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

  const year = new Date().getFullYear();

  // ─── FOOTER LINKS (edit here to add/remove) ───
  const LINKS = [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Contact', href: 'https://cal.com/sunny-binjola/discovery-call', external: true },
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
      <div class="text-lg font-serif italic text-emerald-900 mb-2">Sunny Binjola</div>
      <div class="font-['Manrope'] text-xs tracking-wide text-stone-500 italic mb-3">Live from your depth.</div>
      <div class="font-['Manrope'] text-sm tracking-wide uppercase text-stone-500">&copy; ${year} Sunny Binjola. All rights reserved.</div>
    </div>
    <div class="flex flex-wrap gap-10 font-['Manrope'] text-sm tracking-wide uppercase">
      ${footerLinks}
    </div>
  </div>
</footer>`;
})();
