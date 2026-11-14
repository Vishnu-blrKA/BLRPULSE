// Renders events (events.js) and internships (internships.js) with search, categories, filters and tabs.
(function () {
  const $ = (id) => document.getElementById(id);
  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // ─── Icons (Lucide, MIT) ──────────────────────────────────
  const ICONS = {
    calendar: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    calendarPlus: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M12 14v4M10 16h4"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    ticket: '<path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2M13 17v2M13 11v2"/>',
    trophy: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22M18 2H6v7a6 6 0 0 0 12 0V2Z"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    lock: '<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    check: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
    external: '<path d="M7 7h10v10M7 17 17 7"/>',
    wallet: '<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',
    hourglass: '<path d="M5 22h14M5 2h14M17 22v-4.17a2 2 0 0 0-.59-1.42L12 12l-4.41 4.41A2 2 0 0 0 7 17.83V22M7 2v4.17a2 2 0 0 0 .59 1.42L12 12l4.41-4.41A2 2 0 0 0 17 6.17V2"/>',
    grad: '<path d="M21.42 10.92a1 1 0 0 0-.02-1.84L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.83l8.57 3.91a2 2 0 0 0 1.66 0zM22 10v6M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
    building: '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2M10 6h4M10 10h4M10 14h4M10 18h4"/>',
    Hackathon: '<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>',
    "Tech Fest": '<path d="M9.94 15.5A2 2 0 0 0 8.5 14.06l-6.14-1.58a.5.5 0 0 1 0-.96L8.5 9.94A2 2 0 0 0 9.94 8.5l1.58-6.14a.5.5 0 0 1 .96 0L14.06 8.5A2 2 0 0 0 15.5 9.94l6.14 1.58a.5.5 0 0 1 0 .96L15.5 14.06a2 2 0 0 0-1.44 1.44l-1.58 6.14a.5.5 0 0 1-.96 0z"/><path d="M20 3v4M22 5h-4"/>',
    Conference: '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3"/>',
    Meetup: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
    Workshop: '<path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/>',
    Internship: '<rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  };
  const icon = (name) => `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ICONS.calendar}</svg>`;

  // ─── Helpers ──────────────────────────────────────────────
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const parse = (s) => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
  const daysUntil = (s) => Math.round((parse(s) - today) / 86400000);
  const fmt = (s) => { const d = parse(s); return `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`; };
  const ymd = (d) => `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const matches = (q, fields) => !q || fields.join(" ").toLowerCase().includes(q);
  const fill = (sel, values) =>
    [...new Set(values)].sort().forEach((v) => sel.insertAdjacentHTML("beforeend", `<option value="${esc(v)}">${esc(v)}</option>`));
  const mapsURL = (place) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${place}, Bengaluru`)}`;

  function deadlineHTML(deadline, verb = "apply") {
    if (!deadline) return "";
    const n = daysUntil(deadline);
    if (n < 0) return `<div class="deadline closed">${icon("lock")}Applications closed</div>`;
    if (n === 0) return `<div class="deadline soon">${icon("clock")}Applications close today</div>`;
    if (n <= 7) return `<div class="deadline soon">${icon("clock")}${n} day${n > 1 ? "s" : ""} left to ${verb} · by ${fmt(deadline)}</div>`;
    return `<div class="deadline open">${icon("check")}Apply by ${fmt(deadline)}</div>`;
  }

  // ─── Data ─────────────────────────────────────────────────
  const events = (window.EVENTS || []).slice().sort((a, b) => parse(a.startDate) - parse(b.startDate));
  const endOf = (e) => e.endDate || e.startDate;
  const isPast = (e) => daysUntil(endOf(e)) < 0;
  const isOpen = (e) => !isPast(e) && (!e.applyDeadline || daysUntil(e.applyDeadline) >= 0);
  const upcoming = events.filter((e) => !isPast(e));

  const internships = (window.INTERNSHIPS || []).slice().sort(
    (a, b) => parse(a.applyDeadline || "2999-01-01") - parse(b.applyDeadline || "2999-01-01")
  );
  const iOpen = (i) => !i.applyDeadline || daysUntil(i.applyDeadline) >= 0;

  // ─── State ────────────────────────────────────────────────
  const state = { q: "", type: "", area: "", cost: "", when: "upcoming", field: "", mode: "", pay: "", istatus: "open" };

  // ─── Hero quotes ──────────────────────────────────────────
  const QUOTES = [
    "Bangalore never runs out of opportunities. We just keep missing them because they're scattered across a hundred places.",
    "Every weekend in this city, someone ships their first project at a hackathon, lands an internship, or meets their co-founder at a meetup. It should be easy to be in that room.",
    "Thousands of startups, the biggest tech companies on the planet, and some of the best colleges in India — all in one city. All of that deserves one place to find it.",
    "The best opportunities in Bengaluru aren't hidden. They're just buried in WhatsApp forwards, LinkedIn posts and college notice boards.",
  ];
  let qi = 0;
  let qTimer = null;
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  $("quote-dots").innerHTML = QUOTES.map(
    (_, i) => `<button type="button" class="qdot" data-i="${i}" aria-label="Show quote ${i + 1} of ${QUOTES.length}"></button>`
  ).join("");
  function showQuote(i) {
    qi = (i + QUOTES.length) % QUOTES.length;
    const el = $("quote-text");
    el.classList.remove("in");
    void el.offsetWidth; // restart fade-in
    el.textContent = QUOTES[qi];
    el.classList.add("in");
    document.querySelectorAll(".qdot").forEach((d, j) => d.setAttribute("aria-current", String(j === qi)));
  }
  const startQuotes = () => { if (!reduceMotion && !qTimer) qTimer = setInterval(() => showQuote(qi + 1), 7000); };
  const stopQuotes = () => { clearInterval(qTimer); qTimer = null; };
  $("quote-dots").addEventListener("click", (ev) => {
    const d = ev.target.closest(".qdot");
    if (d) { showQuote(Number(d.dataset.i)); stopQuotes(); startQuotes(); }
  });
  $("quote").addEventListener("mouseenter", stopQuotes);
  $("quote").addEventListener("mouseleave", startQuotes);
  $("quote").addEventListener("focusin", stopQuotes);
  $("quote").addEventListener("focusout", startQuotes);
  showQuote(0);
  startQuotes();

  // ─── Static UI built from data ────────────────────────────
  fill($("type"), events.map((e) => e.type));
  fill($("area"), events.map((e) => e.area));
  fill($("field"), internships.map((i) => i.field));
  fill($("mode"), internships.map((i) => i.mode));

  $("stats").innerHTML = [
    [upcoming.filter((e) => e.type === "Hackathon").length, "hackathons"],
    [upcoming.filter((e) => e.type === "Tech Fest").length, "tech fests"],
    [upcoming.length, "upcoming events"],
    [internships.filter(iOpen).length, "open internships"],
  ].map(([n, l]) => `<div class="stat"><b>${n}</b><span>${l}</span></div>`).join("");

  const CATS = [
    ["Hackathon", "Hackathons", "Build, ship, win prizes"],
    ["Tech Fest", "Tech Fests", "Company & college fests"],
    ["Internship", "Internships", "Stipends & deadlines"],
    ["Meetup", "Meetups", "Talks & networking"],
    ["Workshop", "Workshops", "Hands-on learning"],
    ["Conference", "Conferences", "Full-day tracks"],
  ];
  $("categories").innerHTML = CATS.map(([t, label, blurb]) => {
    const n = t === "Internship" ? internships.filter(iOpen).length : upcoming.filter((e) => e.type === t).length;
    const what = t === "Internship" ? "open" : "upcoming";
    return `<button class="cat" type="button" data-type="${t}" aria-pressed="false">
      <span class="cat-icon">${icon(t)}</span>
      <span><b>${label}</b><span>${n} ${what} · ${blurb}</span></span>
    </button>`;
  }).join("");

  // Popular searches: most-used tags/skills across upcoming events + open internships
  const tagCounts = {};
  const bump = (t) => (tagCounts[t] = (tagCounts[t] || 0) + 1);
  upcoming.forEach((e) => (e.tags || []).forEach(bump));
  internships.filter(iOpen).forEach((i) => (i.skills || []).forEach(bump));
  const popular = ["internship", ...Object.entries(tagCounts).sort((a, b) => b[1] - a[1]).map(([t]) => t)]
    .filter((t, i, a) => a.findIndex((x) => x.toLowerCase() === t.toLowerCase()) === i)
    .slice(0, 6);
  $("popular").insertAdjacentHTML("beforeend", popular.map((t) => `<button class="chip" type="button" data-q="${esc(t)}">${esc(t)}</button>`).join(""));

  // ─── Event cards ──────────────────────────────────────────
  function calendarURL(e) {
    const end = parse(endOf(e));
    end.setDate(end.getDate() + 1); // all-day events use an exclusive end date
    const p = new URLSearchParams({
      action: "TEMPLATE",
      text: e.name,
      dates: `${ymd(parse(e.startDate))}/${ymd(end)}`,
      details: `${e.description}\n\nApply: ${e.applyLink}`,
      location: `${e.venue}, ${e.area}, Bengaluru`,
    });
    return `https://calendar.google.com/calendar/render?${p}`;
  }

  function eventCard(e) {
    const s = parse(e.startDate);
    const range = e.endDate && e.endDate !== e.startDate ? `${fmt(e.startDate)} – ${fmt(e.endDate)}` : fmt(e.startDate);
    const open = isOpen(e);
    const past = isPast(e);
    return `
      <article class="card" data-type="${esc(e.type)}">
        <div class="card-top">
          <div class="pills">
            <span class="type-pill">${icon(e.type)}${esc(e.type)}</span>${e.free ? '<span class="free-pill">Free</span>' : ""}
          </div>
          <div class="date-badge" aria-hidden="true"><span class="m">${MONTHS[s.getMonth()]}</span><span class="d">${s.getDate()}</span></div>
        </div>
        ${e.company ? `<div class="host">${icon("building")}Hosted by <b>${esc(e.company)}</b></div>` : ""}
        <h3>${esc(e.name)}</h3>
        <p class="organiser">by ${esc(e.organiser)}</p>
        <p class="desc">${esc(e.description)}</p>
        <ul class="meta">
          <li>${icon("calendar")}<span>${range}${e.time ? ` · ${esc(e.time)}` : ""}</span></li>
          <li>${icon("pin")}<span><a href="${mapsURL(`${e.venue}, ${e.area}`)}" target="_blank" rel="noopener">${esc(e.venue)}, ${esc(e.area)}${icon("external")}</a></span></li>
          <li>${icon("ticket")}<span>${e.free ? "Free entry" : esc(e.price || "Paid")}</span></li>
          ${e.prize ? `<li>${icon("trophy")}<span>${esc(e.prize)}</span></li>` : ""}
          ${e.teamSize ? `<li>${icon("users")}<span>Teams of ${esc(e.teamSize)}</span></li>` : ""}
        </ul>
        ${deadlineHTML(e.applyDeadline)}
        <div class="tags">${(e.tags || []).map((t) => `<span class="tag">#${esc(t)}</span>`).join("")}</div>
        <div class="card-actions">
          ${open
            ? `<a class="btn" href="${esc(e.applyLink)}" target="_blank" rel="noopener">Apply / Register${icon("external")}</a>`
            : `<span class="btn" aria-disabled="true">${past ? "Event ended" : "Applications closed"}</span>`}
          ${past ? "" : `<a class="btn-ghost" href="${calendarURL(e)}" target="_blank" rel="noopener" aria-label="Add ${esc(e.name)} to Google Calendar">${icon("calendarPlus")}<span>Calendar</span></a>`}
        </div>
      </article>`;
  }

  // ─── Internship cards ─────────────────────────────────────
  function internCard(i) {
    const open = iOpen(i);
    const initials = i.company.replace(/\(.*?\)/g, "").trim().split(/\s+/).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
    const place = i.mode === "Remote" ? "Remote" : `${esc(i.mode)} · <a href="${mapsURL(i.area)}" target="_blank" rel="noopener">${esc(i.area)}${icon("external")}</a>`;
    return `
      <article class="card intern" data-type="Internship">
        <div class="card-top">
          <div class="company">
            <span class="avatar" aria-hidden="true">${esc(initials)}</span>
            <span><b>${esc(i.company)}</b><span class="field">${esc(i.field)}</span></span>
          </div>
          <span class="mode-pill mode-${slug(i.mode)}">${esc(i.mode)}</span>
        </div>
        <h3>${esc(i.role)}</h3>
        <p class="desc">${esc(i.description)}</p>
        <ul class="meta">
          <li>${icon("wallet")}<span class="${i.paid ? "stipend" : ""}">${esc(i.stipend || (i.paid ? "Paid" : "Unpaid"))}</span></li>
          <li>${icon("hourglass")}<span>${esc(i.duration)}${i.startDate ? ` · starts ${fmt(i.startDate)}` : ""}</span></li>
          <li>${icon("pin")}<span>${place}</span></li>
          ${i.eligibility ? `<li>${icon("grad")}<span>${esc(i.eligibility)}</span></li>` : ""}
        </ul>
        ${deadlineHTML(i.applyDeadline)}
        <div class="tags">${(i.skills || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
        <div class="card-actions">
          ${open
            ? `<a class="btn" href="${esc(i.applyLink)}" target="_blank" rel="noopener">Apply now${icon("external")}</a>`
            : `<span class="btn" aria-disabled="true">Applications closed</span>`}
        </div>
      </article>`;
  }

  // ─── Render ───────────────────────────────────────────────
  const plural = (n, word) => `${n} ${word}${n === 1 ? "" : "s"}`;

  function renderEvents() {
    const q = state.q.toLowerCase();
    // "internship" as a search term targets the internships section, not events
    const eq = q === "internship" || q === "internships" ? "" : q;
    let list = events.filter((e) => {
      if (state.when === "upcoming" && isPast(e)) return false;
      if (state.when === "open" && !isOpen(e)) return false;
      if (state.when === "past" && !isPast(e)) return false;
      if (state.type && e.type !== state.type) return false;
      if (state.area && e.area !== state.area) return false;
      if (state.cost === "free" && !e.free) return false;
      if (state.cost === "paid" && e.free) return false;
      return matches(eq, [e.name, e.organiser, e.company, e.description, e.venue, e.area, e.type, ...(e.tags || [])]);
    });
    if (state.when === "past") list = list.reverse();
    if (state.when === "open") list.sort((a, b) => parse(a.applyDeadline || a.startDate) - parse(b.applyDeadline || b.startDate));

    $("grid").innerHTML = list.map(eventCard).join("");
    $("count").textContent = `Showing ${plural(list.length, "event")}`;
    $("empty").hidden = list.length > 0;
    $("clear").hidden = !(state.q || state.type || state.area || state.cost);
    $("empty-hint").textContent = state.q
      ? `Nothing for “${state.q}”. Try a broader word like “AI” or “web”, or check the Past tab.`
      : "Try another area or type, or check the Past tab.";
  }

  function renderInternships() {
    const q = state.q.toLowerCase();
    const iq = q === "internship" || q === "internships" ? "" : q;
    const list = internships.filter((i) => {
      if (state.istatus === "open" && !iOpen(i)) return false;
      if (state.istatus === "closed" && iOpen(i)) return false;
      if (state.field && i.field !== state.field) return false;
      if (state.mode && i.mode !== state.mode) return false;
      if (state.pay === "paid" && !i.paid) return false;
      return matches(iq, [i.role, i.company, i.field, i.mode, i.area, i.description, i.eligibility, ...(i.skills || [])]);
    });
    $("igrid").innerHTML = list.map(internCard).join("");
    $("icount").textContent = `Showing ${plural(list.length, "internship")}`;
    $("iempty").hidden = list.length > 0;
    $("iclear").hidden = !(state.q || state.field || state.mode || state.pay);
    $("iempty-hint").textContent = state.q ? `Nothing for “${state.q}”. Try a skill like “Python” or a field like “Design”.` : "Try another field or work mode.";
  }

  function render() {
    renderEvents();
    renderInternships();
    // Sync controls with state
    $("search").value !== state.q && ($("search").value = state.q);
    ["type", "area", "cost", "field", "mode", "pay"].forEach((id) => ($(id).value = state[id]));
    document.querySelectorAll(".cat").forEach((c) => c.setAttribute("aria-pressed", String(c.dataset.type === state.type)));
    document.querySelectorAll(".tab[data-when]").forEach((t) => t.setAttribute("aria-selected", String(t.dataset.when === state.when)));
    document.querySelectorAll(".tab[data-istatus]").forEach((t) => t.setAttribute("aria-selected", String(t.dataset.istatus === state.istatus)));
  }

  const set = (patch) => { Object.assign(state, patch); render(); };
  const goTo = (id) => $(id).scrollIntoView({ block: "start" });
  const searchTarget = () => {
    const q = state.q.toLowerCase();
    if (q.startsWith("intern")) return "internships";
    // If events has nothing but internships do, jump to internships
    return $("grid").children.length === 0 && $("igrid").children.length > 0 ? "internships" : "events";
  };

  // ─── Wiring ───────────────────────────────────────────────
  $("search").addEventListener("input", (ev) => set({ q: ev.target.value.trim() }));
  $("search-form").addEventListener("submit", (ev) => { ev.preventDefault(); goTo(searchTarget()); });
  ["type", "area", "cost", "field", "mode", "pay"].forEach((id) => $(id).addEventListener("change", (ev) => set({ [id]: ev.target.value })));
  document.querySelectorAll(".tab[data-when]").forEach((b) => b.addEventListener("click", () => set({ when: b.dataset.when })));
  document.querySelectorAll(".tab[data-istatus]").forEach((b) => b.addEventListener("click", () => set({ istatus: b.dataset.istatus })));
  $("categories").addEventListener("click", (ev) => {
    const b = ev.target.closest(".cat");
    if (!b) return;
    if (b.dataset.type === "Internship") { goTo("internships"); return; }
    set({ type: state.type === b.dataset.type ? "" : b.dataset.type });
    goTo("events");
  });
  $("popular").addEventListener("click", (ev) => {
    const b = ev.target.closest(".chip");
    if (!b) return;
    set({ q: b.dataset.q });
    goTo(searchTarget());
  });
  const clearEvents = () => set({ q: "", type: "", area: "", cost: "" });
  const clearInterns = () => set({ q: "", field: "", mode: "", pay: "" });
  $("clear").addEventListener("click", clearEvents);
  $("empty-clear").addEventListener("click", clearEvents);
  $("iclear").addEventListener("click", clearInterns);
  $("iempty-clear").addEventListener("click", clearInterns);

  render();
})();
