(() => {
  const data = window.PORTFOLIO_DATA;
  const $ = s => document.querySelector(s);

  $("#skillsGrid").innerHTML = data.skills.map(x =>
    `<article class="skill reveal"><div class="skill-icon">${x[0]}</div><h3>${x[1]}</h3><p>${x[2]}</p></article>`
  ).join("");

  $("#projectsGrid").innerHTML = data.projects.map((p,i) =>
    `<article class="project reveal"><span class="project-num">0${i+1}</span><a class="project-link" href="${p.link}" aria-label="Open project">↗</a><h3>${p.title}</h3><p>${p.description}</p><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join("")}</div></article>`
  ).join("");

  $("#achievementsGrid").innerHTML = data.achievements.map(a =>
    `<article class="achievement reveal"><div class="a-icon">${a[0]}</div><h3>${a[1]}</h3><p>${a[2]}</p></article>`
  ).join("");

  $("#socialGrid").innerHTML = data.socials.map(s =>
    `<a class="social reveal" href="${s[3]}" target="_blank" rel="noopener noreferrer"><div class="social-icon">${s[0]}</div><div><h3>${s[1]}</h3><p>${s[2]}</p></div><span class="arrow">↗</span></a>`
  ).join("");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add("visible"); observer.unobserve(e.target); }});
  }, {threshold:.12});
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));


  const themeToggle = $("#themeToggle");
  const savedTheme = localStorage.getItem("rachit-theme");
  if(savedTheme === "light") document.body.classList.add("light");
  const syncThemeIcon = () => { themeToggle.textContent = document.body.classList.contains("light") ? "☾" : "☼"; };
  syncThemeIcon();
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    localStorage.setItem("rachit-theme", document.body.classList.contains("light") ? "light" : "dark");
    syncThemeIcon();
  });

  const progress = $(".progress");
  addEventListener("scroll", () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = `${max > 0 ? (scrollY / max) * 100 : 0}%`;
  }, {passive:true});

  const glow = $(".cursor-glow");
  addEventListener("pointermove", e => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  }, {passive:true});

  const menuBtn = $("#menuBtn"), nav = $("#navLinks");
  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    nav.style.cssText = open ? "display:flex;position:absolute;top:65px;left:18px;right:18px;flex-direction:column;gap:0;background:#0d0f15;border:1px solid #292e39;border-radius:14px;padding:10px;z-index:30" : "";
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
  });
})();