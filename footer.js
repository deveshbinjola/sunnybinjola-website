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

  const siteLinksHTML = `
<div class="site-links-footer">
  <style>
    .site-links-footer {
      background: #eaece8;
      border-top: 1px solid #d5d9d2;
      padding: 32px 40px 24px;
    }
    .sfl-heading {
      font-size: 9.5px;
      font-weight: 700;
      letter-spacing: .13em;
      text-transform: uppercase;
      color: #8a9a8a;
      margin-bottom: 18px;
      font-family: 'Manrope', sans-serif;
    }
    .sfl-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(155px, 1fr));
      gap: 18px 20px;
    }
    .sfl-cat {
      font-size: 9px;
      font-weight: 700;
      letter-spacing: .09em;
      text-transform: uppercase;
      color: #006a28;
      margin-bottom: 5px;
      font-family: 'Manrope', sans-serif;
    }
    .sfl-col ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .sfl-col ul li {
      margin-bottom: 2px;
    }
    .sfl-col ul li a {
      font-size: 10.5px;
      color: #6b7a6b;
      text-decoration: none;
      line-height: 1.4;
      font-family: 'Manrope', sans-serif;
      transition: color .15s;
    }
    .sfl-col ul li a:hover { color: #006a28; }
  </style>
  <p class="sfl-heading">Discover All Resources</p>
  <div class="sfl-grid">
    <div class="sfl-col"><div class="sfl-cat">Services & Programs</div><ul><li><a href="https://sunnybinjola.com/get-your-ex-back.html">Get Your Ex Back</a></li><li><a href="https://sunnybinjola.com/heal-your-heartbreak.html">Heal Your Heartbreak</a></li><li><a href="https://sunnybinjola.com/work-with-me.html">Work With Me</a></li><li><a href="https://sunnybinjola.com/one-on-one.html">One-on-One Coaching</a></li><li><a href="https://sunnybinjola.com/embody-live.html">Embody Live</a></li><li><a href="https://sunnybinjola.com/7-day-reset">7-Day Reset Program</a></li></ul></div><div class="sfl-col"><div class="sfl-cat">Learning Resources</div><ul><li><a href="https://sunnybinjola.com/blog.html">Blog Home</a></li><li><a href="https://sunnybinjola.com/resources.html">Resources</a></li><li><a href="https://sunnybinjola.com/testimonials.html">Testimonials</a></li><li><a href="https://sunnybinjola.com/faq.html">FAQ</a></li><li><a href="https://sunnybinjola.com/find-your-purpose.html">Find Your Purpose</a></li></ul></div><div class="sfl-col"><div class="sfl-cat">Healing Guides</div><ul><li><a href="https://sunnybinjola.com/blog/complete-guide-heal-after-breakup.html">Complete Healing Guide</a></li><li><a href="https://sunnybinjola.com/blog/she-left-now-what-first-7-days.html">First 7 Days After Breakup</a></li><li><a href="https://sunnybinjola.com/blog/daily-routine-after-breakup.html">Daily Routine for Recovery</a></li><li><a href="https://sunnybinjola.com/blog/how-long-to-get-over-breakup.html">How Long to Heal</a></li><li><a href="https://sunnybinjola.com/blog/five-stages-heartbreak-men.html">Five Stages of Heartbreak</a></li></ul></div><div class="sfl-col"><div class="sfl-cat">Emotional & Mental Health</div><ul><li><a href="https://sunnybinjola.com/blog/why-men-cant-cry.html">Why Men Can't Cry</a></li><li><a href="https://sunnybinjola.com/blog/nervous-system-hijacked-heartbreak.html">Nervous System Healing</a></li><li><a href="https://sunnybinjola.com/blog/somatic-exercises-heal-heartbreak.html">Somatic Exercises</a></li><li><a href="https://sunnybinjola.com/blog/emotional-numbness.html">Overcome Emotional Numbness</a></li><li><a href="https://sunnybinjola.com/blog/when-therapy-isnt-enough.html">When Therapy Isn't Enough</a></li></ul></div><div class="sfl-col"><div class="sfl-cat">Situation-Specific Guides</div><ul><li><a href="https://sunnybinjola.com/recovery/cheated-on.html">Recovering from Infidelity</a></li><li><a href="https://sunnybinjola.com/recovery/betrayal-trauma.html">Betrayal Trauma</a></li><li><a href="https://sunnybinjola.com/recovery/long-distance-breakup.html">Long-Distance Breakup</a></li><li><a href="https://sunnybinjola.com/recovery/blindsided.html">Blindsided by Breakup</a></li><li><a href="https://sunnybinjola.com/recovery/engaged-then-broken-up.html">Engagement Ended</a></li><li><a href="https://sunnybinjola.com/recovery/widowers.html">Grief After Loss</a></li></ul></div><div class="sfl-col"><div class="sfl-cat">Recovery by Age & Life Stage</div><ul><li><a href="https://sunnybinjola.com/recovery/first-heartbreak.html">First Heartbreak</a></li><li><a href="https://sunnybinjola.com/recovery/men-in-their-20s.html">Men in Their 20s</a></li><li><a href="https://sunnybinjola.com/recovery/men-over-40.html">Men Over 40</a></li><li><a href="https://sunnybinjola.com/recovery/men-over-50.html">Men Over 50</a></li><li><a href="https://sunnybinjola.com/recovery/divorced-men.html">Divorced Men</a></li><li><a href="https://sunnybinjola.com/recovery/men-with-kids.html">Men With Kids</a></li></ul></div><div class="sfl-col"><div class="sfl-cat">Relationship Patterns & Recovery</div><ul><li><a href="https://sunnybinjola.com/recovery/anxious-attachment.html">Anxious Attachment</a></li><li><a href="https://sunnybinjola.com/recovery/avoidant-men.html">Avoidant Attachment</a></li><li><a href="https://sunnybinjola.com/recovery/long-term-relationship.html">Long-Term Relationship Breakup</a></li><li><a href="https://sunnybinjola.com/recovery/co-parenting.html">Co-Parenting After Breakup</a></li><li><a href="https://sunnybinjola.com/blog/what-women-actually-want.html">Understanding Women</a></li><li><a href="https://sunnybinjola.com/recovery/newly-single-after-years.html">Newly Single After Years</a></li></ul></div><div class="sfl-col"><div class="sfl-cat">Recovery by Personality Type</div><ul><li><a href="https://sunnybinjola.com/recovery/introverted-men.html">Introverted Men</a></li><li><a href="https://sunnybinjola.com/recovery/high-achiever-men.html">High-Achiever Men</a></li><li><a href="https://sunnybinjola.com/recovery/career-focused-men.html">Career-Focused Men</a></li><li><a href="https://sunnybinjola.com/recovery/angry-men.html">Angry Men</a></li><li><a href="https://sunnybinjola.com/recovery/faith-based-men.html">Faith-Based Men</a></li><li><a href="https://sunnybinjola.com/recovery/immigrant-men.html">Immigrant Men</a></li></ul></div><div class="sfl-col"><div class="sfl-cat">Support & Community</div><ul><li><a href="https://sunnybinjola.com/blog/support-groups-men-heartbreak.html">Support Groups</a></li><li><a href="https://sunnybinjola.com/blog/best-heartbreak-recovery-resources-men.html">Recovery Resources</a></li><li><a href="https://sunnybinjola.com/blog/best-heartbreak-podcasts-men.html">Recommended Podcasts</a></li><li><a href="https://sunnybinjola.com/blog/poems-that-heal-heartbreak.html">Healing Poetry</a></li></ul></div><div class="sfl-col"><div class="sfl-cat">Wellness & Growth</div><ul><li><a href="https://sunnybinjola.com/recovery/men-in-recovery.html">Men in Recovery</a></li><li><a href="https://sunnybinjola.com/blog/why-breakups-harder-for-men.html">Why Breakups Are Harder</a></li><li><a href="https://sunnybinjola.com/blog/you-did-everything-right-still-empty.html">When You Did Everything Right</a></li><li><a href="https://sunnybinjola.com/blog/intelligence-is-cheap-now.html">Growth & Intelligence</a></li></ul></div><div class="sfl-col"><div class="sfl-cat">About & Connect</div><ul><li><a href="https://sunnybinjola.com/about.html">About Sunny Binjola</a></li><li><a href="https://sunnybinjola.com/contact.html">Get in Touch</a></li><li><a href="https://sunnybinjola.com/privacy.html">Privacy Policy</a></li></ul></div>
  </div>
</div>`;
  container.insertAdjacentHTML('beforebegin', siteLinksHTML);

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
