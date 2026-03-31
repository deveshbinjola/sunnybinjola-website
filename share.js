/**
 * Shared Social Share Component — Sunny Binjola
 * -----------------------------------------------
 * Adds a share bar to blog posts and recovery pages.
 * Auto-detects the page title, URL, and description from meta tags.
 *
 * Usage: Add these two lines where you want the share bar:
 *   <div id="share-bar"></div>
 *   <script src="share.js"></script>
 *
 * The script auto-detects base path (works from /blog/ and /recovery/ subdirs).
 */

(function () {
  const container = document.getElementById('share-bar');
  if (!container) return;

  // Get page metadata
  const pageTitle = document.title || '';
  const pageUrl = document.querySelector('link[rel="canonical"]')?.href || window.location.href;
  const pageDesc = document.querySelector('meta[name="description"]')?.content || '';

  // Encode for URLs
  const t = encodeURIComponent(pageTitle);
  const u = encodeURIComponent(pageUrl);
  const d = encodeURIComponent(pageDesc);

  // Medium profile URL — update this once your account is live
  const mediumUrl = 'https://medium.com/@sunny.binjola';

  // Share links
  const shares = [
    {
      label: 'Twitter / X',
      href: `https://twitter.com/intent/tweet?text=${t}&url=${u}`,
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
      color: '#000'
    },
    {
      label: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
      color: '#0A66C2'
    },
    {
      label: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
      color: '#1877F2'
    }
  ];

  // Build HTML
  const shareButtons = shares.map(s => `
    <a href="${s.href}" target="_blank" rel="noopener noreferrer"
       title="Share on ${s.label}"
       class="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-outline-variant/40 text-on-surface-variant hover:bg-surface-container-low hover:border-primary hover:text-primary transition-all duration-200 text-sm font-medium">
      ${s.icon}
      <span class="hidden sm:inline">${s.label}</span>
    </a>
  `).join('');

  container.innerHTML = `
    <div class="border-t border-b border-outline-variant/30 py-6 my-10">
      <div class="flex flex-wrap items-center gap-3">
        <span class="text-sm font-semibold text-on-surface-variant mr-1">Share this:</span>
        ${shareButtons}
        <button onclick="navigator.clipboard.writeText('${pageUrl}').then(()=>{this.querySelector('span').textContent='Copied!';setTimeout(()=>{this.querySelector('span').textContent='Copy Link'},2000)})"
                title="Copy link"
                class="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-outline-variant/40 text-on-surface-variant hover:bg-surface-container-low hover:border-primary hover:text-primary transition-all duration-200 text-sm font-medium cursor-pointer">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
          <span class="hidden sm:inline">Copy Link</span>
        </button>
        <a href="${mediumUrl}" target="_blank" rel="noopener noreferrer"
           title="Follow on Medium"
           class="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary/5 border border-primary/20 text-primary hover:bg-primary/10 transition-all duration-200 text-sm font-semibold ml-auto">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
          Follow on Medium
        </a>
      </div>
    </div>
  `;
})();
