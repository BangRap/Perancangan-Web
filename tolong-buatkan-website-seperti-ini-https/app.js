const pageName = document.body.dataset.page || "home";

const state = {
  xml: null,
  data: {},
};

const select = (root, query) => root.querySelector(query);
const selectAll = (root, query) => Array.from(root.querySelectorAll(query));
const text = (root, query) => {
  const node = select(root, query);
  return node ? node.textContent.trim() : "";
};
const escapeHTML = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

function nodeArray(root, query, mapper) {
  return selectAll(root, query).map(mapper);
}

function brandData(xml) {
  const brand = select(xml, "brand");
  const assets = select(xml, "assets");
  return {
    name: text(brand, "name"),
    campus: text(brand, "campus"),
    tagline: text(brand, "tagline"),
    email: text(brand, "email"),
    copyright: text(brand, "copyright"),
    logo: text(assets, "logo"),
    logoLarge: text(assets, "logoLarge"),
    instagram: text(assets, "instagram"),
    youtube: text(assets, "youtube"),
    spotify: text(assets, "spotify"),
    tiktok: text(assets, "tiktok"),
  };
}

function navigationData(xml) {
  return nodeArray(xml, "navigation item", (item) => ({
    page: item.getAttribute("page"),
    label: item.getAttribute("label"),
    href: item.getAttribute("href"),
  }));
}

async function init() {
  try {
    const response = await fetch("data/site.xml", { cache: "no-store" });
    if (!response.ok) throw new Error("Data XML tidak bisa dimuat.");
    const raw = await response.text();
    const xml = new DOMParser().parseFromString(raw, "application/xml");
    if (select(xml, "parsererror")) throw new Error("Format XML belum valid.");

    state.xml = xml;
    state.data.brand = brandData(xml);
    state.data.nav = navigationData(xml);

    renderHeader();
    renderPage();
    renderFooter();
    setupGlobalInteractions();
    setupReveal();
  } catch (error) {
    document.getElementById("app").innerHTML = `
      <section class="section page-gap">
        <div class="container empty-state">
          <h1>Data belum terbaca</h1>
          <p>${escapeHTML(error.message)}</p>
        </div>
      </section>`;
  } finally {
    window.setTimeout(() => {
      document.getElementById("site-loader")?.classList.add("done");
    }, 650);
  }
}

function renderHeader() {
  const { brand, nav } = state.data;
  const links = nav
    .map(
      (item) => `
        <a class="nav-link ${item.page === pageName ? "active" : ""}" href="${escapeHTML(item.href)}">
          ${escapeHTML(item.label)}
        </a>`
    )
    .join("");

  document.getElementById("site-header").innerHTML = `
    <div class="site-header">
      <div class="nav-shell">
        <a class="brand-link" href="index.html" aria-label="Beranda KMK">
          <img src="${escapeHTML(brand.logo)}" alt="Logo KMK" />
          <span class="brand-copy">
            <strong>${escapeHTML(brand.name)}</strong>
            <span>${escapeHTML(brand.campus)}</span>
          </span>
        </a>
        <nav class="main-nav" aria-label="Navigasi utama">${links}</nav>
        <button class="menu-toggle" type="button" aria-label="Buka menu"><span></span></button>
      </div>
    </div>`;
}

function renderFooter() {
  const { brand, nav } = state.data;
  const mainLinks = nav
    .filter((item) => ["home", "profile", "events"].includes(item.page))
    .map((item) => `<a href="${escapeHTML(item.href)}">${escapeHTML(item.label === "Event" ? "Event & Galeri" : item.label)}</a>`)
    .join("");
  const resourceLinks = nav
    .filter((item) => ["songs", "schedule", "prayers"].includes(item.page))
    .map((item) => `<a href="${escapeHTML(item.href)}">${escapeHTML(item.label === "Doa Katolik" ? "Kumpulan Doa" : item.label)}</a>`)
    .join("");

  document.getElementById("site-footer").innerHTML = `
    <div class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <img src="${escapeHTML(brand.logo)}" alt="Logo KMK" />
            <div>
              <h3>${escapeHTML(brand.name)}</h3>
              <p>${escapeHTML(brand.campus)}</p>
              <p>${escapeHTML(brand.tagline)}</p>
            </div>
          </div>
          <div>
            <h4>Navigasi</h4>
            <div class="footer-links">${mainLinks}</div>
          </div>
          <div>
            <h4>Fitur dan Sumber Daya</h4>
            <div class="footer-links">${resourceLinks}<a href="index.html#liturgical-calendar">Kalender Liturgi</a></div>
          </div>
          <div>
            <h4>Hubungi Kami</h4>
            <p><strong>Email</strong><br>${escapeHTML(brand.email)}</p>
            <div class="socials">
              <a href="https://www.instagram.com/kmk_itera/" aria-label="Instagram"><img src="${escapeHTML(brand.instagram)}" alt="Instagram" /></a>
              <a href="https://www.youtube.com/" aria-label="YouTube"><img src="${escapeHTML(brand.youtube)}" alt="YouTube" /></a>
              <a href="https://open.spotify.com/" aria-label="Spotify"><img src="${escapeHTML(brand.spotify)}" alt="Spotify" /></a>
              <a href="https://www.tiktok.com/" aria-label="TikTok"><img src="${escapeHTML(brand.tiktok)}" alt="TikTok" /></a>
            </div>
          </div>
        </div>
        <div class="copyright">${escapeHTML(brand.copyright)}</div>
      </div>
    </div>`;
}

function renderPage() {
  const app = document.getElementById("app");
  const renderers = {
    home: renderHome,
    profile: renderProfile,
    events: renderEvents,
    songs: renderSongs,
    schedule: renderSchedule,
    prayers: renderPrayers,
  };
  app.innerHTML = (renderers[pageName] || renderHome)();
  afterPageRender();
}

function afterPageRender() {
  if (pageName === "home") {
    setupHeroSlider();
    setupFaqs();
    setupFloatingReflection();
  }
  if (pageName === "events") setupEventFilters();
  if (pageName === "songs") setupSongFilters();
  if (pageName === "prayers") setupPrayerFilters();
}

function renderHero(slides) {
  const first = slides[0];
  const images = slides
    .map(
      (slide, index) => `
        <img class="hero-slide ${index === 0 ? "active" : ""}" src="${escapeHTML(slide.image)}" alt="${escapeHTML(slide.title)}" />`
    )
    .join("");

  return `
    <section class="hero" data-hero>
      ${images}
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <span class="hero-kicker" data-hero-kicker>${escapeHTML(first.kicker)}</span>
        <h1 data-hero-title>${escapeHTML(first.title)}</h1>
        <div class="hero-line"></div>
        <p data-hero-text>${escapeHTML(first.text)}</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="profil.html">Tentang Kami</a>
          <a class="btn btn-soft" href="event.html">Kegiatan</a>
        </div>
      </div>
      <div class="slider-controls">
        <button class="slide-control" type="button" data-slide-prev aria-label="Slide sebelumnya">&lt;</button>
        <button class="slide-control" type="button" data-slide-next aria-label="Slide berikutnya">&gt;</button>
      </div>
    </section>`;
}

function renderPageHero(hero, options = {}) {
  const image = hero?.getAttribute("image") || "";
  const title = hero?.getAttribute("title") || "";
  const subtitle = hero?.getAttribute("subtitle") || "";
  if (options.gradient) {
    return `
      <section class="hero hero-gradient hero-centered">
        <div class="hero-content">
          <h1>${escapeHTML(title)}</h1>
          <div class="hero-line"></div>
          <p>${escapeHTML(subtitle)}</p>
        </div>
      </section>`;
  }
  return `
    <section class="hero hero-compact hero-centered">
      <img class="hero-bg" src="${escapeHTML(image)}" alt="${escapeHTML(title)}" />
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1>${escapeHTML(title)}</h1>
        <div class="hero-line"></div>
        <p>${escapeHTML(subtitle)}</p>
      </div>
    </section>`;
}

function homeSlides() {
  return nodeArray(state.xml, "home heroSlides slide", (slide) => ({
    title: slide.getAttribute("title"),
    kicker: slide.getAttribute("kicker"),
    text: slide.getAttribute("text"),
    image: slide.getAttribute("image"),
  }));
}

function renderHome() {
  const xml = state.xml;
  const brand = state.data.brand;
  const welcome = select(xml, "home welcome");
  const pillars = nodeArray(xml, "home pillars pillar", (pillar) => ({
    title: pillar.getAttribute("title"),
    quote: pillar.getAttribute("quote"),
    source: pillar.getAttribute("source"),
    icon: pillar.getAttribute("icon"),
  }));
  const articles = nodeArray(xml, "home articles article", (article) => ({
    date: article.getAttribute("date"),
    title: article.getAttribute("title"),
    image: article.getAttribute("image"),
    summary: text(article, "summary"),
  }));
  const liturgy = select(xml, "home liturgy");
  const readings = nodeArray(liturgy, "reading", (reading) => reading.textContent.trim());
  const join = select(xml, "home join");
  const testimonials = nodeArray(xml, "home testimonials person", (person) => ({
    name: person.getAttribute("name"),
    meta: person.getAttribute("meta"),
    image: person.getAttribute("image"),
    text: person.textContent.trim(),
  }));
  const gallery = nodeArray(xml, "home gallery photo", (photo) => ({
    title: photo.getAttribute("title"),
    image: photo.getAttribute("image"),
  }));
  const faqs = nodeArray(xml, "home faqs faq", (faq) => ({
    question: faq.getAttribute("question"),
    answer: faq.textContent.trim(),
  }));
  const eventPreview = eventData().slice(0, 3);

  return `
    ${renderHero(homeSlides())}
    <section class="section section-soft">
      <div class="container reveal">
        <img class="welcome-logo" src="${escapeHTML(brand.logoLarge)}" alt="Logo KMK St. Thomas Aquinas" />
        <div class="welcome-text">
          <span class="hero-kicker">${escapeHTML(text(welcome, "eyebrow"))}</span>
          <h2>${escapeHTML(text(welcome, "title"))}</h2>
          <p>${escapeHTML(text(welcome, "body"))}</p>
        </div>
        <div class="pillar-grid">
          ${pillars
            .map(
              (pillar) => `
                <article class="card pillar-card reveal">
                  <div class="icon-badge">${escapeHTML(iconLabel(pillar.icon))}</div>
                  <h3>${escapeHTML(pillar.title)}</h3>
                  <p>"${escapeHTML(pillar.quote)}"</p>
                  <strong>${escapeHTML(pillar.source)}</strong>
                </article>`
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section" id="liturgical-calendar">
      <div class="container two-column">
        <div>
          <div class="section-title">
            <span class="eyebrow">Berita dan Artikel</span>
            <h2>Renungan dan kabar komunitas</h2>
          </div>
          <div class="article-list">
            ${articles.map(renderArticleCard).join("")}
          </div>
        </div>
        <aside class="card liturgy-card reveal">
          <small>Info Liturgi</small>
          <h3>${escapeHTML(liturgy.getAttribute("date"))}</h3>
          <span class="color">${escapeHTML(liturgy.getAttribute("color"))}</span>
          <div class="celebration">${escapeHTML(liturgy.getAttribute("celebration"))}</div>
          <ul class="reading-list">${readings.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>
        </aside>
      </div>
    </section>

    <section class="section section-red">
      <div class="container join-content reveal">
        <div>
          <h2>${escapeHTML(join.getAttribute("title"))}</h2>
          <p>${escapeHTML(text(join, "body"))}</p>
        </div>
        <a class="btn btn-soft" href="${escapeHTML(join.getAttribute("href"))}">${escapeHTML(join.getAttribute("button"))}</a>
      </div>
    </section>

    <section class="section section-soft">
      <div class="container">
        <div class="section-title center reveal">
          <span class="eyebrow">Apa Kata Mereka?</span>
          <h2>Dengarkan pengalaman anggota KMK</h2>
          <p>Beberapa kesan dari teman-teman yang bertumbuh bersama KMK St. Thomas Aquinas ITERA.</p>
        </div>
        <div class="testimonials">${testimonials.map(renderTestimonial).join("")}</div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-title reveal">
          <span class="eyebrow">Galeri Kegiatan</span>
          <h2>Kenangan dari berbagai kegiatan</h2>
        </div>
        <div class="gallery-grid">${gallery.map(renderGalleryCard).join("")}</div>
      </div>
    </section>

    <section class="section section-soft">
      <div class="container">
        <div class="section-title reveal">
          <span class="eyebrow">Acara Mendatang</span>
          <h2>Kegiatan KMK</h2>
          <p>Jangan lewatkan kegiatan-kegiatan menarik dari KMK St. Thomas Aquinas ITERA.</p>
        </div>
        <div class="event-grid">${eventPreview.map(renderEventCard).join("")}</div>
      </div>
    </section>

    <section class="section">
      <div class="narrow">
        <div class="section-title center reveal">
          <span class="eyebrow">Pertanyaan yang Sering Diajukan</span>
          <h2>Seputar KMK St. Thomas Aquinas ITERA</h2>
        </div>
        <div class="faq-list">${faqs.map(renderFaq).join("")}</div>
      </div>
    </section>

    <div class="floating-reflection" data-floating-reflection>
      <button type="button" aria-label="Tutup renungan">x</button>
      Renungan Hari Ini
    </div>`;
}

function iconLabel(icon) {
  const labels = {
    briefcase: "P",
    heart: "I",
    users: "S",
  };
  return labels[icon] || "+";
}

function renderArticleCard(article) {
  return `
    <article class="card article-card reveal">
      <img src="${escapeHTML(article.image)}" alt="${escapeHTML(article.title)}" />
      <div class="article-body">
        <span class="date-pill">${escapeHTML(article.date)}</span>
        <h3>${escapeHTML(article.title)}</h3>
        <p>${escapeHTML(article.summary)}</p>
        <a class="btn btn-gold" href="#">Baca Selengkapnya -&gt;</a>
      </div>
    </article>`;
}

function renderTestimonial(person) {
  return `
    <article class="card testimonial-card reveal">
      <img src="${escapeHTML(person.image)}" alt="${escapeHTML(person.name)}" />
      <blockquote>"${escapeHTML(person.text)}"</blockquote>
      <h3>${escapeHTML(person.name)}</h3>
      <span>${escapeHTML(person.meta)}</span>
    </article>`;
}

function renderGalleryCard(photo) {
  return `
    <article class="card gallery-card reveal">
      <img src="${escapeHTML(photo.image)}" alt="${escapeHTML(photo.title)}" />
      <span>${escapeHTML(photo.title)}</span>
    </article>`;
}

function renderFaq(faq) {
  return `
    <article class="faq-item reveal">
      <button class="faq-question" type="button">${escapeHTML(faq.question)}<span>+</span></button>
      <div class="faq-answer"><p>${escapeHTML(faq.answer)}</p></div>
    </article>`;
}

function renderProfile() {
  const profile = select(state.xml, "profile");
  const hero = select(profile, "hero");
  const history = select(profile, "history");
  const paragraphs = nodeArray(history, "paragraph", (paragraph) => paragraph.textContent.trim());
  const milestones = nodeArray(history, "milestone", (milestone) => ({
    year: milestone.getAttribute("year"),
    text: milestone.getAttribute("text"),
  }));
  const vision = select(profile, "vision");
  const missions = nodeArray(vision, "mission", (mission) => ({
    number: mission.getAttribute("number"),
    title: mission.getAttribute("title"),
    text: mission.textContent.trim(),
  }));
  const roles = nodeArray(profile, "organization role", (role) => ({
    title: role.getAttribute("title"),
    text: role.getAttribute("text"),
  }));

  return `
    ${renderPageHero(hero)}
    <section class="section">
      <div class="container history-grid">
        <div class="history-copy reveal">
          <h2>${escapeHTML(history.getAttribute("title"))}</h2>
          ${paragraphs.map((item) => `<p>${escapeHTML(item)}</p>`).join("")}
          <div class="milestones">
            ${milestones
              .map(
                (item) => `
                  <div class="milestone">
                    <strong>${escapeHTML(item.year)}</strong>
                    <span>${escapeHTML(item.text)}</span>
                  </div>`
              )
              .join("")}
          </div>
        </div>
        <img class="history-image reveal" src="${escapeHTML(history.getAttribute("image"))}" alt="Sejarah KMK St. Thomas Aquinas" />
      </div>
    </section>
    <section class="section section-soft">
      <div class="container vision-panel">
        <div class="reveal">
          <h2>${escapeHTML(text(vision, "title"))}</h2>
          <div class="vision-quote">"${escapeHTML(text(vision, "quote"))}"</div>
        </div>
        <div class="mission-grid">
          ${missions
            .map(
              (mission) => `
                <article class="card mission-card reveal">
                  <strong>${escapeHTML(mission.number)}</strong>
                  <h3>${escapeHTML(mission.title)}</h3>
                  <p>${escapeHTML(mission.text)}</p>
                </article>`
            )
            .join("")}
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="section-title reveal">
          <span class="eyebrow">Struktur Organisasi</span>
          <h2>Kepengurusan dan pelayanan</h2>
          <p>Kepengurusan dijalankan oleh mahasiswa dengan semangat pelayanan, dedikasi, dan kerja bersama.</p>
        </div>
        <div class="role-grid">
          ${roles
            .map(
              (role) => `
                <article class="card role-card reveal">
                  <h3>${escapeHTML(role.title)}</h3>
                  <p>${escapeHTML(role.text)}</p>
                </article>`
            )
            .join("")}
        </div>
      </div>
    </section>`;
}

function eventData() {
  return nodeArray(state.xml, "events event", (event) => ({
    category: event.getAttribute("category"),
    date: event.getAttribute("date"),
    participants: event.getAttribute("participants"),
    title: event.getAttribute("title"),
    location: event.getAttribute("location"),
    image: event.getAttribute("image"),
    text: event.textContent.trim(),
  }));
}

function renderEvents() {
  const events = select(state.xml, "events");
  const hero = select(events, "hero");
  return `
    ${renderPageHero(hero)}
    <section class="section section-soft">
      <div class="container">
        <div class="filter-bar">
          <input class="search-box" id="event-search" type="search" placeholder="Cari kegiatan..." />
          <select class="select-box" id="event-sort" aria-label="Urutkan kegiatan">
            <option value="newest">Terbaru</option>
            <option value="oldest">Terlama</option>
            <option value="az">Judul (A-Z)</option>
            <option value="za">Judul (Z-A)</option>
            <option value="category">Kategori</option>
          </select>
        </div>
        <div class="event-grid" id="event-grid">${eventData().map(renderEventCard).join("")}</div>
      </div>
    </section>`;
}

function renderEventCard(event) {
  return `
    <article class="card event-card reveal">
      <div class="event-image">
        <img src="${escapeHTML(event.image)}" alt="${escapeHTML(event.title)}" />
        <span class="category-pill">${escapeHTML(event.category)}</span>
      </div>
      <div class="event-body">
        <div class="event-meta">
          <span class="meta-pill">${escapeHTML(event.date)}</span>
          <span class="meta-pill">${escapeHTML(event.participants)}</span>
        </div>
        <h3>${escapeHTML(event.title)}</h3>
        <p>${escapeHTML(event.text)}</p>
        <strong>${escapeHTML(event.location)}</strong>
      </div>
    </article>`;
}

function renderSongs() {
  const songs = select(state.xml, "songs");
  const hero = select(songs, "hero");
  const allSongs = songData();
  const categories = [...new Set(allSongs.map((song) => song.category))];
  return `
    ${renderPageHero(hero)}
    <section class="section section-soft">
      <div class="container">
        <div class="filter-bar">
          <input class="search-box" id="song-search" type="search" placeholder="Cari nomor, judul, atau kategori..." />
          <select class="select-box" id="song-category" aria-label="Kategori lagu">
            <option value="all">Semua Kategori</option>
            ${categories.map((category) => `<option value="${escapeHTML(category)}">${escapeHTML(category)}</option>`).join("")}
          </select>
        </div>
        <div class="section-title reveal">
          <span class="eyebrow">Semua Lagu Misa</span>
          <h2>Daftar lagu pilihan</h2>
        </div>
        <div class="song-grid" id="song-grid">${allSongs.map(renderSongCard).join("")}</div>
      </div>
    </section>`;
}

function songData() {
  return nodeArray(state.xml, "songs song", (song) => ({
    code: song.getAttribute("code"),
    category: song.getAttribute("category"),
    title: song.getAttribute("title"),
    favorite: song.getAttribute("favorite") === "true",
    text: song.textContent.trim(),
  }));
}

function renderSongCard(song) {
  return `
    <article class="card song-card reveal">
      <div class="song-top">
        <span class="song-code">${escapeHTML(song.code)}</span>
        <button class="favorite ${song.favorite ? "active" : ""}" type="button" aria-label="Tandai favorit">*</button>
      </div>
      <span class="meta-pill">${escapeHTML(song.category)}</span>
      <h3>${escapeHTML(song.title)}</h3>
      <p>${escapeHTML(song.text)}</p>
      <a class="btn btn-gold" href="#">Lihat Partitur</a>
    </article>`;
}

function renderSchedule() {
  const schedule = select(state.xml, "schedule");
  const hero = select(schedule, "hero");
  const churches = nodeArray(schedule, "church", (church) => ({
    name: church.getAttribute("name"),
    distance: church.getAttribute("distance"),
    address: church.getAttribute("address"),
    image: church.getAttribute("image"),
    map: church.getAttribute("map"),
    times: nodeArray(church, "time", (timeNode) => ({
      label: timeNode.getAttribute("label"),
      value: timeNode.getAttribute("value"),
    })),
  }));
  return `
    ${renderPageHero(hero, { gradient: true })}
    <section class="section section-soft">
      <div class="container">
        <div class="schedule-note reveal"><span><i class="status-dot"></i>Terakhir diperbarui ${escapeHTML(schedule.getAttribute("updated"))}</span></div>
        <div class="church-grid">
          ${churches
            .map(
              (church) => `
                <article class="card church-card reveal">
                  <figure><img src="${escapeHTML(church.image)}" alt="${escapeHTML(church.name)}" /></figure>
                  <div class="church-body">
                    <h3>${escapeHTML(church.name)}</h3>
                    <p>${escapeHTML(church.address)}</p>
                    <span class="meta-pill">${escapeHTML(church.distance)}</span>
                    <div class="times">
                      ${church.times
                        .map(
                          (timeRow) => `
                            <div class="time-row">
                              <span>${escapeHTML(timeRow.label)}</span>
                              <strong>${escapeHTML(timeRow.value)}</strong>
                            </div>`
                        )
                        .join("")}
                    </div>
                    <a class="btn btn-primary" href="${escapeHTML(church.map)}">Petunjuk Arah</a>
                  </div>
                </article>`
            )
            .join("")}
        </div>
      </div>
    </section>`;
}

function renderPrayers() {
  const prayers = select(state.xml, "prayers");
  const hero = select(prayers, "hero");
  return `
    ${renderPageHero(hero)}
    <section class="section section-soft">
      <div class="container">
        <div class="filter-bar single">
          <input class="search-box" id="prayer-search" type="search" placeholder="Cari judul atau isi doa..." />
        </div>
        <div class="prayer-grid" id="prayer-grid">${prayerData().map(renderPrayerCard).join("")}</div>
      </div>
    </section>`;
}

function prayerData() {
  return nodeArray(state.xml, "prayers prayer", (prayer) => ({
    title: prayer.getAttribute("title"),
    text: prayer.textContent.trim(),
  }));
}

function renderPrayerCard(prayer) {
  return `
    <details class="prayer-card reveal">
      <summary><span>D</span>${escapeHTML(prayer.title)}</summary>
      <pre>${escapeHTML(prayer.text)}</pre>
    </details>`;
}

function setupHeroSlider() {
  const slides = homeSlides();
  const slideEls = Array.from(document.querySelectorAll(".hero-slide"));
  const title = document.querySelector("[data-hero-title]");
  const kicker = document.querySelector("[data-hero-kicker]");
  const textNode = document.querySelector("[data-hero-text]");
  if (!slides.length || !slideEls.length) return;

  let index = 0;
  const show = (nextIndex) => {
    index = (nextIndex + slides.length) % slides.length;
    slideEls.forEach((slide, slideIndex) => slide.classList.toggle("active", slideIndex === index));
    const slide = slides[index];
    title.textContent = slide.title;
    kicker.textContent = slide.kicker;
    textNode.textContent = slide.text;
  };

  document.querySelector("[data-slide-prev]")?.addEventListener("click", () => show(index - 1));
  document.querySelector("[data-slide-next]")?.addEventListener("click", () => show(index + 1));
  window.setInterval(() => show(index + 1), 5200);
}

function setupFaqs() {
  document.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      item.classList.toggle("open");
      button.querySelector("span").textContent = item.classList.contains("open") ? "-" : "+";
    });
  });
}

function setupFloatingReflection() {
  document.querySelector("[data-floating-reflection] button")?.addEventListener("click", (event) => {
    event.currentTarget.closest("[data-floating-reflection]").remove();
  });
}

function setupEventFilters() {
  const search = document.getElementById("event-search");
  const sort = document.getElementById("event-sort");
  const grid = document.getElementById("event-grid");
  const baseEvents = eventData();

  const update = () => {
    const query = search.value.toLowerCase().trim();
    let items = baseEvents.filter((event) =>
      `${event.title} ${event.category} ${event.location} ${event.text}`.toLowerCase().includes(query)
    );
    const mode = sort.value;
    items = sortEvents(items, mode);
    grid.innerHTML = items.length ? items.map(renderEventCard).join("") : `<div class="empty-state">Kegiatan tidak ditemukan.</div>`;
    setupReveal();
  };

  search.addEventListener("input", update);
  sort.addEventListener("change", update);
}

function sortEvents(items, mode) {
  const list = [...items];
  const sorters = {
    newest: (a, b) => parseIndoDate(b.date) - parseIndoDate(a.date),
    oldest: (a, b) => parseIndoDate(a.date) - parseIndoDate(b.date),
    az: (a, b) => a.title.localeCompare(b.title),
    za: (a, b) => b.title.localeCompare(a.title),
    category: (a, b) => a.category.localeCompare(b.category),
  };
  return list.sort(sorters[mode] || sorters.newest);
}

function parseIndoDate(value) {
  const months = {
    januari: 0,
    februari: 1,
    maret: 2,
    april: 3,
    mei: 4,
    jun: 5,
    juni: 5,
    jul: 6,
    juli: 6,
    agustus: 7,
    sep: 8,
    september: 8,
    okt: 9,
    oktober: 9,
    nov: 10,
    november: 10,
    des: 11,
    desember: 11,
  };
  const parts = String(value).toLowerCase().split(" ").filter(Boolean);
  const day = Number(parts[0]) || 1;
  const month = months[parts[1]] ?? 0;
  const year = Number(parts[2]) || 2000;
  return new Date(year, month, day).getTime();
}

function setupSongFilters() {
  const search = document.getElementById("song-search");
  const category = document.getElementById("song-category");
  const grid = document.getElementById("song-grid");
  const baseSongs = songData();

  const update = () => {
    const query = search.value.toLowerCase().trim();
    const activeCategory = category.value;
    const items = baseSongs.filter((song) => {
      const matchesCategory = activeCategory === "all" || song.category === activeCategory;
      const matchesSearch = `${song.code} ${song.title} ${song.category} ${song.text}`.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
    grid.innerHTML = items.length ? items.map(renderSongCard).join("") : `<div class="empty-state">Lagu tidak ditemukan.</div>`;
    setupReveal();
    setupFavoriteButtons();
  };

  search.addEventListener("input", update);
  category.addEventListener("change", update);
  setupFavoriteButtons();
}

function setupFavoriteButtons() {
  document.querySelectorAll(".favorite").forEach((button) => {
    button.addEventListener("click", () => button.classList.toggle("active"));
  });
}

function setupPrayerFilters() {
  const search = document.getElementById("prayer-search");
  const grid = document.getElementById("prayer-grid");
  const basePrayers = prayerData();

  const update = () => {
    const query = search.value.toLowerCase().trim();
    const items = basePrayers.filter((prayer) => `${prayer.title} ${prayer.text}`.toLowerCase().includes(query));
    grid.innerHTML = items.length ? items.map(renderPrayerCard).join("") : `<div class="empty-state">Doa tidak ditemukan.</div>`;
    setupReveal();
  };

  search.addEventListener("input", update);
}

function setupGlobalInteractions() {
  const menu = document.querySelector(".menu-toggle");
  menu?.addEventListener("click", () => document.body.classList.toggle("menu-open"));
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => document.body.classList.remove("menu-open"));
  });

  const topButton = document.getElementById("to-top");
  topButton?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  window.addEventListener("scroll", () => {
    topButton?.classList.toggle("show", window.scrollY > 480);
  });
}

function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  items.forEach((item) => observer.observe(item));
}

document.addEventListener("DOMContentLoaded", init);
