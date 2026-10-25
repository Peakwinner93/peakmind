/*! PeakMind © 2026. Tous droits réservés. Copie, modification et redistribution interdites sans autorisation. */
(() => {
const LAUNCH = new Date('2026-11-01T18:00:00+01:00').getTime();
const pad = n => String(n).padStart(2, '0');
const tick = () => {
const ms = LAUNCH - Date.now();
if (ms <= 0 || new URLSearchParams(location.search).has('live')) { document.body.classList.add('launched'); return false; }
const s = Math.floor(ms / 1000);
document.getElementById('cd-d').textContent = pad(Math.floor(s / 86400));
document.getElementById('cd-h').textContent = pad(Math.floor(s / 3600) % 24);
document.getElementById('cd-m').textContent = pad(Math.floor(s / 60) % 60);
document.getElementById('cd-s').textContent = pad(s % 60);
return true;
};
if (tick()) { const id = setInterval(() => { if (!tick()) clearInterval(id); }, 1000); }
const show = os => { document.querySelectorAll('[data-os]').forEach(b => b.setAttribute('aria-selected', String(b.dataset.os === os))); document.getElementById('os-ios').hidden = os !== 'ios'; document.getElementById('os-android').hidden = os !== 'android'; };
document.querySelectorAll('[data-os]').forEach(b => b.onclick = () => show(b.dataset.os));
if (/android/i.test(navigator.userAgent)) show('android');
const io = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .15 }) : null;
document.querySelectorAll('.reveal').forEach(el => io ? io.observe(el) : el.classList.add('in'));
})();
