if ("scrollRestoration" in history) history.scrollRestoration = "manual";
addEventListener("DOMContentLoaded", () => window.scrollTo(0, 0));
addEventListener("load", () => window.scrollTo(0, 0));

/* ============ CONFIG: edit these when details are final ============ */
const FEST_DATE = null;            // e.g. "2027-03-12T09:30:00+05:30" (Day 1, 9:30 AM IST). null = "dates to be announced"
const LINKS = { register: "#", instagram: "https://www.instagram.com/ranvita.cmru/?hl=en", website: "#" };
/* =================================================================== */

const EVENTS = [
  { n:1, name:"Fashion Show", s:5, team:"10 + 2 per team", time:"6 + 1 min", desc:"Walk the runway of the living earth! Participants embody the raw beauty and untamed elements of nature, flaunting style, grace, and commanding stage presence.",
    rules:["Audio/video tracks submitted 2 days prior, carried on a pen drive","Props allowed; flammable or sharp objects strictly prohibited","No vulgarity in clothing will be tolerated","Judging: theme relevance, choreography, coordination, creativity, deportment"] },
  { n:2, name:"Runway (360° Forest Underground)", s:5, team:"5 per team (1 model, 1 lead designer, 3 helpers)", time:"3 rounds", desc:"Step into India's first 360° forest underground runway! Designers race against time to sculpt raw, nature-inspired couture while models command the spotlight.",
    rules:["Outfits crafted on the spot between 9:30 AM and 12:30 PM; runway begins 1:30 PM","Strictly nature-themed (Echoes of Earth); pre-stitched outfits allowed","Judging: ramp walk, posture, confidence, attitude, craftsmanship, creativity, theme alignment","No vulgarity in clothing will be tolerated"] },
  { n:3, name:"Indian Group Dance", s:5, team:"8 – 15 per team", time:"5 + 1 min", desc:"Celebrate the rhythmic heartbeat of the soil! Teams bring ancient traditions and vibrant folk heritage to life with electrifying synchronization and grace.",
    rules:["Classical, semi-classical, folk or Indian fusion permitted","Audio tracks submitted 2 days prior on a pen drive","Traditional props allowed; fire, water, glass or powder prohibited","Judging: choreography, synchronization, expressions, costume, stage utilization"] },
  { n:4, name:"Western Group Dance", s:5, team:"8 – 15 per team", time:"5 + 1 min", desc:"Unleash seismic energy across the stage! Crews collide in a high-voltage showcase of precision, raw rhythm, and unstoppable choreography.",
    rules:["Hip-hop, contemporary, locking, popping, jazz or freestyle fusion","Audio tracks submitted 2 days prior on a pen drive","Non-hazardous props allowed; liquids, fire or sharp objects prohibited","Vulgarity in moves or attire leads to disqualification"] },
  { n:5, name:"Council Wars", s:5, team:"Core council members per college", time:"Multi-round", desc:"Where student leaders clash for ultimate dominion! Councils battle through high-pressure crises and strategic face-offs to prove who truly rules the arena.",
    rules:["Only official student council representatives with valid college IDs","Mobile phones and external assistance prohibited during rounds","Judging: leadership, presence of mind, teamwork, persuasiveness, problem-solving"] },
  { n:6, name:"Beat Boxing Battle", s:5, team:"Individual (1 vs 1 knockout)", time:"90 sec prelims · 2 min finals", desc:"One mic, raw breath, and earth-shaking bass! Solo vocal percussionists go head-to-head, turning pure rhythm into an explosive sonic battleground.",
    rules:["Microphones provided; loop stations and voice processors prohibited","Physical contact or offensive gestures lead to disqualification","Judging: originality, technicality, rhythm, crowd control, musicality"] },
  { n:7, name:"Battle of Bands", s:5, team:"5 – 9 per band", time:"10 + 3 min", desc:"Turn the volume up until the ground trembles! Live bands unleash roaring riffs, thunderous percussion, and electrifying stage energy.",
    rules:["Live originals or covers; pre-recorded backing tracks prohibited","Bring your own instruments; standard 5-piece drum kit provided","Exceeding the time limit results in negative marking","Judging: tightness, originality, stage presence, tonal balance, crowd engagement"] },
  { n:8, name:"Mad Ads", s:5, team:"5 – 8 per team", time:"4 + 1 min", desc:"Turn wild ideas into pure comedic fire! Teams pitch bizarre, out-of-this-world products with razor-sharp wit, theatrical chaos, and unstoppable humor.",
    rules:["Products/topics allotted on the spot with 15 minutes prep","English, Hindi or Kannada; no offensive or derogatory content","Judging: humor, creativity, spontaneity, teamwork, brand recall"] },
  { n:9, name:"Group Singing", s:5, team:"6 – 10 per team (incl. accompanists)", time:"5 + 2 min", desc:"Let your voices echo across the horizon! Ensembles blend rich harmonies and soul-stirring melodies into an unforgettable acoustic experience.",
    rules:["Indian, Western or fusion vocals; karaoke tracks permitted","Bring your own instruments; standard drum kit provided","Judging: vocal harmony, pitch, rhythm, song selection, coordination"] },
  { n:10, name:"Drama (Stage / Street Play)", s:5, team:"8 – 15 per team", time:"10 + 2 min", desc:"Bring raw human emotion and powerful stories to life! Ensembles captivate the audience through gripping narratives and theatrical brilliance.",
    rules:["English, Hindi or Kannada","Handheld props allowed; fire, water or hazardous items prohibited","Offensive political or religious remarks lead to disqualification","Judging: script, acting, voice modulation, stage direction, emotional impact"] },
  { n:11, name:"Duo Dance", s:4, team:"2 per team (any combination)", time:"3 + 1 min", desc:"Two bodies moving to a single primal rhythm! Duos command the stage with seamless chemistry, dynamic synchronization, and expressive storytelling.",
    rules:["Any dance style or fusion permitted","Audio tracks submitted 2 days prior on a pen drive","No hazardous props or vulgarity","Judging: chemistry, synchronization, choreography, expressions, stage utilization"] },
  { n:12, name:"Solo Singing", s:4, team:"Individual", time:"3 + 1 min", desc:"Let a single voice echo across the arena! Solo vocalists captivate the crowd with raw emotion, tonal mastery, and soul-stirring melodies.",
    rules:["Indian or Western vocals; one acoustic accompanist or karaoke track","Karaoke tracks submitted 2 days prior on a pen drive","Auto-tune and pitch-correction devices prohibited","Judging: pitch, rhythm, vocal range, expression, song selection"] },
  { n:13, name:"Solo Dance", s:4, team:"Individual", time:"3 + 1 min", desc:"Own the spotlight with raw power and grace! Solo dancers channel the untamed rhythm of the earth through electrifying footwork and expression.",
    rules:["Classical, semi-classical, folk or Western styles","Audio tracks submitted 2 days prior on a pen drive","Fire, water, powder or sharp props strictly prohibited","Judging: choreography, technique, expressions, energy, stage presence"] },
  { n:14, name:"Dance Battle", s:4, team:"Individual (1 vs 1 knockout)", time:"45 sec prelims · 60 sec finals", desc:"No choreography, no second chances, just pure instinct! Street dancers clash head-to-head in a high-voltage battle of rhythm, grit, and raw freestyle.",
    rules:["Tracks played on the spot by the DJ","Physical contact or derogatory gestures lead to disqualification","Judging: musicality, freestyle creativity, attitude, adaptability, crowd impact"] },
  { n:15, name:"Photography", s:4, team:"Individual", time:"Through the fest", desc:"Freeze the fleeting echoes of Ranvita across two thrilling lenses: full-fest coverage or the 360° underground runway.",
    rules:["Tracks: Ranvita Campus Chronicle · 360° Runway Photography","DSLR, mirrorless or mobile; drones and external flashes at the runway restricted","Only basic colour/light edits; no composites or AI edits","Submit RAW + JPEG 2 hours before the Valedictory ceremony","All photos shot live on campus during Ranvita"] },
  { n:16, name:"Reel Making", s:4, team:"1 – 3 per team", time:"30 – 60 sec reel", desc:"Turn the high-fashion drama of India's first 360° forest underground runway into viral visual art in one gripping reel.",
    rules:["Vertical 9:16 format (MP4/MOV)","All footage shot live on campus during Ranvita; no stock or pre-shot clips","Submit 2 hours before the Valedictory ceremony","Judging: storytelling, transitions, visual appeal, beat sync, runway essence"] },
  { n:17, name:"Gaming Tournament – BGMI", s:3, team:"4 per squad (1 substitute optional)", time:"Custom room matches", desc:"Drop into the battleground where only the sharpest survive! Squads clash in intense tactical warfare for ultimate survival and supremacy.",
    rules:["Maps: Erangel, Miramar, Sanhok; points by placement and finishes","Bring your own phone, charger and earphones (no tablets/emulators)","Hacks, third-party scripts or teaming lead to immediate disqualification","Internet connectivity is the player's responsibility"] },
  { n:18, name:"Best Out of Nature", s:3, team:"2 – 4 per team", time:"2 hours", desc:"Sculpt a living world in miniature! Teams transform raw soil, moss, bark, twigs, and pebbles into intricate woodland landscapes.",
    rules:["3D miniature natural scenery diorama (Echoes of Earth)","Only 100% natural, biodegradable, found elements","No plucking live plants, plastic, thermocol, artificial grass or figurines","Bring your own base (max 2×2 ft) and eco-friendly adhesives"] },
  { n:19, name:"Debate", s:3, team:"2 per team (For / Against) or individual", time:"3 + 1 min speech · 1 min rebuttal", desc:"Where sharp intellect meets persuasive fire! Orators clash over pressing global and environmental issues with logic and fearless conviction.",
    rules:["English; topics given on the spot","No reading from phones or scripts","Unparliamentary language leads to disqualification","Judging: content, logic, rebuttal strength, delivery, confidence"] },
  { n:20, name:"Face Painting", s:3, team:"2 per team (1 artist + 1 model)", time:"90 minutes", desc:"Turn the human canvas into a living tribute to nature! Artists bring intricate textures, wild elements, and bold imagination to life.",
    rules:["Theme: Echoes of Earth (sub-theme announced on the spot)","Bring your own skin-safe paints and brushes","Stencils and stickers prohibited","Judging: creativity, neatness, colour blending, theme depiction, visual impact"] }
];

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const stars = n => "★".repeat(n);

/* ---------- Nav, progress ---------- */
const nav = $("#nav"), bar = $("#progress"), burger = $("#burger"), links = $("#links");
addEventListener("scroll", () => {
  nav.classList.toggle("solid", scrollY > 40);
  const h = document.documentElement;
  bar.style.width = (scrollY / (h.scrollHeight - h.clientHeight) * 100) + "%";
}, { passive: true });
burger.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
$$("a", links).forEach(a => a.addEventListener("click", () => { links.classList.remove("open"); burger.setAttribute("aria-expanded", false); }));

/* ---------- Links ---------- */
$("#registerLink").href = LINKS.register;
$("#instaLink").href = LINKS.instagram;
$("#siteLink").href = LINKS.website;

/* ---------- Hero RANVITA hover reel ---------- */
const hero = $(".hero");
const heroTitle = $(".glitch");
if (hero && heroTitle) {
  const heroVideos = $$(".hero-reel-video", hero);
  const firstHeroVideo = $(".hero-reel-one", hero);
  const secondHeroVideo = $(".hero-reel-two", hero);
  let remixTimer = null;
  let remixElapsed = 0;
  let clipIndex = 0;
  let firstClipOffset = 0;
  let secondClipOffset = 90;

  const seekToNextTwoSecondClip = (video, offset) => {
    if (!Number.isFinite(video.duration) || video.duration <= 0) return 0;
    const nextOffset = offset + 2 < video.duration ? offset : 0;
    video.currentTime = nextOffset;
    return nextOffset + 2 < video.duration ? nextOffset + 2 : 0;
  };

  const startHeroReel = () => {
    clearInterval(remixTimer);
    remixElapsed = 0;
    clipIndex = 0;
    firstClipOffset = 0;
    secondClipOffset = 90;
    hero.classList.remove("stage-two");
    hero.classList.add("stage-one");
    firstHeroVideo.currentTime = 0;
    secondHeroVideo.currentTime = 90;
    secondHeroVideo.pause();
    firstHeroVideo.play().catch(() => {});

    remixTimer = setInterval(() => {
      remixElapsed += 2;
      clipIndex++;
      const useFirstVideo = clipIndex % 2 === 0;
      const activeVideo = useFirstVideo ? firstHeroVideo : secondHeroVideo;
      const inactiveVideo = useFirstVideo ? secondHeroVideo : firstHeroVideo;

      inactiveVideo.pause();
      hero.classList.toggle("stage-one", useFirstVideo);
      hero.classList.toggle("stage-two", !useFirstVideo);

      if (useFirstVideo) {
        firstHeroVideo.currentTime = firstClipOffset;
        firstClipOffset = seekToNextTwoSecondClip(firstHeroVideo, firstClipOffset);
      } else {
        secondHeroVideo.currentTime = secondClipOffset;
        secondClipOffset = seekToNextTwoSecondClip(secondHeroVideo, secondClipOffset);
      }
      activeVideo.play().catch(() => {});

      if (remixElapsed >= 60) {
        remixElapsed = 0;
        clipIndex = -1;
        firstHeroVideo.currentTime = 0;
        secondHeroVideo.currentTime = 90;
        firstClipOffset = 2;
        secondClipOffset = 90;
        secondHeroVideo.pause();
        hero.classList.remove("stage-two");
        hero.classList.add("stage-one");
        firstHeroVideo.play().catch(() => {});
      }
    }, 2000);
  };

  const activateHeroReel = () => {
    hero.classList.add("reel-active");
    startHeroReel();
  };
  const deactivateHeroReel = () => {
    clearInterval(remixTimer);
    hero.classList.remove("reel-active");
    heroVideos.forEach(video => video.pause());
  };

  heroTitle.addEventListener("mouseenter", activateHeroReel);
  heroTitle.addEventListener("mouseleave", deactivateHeroReel);
  heroTitle.addEventListener("focus", activateHeroReel);
  heroTitle.addEventListener("blur", deactivateHeroReel);
}

/* ---------- Video slideshow ---------- */
const slideshow = $("#videoSlideshow");
if (slideshow) {
  const slides = $$(".video-slide", slideshow);
  const dots = $$(".video-dot", slideshow);
  const soundButton = $(".video-sound", slideshow);
  const soundIcon = $(".sound-icon", soundButton);
  let currentSlide = 0;

  function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      const video = $("video", slide);
      slide.classList.toggle("active", i === currentSlide);
      dots[i].classList.toggle("active", i === currentSlide);
      if (i === currentSlide) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  $(".video-arrow.prev", slideshow).addEventListener("click", () => {
    showSlide(currentSlide - 1);
  });
  $(".video-arrow.next", slideshow).addEventListener("click", () => {
    nextSlide();
  });
  dots.forEach(dot => dot.addEventListener("click", () => {
    showSlide(+dot.dataset.slide);
  }));

  slides.forEach(slide => {
    $("video", slide).addEventListener("ended", nextSlide);
  });

  const slideshowVisibility = new IntersectionObserver(entries => {
    const visible = entries[0]?.isIntersecting;
    const activeVideo = $("video", slides[currentSlide]);
    if (visible) activeVideo.play().catch(() => {});
    else activeVideo.pause();
  }, { threshold: 0.55 });
  slideshowVisibility.observe(slideshow);

  soundButton.addEventListener("click", () => {
    const nextMuted = !slides[currentSlide].querySelector("video").muted;
    slides.forEach(slide => {
      const video = $("video", slide);
      video.muted = nextMuted;
    });
    const isMuted = slides[currentSlide].querySelector("video").muted;
    soundIcon.textContent = isMuted ? "🔇" : "🔊";
    soundButton.setAttribute("aria-label", isMuted ? "Unmute video" : "Mute video");
    soundButton.setAttribute("aria-pressed", String(!isMuted));
  });

  showSlide(0);
}

/* ---------- Reveal on scroll ---------- */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
const observeReveals = () => $$(".reveal:not(.in)").forEach(el => io.observe(el));

/* ---------- Count-up stats ---------- */
const cio = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  const el = e.target, end = +el.dataset.count, pre = el.dataset.prefix || "", t0 = performance.now(), dur = 1600;
  const tick = t => {
    const p = Math.min((t - t0) / dur, 1), v = Math.round(end * (1 - Math.pow(1 - p, 3)));
    el.textContent = pre + v.toLocaleString("en-IN");
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
  cio.unobserve(el);
}), { threshold: .6 });
$$("[data-count]").forEach(el => cio.observe(el));

/* ---------- Countdown ---------- */
const cd = $("#countdown");
function renderCountdown() {
  if (!FEST_DATE) { cd.innerHTML = '<div class="cd-tba">Dates to be announced</div>'; return; }
  const diff = new Date(FEST_DATE) - Date.now();
  if (diff <= 0) { cd.innerHTML = '<div class="cd-tba">Ranvita is live!</div>'; return; }
  const d = Math.floor(diff / 864e5), h = Math.floor(diff / 36e5) % 24, m = Math.floor(diff / 6e4) % 60, s = Math.floor(diff / 1e3) % 60;
  cd.innerHTML = [["Days", d], ["Hours", h], ["Mins", m], ["Secs", s]].map(([l, v]) => `<div class="cd"><b>${String(v).padStart(2, "0")}</b><span>${l}</span></div>`).join("");
}
renderCountdown();
if (FEST_DATE) setInterval(renderCountdown, 1000);

/* ---------- Events grid ---------- */
const grid = $("#eventGrid");
grid.innerHTML = EVENTS.map(e => `
  <button class="ev reveal" data-n="${e.n}" data-s="${e.s}" aria-label="${e.name} details">
    <span class="no">${String(e.n).padStart(2, "0")}</span>
    <h3>${e.name}</h3>
    <div class="stars" aria-label="${e.s} stars">${stars(e.s)}</div>
    <div class="meta">${e.team}<br>${e.time}</div>
    <span class="more">View details →</span>
  </button>`).join("");

let filter = "all", query = "";
function applyFilters() {
  let shown = 0;
  $$(".ev", grid).forEach(c => {
    const e = EVENTS[c.dataset.n - 1];
    const ok = (filter === "all" || String(e.s) === filter) && e.name.toLowerCase().includes(query);
    c.style.display = ok ? "" : "none";
    if (ok) shown++;
  });
  $("#empty").hidden = shown > 0;
}
$("#filters").addEventListener("click", e => {
  const b = e.target.closest(".chip"); if (!b) return;
  $$(".chip").forEach(c => c.classList.remove("active")); b.classList.add("active");
  filter = b.dataset.f; applyFilters();
});
$("#search").addEventListener("input", e => { query = e.target.value.trim().toLowerCase(); applyFilters(); });

/* tilt + spotlight on cards */
grid.addEventListener("pointermove", e => {
  const c = e.target.closest(".ev"); if (!c || e.pointerType === "touch") return;
  const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
  c.style.setProperty("--mx", x * 100 + "%"); c.style.setProperty("--my", y * 100 + "%");
  c.style.transform = `perspective(700px) rotateX(${(.5 - y) * 8}deg) rotateY(${(x - .5) * 8}deg) translateY(-4px)`;
});
grid.addEventListener("pointerout", e => { const c = e.target.closest(".ev"); if (c) c.style.transform = ""; });

/* ---------- Modal ---------- */
const modal = $("#modal"), mBody = $("#mBody");
let lastFocus = null;
function openModal(n) {
  const e = EVENTS[n - 1]; lastFocus = document.activeElement;
  mBody.innerHTML = `
    <h3 id="mTitle">${e.name}</h3>
    <div class="stars">${stars(e.s)}</div>
    <p class="desc">${e.desc}</p>
    <div class="pills"><span class="pill">👥 ${e.team}</span><span class="pill">⏱ ${e.time}</span></div>
    <h4 style="margin:18px 0 8px;color:#fff;font-family:var(--display)">Rules &amp; Judging</h4>
    <ul>${e.rules.map(r => `<li>${r}</li>`).join("")}</ul>
    <div class="pills"><span class="pill">1st Prize: TBD</span><span class="pill">2nd Prize: TBD</span><span class="pill">Reg. Fee: TBD</span></div>
    <p style="margin-top:14px;font-size:.8rem;color:var(--muted)">Teams must report 30 minutes prior. Judges' decisions are final.</p>`;
  modal.hidden = false; document.body.style.overflow = "hidden"; $("#mClose").focus();
}
function closeModal() { modal.hidden = true; document.body.style.overflow = ""; lastFocus && lastFocus.focus(); }
grid.addEventListener("click", e => { const c = e.target.closest(".ev"); if (c) openModal(+c.dataset.n); });
$("#mClose").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
addEventListener("keydown", e => { if (e.key === "Escape" && !modal.hidden) closeModal(); });

/* ---------- Schedule ---------- */
const VENUES = ["Main Stage", "Amphitheatre", "Basement", "Classroom"];
const SLOTS = {
  1: ["9:30 AM", "10:00 – 11:00 AM", "11:00 AM – 12:00 PM", "12:00 – 1:00 PM", "LUNCH", "1:30 – 2:30 PM", "2:30 – 3:30 PM", "3:30 – 4:30 PM", "4:30 – 5:30 PM", "5:30 – 6:30 PM"],
  2: ["9:30 AM", "10:00 – 11:00 AM", "11:00 AM – 12:00 PM", "12:00 – 1:00 PM", "LUNCH", "1:30 – 2:30 PM", "2:30 – 3:30 PM", "3:30 – 4:30 PM", "4:30 – 5:30 PM", "5:30 – 6:00 PM", "6:00 – 7:30 PM", "7:30 PM"]
};
function renderSchedule(day) {
  const head = `<thead><tr><th>Timings</th>${VENUES.map(v => `<th>${v}</th>`).join("")}</tr></thead>`;
  const rows = SLOTS[day].map(t => t === "LUNCH"
    ? `<tr class="lunch"><td colspan="5">1:00 PM – 1:30 PM · Lunch Break</td></tr>`
    : `<tr><td>${t}</td>${VENUES.map(() => `<td class="tba">TBA</td>`).join("")}</tr>`).join("");
  $("#schedTable").innerHTML = head + `<tbody>${rows}</tbody>`;
}
renderSchedule(1);
$$(".tab").forEach(t => t.addEventListener("click", () => {
  $$(".tab").forEach(x => x.classList.remove("active")); t.classList.add("active"); renderSchedule(t.dataset.day);
}));

observeReveals();

/* ---------- Fireflies canvas ---------- */
(() => {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const c = $("#fireflies"), ctx = c.getContext("2d");
  let W, H, flies = [];
  const size = () => { W = c.width = innerWidth; H = c.height = innerHeight; };
  size(); addEventListener("resize", size);
  const N = innerWidth < 700 ? 44 : 90;
  for (let i = 0; i < N; i++) flies.push({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 2.8 + .5, vx: (Math.random() - .5) * .32, vy: -Math.random() * .42 - .04, p: Math.random() * 6.28 });
  (function loop() {
    ctx.clearRect(0, 0, W, H);
    for (const f of flies) {
      f.x += f.vx + Math.sin(f.p) * .15; f.y += f.vy; f.p += .02;
      if (f.y < -10) { f.y = H + 10; f.x = Math.random() * W; }
      const a = .35 + Math.sin(f.p * 2) * .3;
      const ember = f.p % 12 > 6;
      const glow = ember ? "198,75,60" : "185,28,28";
      const g = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.r * 6);
      g.addColorStop(0, `rgba(${glow},${a})`); g.addColorStop(1, `rgba(${glow},0)`);
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(f.x, f.y, f.r * 6, 0, 6.28); ctx.fill();
    }
    requestAnimationFrame(loop);
  })();
})();
