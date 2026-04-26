import { siteData } from "./data.js";

const page = document.body.dataset.page || "home";
const root = document.querySelector("#site-shell");

const pageMeta = {
  home: { eyebrow: "Official Platform", title: "WELCOME TO AXF", subtitle: "Where Power Becomes Legacy" },
  superstars: { eyebrow: "Official Roster", title: "AXF SUPERSTARS", subtitle: "Main-event talent. Elite presentation. No filler." },
  champions: { eyebrow: "Championship Prestige", title: "AXF CHAMPIONS", subtitle: "Titles that define the company's hierarchy." },
  events: { eyebrow: "Season Calendar", title: "PREMIUM LIVE EVENTS", subtitle: "The official AXF event roadmap." },
  news: { eyebrow: "Broadcast Desk", title: "AXF NEWS", subtitle: "Authority shifts, title movement, and official updates." },
  storylines: { eyebrow: "Current Television Arcs", title: "AXF STORYLINES", subtitle: "Active now. Canon-locked. No future spoilers." },
  legends: { eyebrow: "Legacy Archive", title: "HALL OF LEGENDS", subtitle: "Retired icons, living standards, defining moments." },
  media: { eyebrow: "Broadcast Hub", title: "AXF MEDIA", subtitle: "Titantrons, highlights, promo packages, and WAR ROOM." },
  gallery: { eyebrow: "Official Photo Archive", title: "AXF GALLERY", subtitle: "Superstar renders, top moments, and premium event stills." },
  about: { eyebrow: "Corporate Profile", title: "ABOUT AXF", subtitle: "A premium wrestling institution built for global scale." },
  contact: { eyebrow: "Official Channels", title: "CONTACT AXF", subtitle: "Business, sponsorship, media, and talent relations." },
};

function renderSiteShell() {
  root.innerHTML = `
    <div class="page-noise" aria-hidden="true"></div>
    <header class="site-header" id="siteHeader">
      <div class="topbar">
        <div class="topbar-copy">${siteData.brand.fullName}</div>
        <div class="topbar-copy">${siteData.brand.continuity}</div>
      </div>
      <div class="navbar">
        <a class="brand-lockup" href="./index.html" aria-label="AXF home">
          <img src="./assets/brand/axf-mark.svg" alt="AXF logo" />
        </a>
        <button class="menu-toggle" id="menuToggle" aria-expanded="false" aria-controls="navPanel">
          <span></span><span></span><span></span>
        </button>
        <nav class="nav-links" id="navPanel">
          ${siteData.nav
            .map(
              (item) => `
              <a class="nav-link ${item.key === page ? "is-active" : ""}" href="${item.href}">
                ${item.label}
              </a>`
            )
            .join("")}
        </nav>
      </div>
      <div class="ticker-wrap">
        <div class="ticker-label">Breaking</div>
        <div class="ticker-track">
          ${[...siteData.ticker, ...siteData.ticker]
            .map((item) => `<span class="ticker-item">${item}</span>`)
            .join("")}
        </div>
      </div>
    </header>
    <main id="pageRoot"></main>
    <footer class="site-footer">
      <div class="footer-grid">
        <div>
          <img class="footer-mark" src="./assets/brand/axf-mark.svg" alt="AXF logo" />
          <p class="footer-copy">
            ${siteData.brand.fullName} is presented as AXF's official global digital platform with
            canon locked through Season 3, Episode 9.
          </p>
        </div>
        <div>
          <p class="footer-title">Navigate</p>
          <div class="footer-links">
            ${siteData.nav
              .slice(0, 7)
              .map((item) => `<a href="${item.href}">${item.label}</a>`)
              .join("")}
          </div>
        </div>
        <div>
          <p class="footer-title">AXF Corporate</p>
          <div class="footer-links">
            <a href="./about.html">Mission & Vision</a>
            <a href="./events.html">Premium Live Events</a>
            <a href="./media.html">Media Rights & Content</a>
            <a href="./contact.html">Business Inquiries</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>AXF</span>
        <span>Power. Legacy. Destiny.</span>
      </div>
    </footer>
  `;
}

function renderPageHero() {
  const meta = pageMeta[page];
  if (page === "home") {
    return `
      <section class="hero hero-home reveal">
        <div class="hero-copy">
          <div class="eyebrow">${meta.eyebrow}</div>
          <h1>${meta.title}</h1>
          <p class="hero-subtitle">${meta.subtitle}</p>
          <p class="hero-description">
            AXF is built like a global sports-entertainment empire: championship prestige, event-scale
            storytelling, and a live television world driven by power, legacy, and control.
          </p>
          <div class="hero-actions">
            <a class="button button-gold" href="./storylines.html">Explore Storylines</a>
            <a class="button button-dark" href="./superstars.html">Meet the Roster</a>
          </div>
          <div class="hero-stat-row">
            ${siteData.heroStats
              .map(
                (stat) => `
                <div class="hero-stat">
                  <strong>${stat.value}</strong>
                  <span>${stat.label}</span>
                </div>`
              )
              .join("")}
          </div>
        </div>
        <div class="hero-stage">
          <div class="hero-stage-glow"></div>
          <div class="hero-stage-panel">
            <div class="hero-stage-kicker">Main Event Center</div>
            <h2>Danny is turning presence into power.</h2>
            <p>
              The God of Reckoning stands at the intersection of championship mythology and executive
              influence, and AXF is shifting around him in real time.
            </p>
          </div>
        </div>
      </section>
    `;
  }

  return `
    <section class="page-hero reveal">
      <div class="eyebrow">${meta.eyebrow}</div>
      <h1>${meta.title}</h1>
      <p class="hero-subtitle">${meta.subtitle}</p>
    </section>
  `;
}

function renderHome() {
  const spotlight = siteData.featuredSpotlights;
  return `
    ${renderPageHero()}
    <section class="section reveal">
      <div class="section-head">
        <div>
          <p class="section-kicker">Featured Spotlight</p>
          <h2>Live character gravity</h2>
        </div>
      </div>
      <div class="spotlight-shell">
        <div class="spotlight-display" id="spotlightDisplay">
          ${spotlight
            .map(
              (item, index) => `
              <article class="spotlight-card ${index === 0 ? "is-active" : ""}" data-spotlight-card="${item.id}">
                <div class="spotlight-card-copy">
                  <p class="spotlight-label">${item.title}</p>
                  <h3>${item.name}</h3>
                  <p class="spotlight-subtitle">${item.subtitle}</p>
                  <p class="spotlight-body">${item.blurb}</p>
                  <a class="button button-gold" href="${item.cta}">View Spotlight</a>
                </div>
                ${renderImageFrame(item, "spotlight")}
              </article>`
            )
            .join("")}
        </div>
        <div class="spotlight-tabs" id="spotlightTabs">
          ${spotlight
            .map(
              (item, index) => `
              <button class="spotlight-tab ${index === 0 ? "is-active" : ""}" data-spotlight-tab="${item.id}">
                <span>${item.name}</span>
                <small>${item.title}</small>
              </button>`
            )
            .join("")}
        </div>
      </div>
    </section>
    <section class="section reveal">
      <div class="three-up">
        <div class="premium-panel">
          <p class="section-kicker">Latest Rivalries</p>
          <div class="stack-list">
            ${siteData.rivalries
              .map(
                (item) => `
                <article class="line-card">
                  <div>
                    <h3>${item.headline}</h3>
                    <p>${item.summary}</p>
                  </div>
                  <span class="pill">${item.tone}</span>
                </article>`
              )
              .join("")}
          </div>
        </div>
        <div class="premium-panel">
          <p class="section-kicker">Championship Spotlight</p>
          <div class="champion-stack">
            ${siteData.champions
              .slice(0, 3)
              .map(
                (belt) => `
                <article class="champion-mini champion-mini-${belt.accent}">
                  <span>${belt.division}</span>
                  <h3>${belt.title}</h3>
                  <p>${belt.champion}</p>
                </article>`
              )
              .join("")}
          </div>
        </div>
        <div class="premium-panel">
          <p class="section-kicker">Featured Promo of the Week</p>
          <article class="promo-card">
            <span>${siteData.promoOfWeek.speaker}</span>
            <h3>${siteData.promoOfWeek.title}</h3>
            <p>${siteData.promoOfWeek.summary}</p>
          </article>
        </div>
      </div>
    </section>
    <section class="section reveal">
      <div class="two-up">
        <div class="premium-panel">
          <p class="section-kicker">Latest Results</p>
          <div class="results-list">
            ${siteData.results
              .map(
                (item) => `
                <article class="result-card">
                  <span>${item.event}</span>
                  <h3>${item.match}</h3>
                  <p>${item.note}</p>
                </article>`
              )
              .join("")}
          </div>
        </div>
        <div class="premium-panel featured-storyline">
          <p class="section-kicker">Main Event Spotlight</p>
          <h2>Danny's rise is changing the AXF map</h2>
          <p>
            He is not yet at total control, and that is what makes the current phase so dangerous.
            The company is still resisting him, which means every week carries the tension of a
            possible shift in ownership of the future.
          </p>
          <a class="button button-dark" href="./about.html">Read Corporate Profile</a>
        </div>
      </div>
    </section>
    <section class="section reveal">
      <div class="section-head">
        <div>
          <p class="section-kicker">Featured Storylines</p>
          <h2>Television arcs happening right now</h2>
        </div>
        <a class="button button-dark" href="./storylines.html">Full Storyline Hub</a>
      </div>
      <div class="card-grid">
        ${siteData.storylines
          .slice(0, 4)
          .map(
            (story) => `
            <article class="story-card">
              <span>${story.status}</span>
              <h3>${story.title}</h3>
              <p>${story.copy}</p>
            </article>`
          )
          .join("")}
      </div>
    </section>
    <section class="section reveal">
      <div class="section-head">
        <div>
          <p class="section-kicker">Premium Live Events</p>
          <h2>Season calendar preview</h2>
        </div>
        <a class="button button-gold" href="./events.html">View Full Calendar</a>
      </div>
      <div class="timeline-grid">
        ${siteData.events
          .slice(0, 5)
          .map(
            (event) => `
            <article class="event-card">
              <span>${event.window}</span>
              <h3>${event.name}</h3>
              <p>${event.prestige}</p>
            </article>`
          )
          .join("")}
      </div>
    </section>
    <section class="section reveal">
      <div class="section-head">
        <div>
          <p class="section-kicker">AXF Gallery</p>
          <h2>Top moments</h2>
        </div>
      </div>
      <div class="gallery-grid">
        ${siteData.gallery.map((item) => renderGalleryCard(item)).join("")}
      </div>
    </section>
  `;
}

function renderSuperstars() {
  const mainEvent = siteData.roster.filter((star) => star.tier === "Main Event");
  const upperMid = siteData.roster.filter((star) => star.tier === "Upper Midcard");
  return `
    ${renderPageHero()}
    <section class="section reveal">
      <div class="section-head">
        <div>
          <p class="section-kicker">Main Event</p>
          <h2>The names carrying AXF television</h2>
        </div>
      </div>
      <div class="profile-grid">
        ${mainEvent.map((star) => renderRosterCard(star)).join("")}
      </div>
    </section>
    <section class="section reveal">
      <div class="section-head">
        <div>
          <p class="section-kicker">Upper Midcard</p>
          <h2>Championship pressure and breakout danger</h2>
        </div>
      </div>
      <div class="profile-grid">
        ${upperMid.map((star) => renderRosterCard(star)).join("")}
      </div>
    </section>
  `;
}

function renderChampions() {
  return `
    ${renderPageHero()}
    <section class="section reveal">
      <div class="premium-note">
        Only verified titleholders from the supplied continuity brief are named directly. Divisions
        without a confirmed holder remain protected from speculation to preserve canon integrity.
      </div>
      <div class="champions-grid">
        ${siteData.champions
          .map(
            (belt) => `
            <article class="belt-card belt-card-${belt.accent}">
              <div class="belt-meta">
                <span>${belt.division}</span>
                <strong>${belt.status}</strong>
              </div>
              <h2>${belt.title}</h2>
              <div class="belt-champion">${belt.champion}</div>
              <div class="belt-stats">
                <div><span>Reign</span><strong>${belt.reign}</strong></div>
                <div><span>Defenses</span><strong>${belt.defenses}</strong></div>
              </div>
              <p>${belt.prestige}</p>
              <small>${belt.historyNote}</small>
            </article>`
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderEvents() {
  return `
    ${renderPageHero()}
    <section class="section reveal">
      <div class="timeline-grid full">
        ${siteData.events
          .map(
            (event, index) => `
            <article class="event-poster">
              <div class="event-index">${String(index + 1).padStart(2, "0")}</div>
              <div class="event-body">
                <span>${event.window}</span>
                <h2>${event.name}</h2>
                <p>${event.prestige}</p>
                <div class="event-meta">
                  <strong>${event.venue}</strong>
                  <div class="event-tags">
                    ${event.marquee.map((match) => `<span>${match}</span>`).join("")}
                  </div>
                </div>
              </div>
            </article>`
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderNews() {
  return `
    ${renderPageHero()}
    <section class="section reveal">
      <div class="news-grid">
        ${siteData.news
          .map(
            (item, index) => `
            <article class="news-card ${index === 0 ? "news-card-featured" : ""}">
              <span>${item.category}</span>
              <h2>${item.title}</h2>
              <p>${item.summary}</p>
              <strong>${item.stamp}</strong>
            </article>`
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderStorylines() {
  return `
    ${renderPageHero()}
    <section class="section reveal">
      <div class="storyline-stack">
        ${siteData.storylines
          .map(
            (story) => `
            <article class="storyline-feature" id="${story.id}">
              <div class="storyline-head">
                <span>${story.status}</span>
                <h2>${story.title}</h2>
                <strong>${story.focus}</strong>
              </div>
              <p>${story.copy}</p>
              <div class="storyline-beats">
                ${story.beats.map((beat) => `<div class="storyline-beat">${beat}</div>`).join("")}
              </div>
            </article>`
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderLegends() {
  return `
    ${renderPageHero()}
    <section class="section reveal">
      <div class="legends-grid">
        ${siteData.legends
          .map(
            (legend) => `
            <article class="legend-card">
              <span>${legend.role}</span>
              <h2>${legend.name}</h2>
              <p>${legend.legacy}</p>
              <strong>${legend.moment}</strong>
            </article>`
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderMedia() {
  return `
    ${renderPageHero()}
    <section class="section reveal">
      <div class="three-up">
        <div class="premium-panel">
          <p class="section-kicker">Titantron Videos</p>
          <div class="stack-list">
            ${siteData.media.titantron.map((item) => `<div class="line-card simple"><h3>${item}</h3></div>`).join("")}
          </div>
        </div>
        <div class="premium-panel">
          <p class="section-kicker">Promo Packages</p>
          <div class="stack-list">
            ${siteData.media.promos.map((item) => `<div class="line-card simple"><h3>${item}</h3></div>`).join("")}
          </div>
        </div>
        <div class="premium-panel">
          <p class="section-kicker">Highlight Reels</p>
          <div class="stack-list">
            ${siteData.media.highlights.map((item) => `<div class="line-card simple"><h3>${item}</h3></div>`).join("")}
          </div>
        </div>
      </div>
    </section>
    <section class="section reveal">
      <div class="podcast-panel">
        <div>
          <p class="section-kicker">AXF Podcast</p>
          <h2>${siteData.media.podcast.title}</h2>
          <p>${siteData.media.podcast.summary}</p>
        </div>
        <a class="button button-gold" href="./news.html">View Media Coverage</a>
      </div>
    </section>
  `;
}

function renderGallery() {
  return `
    ${renderPageHero()}
    <section class="section reveal">
      <div class="premium-note">
        This is the official AXF photo destination for the superstar renders and top-moment images you add later.
        Drop the files into <strong>assets/gallery</strong> and they will appear here in the premium gallery layout.
      </div>
      <div class="gallery-grid gallery-grid-full">
        ${siteData.gallery.map((item) => renderGalleryCard(item)).join("")}
      </div>
    </section>
  `;
}

function renderAbout() {
  return `
    ${renderPageHero()}
    <section class="section reveal">
      <div class="two-up about-grid">
        <article class="premium-panel">
          <p class="section-kicker">History</p>
          <h2>A premium wrestling institution</h2>
          <p>${siteData.about.history}</p>
        </article>
        <article class="premium-panel">
          <p class="section-kicker">Mission & Vision</p>
          <h2>Forged for global scale</h2>
          <p>${siteData.about.mission}</p>
          <p>${siteData.about.vision}</p>
        </article>
      </div>
    </section>
    <section class="section reveal">
      <div class="three-up">
        <article class="premium-panel">
          <p class="section-kicker">Leadership</p>
          <div class="stack-list">
            ${siteData.about.leadership.map((item) => `<div class="line-card simple"><h3>${item}</h3></div>`).join("")}
          </div>
        </article>
        <article class="premium-panel">
          <p class="section-kicker">Danny's Executive Role</p>
          <p>
            Danny stands as the defining competitive face of AXF while beginning a deeper climb into
            the company's internal power structure. His executive gravity is active, visible, and not yet complete.
          </p>
        </article>
        <article class="premium-panel">
          <p class="section-kicker">Valhalla Crown Studios</p>
          <p>${siteData.about.valhalla}</p>
        </article>
      </div>
    </section>
  `;
}

function renderContact() {
  return `
    ${renderPageHero()}
    <section class="section reveal">
      <div class="contact-shell">
        <div class="contact-list">
          ${siteData.contacts
            .map(
              (item) => `
              <article class="contact-card">
                <span>${item.department}</span>
                <h2>${item.email}</h2>
                <p>${item.focus}</p>
              </article>`
            )
            .join("")}
        </div>
        <div class="contact-form-card">
          <p class="section-kicker">Professional Requests</p>
          <h2>AXF corporate communications</h2>
          <form class="contact-form">
            <label><span>Name</span><input type="text" placeholder="Full name" /></label>
            <label><span>Organization</span><input type="text" placeholder="Company or outlet" /></label>
            <label><span>Email</span><input type="email" placeholder="name@company.com" /></label>
            <label><span>Inquiry Type</span><input type="text" placeholder="Media, partnership, sponsorship..." /></label>
            <label><span>Request</span><textarea rows="5" placeholder="Tell AXF what you need."></textarea></label>
            <button class="button button-gold" type="button">Submit Request</button>
          </form>
        </div>
      </div>
    </section>
  `;
}

function renderRosterCard(star) {
  return `
    <article class="profile-card reveal" id="${star.id}">
      ${renderImageFrame(star, "profile")}
      <div class="profile-copy">
        <div class="profile-topline">
          <span>${star.tier}</span>
          <strong>${star.alignment}</strong>
        </div>
        <h2>${star.name}</h2>
        <p class="profile-moniker">${star.moniker}</p>
        <p class="profile-spotlight">${star.spotlight}</p>
        <div class="detail-grid">
          <div><span>Hometown</span><strong>${star.hometown}</strong></div>
          <div><span>Championship History</span><strong>${star.championshipHistory}</strong></div>
          <div><span>Signature Move</span><strong>${star.signatureMove}</strong></div>
          <div><span>Finisher</span><strong>${star.finisher}</strong></div>
          <div><span>Rivalries</span><strong>${star.rivalries}</strong></div>
          <div><span>Career Achievements</span><strong>${star.achievements}</strong></div>
          <div><span>Storyline Status</span><strong>${star.storylineStatus}</strong></div>
          <div><span>Character Motivation</span><strong>${star.motivation}</strong></div>
        </div>
      </div>
    </article>
  `;
}

function renderImageFrame(item, kind) {
  return `
    <div class="image-frame image-frame-${kind}" data-fallback-frame>
      <img src="${item.image}" alt="${item.name} official render" loading="lazy" />
      <div class="image-fallback">
        <span>${item.initials || item.name.slice(0, 2).toUpperCase()}</span>
        <small>${item.title || item.moniker}</small>
      </div>
    </div>
  `;
}

function renderGalleryCard(item) {
  return `
    <article class="gallery-card" style="background-image:linear-gradient(180deg, rgba(8,8,10,0.08), rgba(8,8,10,0.94)), url('${item.image}')">
      <div class="gallery-copy">
        <span>AXF Gallery</span>
        <h3>${item.title}</h3>
        <p>${item.summary}</p>
      </div>
    </article>
  `;
}

function renderPage() {
  const pageRoot = document.querySelector("#pageRoot");
  const renderers = {
    home: renderHome,
    superstars: renderSuperstars,
    champions: renderChampions,
    events: renderEvents,
    news: renderNews,
    storylines: renderStorylines,
    legends: renderLegends,
    media: renderMedia,
    gallery: renderGallery,
    about: renderAbout,
    contact: renderContact,
  };

  pageRoot.innerHTML = renderers[page]();
}

function initHeader() {
  const toggle = document.querySelector("#menuToggle");
  const panel = document.querySelector("#navPanel");

  toggle?.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    panel.classList.toggle("is-open");
  });

  window.addEventListener("scroll", () => {
    document.querySelector("#siteHeader")?.classList.toggle("is-condensed", window.scrollY > 18);
  });
}

function initRevealObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    },
    { threshold: 0.16 }
  );
  document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
}

function initSpotlight() {
  const tabs = [...document.querySelectorAll("[data-spotlight-tab]")];
  const cards = [...document.querySelectorAll("[data-spotlight-card]")];
  if (!tabs.length || !cards.length) return;

  let activeIndex = 0;
  const setActive = (index) => {
    activeIndex = index;
    tabs.forEach((tab, idx) => tab.classList.toggle("is-active", idx === index));
    cards.forEach((card, idx) => card.classList.toggle("is-active", idx === index));
  };

  tabs.forEach((tab, index) => tab.addEventListener("click", () => setActive(index)));
  window.setInterval(() => setActive((activeIndex + 1) % cards.length), 5000);
}

function initImageFallbacks() {
  document.querySelectorAll("[data-fallback-frame] img").forEach((img) => {
    img.addEventListener("load", () => {
      img.parentElement?.classList.add("has-image");
    });
    img.addEventListener("error", () => {
      img.parentElement?.classList.add("is-fallback");
    });
    if (img.complete && img.naturalWidth > 0) {
      img.parentElement?.classList.add("has-image");
    }
  });
}

renderSiteShell();
renderPage();
initHeader();
initRevealObserver();
initSpotlight();
initImageFallbacks();
