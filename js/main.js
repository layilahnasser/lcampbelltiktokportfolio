/* Shared UI: top navigation, logo, profile card, footer and shared helpers. */
(function () {
  const P = window.PORTFOLIO;
  const me = P.profile;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- helpers ---------- */
  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // Renders text; anything still starting with "TODO:" gets a visible dashed outline.
  const t = (s) => {
    const str = String(s ?? "");
    const mid = str.search(/\sTODO:/); // a TODO at the end of a real sentence: keep the text, outline only the placeholder
    if (mid > 0) return esc(str.slice(0, mid)) + " " + t(str.slice(mid + 1));
    if (/^TODO\b/.test(str)) {
      const clean = str.replace(/^TODO:?\s*/, "");
      return `<span class="todo" title="Placeholder — edit js/data.js">${esc(clean || "Add content")}</span>`;
    }
    return esc(str);
  };
  const isTodo = (s) => /^TODO\b/.test(String(s ?? ""));
  const plain = (s) => String(s ?? "").replace(/^TODO:?\s*/, "");

  const img = (im, cls = "") => {
    // Side-by-side phones: { row: [ {src, caption}, … ], caption: "…" }; each phone can be missing and shows its own slot.
    if (im && Array.isArray(im.row)) {
      return `<figure class="shot shot--rowwrap ${cls}"><div class="phone-row">${im.row.map((r) => img({ ...r, eager: true }, "shot--phone")).join("")}</div>${im.caption ? `<figcaption>${esc(plain(im.caption))}</figcaption>` : ""}</figure>`;
    }
    if (im && im.fit === "phone") cls += " shot--phone";
    if (im && im.fit === "phones") cls += " shot--phone shot--phones";
    if (im && im.fit === "tall") cls += " shot--tall";
    if (im && im.fit === "wide") cls += " shot--wide";
    if (im && im.fit === "full") cls += " shot--full";
    const cap = im && im.caption ? `<figcaption>${esc(plain(im.caption))}</figcaption>` : "";
    // Video file: { video: "assets/video/demo.mp4", poster: "assets/img/poster.jpg", captions: "assets/video/demo.vtt", caption: "…" }
    if (im && im.video) {
      return `<figure class="shot shot--video ${cls}"><video controls playsinline preload="metadata"${im.poster ? ` poster="${esc(im.poster)}"` : ""}${im.loop ? " loop muted autoplay" : ""} aria-label="${esc(plain(im.caption || "Video"))}"><source src="${esc(im.video)}">${
        im.captions ? `<track kind="captions" src="${esc(im.captions)}" srclang="en" label="English" default>` : ""
      }Your browser can’t play this video.</video>${cap}</figure>`;
    }
    // Embed (Figma prototype, YouTube, Vimeo, Loom…): { embed: "https://…", caption: "…" }
    if (im && im.embed && /^https:\/\//.test(im.embed)) {
      return `<figure class="shot shot--embed ${cls}"><div class="embed-wrap"><iframe src="${esc(im.embed)}" title="${esc(plain(im.caption || "Embedded media"))}" loading="lazy" allow="fullscreen; autoplay; picture-in-picture" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div>${cap}</figure>`;
    }
    if (im && im.src) {
      return `<figure class="shot ${cls}"><img src="${esc(im.src)}" alt="${esc(plain(im.alt || im.caption))}" loading="${im.eager ? "eager" : "lazy"}">${
        im.caption ? `<figcaption>${esc(plain(im.caption))}</figcaption>` : ""
      }</figure>`;
    }
    return `<figure class="shot shot--empty ${cls}"><div class="shot-ph" role="img" aria-label="Image placeholder"><span>Add image</span><small>${esc(
      plain(im?.caption || "")
    )}</small></div></figure>`;
  };

  // A slot is wired to a file name before the file exists. If the file is missing,
  // show a labeled placeholder (it turns into the real image as soon as the file is added).
  document.addEventListener(
    "error",
    (e) => {
      const i = e.target;
      if (!i || !(i.tagName === "IMG" || i.tagName === "SOURCE") || !i.closest(".shot")) return;
      const fig = i.closest(".shot");
      const name = (i.getAttribute("src") || "").split("/").pop();
      const cap = fig.querySelector("figcaption");
      const ph = document.createElement("div");
      ph.className = "shot-ph";
      ph.setAttribute("role", "img");
      ph.setAttribute("aria-label", "Image placeholder");
      ph.innerHTML = `<span>Add ${i.tagName === "SOURCE" ? "video" : "image"}</span><small>${esc(cap ? cap.textContent : "")}</small><small class="ph-file">Save the file as assets/${i.tagName === "SOURCE" ? "video" : "img"}/${esc(name)}</small>`;
      fig.classList.add("shot--empty");
      fig.classList.remove("shot--phone", "shot--tall", "shot--video");
      fig.replaceChildren(ph);
    },
    true
  );

  /* ---------- Click-to-enlarge (lightbox) ---------- */
  (function lightbox() {
    let dlg, big, cap, zoomBtn, opener;
    const build = () => {
      dlg = document.createElement("dialog");
      dlg.className = "lightbox";
      dlg.setAttribute("aria-label", "Enlarged image");
      dlg.innerHTML = `<div class="lb-bar"><button type="button" class="lb-zoom" aria-pressed="false">Actual size</button><button type="button" class="lb-close">Close</button></div><div class="lb-stage"><img alt=""></div><p class="lb-cap"></p>`;
      document.body.appendChild(dlg);
      big = dlg.querySelector("img");
      cap = dlg.querySelector(".lb-cap");
      zoomBtn = dlg.querySelector(".lb-zoom");
      dlg.querySelector(".lb-close").addEventListener("click", () => dlg.close());
      zoomBtn.addEventListener("click", () => {
        const on = dlg.classList.toggle("lb-actual");
        zoomBtn.setAttribute("aria-pressed", String(on));
        zoomBtn.textContent = on ? "Fit to screen" : "Actual size";
      });
      dlg.addEventListener("click", (e) => { if (e.target === dlg || e.target.classList.contains("lb-stage")) dlg.close(); });
      dlg.addEventListener("close", () => { dlg.classList.remove("lb-actual"); zoomBtn.setAttribute("aria-pressed", "false"); zoomBtn.textContent = "Actual size"; if (opener && opener.focus) opener.focus(); });
    };
    const open = (im) => {
      if (!dlg) build();
      opener = im;
      big.src = im.currentSrc || im.src;
      big.alt = im.alt;
      const fc = im.closest("figure") && im.closest("figure").querySelector("figcaption");
      cap.textContent = fc ? fc.textContent : "";
      dlg.showModal();
      dlg.querySelector(".lb-close").focus();
    };
    const enhance = (root) => {
      root.querySelectorAll(".shot img:not([data-lb])").forEach((im) => {
        im.dataset.lb = "1";
        im.tabIndex = 0;
        im.setAttribute("role", "button");
        im.setAttribute("aria-haspopup", "dialog");
        im.title = "Click to enlarge";
      });
    };
    document.addEventListener("click", (e) => { const im = e.target.closest && e.target.closest(".shot img[data-lb]"); if (im && typeof HTMLDialogElement !== "undefined") open(im); });
    document.addEventListener("keydown", (e) => {
      if ((e.key === "Enter" || e.key === " ") && e.target.matches && e.target.matches(".shot img[data-lb]")) { e.preventDefault(); open(e.target); }
    });
    const start = () => { enhance(document); new MutationObserver(() => enhance(document)).observe(document.body, { childList: true, subtree: true }); };
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
  })();

  /* ---------- SVG pieces ---------- */
  // A plain colored dot, used as a small project color marker.
  const ballSVG = (color = "#5fd6cf", cls = "") =>
    `<svg class="ball ${cls}" viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="46" fill="${color}"/><circle cx="50" cy="50" r="46" fill="#fff" fill-opacity=".12"/></svg>`;

  const logoMark = () => `<span class="logo-mono" aria-hidden="true">LC</span>`;

  const logo = (size = "") =>
    `<a class="logo ${size}" href="index.html" aria-label="${esc(me.firstName)} ${esc(me.lastName)}, ${esc(me.title)} — home">
      ${logoMark()}
      <span class="logo-text"><span class="logo-name" aria-hidden="true">${esc(me.firstName)} ${esc(me.lastName)}</span><span class="logo-title" aria-hidden="true">${esc(me.title)}</span></span>
    </a>`;

  // Profile card: your photo with the school above and your program below.
  const portrait = (opts = {}) => {
    const lines = opts.lines || [me.degreeLine, me.gradLine];
    return `<figure class="player-card ${opts.cls || ""}">
      <p class="pc-school"><span>${esc(opts.header ?? me.school)}</span></p>
      <div class="pc-photo"><img src="${esc(opts.photo || me.photo)}" alt="${esc(opts.alt || me.photoAlt)}" width="900" height="900" decoding="async"></div>
      <figcaption class="pc-info">
        <strong>${esc(opts.title ?? me.title)}</strong>
        ${lines.filter(Boolean).map((l) => `<span>${esc(l)}</span>`).join("")}
      </figcaption>
      
    </figure>`;
  };

  /* ---------- Icons ---------- */
  const svg = (d, extra = "") => `<svg class="ic" viewBox="0 0 24 24" aria-hidden="true" focusable="false" ${extra}>${d}</svg>`;
  const ICONS = {
    home: svg('<path d="M12 3.2 3 10.6V20a1 1 0 0 0 1 1h5v-6h6v6h5a1 1 0 0 0 1-1v-9.4z" fill="currentColor"/>'),
    grid: svg('<path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" fill="currentColor"/>'),
    plus: svg('<path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" fill="none"/>'),
    inbox: svg('<path d="M4 4h16v13H8l-4 4z" fill="currentColor"/><path d="M8 9h8M8 12.5h5" stroke="#000" stroke-width="1.6" stroke-linecap="round"/>'),
    user: svg('<circle cx="12" cy="8" r="4.2" fill="currentColor"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7z" fill="currentColor"/>'),
    heart: svg('<path d="M12 20.6s-8.2-4.9-8.2-11A4.6 4.6 0 0 1 12 6.8a4.6 4.6 0 0 1 8.2 2.8c0 6.1-8.2 11-8.2 11z" fill="currentColor"/>'),
    comment: svg('<path d="M4 4h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-8l-5 4v-4H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" fill="currentColor"/><circle cx="8.5" cy="10.5" r="1.3" fill="#000"/><circle cx="12" cy="10.5" r="1.3" fill="#000"/><circle cx="15.5" cy="10.5" r="1.3" fill="#000"/>'),
    bookmark: svg('<path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4.6L5 21V4a1 1 0 0 1 1-1z" fill="currentColor"/>'),
    share: svg('<path d="M14 4l7 7.5-7 7.5v-4.5c-5 0-8.4 1.6-10 5 .4-5.6 3.6-9.4 10-10z" fill="currentColor"/>'),
    search: svg('<circle cx="10.5" cy="10.5" r="6" stroke="currentColor" stroke-width="2.4" fill="none"/><path d="M15 15l5 5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>'),
    back: svg('<path d="M15 5l-7 7 7 7" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>'),
    note: svg('<path d="M9 18V6l10-2v12" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/><circle cx="7" cy="18" r="2.6" fill="currentColor"/><circle cx="17" cy="16" r="2.6" fill="currentColor"/>'),
    play: svg('<path d="M7 4.5v15l13-7.5z" fill="currentColor"/>'),
    close: svg('<path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" fill="none"/>'),
    link: svg('<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" fill="none"/>')
  };

  /* ---------- Navigation (bottom tab bar on phones, left sidebar on larger screens) + footer ---------- */
  const NAV = [
    { href: "index.html", label: "Home", key: "home", icon: "home" },
    { href: "work.html", label: "Work", key: "work", icon: "grid" },
    { href: "contact.html", label: "Contact", key: "contact", icon: "plus", create: true },
    { href: "resume.html", label: "Resume", key: "resume", icon: "inbox" },
    { href: "about.html", label: "Profile", key: "about", icon: "user" }
  ];

  /* One-time notice: shown the first time someone opens the site in a visit, then not again. */
  function showDisclaimer() {
    let seen = false;
    try { seen = sessionStorage.getItem("tt-disclaimer") === "1"; sessionStorage.setItem("tt-disclaimer", "1"); } catch (e) {}
    if (seen) return;
    const bar = document.createElement("div");
    bar.className = "tt-disclaimer";
    bar.setAttribute("role", "status");
    bar.innerHTML = `<p>Visual style inspired by TikTok’s app. Independent project; not affiliated with TikTok.</p><button type="button" aria-label="Dismiss notice">${ICONS.close}</button>`;
    const off = () => { bar.classList.add("is-out"); setTimeout(() => bar.remove(), 350); };
    bar.querySelector("button").addEventListener("click", off);
    document.body.appendChild(bar);
    setTimeout(off, 9000);
  }

  function renderChrome() {
    const page = document.body.dataset.page;
    const header = document.getElementById("hud");
    if (header) {
      header.innerHTML = `
        <a class="skip" href="#main">Skip to content</a>
        <nav class="tt-nav" aria-label="Main">
          <a class="tt-brand" href="index.html" aria-label="${esc(me.firstName)} ${esc(me.lastName)}, home"><span class="logo-mono" aria-hidden="true">LC</span><span class="tt-brand-name">${esc(me.firstName)} ${esc(me.lastName)}</span></a>
          <ul class="tt-links">
            ${NAV.map(
              (n) =>
                `<li><a href="${n.href}" class="tt-link${n.create ? " tt-link--create" : ""}${page === n.key || (page === "project" && n.key === "work") ? " is-active" : ""}"${page === n.key ? ' aria-current="page"' : ""}><span class="tt-ico">${ICONS[n.icon]}</span><span class="tt-label">${n.label}</span></a></li>`
            ).join("")}
          </ul>
<a class="tt-std" href="https://layilahnasser.github.io/layilahcportfolio2026-/">Standard portfolio <span aria-hidden="true">↗</span></a>
        </nav>`;
    }
    const footer = document.getElementById("footer");
    if (footer) {
      footer.innerHTML = page === "home" ? "" : `
        <div class="footer-inner">
          <p>Designed by ${esc(me.firstName)} ${esc(me.lastName)}. Built with Claude Code. Visual style inspired by TikTok’s app; this is an independent project and is not affiliated with TikTok.</p>
          <p class="footer-links">
            ${me.email ? `<a href="mailto:${esc(me.email)}">Email</a>` : ""}
            ${me.linkedin ? `<a href="${esc(me.linkedin)}" target="_blank" rel="noopener">LinkedIn<span class="sr-only"> (opens in a new tab)</span></a>` : ""}
            <a href="resume.html">Resume</a>
            <a href="https://layilahnasser.github.io/layilahcportfolio2026-/">Standard portfolio</a>
          </p>
        </div>`;
    }
    showDisclaimer();
  }

  window.LANES = { esc, t, isTodo, plain, img, ballSVG, logo, portrait, ICONS };
  renderChrome();
})();
