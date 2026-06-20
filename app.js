const iconPaths={
  platora:'<path fill="currentColor" fill-rule="evenodd" stroke="none" d="M12 1.45c-2.63 0-4.18 1.83-4.18 4.62l.08 2.18c.04 1.1-.52 2.13-1.46 2.7l-2.12 1.28c-2.47 1.49-3.08 4.43-1.57 6.55 1.5 2.1 4.37 2.55 6.48.99l1.02-.75a2.96 2.96 0 0 1 3.5 0l1.02.75c2.11 1.56 4.98 1.11 6.48-.99 1.51-2.12.9-5.06-1.57-6.55l-2.12-1.28a3.08 3.08 0 0 1-1.46-2.7l.08-2.18c0-2.79-1.55-4.62-4.18-4.62ZM12 8a4.15 4.15 0 1 0 0 8.3A4.15 4.15 0 0 0 12 8Z"/>',
  shield:'<path d="M12 3 4.5 6v5.2c0 4.6 3.1 8.1 7.5 9.8 4.4-1.7 7.5-5.2 7.5-9.8V6L12 3Z"/>',
  "shield-check":'<path d="M12 3 4.5 6v5.2c0 4.6 3.1 8.1 7.5 9.8 4.4-1.7 7.5-5.2 7.5-9.8V6L12 3Z"/><path d="m9 12 2 2 4-4"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>', lock:'<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>', menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',
  "chevron-down":'<path d="m8 10 4 4 4-4"/>',"chevron-right":'<path d="m9 18 6-6-6-6"/>',"arrow-right":'<path d="M5 12h14m-5-5 5 5-5 5"/>',"arrow-down":'<path d="M12 5v14m-5-5 5 5 5-5"/>',
  grid:'<rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/>',
  alert:'<path d="M10.3 4.4 2.8 17a2 2 0 0 0 1.7 3h15a2 2 0 0 0 1.7-3L13.7 4.4a2 2 0 0 0-3.4 0ZM12 9v4m0 3h.01"/>',
  car:'<path d="m5 11 1.5-4h11l1.5 4M4 11h16v7H4zM7 15h.01M17 15h.01M6 18v2m12-2v2"/>',
  file:'<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>', card:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h3"/>',
  more:'<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>', gauge:'<path d="M4 16a8 8 0 1 1 16 0"/><path d="m12 12 4-4M7 16h.01M17 16h.01"/>',
  toll:'<path d="M5 21V7m14 14V7M3 7h18M7 7l2-4h6l2 4M9 21v-7h6v7"/>', meter:'<circle cx="12" cy="9" r="6"/><path d="M12 15v6m-3 0h6M9 8h6M12 6v3"/>',
  chart:'<path d="M4 20V10m5 10V4m5 16v-7m5 7V7M2 20h20"/>', headphones:'<path d="M4 14v-2a8 8 0 0 1 16 0v2M4 14h3v6H5a1 1 0 0 1-1-1v-5Zm16 0h-3v6h2a1 1 0 0 0 1-1v-5Z"/>',
  "user-plus":'<circle cx="10" cy="8" r="4"/><path d="M3 21v-2a6 6 0 0 1 12 0v2M19 8v6m-3-3h6"/>', check:'<path d="m5 12 4 4L19 6"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>', key:'<circle cx="8" cy="15" r="4"/><path d="m11 12 8-8m-3 3 3 3"/>',
  briefcase:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V4h8v3M3 12h18"/>', route:'<circle cx="5" cy="6" r="2"/><circle cx="19" cy="18" r="2"/><path d="M7 6h5a3 3 0 0 1 0 6h-1a3 3 0 0 0 0 6h6"/>',
  tool:'<path d="M14 6a4 4 0 0 0-5-5L3 7l4 4 6-6M9 13l2 2-6 6-2-2z"/>', truck:'<path d="M3 6h11v11H3zM14 10h4l3 3v4h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>',
  store:'<path d="M4 10v10h16V10M3 4h18l-2 6H5L3 4Zm5 16v-6h8v6"/>', mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
  help:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.4 2.3c-.9.4-.9 1.2-.9 1.7m0 4h.01"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10h.01"/>',
  plus:'<path d="M12 5v14M5 12h14"/>', radar:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="m12 12 6-6"/>',repeat:'<path d="m17 2 4 4-4 4M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4m14-1v2a3 3 0 0 1-3 3H3"/>',
  qr:'<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3h-3zm4 4h3v3h-3zm0-4h3"/>',
  play:'<circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4z"/>',map:'<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Zm6-3v15m6-12v15"/>',
  eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>'
};
document.querySelectorAll("[data-icon]").forEach(el=>{const p=iconPaths[el.dataset.icon];if(p)el.innerHTML=`<svg viewBox="0 0 24 24" aria-hidden="true">${p}</svg>`});

document.querySelectorAll(".nav-dropdown").forEach(btn=>btn.addEventListener("click",e=>{e.stopPropagation();const d=btn.closest(".dropdown");document.querySelectorAll(".dropdown.open").forEach(x=>{if(x!==d)x.classList.remove("open")});d.classList.toggle("open");btn.setAttribute("aria-expanded",d.classList.contains("open"))}));
document.addEventListener("click",()=>document.querySelectorAll(".dropdown.open").forEach(d=>d.classList.remove("open")));
document.querySelectorAll(".menu-button").forEach(btn=>btn.addEventListener("click",()=>{const h=btn.closest(".site-header");h.classList.toggle("menu-open");btn.setAttribute("aria-expanded",h.classList.contains("menu-open"))}));

document.querySelectorAll("[data-plate-form]").forEach(form=>form.addEventListener("submit",e=>{e.preventDefault();const plate=new FormData(form).get("plate")?.trim().toUpperCase();if(!plate){form.querySelector("input")?.focus();return}location.href=`dashboard.html?plate=${encodeURIComponent(plate)}`}));

const params=new URLSearchParams(location.search);const plate=params.get("plate");if(plate){document.querySelectorAll(".demo-vehicle b,.vehicle-card h3").forEach((el,i)=>{if(i===0)el.textContent=`${plate} · California`})}

const selectDemoTab=name=>{document.querySelectorAll("[data-demo-tab]").forEach(b=>b.classList.toggle("active",b.dataset.demoTab===name));document.querySelectorAll("[data-demo-panel]").forEach(p=>p.classList.toggle("active",p.dataset.demoPanel===name))};
document.querySelectorAll("[data-demo-tab]").forEach(btn=>btn.addEventListener("click",()=>selectDemoTab(btn.dataset.demoTab)));
document.querySelectorAll("[data-open-tab]").forEach(btn=>btn.addEventListener("click",()=>selectDemoTab(btn.dataset.openTab)));
const toast=document.querySelector(".toast");const showToast=msg=>{if(!toast)return;toast.textContent=msg;toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),2500)};
document.querySelectorAll("[data-pay]").forEach(btn=>btn.addEventListener("click",()=>showToast("Demo only — payments are not connected.")));
document.querySelectorAll("[data-add-vehicle]").forEach(btn=>btn.addEventListener("click",()=>location.href="login.html"));

document.querySelectorAll("[data-auth-tab]").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll("[data-auth-tab]").forEach(b=>b.classList.toggle("active",b===btn));document.querySelectorAll("[data-auth-panel]").forEach(p=>p.classList.toggle("active",p.dataset.authPanel===btn.dataset.authTab))}));
document.querySelector('[data-auth-panel="login"]')?.addEventListener("submit",e=>{e.preventDefault();location.href="dashboard.html"});

const helpInput=document.querySelector(".help-search input");if(helpInput)helpInput.addEventListener("input",()=>{const q=helpInput.value.toLowerCase();document.querySelectorAll(".faq-list details").forEach(d=>d.style.display=d.textContent.toLowerCase().includes(q)?"":"none")});
document.querySelectorAll("[data-topic]").forEach(btn=>btn.addEventListener("click",()=>{const cat=btn.dataset.topic;document.querySelectorAll(".faq-list details").forEach(d=>{d.style.display=d.dataset.category.includes(cat)?"":"none"});document.querySelector(".faq-section")?.scrollIntoView({behavior:"smooth"})}));
