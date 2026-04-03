/**
 * Shared SEO & Structured Data — Sunny Binjola
 * ──────────────────────────────────────────────
 * Adds JSON-LD structured data for search engines, AI models, and
 * generative search (Google SGE, Bing Chat, Perplexity, ChatGPT).
 *
 * Usage: Add at the end of <body>:
 *   <script src="seo.js"></script>
 *
 * This script auto-detects the current page and injects the right schema.
 */

(function () {
  const path = window.location.pathname;
  const currentFile = path.split('/').pop() || 'index.html';
  const baseUrl = 'https://sunnybinjola.com';

  // ─── PERSON SCHEMA (appears on every page) ───
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sunny Binjola",
    "url": baseUrl,
    "image": baseUrl + "/logo.png",
    "jobTitle": "Men's Transformational Coach",
    "description": "Sunny Binjola is a men's coach specializing in heartbreak recovery, somatic healing, embodiment, and purpose discovery. He leads men to live their deepest life in love and leadership.",
    "knowsAbout": [
      "Men's Coaching",
      "Heartbreak Recovery",
      "Somatic Healing",
      "Breathwork",
      "Embodiment Practices",
      "Purpose Discovery",
      "Men's Group Facilitation",
      "Mirror Work",
      "Nervous System Regulation",
      "Identity Rebuilding"
    ],
    "sameAs": [
      "https://instagram.com/sunnybinjola",
      "https://x.com/sunnybinjola",
      "https://youtube.com/sunnybinjola"
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "7-Day Heartbreak Recovery Series",
        "price": "0",
        "priceCurrency": "USD",
        "description": "A free 7-day email series to help men stop spiraling and start rebuilding after a breakup.",
        "url": baseUrl + "/heal-your-heartbreak.html#free-series"
      },
      {
        "@type": "Offer",
        "name": "Heal Your Heartbreak — 60-Day Program",
        "price": "497",
        "priceCurrency": "USD",
        "description": "The complete rebuilding program for men. Go from heartbreak to self-sovereignty in 60 days.",
        "url": baseUrl + "/heal-your-heartbreak.html"
      },
      {
        "@type": "Offer",
        "name": "Find Your Purpose — 12-Week Men's Group",
        "price": "999",
        "priceCurrency": "USD",
        "description": "A 12-week men's group container for 6 men. Uncover your authentic purpose through brotherhood, accountability, and shared practice.",
        "url": baseUrl + "/find-your-purpose.html"
      },
      {
        "@type": "Offer",
        "name": "1:1 Private Coaching",
        "description": "Fully personalized, ongoing coaching for men ready for the deepest level of transformation.",
        "url": baseUrl + "/one-on-one.html"
      }
    ]
  };

  // ─── WEBSITE SCHEMA ───
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Sunny Binjola — Men's Coaching",
    "url": baseUrl,
    "description": "Men's coaching for heartbreak recovery, somatic healing, and purpose discovery. Heal your heartbreak. Find your purpose. Live fully awake.",
    "publisher": { "@type": "Person", "name": "Sunny Binjola" }
  };

  // ─── PROFESSIONAL SERVICE SCHEMA ───
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Sunny Binjola — Men's Transformational Coaching",
    "url": baseUrl,
    "description": "Transformational coaching for men — heartbreak recovery, somatic healing, embodiment practices, breathwork, and purpose discovery.",
    "provider": { "@type": "Person", "name": "Sunny Binjola" },
    "areaServed": "Worldwide",
    "serviceType": "Life Coaching",
    "priceRange": "Free — $999+"
  };

  // ─── REVIEW / TESTIMONIAL SCHEMA ───
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Sunny Binjola Coaching",
    "url": baseUrl,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "bestRating": "5",
      "ratingCount": "3",
      "reviewCount": "3"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Ryan Tascar" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "Sunny's work has had a positive impact on the way that I'm able to move in the world. He brings a presence and a strength that holds space for healing to unfold. I highly recommend working with him and you won't regret it."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Andrew J." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "I was skeptical about coaching — I'm a logic guy. But Sunny meets you where you are. The somatic work rewired something in my nervous system that years of talk therapy never touched. I finally feel like myself again."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Sam V." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "After my breakup I was in a dark place. The 7-Day Reset gave me structure when everything felt chaotic. By day 5 I realized I wasn't just healing — I was becoming someone I actually respected."
      }
    ]
  };

  // ─── FAQ SCHEMA (only on FAQ page) ───
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is men's coaching?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Men's coaching is a guided process that helps men navigate challenges like heartbreak, identity crises, and purpose discovery through somatic practices, embodiment work, and structured accountability. It goes beyond talk therapy by engaging the body's nervous system."
        }
      },
      {
        "@type": "Question",
        "name": "How is coaching different from therapy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Therapy often focuses on diagnosing and treating mental health conditions by exploring the past. Coaching is forward-focused — it's about building the man you want to become through somatic practices, breathwork, accountability, and embodied action."
        }
      },
      {
        "@type": "Question",
        "name": "What is somatic coaching?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Somatic coaching works with the body's nervous system rather than just the mind. It uses breathwork, movement, body awareness, and grounding techniques to process emotions stored in the body — especially grief, anger, and anxiety that talk-based approaches often miss."
        }
      },
      {
        "@type": "Question",
        "name": "How much does coaching with Sunny Binjola cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sunny offers a free 7-Day Heartbreak Recovery email series, a $497 60-day Heal Your Heartbreak program, a $999 12-week men's group container (6 men), and VIP 1:1 private coaching by application. A free discovery call is available to find the right fit."
        }
      },
      {
        "@type": "Question",
        "name": "What is the 12-week men's group container?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The 12-week men's group is an intimate container of 6 men who meet weekly with Sunny. It focuses on purpose discovery through brotherhood, shared somatic practice, accountability, and deep work. The price is $999 for the full 12 weeks."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to be going through a breakup to work with Sunny?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. While heartbreak recovery is a core specialty, Sunny works with men on purpose discovery, embodiment, leadership, and personal transformation. Many clients come seeking clarity, structure, and a deeper connection to themselves."
        }
      },
      {
        "@type": "Question",
        "name": "Is coaching done online or in person?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Coaching sessions are conducted online via video call, making them accessible worldwide. The 12-week men's group and 1:1 sessions are all held virtually."
        }
      },
      {
        "@type": "Question",
        "name": "What is breathwork and how does it help?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Breathwork is a practice of intentional breathing patterns that regulate the nervous system, release stored tension and emotions, and create a sense of groundedness. It's a core tool in Sunny's coaching for processing grief, reducing anxiety, and building embodied presence."
        }
      }
    ]
  };

  // ─── PAGE-SPECIFIC BREADCRUMB SCHEMA ───
  const pageNames = {
    'index.html': 'Home',
    'heal-your-heartbreak.html': 'Heal Your Heartbreak',
    'about.html': 'About',
    'blog.html': 'Blog',
    'work-with-me.html': 'Work With Me',
    'one-on-one.html': '1:1 Coaching',
    'find-your-purpose.html': 'Find Your Purpose',
    'embody-live.html': 'Embody Live',
    'testimonials.html': 'Testimonials',
    'resources.html': 'Free Resources',
    'faq.html': 'FAQ'
  };

  const pageName = pageNames[currentFile] || document.title;
  const isHome = currentFile === 'index.html' || currentFile === '' || currentFile === '/';

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl + "/" }
    ]
  };

  if (!isHome) {
    breadcrumbSchema.itemListElement.push({
      "@type": "ListItem",
      "position": 2,
      "name": pageName,
      "item": baseUrl + "/" + currentFile
    });
  }

  // ─── ORGANIZATION SCHEMA ───
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sunny Binjola Coaching",
    "url": baseUrl,
    "logo": baseUrl + "/logo.png",
    "description": "Men's transformational coaching — heartbreak recovery, somatic healing, and purpose discovery. Helping men heal from the body up.",
    "founder": {
      "@type": "Person",
      "name": "Sunny Binjola"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": "https://cal.com/sunny-binjola/discovery-call",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://instagram.com/sunnybinjola",
      "https://x.com/sunnybinjola",
      "https://youtube.com/sunnybinjola"
    ],
    "areaServed": "Worldwide",
    "serviceType": ["Heartbreak Recovery Coaching", "Somatic Healing", "Men's Purpose Discovery", "Men's Group Facilitation"]
  };

  // ─── INJECT SCHEMAS ───
  function addSchema(data) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  // Always add these
  addSchema(personSchema);
  addSchema(websiteSchema);
  addSchema(serviceSchema);
  addSchema(organizationSchema);
  addSchema(breadcrumbSchema);

  // Add review schema on home, testimonials, and about pages
  if (['index.html', 'testimonials.html', 'about.html', ''].includes(currentFile)) {
    addSchema(reviewSchema);
  }

  // FAQ schema is now injected as inline JSON-LD on individual pages (faq.html, heal-your-heartbreak.html, about.html, work-with-me.html)
  // Only inject via seo.js on faq.html (others have page-specific FAQs inline)
  if (currentFile === 'faq.html') {
    addSchema(faqSchema);
  }

  // ─── GEO / AIO OPTIMIZATION ───
  // Add semantic meta tags that AI models and generative engines use
  const geoMeta = [
    { name: 'author', content: 'Sunny Binjola' },
    { name: 'topic', content: 'Men\'s Coaching, Heartbreak Recovery, Somatic Healing, Purpose Discovery' },
    { name: 'subject', content: 'Men\'s transformational coaching with Sunny Binjola' },
    { name: 'classification', content: 'Health & Wellness / Life Coaching / Men\'s Personal Development' },
    { name: 'pagetype', content: isHome ? 'homepage' : pageName.toLowerCase().replace(/\s+/g, '-') },
    { name: 'coverage', content: 'Worldwide' },
    { name: 'target', content: 'Men seeking heartbreak recovery, purpose, and personal transformation' },
    { name: 'HandheldFriendly', content: 'True' },
    { name: 'MobileOptimized', content: '320' },
  ];

  geoMeta.forEach(meta => {
    if (!document.querySelector(`meta[name="${meta.name}"]`)) {
      const el = document.createElement('meta');
      el.name = meta.name;
      el.content = meta.content;
      document.head.appendChild(el);
    }
  });
})();
