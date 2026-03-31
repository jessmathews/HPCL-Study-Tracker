const BASE_PATH = process.env.BASE_URL || '/';
const SUBJECTS = [
  {
    id: 'ps', name: 'Power Systems', hours: 40, week: 'W1–W2',
    color: '#c0392b', lt: '#fdf0ee', priority: 'high',
    topics: [
      { id: 'ps1',  text: 'Electrical power generation basics', week: 'W1' },
      { id: 'ps2',  text: 'AC & DC transmission concepts', week: 'W1' },
      { id: 'ps3',  text: 'Transmission line models & performance', week: 'W1' },
      { id: 'ps4',  text: 'Series & shunt compensation', week: 'W1' },
      { id: 'ps5',  text: 'Per-unit quantities & load flow methods', week: 'W1' },
      { id: 'ps6',  text: 'Voltage & frequency control', week: 'W1' },
      { id: 'ps7',  text: 'Power factor correction (APFC, VER)', week: 'W1' },
      { id: 'ps8',  text: 'Symmetrical components', week: 'W1' },
      { id: 'ps9',  text: 'Symmetrical fault analysis', week: 'W2' },
      { id: 'ps10', text: 'Unsymmetrical fault analysis', week: 'W2' },
      { id: 'ps11', text: 'Overcurrent, differential & distance protection', week: 'W2' },
      { id: 'ps12', text: 'Circuit breakers & system stability', week: 'W2' },
      { id: 'ps13', text: 'ETAP software basics', week: 'W2' },
      { id: 'ps14', text: 'Relay coordination & load shedding', week: 'W2' },
      { id: 'ps15', text: 'Numerical relays & substation automation', week: 'W2' },
    ]
  },
  {
    id: 'em', name: 'Electrical Machines', hours: 35, week: 'W1–W2',
    color: '#c0640a', lt: '#fdf5ee', priority: 'high',
    topics: [
      { id: 'em1',  text: 'Transformer construction & equivalent circuit', week: 'W1' },
      { id: 'em2',  text: 'Phasor diagram, per-unit impedance', week: 'W1' },
      { id: 'em3',  text: 'Transformer losses, regulation & efficiency', week: 'W1' },
      { id: 'em4',  text: 'OC test, SC test & polarity test', week: 'W1' },
      { id: 'em5',  text: 'Parallel operation, open delta, auto-transformer', week: 'W1' },
      { id: 'em6',  text: '3-phase induction motor: principle & types', week: 'W2' },
      { id: 'em7',  text: 'Induction motor: torque-speed, equivalent circuit', week: 'W2' },
      { id: 'em8',  text: 'Induction motor: starting methods & speed control', week: 'W2' },
      { id: 'em9',  text: 'Regenerative braking of induction motor', week: 'W2' },
      { id: 'em10', text: 'DC machines: self & separately excited types', week: 'W2' },
      { id: 'em11', text: 'DC machines: motoring & generating characteristics', week: 'W2' },
      { id: 'em12', text: 'DC motor starting & speed control', week: 'W2' },
      { id: 'em13', text: 'Synchronous machines: cylindrical & salient pole', week: 'W2' },
      { id: 'em14', text: 'Synchronous generator: regulation & parallel operation', week: 'W2' },
      { id: 'em15', text: 'Starting of synchronous motors', week: 'W2' },
    ]
  },
  {
    id: 'ec', name: 'Electric Circuits', hours: 30, week: 'W2',
    color: '#2563a8', lt: '#eef4fd', priority: 'med',
    topics: [
      { id: 'ec1',  text: 'KVL, KCL & network theorems (AC & DC)', week: 'W2' },
      { id: 'ec2',  text: 'Nodal analysis & mesh (star) analysis', week: 'W2' },
      { id: 'ec3',  text: 'R-L, R-C, R-L-C series & parallel circuits', week: 'W2' },
      { id: 'ec4',  text: 'Resonance & circuit transients', week: 'W2' },
      { id: 'ec5',  text: 'Initial & Final Value Theorem', week: 'W2' },
      { id: 'ec6',  text: 'Self & mutual inductance', week: 'W2' },
      { id: 'ec7',  text: 'Laplace Transform in circuits', week: 'W2' },
      { id: 'ec8',  text: 'Fourier Transform basics', week: 'W2' },
      { id: 'ec9',  text: 'Balanced three-phase circuits', week: 'W2' },
      { id: 'ec10', text: 'Star-delta transformation', week: 'W2' },
      { id: 'ec11', text: 'Line & phase quantity relations', week: 'W2' },
    ]
  },
  {
    id: 'pe', name: 'Power Electronics', hours: 25, week: 'W3',
    color: '#1a7a6e', lt: '#edf7f5', priority: 'med',
    topics: [
      { id: 'pe1',  text: 'Thyristor, MOSFET, IGBT: static V-I characteristics', week: 'W3' },
      { id: 'pe2',  text: 'Firing/gating circuits for power devices', week: 'W3' },
      { id: 'pe3',  text: 'Diodes & choppers', week: 'W3' },
      { id: 'pe4',  text: '3-phase half wave & full wave rectifiers', week: 'W3' },
      { id: 'pe5',  text: 'Voltage & current commutated thyristor converters', week: 'W3' },
      { id: 'pe6',  text: 'Power factor & distortion factor: AC-DC converters', week: 'W3' },
      { id: 'pe7',  text: 'Single-phase & 3-phase voltage source inverters', week: 'W3' },
      { id: 'pe8',  text: 'Half bridge & full bridge inverters', week: 'W3' },
      { id: 'pe9',  text: 'Sinusoidal pulse width modulation (SPWM)', week: 'W3' },
      { id: 'pe10', text: 'Variable frequency control & vector control', week: 'W3' },
      { id: 'pe11', text: 'Harmonics, compensation & active/passive filters', week: 'W3' },
    ]
  },
  {
    id: 'meas', name: 'Measurements', hours: 15, week: 'W3',
    color: '#6d3fa0', lt: '#f3eefb', priority: 'med',
    topics: [
      { id: 'm1', text: 'Bridges & potentiometers', week: 'W3' },
      { id: 'm2', text: 'CT & PT: ratio error, phase angle, burden', week: 'W3' },
      { id: 'm3', text: 'Measurement of voltage, current, power, energy', week: 'W3' },
      { id: 'm4', text: 'Power factor measurement', week: 'W3' },
      { id: 'm5', text: 'Digital voltmeters & multimeters', week: 'W3' },
      { id: 'm6', text: 'Phase, time & frequency measurement', week: 'W3' },
      { id: 'm7', text: 'Error analysis', week: 'W3' },
      { id: 'm8', text: 'HV oil testing & insulation resistance (Megger)', week: 'W3' },
    ]
  },
  {
    id: 'emf', name: 'EM Fields', hours: 15, week: 'W3',
    color: '#2e7d52', lt: '#edf7f1', priority: 'low',
    topics: [
      { id: 'ef1',  text: "Electrostatics: Coulomb's Law & Electric Field", week: 'W3' },
      { id: 'ef2',  text: 'Electric Flux Density & Gauss\'s Law', week: 'W3' },
      { id: 'ef3',  text: 'Electric potential & effect of dielectric medium', week: 'W3' },
      { id: 'ef4',  text: 'Capacitance of simple configurations', week: 'W3' },
      { id: 'ef5',  text: "Biot-Savart's Law & Ampere's Law", week: 'W3' },
      { id: 'ef6',  text: "Faraday's Law & Lorentz force", week: 'W3' },
      { id: 'ef7',  text: 'Magnetic circuits, MMF & Reluctance', week: 'W3' },
      { id: 'ef8',  text: 'Self & mutual inductance configurations', week: 'W3' },
      { id: 'ef9',  text: 'Batteries, UPS types & electrochemical sources', week: 'W3' },
    ]
  }
];

const WEEKS = [
  { id: 'W1', label: 'Week 1', desc: 'High-priority foundations', color: '#c0392b', hours: 40 },
  { id: 'W2', label: 'Week 2', desc: 'Machines + Circuits', color: '#c0640a', hours: 50 },
  { id: 'W3', label: 'Week 3', desc: 'PE + Measurements + EM', color: '#2563a8', hours: 40 },
  { id: 'W4', label: 'Week 4', desc: 'Revision + Mock Tests', color: '#2e7d52', hours: 30 },
];

// ─── Users ────────────────────────────────────────────────────────────────────
// Hardcoded users — must match server.js USERS array
const USERS = ['Vppk', 'Jez'];

const USER_COLORS = [
  { bg: '#fdf3e7', text: '#8b4a12' },
  { bg: '#eef4fd', text: '#1a4a8a' },
];

let currentUser = localStorage.getItem('hpcl_active_user') || USERS[0];

function initUserSwitcher() {
  const sel = document.getElementById('user-select');
  sel.innerHTML = '';
  USERS.forEach(u => {
    const opt = document.createElement('option');
    opt.value = u;
    opt.textContent = u;
    if (u === currentUser) opt.selected = true;
    sel.appendChild(opt);
  });
  updateAvatar();

  sel.addEventListener('change', async function() {
    if (this.value === currentUser) return;
    const overlay = document.getElementById('page-overlay');
    overlay.classList.add('visible');
    await new Promise(r => setTimeout(r, 200));

    currentUser = this.value;
    localStorage.setItem('hpcl_active_user', currentUser);
    updateAvatar();

    state = { checked: {}, weekDone: {}, confidence: {}, notes: { weak: '', res: '', mock: '' }, examDate: '' };
    setSaveStatus('saving', 'Loading…');
    await loadFromServer();
    updateDaysLeft();
    renderSubjects();
    renderConfidence();
    renderWeekBars();
    updateStats();
    initNotes();

    overlay.classList.remove('visible');
  });
}

function updateAvatar() {
  const idx = USERS.indexOf(currentUser);
  const palette = USER_COLORS[idx] || USER_COLORS[0];
  const av = document.getElementById('user-avatar');
  av.textContent = currentUser.slice(0, 2).toUpperCase();
  av.style.background = palette.bg;
  av.style.color = palette.text;
}

// ─── State & Server Sync ──────────────────────────────────────────────────────
let state = { checked: {}, weekDone: {}, confidence: {}, notes: { weak: '', res: '', mock: '' }, examDate: '' };
let saveTimer = null;

function setSaveStatus(status, msg) {
  const el = document.getElementById('save-indicator');
  const txt = document.getElementById('save-text');
  el.className = status;
  txt.textContent = msg;
}

async function loadFromServer() {
  try {
    const res = await fetch(`${BASE_PATH}api/progress/${encodeURIComponent(currentUser)}`);
    if (!res.ok) throw new Error('Server error');
    const json = await res.json();
    if (json.ok && json.data) Object.assign(state, json.data);
    setSaveStatus('saved', 'Synced');
  } catch (e) {
    setSaveStatus('error', 'Offline');
    try {
      const saved = localStorage.getItem(`hpcl_fallback_${currentUser}`);
      if (saved) Object.assign(state, JSON.parse(saved));
    } catch (_) {}
  }
}

async function saveToServer() {
  setSaveStatus('saving', 'Saving…');
  try { localStorage.setItem(`hpcl_fallback_${currentUser}`, JSON.stringify(state)); } catch(_) {}
  try {
    const res = await fetch(`/api/progress/${encodeURIComponent(currentUser)}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state),
    });
    if (!res.ok) throw new Error('Server error');
    const json = await res.json();
    if (json.ok) {
      const t = new Date(json.savedAt);
      setSaveStatus('saved', `Saved ${t.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}`);
    } else throw new Error('Save failed');
  } catch (e) {
    setSaveStatus('error', 'Save failed (local backup kept)');
  }
}

function schedSave() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(saveToServer, 800);
}

function resetAll() {
  if (!confirm(`Reset all progress for ${currentUser}? This cannot be undone.`)) return;
  state = { checked: {}, weekDone: {}, confidence: {}, notes: { weak: '', res: '', mock: '' }, examDate: state.examDate };
  saveToServer();
  location.reload();
}

// ─── Ring Chart ───────────────────────────────────────────────────────────────
function drawRing(pct) {
  const canvas = document.getElementById('ringCanvas');
  const ctx = canvas.getContext('2d');
  const cx = 80, cy = 80, r = 64, lw = 10;
  ctx.clearRect(0, 0, 160, 160);

  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(0,0,0,0.07)';
  ctx.lineWidth = lw;
  ctx.stroke();

  if (pct > 0) {
    const grad = ctx.createLinearGradient(cx - r, cy, cx + r, cy);
    grad.addColorStop(0, '#b5651d');
    grad.addColorStop(1, '#8b4a12');
    ctx.beginPath();
    ctx.arc(cx, cy, r, -Math.PI / 2, -Math.PI / 2 + (pct / 100) * Math.PI * 2);
    ctx.strokeStyle = grad;
    ctx.lineWidth = lw;
    ctx.lineCap = 'round';
    ctx.stroke();
  }

  ctx.fillStyle = '#1c1a17';
  ctx.font = '600 28px "Lora", serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(Math.round(pct) + '%', cx, cy);
}

// ─── Week Bars ────────────────────────────────────────────────────────────────
function renderWeekBars() {
  const container = document.getElementById('week-bars');
  container.innerHTML = '';
  WEEKS.forEach(wk => {
    let total = 0, done = 0;
    SUBJECTS.forEach(s => s.topics.forEach(t => {
      if (t.week === wk.id) { total++; if (state.checked[t.id]) done++; }
    }));
    const isW4 = wk.id === 'W4';
    const pct = isW4 ? (state.weekDone['W4'] ? 100 : 0) : (total ? Math.round(done / total * 100) : 0);
    const isDone = isW4 ? !!state.weekDone['W4'] : pct === 100;

    const row = document.createElement('div');
    row.className = 'week-row';
    row.innerHTML = `
      <div class="week-tag">${wk.label}</div>
      <div>
        <div style="font-size:12px;color:var(--muted);margin-bottom:4px;">${wk.desc} · ${wk.hours}h</div>
        <div class="week-bar-bg"><div class="week-bar-fill" style="width:${pct}%;background:${wk.color};"></div></div>
      </div>
      <div class="week-pct">${pct}%</div>
      <div class="week-check ${isDone ? 'done' : ''}" ${isW4 ? 'onclick="toggleW4()"' : ''}>${isDone ? '✓' : ''}</div>
    `;
    container.appendChild(row);
  });
}

function toggleW4() {
  state.weekDone['W4'] = !state.weekDone['W4'];
  schedSave();
  renderWeekBars();
}

// ─── Stats ────────────────────────────────────────────────────────────────────
function updateStats() {
  let total = 0, done = 0;
  SUBJECTS.forEach(s => s.topics.forEach(t => { total++; if (state.checked[t.id]) done++; }));
  const pct = total ? Math.round(done / total * 100) : 0;
  document.getElementById('stat-overall').textContent = pct + '%';
  document.getElementById('stat-topics-done').textContent = `${done} / ${total} topics done`;
  drawRing(pct);

  const scores = Object.values(state.confidence).filter(v => v > 0);
  document.getElementById('stat-conf').textContent = scores.length
    ? (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1) : '—';
}

// ─── Days Left ────────────────────────────────────────────────────────────────
function updateDaysLeft() {
  const ed = document.getElementById('exam-date');
  ed.value = state.examDate || '';
  ed.addEventListener('change', function() {
    state.examDate = this.value;
    schedSave();
    refreshDays();
  });
  refreshDays();
}

function refreshDays() {
  if (state.examDate) {
    const diff = Math.ceil((new Date(state.examDate) - new Date()) / 86400000);
    document.getElementById('days-left').textContent = diff > 0 ? diff : '0';
  }
}

// ─── Confidence ───────────────────────────────────────────────────────────────
function renderConfidence() {
  const container = document.getElementById('conf-row');
  container.innerHTML = '';
  SUBJECTS.forEach(s => {
    const rating = state.confidence[s.id] || 0;
    const card = document.createElement('div');
    card.className = 'conf-card';
    card.innerHTML = `
      <div class="conf-name" style="color:${s.color};">${s.name}</div>
      <div class="conf-stars" id="stars-${s.id}">
        ${[1,2,3,4,5].map(i => `<span class="star ${i <= rating ? 'active' : ''}" data-sub="${s.id}" data-val="${i}">★</span>`).join('')}
      </div>
    `;
    container.appendChild(card);
  });

  document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', function() {
      const sub = this.dataset.sub;
      const val = parseInt(this.dataset.val);
      state.confidence[sub] = state.confidence[sub] === val ? 0 : val;
      schedSave();
      document.querySelectorAll(`#stars-${sub} .star`).forEach((s, i) => {
        s.classList.toggle('active', i < state.confidence[sub]);
      });
      updateStats();
    });
  });
}

// ─── Subject Cards ────────────────────────────────────────────────────────────
function renderSubjects() {
  const grid = document.getElementById('subject-grid');
  grid.innerHTML = '';

  SUBJECTS.forEach(s => {
    const done = s.topics.filter(t => state.checked[t.id]).length;
    const total = s.topics.length;
    const pct = total ? Math.round(done / total * 100) : 0;

    const card = document.createElement('div');
    card.className = 'subj-card';
    card.innerHTML = `
      <div class="subj-progress-bar-bg">
        <div class="subj-progress-fill" id="bar-${s.id}" style="width:${pct}%;background:${s.color};"></div>
      </div>
      <div class="subj-header">
        <div class="subj-name">${s.name}</div>
        <div class="subj-meta">
          <span class="subj-hours">${s.hours}h · ${s.week}</span>
          <div class="priority-dot" style="background:${s.color};opacity:${s.priority==='high'?1:s.priority==='med'?0.55:0.3};"></div>
          <button class="subj-toggle" aria-label="Toggle topics">›</button>
        </div>
      </div>
      <div class="subj-body" id="body-${s.id}">
        <ul class="topic-list">
          ${s.topics.map(t => `
            <li class="topic-item ${state.checked[t.id]?'done':''}" data-id="${t.id}">
              <div class="topic-cb" style="${state.checked[t.id]?`color:${s.color}`:''}"></div>
              <span class="topic-text">${t.text}</span>
              <span class="topic-week">${t.week}</span>
            </li>`).join('')}
        </ul>
      </div>
      <div class="subj-footer">
        <span class="subj-count" id="count-${s.id}">${done} / ${total} topics</span>
        <span class="subj-pct" id="pct-${s.id}" style="color:${s.color}">${pct}%</span>
      </div>
    `;
    grid.appendChild(card);

    // ── Collapsible toggle (mobile only — CSS hides toggle on desktop) ──
    const header = card.querySelector('.subj-header');
    const body   = card.querySelector('.subj-body');
    const toggle = card.querySelector('.subj-toggle');

    // Set natural height so CSS transition works
    body.style.maxHeight = body.scrollHeight + 'px';
    body.style.opacity   = '1';

    header.addEventListener('click', function(e) {
      // Only collapse on mobile
      if (window.innerWidth > 768) return;
      // Don't collapse if clicking a topic item
      if (e.target.closest('.topic-item')) return;
      const collapsed = body.classList.toggle('collapsed');
      toggle.classList.toggle('collapsed', collapsed);
      if (!collapsed) {
        body.style.maxHeight = body.scrollHeight + 'px';
        body.style.opacity = '1';
      } else {
        body.style.maxHeight = '0';
        body.style.opacity = '0';
      }
    });

    // ── Topic checkboxes ──
    card.querySelectorAll('.topic-item').forEach(item => {
      item.addEventListener('click', function(e) {
        e.stopPropagation(); // prevent triggering header collapse
        const id = this.dataset.id;
        state.checked[id] = !state.checked[id];
        schedSave();
        this.classList.toggle('done', state.checked[id]);
        this.querySelector('.topic-cb').style.color = state.checked[id] ? s.color : '';
        const d2 = s.topics.filter(t => state.checked[t.id]).length;
        const p2 = Math.round(d2 / total * 100);
        document.getElementById(`count-${s.id}`).textContent = `${d2} / ${total} topics`;
        document.getElementById(`pct-${s.id}`).textContent = p2 + '%';
        document.getElementById(`bar-${s.id}`).style.width = p2 + '%';
        // Recalc max-height after content change
        if (!body.classList.contains('collapsed')) {
          body.style.maxHeight = body.scrollHeight + 'px';
        }
        updateStats();
        renderWeekBars();
      });
    });
  });
}

// ─── Notes ────────────────────────────────────────────────────────────────────
function initNotes() {
  ['weak','res','mock'].forEach(k => {
    const el = document.getElementById('note-' + k);
    el.value = state.notes[k] || '';
    el.addEventListener('input', function() {
      state.notes[k] = this.value;
      schedSave();
    });
  });
}

// ─── Boot ─────────────────────────────────────────────────────────────────────
(async () => {
  initUserSwitcher();
  setSaveStatus('saving', 'Loading…');
  await loadFromServer();
  updateDaysLeft();
  renderSubjects();
  renderConfidence();
  renderWeekBars();
  updateStats();
  initNotes();
})();