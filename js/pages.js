/* Page renderers — each HTML page sets <body data-page="..."> and this fills <main>. */
(function () {
  const P = window.PORTFOLIO;
  const me = P.profile;
  const { esc, t, isTodo, plain, img, ballSVG, logo, portrait } = window.LANES;
  const INL = window.INLINE || { logos: {} };
  const main = document.getElementById("main");
  const page = document.body.dataset.page;

  // Section ids stay the same; only the visible names change per kind of project.
  const FRAME_KEYS = ["problem", "research", "define", "ideate", "iterate", "execution", "outcome"];
  const FRAME_SETS = {
    design: ["Problem", "Research", "Design Goals", "Wireframes", "Design System", "Final Design", "Reflection"]
  };
  // Research projects use their own seven frames and their own content fields (layout: "research")
  const RESEARCH_FRAMES = [
    { key: "problem", label: "Problem" },
    { key: "objectives", label: "Objectives" },
    { key: "methods", label: "Methods" },
    { key: "findings", label: "Findings" },
    { key: "insights", label: "Insights" },
    { key: "recommendations", label: "Recommendations" },
    { key: "impact", label: "Impact" }
  ];
  const framesFor = (p) => FRAME_KEYS.map((key, i) => ({ key, label: FRAME_SETS[p.frames || "design"][i] }));

  // A frame can hold one image or a list of images
  const imgs = (x, cls = "") => (!x ? "" : Array.isArray(x) ? x.map((i) => img(i, cls)).join("") : img(x, cls));

  // relative luminance, used to pick readable text on a color swatch
  const lum = (hex) => {
    const c = hex.replace("#", "").match(/../g).map((h) => parseInt(h, 16) / 255).map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  };

  const brandBlock = (palette, typefaces) =>
    `<ul class="swatches" aria-label="Brand colors">${(palette || [])
      .map((c) => `<li style="--sw:${esc(c.hex)};--on:${(lum(c.hex) + 0.05) / 0.054 > 1.05 / (lum(c.hex) + 0.05) ? "#0d0a14" : "#fff"}"><b>${esc(c.name)}</b><span>${esc(c.hex)}</span></li>`)
      .join("")}</ul>${(typefaces || []).length ? `<ul class="typefaces">${typefaces.map((f) => `<li><span>${esc(f.role)}</span><strong>${esc(f.name)}</strong></li>`).join("")}</ul>` : ""}`;

  const listsBlock = (lists) =>
    (lists || []).map((l) => `<h3>${esc(l.heading)}</h3><ol class="insights">${l.items.map((x) => `<li>${t(x)}</li>`).join("")}</ol>`).join("");
  const mapBlock = (m) =>
    m
      ? `<h3>${esc(m.heading)}</h3><div class="goal-map">${m.rows
          .map((r) => `<div class="gm-row"><b>${esc(r.tag)}</b><div><p class="gm-need">${t(r.need)}</p><p class="gm-do">${t(r.design)}</p></div><span class="gm-where">${esc(r.where)}</span></div>`)
          .join("")}</div>`
      : "";

  const ext = (href, label) =>
    `<a href="${esc(href)}" target="_blank" rel="noopener">${label}<span class="sr-only"> (opens in a new tab)</span></a>`;

  /* ---------- Project table (home): Focus / Approach / Case study ---------- */
  const pad = (n) => String(n).padStart(2, "0");
  function scoreboard() {
    return `
      <div class="scoreboard">
        <div class="sb-head" aria-hidden="true">
          <span class="sb-h-project">Project</span>
          <span class="sb-h"><small>Focus</small></span>
          <span class="sb-h"><small>Approach</small></span>
          <span class="sb-h"><small>Case study</small></span>
        </div>
        <ol class="sb-list">
        ${P.projects
          .map(
            (p, i) => `
          <li><a class="sb-row" href="project.html?p=${esc(p.id)}" style="--ball:${esc(p.ballColor)}">
            <span class="sb-project">${ballSVG(p.ballColor, "sb-ball")}<b class="sb-num"><span class="sr-only">Project </span>${pad(i + 1)}</b><span class="sb-title"><strong>${t(p.title)}</strong><small>${t(p.subtitle)}</small></span></span>
            <span class="sb-cell" data-label="Focus">${t(p.focus)}</span>
            <span class="sb-cell" data-label="Approach">${t(p.approach)}</span>
            <span class="sb-go"><span class="sb-btn">View case study <span aria-hidden="true">→</span></span></span>
          </a></li>`
          )
          .join("")}
        </ol>
      </div>`;
  }


  /* ---------- Pages ---------- */
  const pages = {
    home() {
      const IC = window.LANES.ICONS;
      const cover = (p) => (p.hero && (p.hero.src || (p.hero.row && p.hero.row[0] && p.hero.row[0].src))) || "";
      const first = (x) => { const m = String(plain(x)).match(/^.*?[.!?](\s|$)/); return m ? m[0].trim() : x; };
      const reel = (p, i) => `
        <article class="reel" id="reel-${esc(p.id)}" data-layout="${esc(p.layout || "design")}" data-id="${esc(p.id)}" aria-roledescription="slide" aria-label="${i + 1} of ${P.projects.length}: ${esc(plain(p.title))}">
          ${cover(p) ? `<div class="reel-bg" aria-hidden="true"><img src="${esc(cover(p))}" alt="" ${i ? 'loading="lazy"' : ""}></div>` : ""}
          <div class="reel-stage">${cover(p) ? `<img class="reel-cover" src="${esc(cover(p))}" alt="${esc((p.hero && p.hero.alt) || plain(p.title) + " cover")}" ${i ? 'loading="lazy"' : ""}>` : ""}</div>
          <div class="reel-shade" aria-hidden="true"></div>
          <div class="reel-rail">
            <a class="rail-avatar" href="about.html" aria-label="About ${esc(me.firstName)}"><img src="${esc(me.photo)}" alt=""><span class="rail-plus" aria-hidden="true">+</span></a>
            <button type="button" class="rail-btn" data-act="like" aria-pressed="false" aria-label="Like ${esc(plain(p.title))}">${IC.heart}<span class="rail-n">Like</span></button>
            <button type="button" class="rail-btn" data-act="details" aria-haspopup="dialog" aria-label="Quick summary of ${esc(plain(p.title))}">${IC.comment}<span class="rail-n">Summary</span></button>
            <button type="button" class="rail-btn" data-act="save" aria-pressed="false" aria-label="Save ${esc(plain(p.title))}">${IC.bookmark}<span class="rail-n">Save</span></button>
            <button type="button" class="rail-btn" data-act="share" aria-label="Copy link to ${esc(plain(p.title))}">${IC.share}<span class="rail-n">Share</span></button>
          </div>
          <div class="reel-info">
            <p class="reel-user">@${esc(me.firstName.toLowerCase())}${esc(me.lastName.toLowerCase())} <span class="reel-year">· ${esc(p.year || "")}</span></p>
            <h2 class="reel-title"><a href="project.html?p=${esc(p.id)}">${t(p.title)}</a></h2>
            <p class="reel-cap">${t(first(p.approach))}</p>
            <p class="reel-tags">${(p.tags || []).map((x) => `<span>#${esc(x.split(/[^A-Za-z0-9]+/).filter(Boolean).map((w) => w[0].toUpperCase() + w.slice(1)).join(""))}</span>`).join(" ")}</p>
            <a class="reel-open" href="project.html?p=${esc(p.id)}">Open case study <span aria-hidden="true">→</span></a>
            <p class="reel-music"><span class="music-ic" aria-hidden="true">${IC.note}</span><span class="music-t"><span>${esc(p.focus)} · ${esc(p.role || "")}</span></span></p>
          </div>
        </article>`;
      return `
        <h1 class="sr-only">${esc(me.firstName)} ${esc(me.lastName)}: ${esc(me.heroTitle)}</h1>
        <div class="feed-top">
          <div class="feed-tabs" role="tablist" aria-label="Filter projects">
            <button type="button" role="tab" class="feed-tab is-on" data-filter="all" aria-selected="true">For You</button>
            <button type="button" role="tab" class="feed-tab" data-filter="research" aria-selected="false" tabindex="-1">Research</button>
            <button type="button" role="tab" class="feed-tab" data-filter="design" aria-selected="false" tabindex="-1">Design</button>
          </div>
          <a class="feed-search" href="work.html" aria-label="See all work">${IC.search}</a>
        </div>
        <div class="feed" id="feed" tabindex="0" role="region" aria-roledescription="carousel" aria-label="Projects, scroll or use the arrow keys">
          <section class="reel reel--intro" aria-label="Intro">
            <div class="intro-card">
              <img class="intro-photo" src="${esc(me.photo)}" alt="${esc(me.photoAlt)}">
              <p class="intro-user">@${esc(me.firstName.toLowerCase())}${esc(me.lastName.toLowerCase())}</p>
              <p class="intro-title" aria-hidden="true">${esc(me.heroTitle)}</p>
              <p class="intro-bio">${esc(me.headline).replace("Google, Adobe &amp; Meta", `<span class="lg"><img src="${INL.logos.google}" alt="Google"></span><span class="lg"><img src="${INL.logos.adobe}" alt="Adobe"></span><span class="lg"><img src="${INL.logos.meta}" alt="Meta"></span>`)}</p>
              <dl class="intro-stats">${(me.stats || []).map((x) => `<div><dd>${esc(x.value === "projects" ? P.projects.length : x.value)}</dd><dt>${esc(x.label)}</dt></div>`).join("")}</dl>
              <p class="intro-hint">Swipe up for my projects <span aria-hidden="true">↑</span></p>
            </div>
          </section>
          ${P.projects.map(reel).join("")}
          <section class="reel reel--intro reel--end" data-end aria-label="Get in touch">
            <div class="intro-card">
              <p class="intro-title" aria-hidden="true">Let’s work together</p>
              <h2 class="sr-only">Get in touch</h2>
              <p class="intro-bio">Thanks for scrolling. I’d love to talk about research and design roles.</p>
              <div class="end-btns">
                <a class="reel-open" href="resume.html">Resume</a>
                ${me.email ? `<a class="reel-open reel-open--alt" href="mailto:${esc(me.email)}">Email me</a>` : ""}
                ${me.linkedin ? `<a class="reel-open reel-open--alt" href="${esc(me.linkedin)}" target="_blank" rel="noopener">LinkedIn<span class="sr-only"> (opens in a new tab)</span></a>` : ""}
              
                <a class="reel-open reel-open--alt" href="https://layilahnasser.github.io/layilahcportfolio2026-/">Standard portfolio<span class="sr-only"> (opens my standard portfolio)</span></a></div>
              <p class="intro-hint"><a href="work.html" class="end-link">Browse all work</a></p>
            </div>
          </section>
        </div>
        <div class="feed-arrows">
          <button type="button" class="feed-arrow" data-dir="-1" aria-label="Previous project">${IC.back}</button>
          <button type="button" class="feed-arrow" data-dir="1" aria-label="Next project">${IC.back}</button>
        </div>
        <p class="feed-count" id="feed-count" aria-hidden="true"></p>
        <dialog class="sheet" id="sheet" aria-labelledby="sheet-title">
          <div class="sheet-grab" aria-hidden="true"></div>
          <button type="button" class="sheet-x" data-close aria-label="Close summary">${IC.close}</button>
          <div class="sheet-body" id="sheet-body"></div>
        </dialog>
        <p class="sr-only" id="toast" role="status" aria-live="polite"></p>`;
    },

    about() {
      const A = P.about;
      const pill = (t) => `<span class="frame-pill">${t}</span>`;
      return `
        <section class="page-head page-head--split">
          <div>
            <p class="eyebrow">About Me · ${esc(A.kicker)}</p>
            <h1>${esc(A.title)} <span class="h1-sub">(${esc(A.pronunciation)})</span></h1>
            <p class="lede lede--big">${esc(A.lede)}</p>
          </div>
          ${portrait({ cls: "player-card--about", header: A.card.header, title: A.card.title, lines: A.card.lines, photo: A.card.photo, alt: A.card.photoAlt })}
        </section>

        <section class="section path-section" aria-labelledby="path-title">
          ${pill("My path")}
          <h2 id="path-title" class="h-md">${esc(A.path.heading)}</h2>
          <p class="path-lead">${esc(A.path.lead)}</p>
          <blockquote class="path-quote"><p>${esc(A.path.quote)}</p></blockquote>
          <p class="path-bridge">${esc(A.path.bridge)}</p>
          <div class="jmap-wrap">
            <ol class="jmap" style="--n:${A.path.steps.length}" aria-label="My path into UX, in order">
              <li class="jline" aria-hidden="true"><svg viewBox="0 0 100 100" preserveAspectRatio="none" focusable="false">
                <defs><linearGradient id="jmapG" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#ff2fb4"/><stop offset="1" stop-color="#27d9f5"/></linearGradient></defs>
                <polyline points="${A.path.steps.map((_, i) => `${(100 / (A.path.steps.length * 2)) * (2 * i + 1)},${i % 2 === 0 ? 30 : 70}`).join(" ")}" fill="none" stroke="url(#jmapG)" stroke-width="5" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
              </svg></li>
              ${A.path.steps
                .map((st, i) => {
                  const up = i % 2 === 0;
                  return `<li class="jstep jstep--${up ? "up" : "down"}${i === A.path.steps.length - 1 ? " jstep--now" : ""}" style="--i:${i + 1}">
                    <div class="jcard"><h3>${esc(st.label)}</h3><p class="jorg">${esc(st.org)}</p><p>${esc(st.text)}</p></div>
                    <div class="jmark"><i class="jdot" aria-hidden="true"><b>${i + 1}</b></i></div>
                  </li>`;
                })
                .join("")}
            </ol>
          </div>
          <p class="path-turn">${esc(A.path.turn)}</p>
          <p class="path-extra">${esc(A.path.extra)}</p>
        </section>

        <section class="section" aria-labelledby="how-title">
          ${pill("Skills")}
          <h2 id="how-title" class="h-md">${esc(A.toolsHeading)}</h2>
          <ul class="tool-row" aria-label="Tools I use">${A.tools.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
          <div class="cap-grid">
            ${A.capabilities.map((c) => `<article class="cap"><h3>${esc(c.title)}</h3><p>${esc(c.text)}</p></article>`).join("")}
          </div>
          ${A.accessNote ? `<article class="a11y-note" id="accessibility" aria-labelledby="a11y-title"><h3 id="a11y-title">${esc(A.accessNote.title)}</h3><p>${esc(A.accessNote.text)}</p><ul>${A.accessNote.points.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></article>` : ""}
        </section>

        <section class="section" aria-labelledby="edu-title">
          ${pill("Education")}
          <h2 id="edu-title" class="h-md">${esc(A.educationHeading)}</h2>
          <div class="edu-grid">
            ${A.education
              .map((e) => `<article class="edu"><h3>${esc(e.school)}</h3><p class="edu-program">${esc(e.program)}</p><p>${esc(e.text)}</p></article>`)
              .join("")}
          </div>
        </section>

        <section class="section" aria-labelledby="more-title">
          ${pill("Beyond UX")}
          <h2 id="more-title" class="h-md">${esc(A.moreHeading)}</h2>
          <div class="more-grid">
            ${A.more
              .map((m) => `<article class="more"><p class="more-v">${esc(m.value)}</p><h3>${esc(m.title)}</h3><p>${esc(m.text)}</p></article>`)
              .join("")}
          </div>
          <article class="league">
            <figure class="league-photo"><img src="${esc(A.league.image.src)}" alt="${esc(A.league.image.alt)}" width="536" height="524" loading="lazy"></figure>
            <div class="league-body">
                            <h3>${esc(A.league.title)}</h3>
              <p>${esc(A.league.text)}</p>
              ${A.league.tie ? `<p class="league-tie">${esc(A.league.tie)}</p>` : ""}
            </div>
          </article>
        </section>

        <section class="section cta-band">
          <p>Want to talk about research, design, or a role?</p>
          <div class="cta-actions">
            <a class="btn btn--ghost" href="contact.html">Get in touch</a>
            <a class="btn btn--pink" href="work.html">See my work</a>
          </div>
        </section>`;
    },

    work() {
      const cover = (p) => (p.hero && (p.hero.src || (p.hero.row && p.hero.row[0] && p.hero.row[0].src))) || "";
      return `
        <section class="page-head">
          <p class="eyebrow">My Work</p>
          <h1>Selected work</h1>
          <p class="lede">Explore my UX research and design work. See how I turn questions into insights and insights into better experiences.</p>
        </section>
        <section class="section" aria-label="Case studies">
          <ul class="tiles">
            ${P.projects
              .map(
                (p, i) => `
              <li><a class="tile" href="project.html?p=${esc(p.id)}">
                <span class="tile-img" aria-hidden="true">${cover(p) ? `<img src="${esc(cover(p))}" alt="" loading="lazy">` : ""}</span>
                <span class="tile-meta"><span class="tile-kind">${esc(p.focus)}${p.year ? " · " + esc(p.year) : ""}</span><strong>${t(p.title)}</strong></span>
              </a></li>`
              )
              .join("")}
          </ul>
        </section>`;
    },

    resume() {
      const R = P.resume;
      const item = (x) => `<li>
          <div class="tl-head"><h3>${t(x.role)}</h3><span class="tl-dates">${t(x.dates)}</span></div>
          <p class="tl-org">${t(x.org)}</p>
          <ul>${x.points.map((pt) => `<li>${t(pt)}</li>`).join("")}</ul>
        </li>`;
      return `
        <section class="page-head page-head--row">
          <div>
            <p class="eyebrow">Resume</p>
            <h1>Resume</h1>
            <p class="lede">${t(R.summary)}</p>
          </div>
          <a class="btn btn--pink" href="${esc(me.resumePdf)}" download>Download PDF</a>
        </section>
        <section class="section resume-grid">
          <div>
            ${R.sections.map((s) => `<h2 class="h-sm">${esc(s.title)}</h2><ol class="timeline">${s.items.map(item).join("")}</ol>`).join("")}
            <h2 class="h-sm">Education</h2>
            <ol class="timeline">
              ${R.education
                .map(
                  (e) => `<li><div class="tl-head"><h3>${t(e.degree)}</h3><span class="tl-dates">${t(e.dates)}</span></div><p class="tl-org">${t(e.school)}${e.detail ? ` · ${esc(e.detail)}` : ""}</p></li>`
                )
                .join("")}
            </ol>
          </div>
          <aside class="skills" aria-label="Skills and coursework">
            <h2 class="h-sm">Skills &amp; tools</h2>
            ${Object.entries(R.skills)
              .map(([k, list]) => `<div class="skill-block"><h3>${esc(k)}</h3><ul class="tags">${list.map((s) => `<li>${esc(s)}</li>`).join("")}</ul></div>`)
              .join("")}
            <h2 class="h-sm h-sm--gap">Coursework</h2>
            <ul class="tags">${R.coursework.map((c) => `<li>${esc(c)}</li>`).join("")}</ul>
          </aside>
        </section>`;
    },

    contact() {
      const rows = [
        me.email && ["Email", `<a href="mailto:${esc(me.email)}">${esc(me.email)}</a>`],
        me.phone && ["Phone", `<a href="tel:+1${esc(me.phone.replace(/\D/g, ""))}">${esc(me.phone)}</a>`],
        me.linkedin && ["LinkedIn", ext(me.linkedin, esc(me.linkedin.replace(/^https?:\/\/(www\.)?/, "")))],
        me.location && ["Location", esc(me.location)]
      ].filter(Boolean);
      return `
        <section class="page-head page-head--contact">
          <p class="eyebrow">Contact</p>
          <h1>Let’s talk</h1>
          <p class="lede">I’d love to talk about research, design, and how I can help build experiences people love.</p>
          <dl class="contact-list">
            ${rows.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}
          </dl>
        </section>`;
    },

    project() {
      const id = new URLSearchParams(location.search).get("p");
      const idx = Math.max(0, P.projects.findIndex((p) => p.id === id));
      const p = P.projects[idx];
      const next = P.projects[(idx + 1) % P.projects.length];
      const isLast = idx === P.projects.length - 1;
      const isResearch = p.layout === "research";
      const FRAMES = isResearch ? RESEARCH_FRAMES : framesFor(p);
      document.title = `${plain(p.title)} — ${me.firstName} ${me.lastName}`;

      const frameHead = (n, title) =>
        `<header class="frame-head"><span class="frame-no">Step ${n}</span><h2>${title}</h2></header>`;


      const gallery = (designs) =>
        (designs || [])
          .map(
            (d) => `<article class="design-block"><h3 class="design-label">${esc(d.label)}</h3><div class="design-shots${d.images.length > 1 ? " design-shots--multi" : ""}">${imgs(d.images)}</div></article>`
          )
          .join("");
      const cards = (items) =>
        (items || []).length
          ? `<div class="decision-grid">${items.map((d, i) => `<div class="decision"><span class="card-num">0${i + 1}</span><h4>${t(d.title)}</h4><p>${t(d.why)}</p></div>`).join("")}</div>`
          : "";
      /* Concise, screenshot-led research layout: one line + chips + images up top, full write-up folded under "Read the details". */
      const first = (x) => String(x || "").split(/(?<=[.?!])\s+/)[0];
      const rest = (x) => String(x || "").split(/(?<=[.?!])\s+/).slice(1).join(" ");
      const rp = (x) => (rest(x) ? `<p>${t(rest(x))}</p>` : "");
      const more = (html) => (html.trim() ? `<details class="more"><summary>Read the details</summary><div class="more-body">${html}</div></details>` : "");
      const chips = (arr) => ((arr || []).length ? `<ul class="chips" role="list">${arr.map((c) => `<li class="chip">${t(c)}</li>`).join("")}</ul>` : "");
      const grid = (x) => {
        const list = !x ? [] : Array.isArray(x) ? x : [x];
        return list.length ? `<div class="glance-grid glance-grid--${Math.min(list.length, 3)}">${list.map((i) => img(i, "")).join("")}</div>` : "";
      };
      const researchBody = isResearch
        ? (() => {
            const rec = p.recommendations || {};
            const imp = p.impact || {};
            const mapRows = (rec.map && rec.map.rows) || [];
            const designs = (rec.designs || []).map((d) => {
              const row = mapRows.find((r) => r.tag === d.label);
              return `<figure class="concept"><div class="concept-img">${imgs(d.images)}</div><figcaption>${row ? `<span class="heard">${t(first(row.need))}</span>` : ""}<strong>${esc(d.label)}</strong></figcaption></figure>`;
            });
            const decisions = imp.decisions || [];
            return `
              <section id="problem" class="frame">
                ${frameHead(1, FRAMES[0].label)}
                <p class="callout"><span class="callout-label">Research question</span>${t(p.problem.statement)}</p>
                ${more(`<h3>Context</h3><p>${t(p.problem.context)}</p>${p.problem.challenge ? `<h3>The challenge</h3><p>${t(p.problem.challenge)}</p>` : ""}<h3>My role</h3><p>${t(p.problem.role)}</p>`)}
              </section>

              <section id="objectives" class="frame">
                ${frameHead(2, FRAMES[1].label)}
                <p class="glance">${t(first(p.objectives.summary))}</p>
                <ol class="obj-grid${p.objectives.items.length === 3 ? " obj-grid--three" : ""}">${p.objectives.items.map((x, i) => `<li><span class="card-num">0${i + 1}</span>${typeof x === "string" ? t(x) : `<strong class="obj-title">${t(x.title)}</strong><span class="obj-text">${t(x.text)}</span>`}</li>`).join("")}</ol>
              </section>

              <section id="methods" class="frame">
                ${frameHead(3, FRAMES[2].label)}
                <p class="glance">${t(first(p.methods.summary))}</p>
                ${chips(p.methods.items.map((m) => m.name))}
                ${grid(p.methods.image)}
                ${more(`<div class="method-grid">${p.methods.items.map((m) => `<div class="method"><h3>${t(m.name)}</h3><p>${t(m.detail)}</p></div>`).join("")}</div>`)}
              </section>

              <section id="findings" class="frame">
                ${frameHead(4, FRAMES[3].label)}
                <p class="glance">${t(first(p.findings.summary))}</p>
                ${p.findings.callout ? `<p class="callout">${t(p.findings.callout)}</p>` : ""}
                ${grid(p.findings.image)}
                ${more(`${rp(p.findings.summary)}<h3>What we observed</h3><ol class="insights">${p.findings.items.map((x) => `<li>${t(x)}</li>`).join("")}</ol>`)}
              </section>

              <section id="insights" class="frame">
                ${frameHead(5, FRAMES[4].label)}
                <p class="glance">${t(first(p.insights.summary))}</p>
                ${chips(((p.insights.lists || [])[0] || { items: [] }).items.map(first))}
                ${grid(p.insights.image)}
                ${more(`${rp(p.insights.summary)}${listsBlock(p.insights.lists)}`)}
              </section>

              <section id="recommendations" class="frame">
                ${frameHead(6, FRAMES[5].label)}
                <p class="glance">${t(first(rec.summary))}</p>
                ${designs.length ? `<div class="concept-grid">${designs.join("")}</div>` : ""}
                ${grid(rec.image)}
                ${more(`${mapBlock(rec.map)}`)}
              </section>

              <section id="impact" class="frame">
                ${frameHead(7, FRAMES[6].label)}
                <div class="results">${(imp.results || []).map((r) => `<div class="result"><strong>${t(r.value)}</strong><span>${esc(r.label)}</span></div>`).join("")}</div>
                ${decisions.length ? `<h3 class="strikes-h">${esc(imp.decisionsHeading || "Decisions influenced")}</h3><ol class="strikes">${decisions.map((d, i) => `<li class="strike"><span class="strike-x" aria-hidden="true">✓</span><div class="strike-tx"><span class="strike-n">Outcome ${i + 1}</span><h4>${t(d.title)}</h4><p>${t(d.statement || first(d.why))}</p></div></li>`).join("")}</ol>` : ""}
                ${grid(imp.image)}
                ${imp.imageCaption ? `<p class="grid-caption">${t(imp.imageCaption)}</p>` : ""}
                ${imp.quote ? `<figure class="pull-quote"><blockquote><p>\u201C${t(imp.quote.text)}\u201D</p></blockquote><figcaption>${t(imp.quote.source)}</figcaption></figure>` : ""}
                ${(imp.documents || []).length ? `<div class="docs"><h3>Deck and paper</h3><ul class="doc-list">${imp.documents.map((x) => `<li><a class="btn btn--ghost" href="${esc(x.file)}" target="_blank" rel="noopener">${esc(x.title)}<span class="sr-only"> (opens in a new tab)</span></a><span>${esc(x.note || "")}</span></li>`).join("")}</ul></div>` : ""}
                ${more(`${decisions.filter((d) => d.statement || rest(d.why)).length ? `<h3>${esc(imp.decisionsHeading || "Decisions influenced")}</h3>${cards(decisions.filter((d) => d.statement || rest(d.why)))}` : ""}${imp.reflection ? `<h3>Reflection</h3><p>${t(imp.reflection)}</p>` : ""}`)}
              </section>
`;
          })()
        : "";

      const ok = (x) => (x && !/^TODO/.test(x) ? x : "");
      const swatch = (c, extra = "") => `<li class="ds-sw" style="--sw:${esc(c.hex)};--on:${(lum(c.hex) + 0.05) / 0.054 > 1.05 / (lum(c.hex) + 0.05) ? "#0d0a14" : "#fff"}"><b>${esc(c.step || c.name)}</b><span>${esc(c.hex)}</span></li>`;
      const dsBlock = (ds) => {
        if (!ds) return "";
        let n = 0;
        const sec = (title, small, body) => (body ? `<h3 class="ds-h"><span class="ds-n">${++n}</span> ${title}${small ? ` <small>${small}</small>` : ""}</h3>${body}` : "");
        const one = (im) => (im && (im.src || im.video || im.embed) ? img(im) : "");
        return `<div class="ds">
          ${ds.intro ? `<p class="glance">${t(ds.intro)}</p>` : ""}
          ${sec("Brand colors", "", ds.brand ? brandBlock(ds.brand, ds.typefaces) : "")}
          ${sec("Color system", "primitives and semantic tokens", one(ds.colorImage))}
          ${sec("Typography", "tap to open full size", ds.typography && (ds.typography.src) ? `<div class="ds-type">${img(ds.typography)}</div>` : "")}
          ${sec("Buttons", "", one(ds.buttons))}
          ${sec("Components", "", one(ds.components))}
        </div>`;
      };
      const designBody = isResearch ? "" : (() => {
        const ex = p.execution || {};
        const goalCards = p.define.goalCards || [];
        const rIters = p.iterations || [];
        const iterImgs = rIters.flatMap((it) => (Array.isArray(it.image) ? it.image : it.image ? [it.image] : [])).filter((i) => i && (i.src || i.video || i.embed));
        const rMethods = ((p.research && p.research.methods) || []).filter((m) => ok(m.name));
        const rInsights = ((p.research && p.research.insights) || []).filter(ok);
        const palette = ex.palette || (rIters.find((it) => it.palette) || {}).palette;
        const typefaces = ex.typefaces || (rIters.find((it) => it.typefaces) || {}).typefaces;
        return `
              <section id="problem" class="frame">
                ${frameHead(1, FRAMES[0].label)}
                <p class="callout">${t(p.problem.statement)}</p>
                ${p.problem.contribution ? `<div class="contrib"><b>My contribution</b><p>${t(p.problem.contribution)}</p></div>` : ""}
                ${more(`<h3>How I identified it</h3><p>${t(p.problem.context)}</p><h3>Goal</h3><p>${t(p.problem.goal)}</p>`)}
              </section>

              <section id="research" class="frame">
                ${frameHead(2, FRAMES[1].label)}
                ${ok(p.research.summary) ? `<p class="glance">${t(first(p.research.summary))}</p>` : ""}
                ${chips(rMethods.map((m) => m.name))}
                ${p.research.competitors ? (() => { const k = p.research.competitors; const mark = (v) => (v ? `<span aria-hidden="true">\u2713</span><span class="sr-only">Yes</span>` : `<span aria-hidden="true">\u2013</span><span class="sr-only">No</span>`); return `<div class="comp"><h3>${esc(k.heading)}</h3><p class="glance">${t(k.intro)}</p><div class="comp-cards">${k.items.map((i) => `<article class="comp-card"><small>${esc(i.tag)}</small><h4>${esc(i.name)}</h4><p>${t(i.text)}</p></article>`).join("")}</div><div class="comp-wrap" tabindex="0" role="region" aria-label="${esc(k.matrixHeading)} table, scrolls sideways on small screens"><table class="comp-table"><caption>${esc(k.matrixHeading)}</caption><thead><tr><th scope="col"><span class="sr-only">Feature</span></th>${k.cols.map((c, i) => `<th scope="col"${i === k.cols.length - 1 ? ' class="comp-us"' : ""}>${esc(c)}</th>`).join("")}</tr></thead><tbody>${k.rows.map((r) => `<tr><th scope="row">${esc(r.label)}</th>${r.has.map((v, i) => `<td class="${v ? "yes" : "no"}${i === r.has.length - 1 ? " comp-us" : ""}">${mark(v)}</td>`).join("")}</tr>`).join("")}</tbody></table></div><div class="contrib"><b>Crown Code differentiator</b><p>${t(k.differentiator)}</p></div></div>`; })() : ""}
                ${grid(p.research.image)}
                ${more(`${rp(p.research.summary)}<div class="method-grid">${p.research.methods.map((m) => `<div class="method"><h3>${t(m.name)}</h3><p>${t(m.detail)}</p></div>`).join("")}</div>${rInsights.length ? `<h3>Key insights</h3><ol class="insights">${rInsights.map((x) => `<li>${t(x)}</li>`).join("")}</ol>` : ""}`)}
              </section>

              <section id="define" class="frame">
                ${frameHead(3, FRAMES[2].label)}
                ${goalCards.length ? `<div class="obj-grid obj-grid--3">${goalCards.map((g) => `<div class="goal-mini"><span class="card-num">${esc(g.tag)}</span>${t(g.text)}</div>`).join("")}</div>` : p.define.callout ? `<p class="callout">${t(p.define.callout)}</p>` : ""}
                ${grid(p.define.image)}
                ${more(`${p.define.callout && goalCards.length ? `<p class="callout">${t(p.define.callout)}</p>` : ""}${p.define.persona || p.define.journey ? `<div class="two-col"><div><h3>Who we’re designing for</h3><p>${t(p.define.persona)}</p></div><div><h3>Where it breaks down</h3><p>${t(p.define.journey)}</p></div></div>` : ""}${p.define.painPoints ? `<h3>${esc(p.define.painPointsHeading || "Common pain points")}</h3><ol class="insights">${p.define.painPoints.map((x) => `<li>${t(x)}</li>`).join("")}</ol>` : ""}${listsBlock(p.define.lists)}${mapBlock(p.define.map)}`)}
              </section>

              <section id="ideate" class="frame">
                ${frameHead(4, FRAMES[3].label)}
                ${ok(p.ideate.summary) ? `<p class="glance">${t(first(p.ideate.summary))}</p>` : ""}
                ${p.ideate.callout ? `<p class="callout">${t(p.ideate.callout)}</p>` : ""}
                ${grid(p.ideate.image)}
                ${more(`${ok(p.ideate.summary) ? rp(p.ideate.summary) : ""}${listsBlock(p.ideate.lists)}`)}
              </section>

              <section id="iterate" class="frame">
                ${frameHead(5, FRAMES[4].label)}
                ${p.designSystem ? dsBlock({ ...p.designSystem, brand: palette, typefaces }) : `${palette ? brandBlock(palette, typefaces) : ""}${grid(iterImgs)}`}
                ${more(`<ol class="iterations">${rIters.map((it) => `<li class="iteration"><div class="iteration-text"><h3>${t(it.version)}</h3>${ok(it.change) ? `<p><b>${esc((p.iterLabels || ["What changed", "What testing showed"])[0])}:</b> ${t(it.change)}</p>` : ""}${ok(it.feedback) ? `<p><b>${esc((p.iterLabels || ["What changed", "What testing showed"])[1])}:</b> ${t(it.feedback)}</p>` : ""}</div></li>`).join("")}</ol>`)}
              </section>

              <section id="execution" class="frame">
                ${frameHead(6, FRAMES[5].label)}
                ${ok(ex.summary) ? `<p class="glance">${t(first(ex.summary))}</p>` : ""}
                ${(ex.newPages || []).length ? `<h3>${esc(ex.newPagesHeading || "New pages")}</h3>${ex.newPagesNote ? `<p>${t(ex.newPagesNote)}</p>` : ""}<ul class="chips" role="list">${ex.newPages.map((n) => `<li class="chip"><span class="frame-no">New</span> ${esc(n)}</li>`).join("")}</ul>` : ""}
                ${(ex.designs || []).length && (ex.darkMode || (ex.darkScreens || []).length) ? `<h3 class="mode-h">Light mode</h3>` : ""}
                ${(ex.designs || []).length ? `<div class="design-grid">${(ex.designs || []).map((d) => d.phones ? `<article class="design-cell design-cell--phones"><h3 class="design-label">${d.isNew ? `<span class="frame-no">New</span> ` : ""}${esc(d.label)}</h3>${img({ row: d.images })}</article>` : `<article class="design-cell"><h3 class="design-label">${d.isNew ? `<span class="frame-no">New</span> ` : ""}${esc(d.label)}</h3>${imgs(d.images)}</article>`).join("")}</div><p class="hint">Tap a screen to open it full size.</p>` : ""}
                ${ex.darkMode || (ex.darkScreens || []).length ? `<h3 class="mode-h">Dark mode</h3>${ex.darkMode ? `<div class="ds-dark">${img(ex.darkMode)}</div>` : ""}${(ex.darkScreens || []).length ? img({ row: ex.darkScreens.map((d) => ({ ...d, fit: "phone" })) }) : ""}` : ""}
                ${(ex.goals || []).map((g) => `<article class="goal-card"><header class="goal-head"><span class="frame-no">${esc(g.tag)}</span><p class="goal-statement">${esc(g.title || g.statement)}</p></header><div class="goal-body${g.images ? " goal-body--shot" : ""}"><p class="goal-why">${t(g.why)}</p>${g.images ? `<div class="goal-shots">${imgs(g.images)}</div>` : ""}</div>${g.before && g.after ? `<div class="compare-pair"><div class="cmp-col"><p class="cmp-tag">Before</p>${img(g.before)}</div><div class="cmp-col"><p class="cmp-tag cmp-tag--after">After</p>${img(g.after)}</div></div>` : ""}</article>`).join("")}
                ${(ex.images || []).length ? `<div class="shots">${ex.images.map((im) => img(im)).join("")}</div>` : ""}
                ${ex.compare ? `<h3>Before and after</h3>${ex.compare.map((c) => `<div class="compare"><p class="compare-label">${esc(c.label)}</p><div class="compare-pair">${img(c.before)}${img(c.after)}</div></div>`).join("")}` : ""}
                ${ex.prototypeUrl ? `<p>${ext(ex.prototypeUrl, "Open prototype ↗").replace("<a ", '<a class="btn btn--ghost" ')}</p>` : ""}
                ${(ex.decisions || []).length ? `<h3>${esc(ex.decisionsHeading || "Why it looks and works this way")}</h3><div class="decision-grid">${ex.decisions.map((d, i) => `<div class="decision"><span class="card-num">0${i + 1}</span><h4>${t(d.title)}</h4><p>${t(d.why)}</p></div>`).join("")}</div>` : ""}
                ${(ex.screenReasons || []).length ? `<h3>${esc(ex.screenReasonsHeading || "Why each screen works this way")}</h3><dl class="screen-reasons">${ex.screenReasons.map((d) => `<div><dt>${t(d.screen)}</dt><dd>${t(d.why)}</dd></div>`).join("")}</dl>` : ""}
                ${more(`${ok(ex.summary) ? rp(ex.summary) : ""}${mapBlock(ex.map)}`)}
              </section>

              <section id="outcome" class="frame">
                ${frameHead(7, FRAMES[6].label)}
                ${ok(p.outcome.reflection) ? `<p class="glance">${t(p.outcome.reflection)}</p>` : ""}
                <div class="results">${p.outcome.results.map((r) => `<div class="result"><strong>${t(r.value)}</strong><span>${esc(r.label)}</span></div>`).join("")}</div>
                ${p.outcome.compare ? p.outcome.compare.map((c) => `<div class="compare compare--page"><p class="compare-label">${c.goal ? `<span class="frame-no">${esc(c.goal)}</span> ` : ""}${esc(c.label)}</p><div class="compare-pair${c.before ? "" : " compare-pair--single"}">${c.before ? `<div class="cmp-col"><p class="cmp-tag">Before</p>${img(c.before)}</div>` : ""}<div class="cmp-col"><p class="cmp-tag cmp-tag--after">After</p><div class="cmp-after${Array.isArray(c.after) ? " cmp-after--multi" : ""}">${imgs(c.after)}</div></div></div>${c.why ? `<div class="cmp-why"><b>What changed and why</b><p>${t(c.why)}</p></div>` : ""}</div>`).join("") : ""}
                
              </section>
`;
      })();

      return `
        <article class="case" style="--ball:${esc(p.ballColor)}">
          <header class="case-hero">
            <a class="back" href="work.html"><span aria-hidden="true">◂</span> All projects</a>
            <div class="case-title">
              ${ballSVG(p.ballColor, "case-ball")}
              <div>
                <p class="eyebrow">Case study ${idx + 1}${p.year ? " · " + esc(p.year) : ""}</p>
                <h1>${t(p.title)}</h1>
                <p class="lede">${t(p.subtitle)}</p>
                ${p.intro ? `<p class="case-intro">${t(p.intro)}</p>` : ""}
              </div>
            </div>
            <dl class="case-meta">
              <div><dt>Role</dt><dd>${t(p.role)}</dd></div>
              <div><dt>Team</dt><dd>${String(p.team).split("\n").map((l) => t(l)).join("<br>")}</dd></div>
              <div><dt>Timeline</dt><dd>${t(p.timeline)}</dd></div>
              <div><dt>${esc(p.toolsLabel || "Tools & methods")}</dt><dd>${String(p.tools).split("\n").map((l) => t(l)).join("<br>")}</dd></div>
            </dl>
            ${p.glance ? `<ul class="glance-boxes" aria-label="Case study at a glance">${[["Problem", p.glance.problem], ["What I did", p.glance.did], ["What changed", p.glance.changed]].map(([k, v]) => `<li><b>${k}</b><span>${t(v)}</span></li>`).join("")}</ul>` : ""}
            <div class="expand-bar"><p>Skim the summaries, or open every section to see the methods, evidence, and reasons behind them.</p><button type="button" class="expand-all" aria-pressed="false">Open all details</button></div>
            ${img(p.hero, "shot--hero" + (p.hero && p.hero.fit === "phone" ? " shot--phone" : ""))}
          </header>

          <nav class="fstrip-nav" aria-label="Case study frames">
            <ol class="fstrip">${FRAMES.map((f, i) => `<li class="fcell"><a href="#${f.key}" data-frame="${f.key}"><span class="fn">${i + 1}<span class="fl"> ${f.label}</span></span><span class="fm" aria-hidden="true"></span><span class="sr-only fstate"></span></a></li>`).join("")}</ol>
          </nav>

          <div class="case-layout">
            <div class="case-body">
              ${isResearch ? researchBody : designBody}

              <section class="strike-panel" id="strike" aria-labelledby="strike-title">
                <h2 id="strike-title" class="sp-big">${isLast ? "Thanks for reading" : "Next project"}</h2>
                ${
                  isLast
                    ? `<p>That was the last case study.</p>
                <div class="sp-btns"><a class="btn btn--pink" href="work.html">Back to all projects</a><a class="btn btn--ghost" href="contact.html">Get in touch</a></div>`
                    : `<p>You finished: ${esc(plain(p.title))}. Up next: ${esc(plain(next.title))}.</p>
                <div class="sp-btns"><a class="btn btn--pink" href="project.html?p=${esc(next.id)}">${esc(plain(next.title))} <span aria-hidden="true">→</span></a><a class="btn btn--ghost" href="work.html">Back to all projects</a></div>`
                }
              </section>
            </div>
          </div>
        </article>`;
    }
  };

  if (pages[page]) main.innerHTML = pages[page]();

  /* ---------- Page behaviours ---------- */
  if (page === "home") {
    const feed = document.getElementById("feed");
    const toast = document.getElementById("toast");
    const sheet = document.getElementById("sheet");
    const body = document.getElementById("sheet-body");
    const count = document.getElementById("feed-count");
    const store = {
      get: (k) => { try { return JSON.parse(localStorage.getItem(k) || "{}"); } catch (e) { return {}; } },
      set: (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
    };
    const likes = store.get("tt-likes"), saves = store.get("tt-saves");
    const say = (m) => { toast.textContent = ""; setTimeout(() => (toast.textContent = m), 30); };
    const byId = (id) => P.projects.find((p) => p.id === id);
    const reels = () => [...feed.querySelectorAll(".reel")].filter((r) => !r.hidden);

    feed.querySelectorAll(".reel[data-id]").forEach((r) => {
      const id = r.dataset.id;
      const like = r.querySelector('[data-act="like"]'), save = r.querySelector('[data-act="save"]');
            const paint = () => {
        like.setAttribute("aria-pressed", String(!!likes[id]));
        save.setAttribute("aria-pressed", String(!!saves[id]));
      };
      paint();
      like.addEventListener("click", () => { likes[id] = !likes[id]; store.set("tt-likes", likes); paint(); });
      save.addEventListener("click", () => { saves[id] = !saves[id]; store.set("tt-saves", saves); paint(); say(saves[id] ? "Saved" : "Removed from saved"); });
      r.querySelector('[data-act="share"]').addEventListener("click", async () => {
        const url = new URL("project.html?p=" + id, location.href).href;
        try {
          if (navigator.share) await navigator.share({ title: plain(byId(id).title), url });
          else { await navigator.clipboard.writeText(url); say("Link copied"); }
        } catch (e) { /* cancelled */ }
      });
      r.querySelector('[data-act="details"]').addEventListener("click", (ev) => {
        const p = byId(id), g = p.glance || {};
        body.innerHTML = `
          <p class="sheet-eyebrow">${esc(p.focus)} · ${esc(p.year || "")}</p>
          <h2 id="sheet-title">${t(p.title)}</h2>
          ${g.problem ? `<h3>Problem</h3><p>${t(g.problem)}</p>` : ""}
          ${g.did ? `<h3>What I did</h3><p>${t(g.did)}</p>` : ""}
          ${g.changed ? `<h3>What changed</h3><p>${t(g.changed)}</p>` : ""}
          <dl class="sheet-meta">
            ${p.role ? `<div><dt>Role</dt><dd>${esc(p.role)}</dd></div>` : ""}
            ${p.timeline ? `<div><dt>Timeline</dt><dd>${esc(p.timeline)}</dd></div>` : ""}
            ${p.team ? `<div><dt>Team</dt><dd>${esc(p.team).replace(/\n/g, "<br>")}</dd></div>` : ""}
          </dl>
          <a class="reel-open" href="project.html?p=${esc(id)}">Open case study <span aria-hidden="true">→</span></a>`;
        sheet.dataset.from = id;
        sheet.showModal();
      });
    });
    sheet.addEventListener("click", (e) => { if (e.target === sheet || e.target.closest("[data-close]")) sheet.close(); });
    sheet.addEventListener("close", () => {
      const b = feed.querySelector(`#reel-${sheet.dataset.from} [data-act="details"]`);
      if (b) b.focus();
    });

    // filter tabs
    const tabs = [...document.querySelectorAll(".feed-tab")];
    const apply = (f) => {
      tabs.forEach((x) => { const on = x.dataset.filter === f; x.classList.toggle("is-on", on); x.setAttribute("aria-selected", String(on)); x.tabIndex = on ? 0 : -1; });
      feed.querySelectorAll(".reel[data-id]").forEach((r) => { r.hidden = f !== "all" && (f === "research") !== (r.dataset.layout === "research"); });
      feed.scrollTo({ top: 0 });
      say(f === "all" ? "Showing all projects" : "Showing " + f + " projects");
      upd();
    };
    tabs.forEach((x, i) => {
      x.addEventListener("click", () => apply(x.dataset.filter));
      x.addEventListener("keydown", (e) => {
        const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
        if (d) { const nx = tabs[(i + d + tabs.length) % tabs.length]; nx.focus(); apply(nx.dataset.filter); }
      });
    });

    // counter
    const upd = () => {
      const list = reels(), mid = feed.scrollTop + feed.clientHeight / 2;
      const cur = list.findIndex((r) => r.offsetTop <= mid && r.offsetTop + r.offsetHeight > mid);
      count.textContent = cur < 0 ? "" : `${cur + 1} / ${list.length}`;
    };
    feed.addEventListener("scroll", () => requestAnimationFrame(upd), { passive: true });
    upd();

    document.querySelectorAll(".feed-arrow").forEach((b) => b.addEventListener("click", () => {
      const rm = matchMedia("(prefers-reduced-motion: reduce)").matches;
      feed.scrollBy({ top: +b.dataset.dir * feed.clientHeight, behavior: rm ? "auto" : "smooth" });
    }));

    // keyboard: arrows page the feed
    feed.addEventListener("keydown", (e) => {
      if (e.target !== feed) return;
      const d = e.key === "ArrowDown" || e.key === "PageDown" ? 1 : e.key === "ArrowUp" || e.key === "PageUp" ? -1 : 0;
      if (!d) return;
      e.preventDefault();
      const rm = matchMedia("(prefers-reduced-motion: reduce)").matches;
      feed.scrollBy({ top: d * feed.clientHeight, behavior: rm ? "auto" : "smooth" });
    });
  }

  if (page === "project") {
    // Make the details easy to find: say what is inside, open the process frames, and offer expand/collapse all.
    const hints = { problem: "how I identified it and the goal", research: "every method and the key insights", methods: "every method and why I chose it", define: "who we designed for and what it means", ideate: "the thinking behind the wireframes", iterate: "each round, what changed and how I checked it", execution: "the full build notes", objectives: "the full objectives and questions", findings: "the full findings and evidence", insights: "the patterns and what they mean", recommendations: "the full recommendations and evidence", impact: "the decisions this influenced and my reflection" };
    const open = new Set(["research", "methods", "iterate", "ideate"]);
    const lab = (d, on) => { const sm = d.querySelector("summary"); const id = d.closest(".frame") && d.closest(".frame").id; const h = hints[id]; sm.textContent = on ? "Hide the details" : "Read the details" + (h ? ": " + h : ""); };
    document.querySelectorAll(".frame details.more").forEach((d) => {
      const id = d.closest(".frame").id;
      if (open.has(id)) d.open = true;
      lab(d, d.open);
      d.addEventListener("toggle", () => lab(d, d.open));
    });
    const all = document.querySelector(".expand-all");
    if (all) all.addEventListener("click", () => {
      const on = all.getAttribute("aria-pressed") !== "true";
      document.querySelectorAll(".frame details.more").forEach((d) => { d.open = on; });
      all.setAttribute("aria-pressed", String(on));
      all.textContent = on ? "Close all details" : "Open all details";
    });
    const links = [...document.querySelectorAll(".fstrip a")];
    const frames = [...document.querySelectorAll(".frame")];
    const paint = (cur) => {
      links.forEach((l, i) => {
        const state = i < cur ? "done" : i === cur ? "now" : "todo";
        l.parentElement.dataset.state = state;
        l.querySelector(".fstate").textContent = state === "done" ? " (completed)" : state === "now" ? " (current)" : "";
        if (state === "now") l.setAttribute("aria-current", "true");
        else l.removeAttribute("aria-current");
      });
    };
    paint(0);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) paint(frames.indexOf(e.target));
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    frames.forEach((f) => io.observe(f));

    const sp = document.getElementById("strike");
    if (sp) {
      const io2 = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            sp.classList.add("is-hit");
            // reaching the strike panel completes every frame
            links.forEach((l) => { l.parentElement.dataset.state = "done"; l.removeAttribute("aria-current"); });
            io2.disconnect();
          }
        },
        { threshold: 0.45 }
      );
      io2.observe(sp);
    }
  }
})();
