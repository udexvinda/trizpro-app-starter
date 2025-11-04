/* trizpro.app — vanilla JS starter (no frameworks) */
const DATA = {
  "apps": [
    {
      "id": "app-001",
      "title": "TRIZ GPT: Problem Statement Builder",
      "tagline": "Turn SWOT stickies into crisp, data‑backed problem statements.",
      "thumbnail": "/assets/apps/triz-gpt@2x.png",
      "category": "TRIZ",
      "tags": [
        "SWOT",
        "Problem Statement",
        "Ideation"
      ],
      "creator_id": "c-azim",
      "live_url": "https://gpt.trizpro.app",
      "description": "Transforms clustered SWOT inputs into a single‑focus problem statement without suggesting solutions.",
      "tech": [
        "Streamlit",
        "Python",
        "OpenAI"
      ],
      "triz_principles": [
        1,
        10,
        35
      ]
    },
    {
      "id": "app-002",
      "title": "SLA Breach Forecaster",
      "tagline": "Spot likely breaches and intervene early.",
      "thumbnail": "/assets/apps/sla-forecast@2x.png",
      "category": "Shared Services",
      "tags": [
        "SLA",
        "Forecasting",
        "Risk"
      ],
      "creator_id": "c-lina",
      "live_url": "https://sla.trizpro.app",
      "description": "Uses arrival patterns and WIP signals to anticipate SLA risks and recommend load‑balancing actions.",
      "tech": [
        "FastAPI",
        "Plotly"
      ],
      "triz_principles": [
        3,
        13,
        16
      ]
    },
    {
      "id": "app-003",
      "title": "Root Cause Mapper",
      "tagline": "Automates 5‑Whys + Cause‑Effect tree.",
      "thumbnail": "/assets/apps/rca@2x.png",
      "category": "Lean Six Sigma",
      "tags": [
        "RCA",
        "5-Whys",
        "Fishbone"
      ],
      "creator_id": "c-raj",
      "live_url": "https://rca.trizpro.app",
      "description": "Guides teams from symptom → mechanism using templates and evidence prompts.",
      "tech": [
        "Streamlit"
      ],
      "triz_principles": [
        5,
        24
      ]
    },
    {
      "id": "app-004",
      "title": "Idea Contradiction Explorer",
      "tagline": "Navigate TRIZ 39×39 contradictions visually.",
      "thumbnail": "/assets/apps/contradiction@2x.png",
      "category": "TRIZ",
      "tags": [
        "Contradictions",
        "Ideation"
      ],
      "creator_id": "c-yu",
      "live_url": "https://matrix.trizpro.app",
      "description": "Browse improving vs. worsening parameters and get suggested inventive principles.",
      "tech": [
        "Streamlit",
        "JSON"
      ],
      "triz_principles": [
        10,
        28,
        35
      ]
    },
    {
      "id": "app-005",
      "title": "Queue Optimizer",
      "tagline": "Reduce cycle time with WIP controls.",
      "thumbnail": "/assets/apps/queue@2x.png",
      "category": "Manufacturing",
      "tags": [
        "WIP",
        "Cycle Time",
        "Flow"
      ],
      "creator_id": "c-azim",
      "live_url": "https://queue.trizpro.app",
      "description": "Simulates push vs pull and highlights TOC bottlenecks.",
      "tech": [
        "Python",
        "Charts"
      ],
      "triz_principles": [
        3,
        19
      ]
    },
    {
      "id": "app-006",
      "title": "Claims Anomaly Finder",
      "tagline": "Detect unusual claims with explainability.",
      "thumbnail": "/assets/apps/claims@2x.png",
      "category": "Insurance",
      "tags": [
        "Anomaly",
        "Claims",
        "XAI"
      ],
      "creator_id": "c-lina",
      "live_url": "https://claims.trizpro.app",
      "description": "Flags atypical patterns and surfaces interpretable drivers.",
      "tech": [
        "Python"
      ],
      "triz_principles": [
        23,
        32
      ]
    }
  ],
  "creators": [
    {
      "id": "c-azim",
      "name": "Azim Rahman",
      "avatar": "/assets/creators/azim.png",
      "role": "Process Engineer",
      "company": "Helix Manufacturing",
      "links": {
        "site": "#",
        "linkedin": "#"
      }
    },
    {
      "id": "c-lina",
      "name": "Lina Chow",
      "avatar": "/assets/creators/lina.png",
      "role": "LSS Black Belt",
      "company": "Crescent Insurance",
      "links": {
        "site": "#"
      }
    },
    {
      "id": "c-raj",
      "name": "Raj Kumar",
      "avatar": "/assets/creators/raj.png",
      "role": "Data Analyst",
      "company": "VectorOps",
      "links": {
        "site": "#"
      }
    },
    {
      "id": "c-yu",
      "name": "Yu Desh",
      "avatar": "/assets/creators/yu.png",
      "role": "Ops Excellence Lead",
      "company": "Aurora Energy",
      "links": {
        "site": "#"
      }
    },
    {
      "id": "c-sam",
      "name": "Sam Lee",
      "avatar": "/assets/creators/sam.png",
      "role": "Automation Engineer",
      "company": "Nova Shared Services",
      "links": {
        "site": "#"
      }
    }
  ],
  "testimonials": [
    {
      "quote": "Vibe Coding helped me turn a rough idea into a working mini app in hours.",
      "creator_id": "c-azim",
      "app_id": "app-001",
      "cohort": "VCW Jan 2025"
    },
    {
      "quote": "Our team finally sees TRIZ in action — not just on slides.",
      "creator_id": "c-lina",
      "app_id": "app-002",
      "cohort": "VCW Jan 2025"
    },
    {
      "quote": "The submission checklist kept us focused; shipping felt easy.",
      "creator_id": "c-raj",
      "app_id": "app-003",
      "cohort": "VCW Jan 2025"
    },
    {
      "quote": "From contradiction to concept in minutes — loved the matrix explorer.",
      "creator_id": "c-yu",
      "app_id": "app-004",
      "cohort": "VCW Jan 2025"
    }
  ],
  "categories": [
    "TRIZ",
    "Lean Six Sigma",
    "Insurance",
    "Manufacturing",
    "Shared Services"
  ]
};

const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

const state = { category:'', tags:new Set(), q:'' };

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

function initFilters() {
  const catSel = document.getElementById('filter-category');
  DATA.categories.forEach(c => {
    const opt = document.createElement('option'); opt.value = c; opt.textContent = c; catSel.appendChild(opt);
  });
  catSel.addEventListener('change', e => { state.category = e.target.value; renderApps(); });

  const uniqueTags = [...new Set(DATA.apps.flatMap(a => a.tags))].sort();
  const tagWrap = document.getElementById('filter-tags');
  uniqueTags.forEach(t => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'tag';
    btn.textContent = t;
    btn.setAttribute('aria-pressed','false');
    btn.addEventListener('click', () => {
      if (state.tags.has(t)) { state.tags.delete(t); btn.classList.remove('active'); btn.setAttribute('aria-pressed','false'); }
      else { state.tags.add(t); btn.classList.add('active'); btn.setAttribute('aria-pressed','true'); }
      renderApps();
    });
    tagWrap.appendChild(btn);
  });

  const search = document.getElementById('filter-search');
  search.addEventListener('input', e => { state.q = e.target.value.toLowerCase(); renderApps(); });

  document.getElementById('clear-filters').addEventListener('click', () => {
    state.category = ''; state.tags.clear(); state.q='';
    catSel.value=''; search.value=''; $$('.tag', tagWrap).forEach(b=>b.classList.remove('active'));
    renderApps();
  });
}

function creatorById(id) { return DATA.creators.find(c => c.id === id) || null; }

function appCard(app) {
  const c = creatorById(app.creator_id);
  const wrap = document.createElement('article');
  wrap.className='card';
  wrap.innerHTML = `
    <div class="card-media">
      <img src="${app.thumbnail}" alt="Preview of ${app.title}" loading="lazy" decoding="async">
    </div>
    <div class="card-body">
      <div class="card-title">${app.title}</div>
      <div class="card-copy">${app.tagline}</div>
      <div class="card-creator">
        <img class="avatar" src="${c?.avatar || ''}" alt="Portrait of ${c?.name || 'creator'}">
        <div>
          <div>${c?.name || 'Unknown'}</div>
          <div class="muted">${c?.role || ''}</div>
        </div>
      </div>
      <div class="card-actions">
        <a class="btn" href="${app.live_url}" target="_blank" rel="noopener noreferrer">Open app</a>
        <button class="btn ghost" data-details="${app.id}">Details</button>
      </div>
    </div>`;
  return wrap;
}

function renderApps() {
  const grid = document.getElementById('apps-grid');
  grid.innerHTML='';
  let list = DATA.apps.slice();

  if (state.category) list = list.filter(a => a.category === state.category);
  if (state.tags.size) list = list.filter(a => [...state.tags].every(t => a.tags.includes(t)));
  if (state.q) list = list.filter(a => (a.title+a.tagline).toLowerCase().includes(state.q) || (creatorById(a.creator_id)?.name||'').toLowerCase().includes(state.q));

  document.getElementById('empty-state').hidden = list.length>0;

  list.forEach(a => grid.appendChild(appCard(a)));

  // Bind detail buttons
  $$('[data-details]').forEach(btn => btn.addEventListener('click', () => openDetails(btn.getAttribute('data-details'))));
}

function openDetails(appId) {
  const app = DATA.apps.find(a => a.id===appId); if (!app) return;
  const c = creatorById(app.creator_id);
  const el = document.getElementById('modal');
  const box = document.getElementById('modal-content');
  box.innerHTML = `
    <h3 id="modal-title">${app.title}</h3>
    <p>${app.description}</p>
    <img src="${app.thumbnail}" alt="Large preview of ${app.title}" loading="lazy">
    <p><strong>Tech:</strong> ${app.tech.join(', ')}</p>
    <p><strong>TRIZ principles:</strong> ${app.triz_principles.join(', ')}</p>
    <p><strong>Creator:</strong> ${c?.name || 'Unknown'} — ${c?.role || ''}</p>
    <p><a class="btn primary" href="${app.live_url}" target="_blank" rel="noopener noreferrer">Open app</a></p>
  `;
  el.hidden = false;
  el.querySelectorAll('[data-close]').forEach(b => b.onclick = closeModal);
  document.addEventListener('keydown', escClose);
}

function escClose(e){ if(e.key==='Escape') closeModal(); }
function closeModal(){ const el=document.getElementById('modal'); if(!el.hidden){ el.hidden=true; document.removeEventListener('keydown', escClose);} }

function renderCreators(){
  const grid = document.getElementById('creators-grid');
  grid.innerHTML='';
  DATA.creators.forEach(cr => {
    const count = DATA.apps.filter(a => a.creator_id===cr.id).length;
    const card = document.createElement('div');
    card.className='creator-card';
    card.innerHTML = `
      <img class="avatar" src="${cr.avatar}" alt="Portrait of ${cr.name}">
      <div style="flex:1">
        <div><strong>${cr.name}</strong></div>
        <div class="muted">${cr.role}${cr.company ? ' · '+cr.company : ''}</div>
      </div>
      <div class="muted">${count} app${count===1?'':'s'}</div>`;
    grid.appendChild(card);
  });
}

function renderTestimonials(){
  const track = document.getElementById('testimonials-track');
  track.innerHTML='';
  DATA.testimonials.forEach(t => {
    const c = creatorById(t.creator_id);
    const box = document.createElement('figure');
    box.className='testi';
    box.innerHTML = `
      <blockquote class="quote">“${t.quote}”</blockquote>
      <figcaption class="by">
        <img class="avatar" src="${c?.avatar||''}" alt="Portrait of ${c?.name||'creator'}">
        <span>${c?.name||'Unknown'} · ${t.cohort}</span>
      </figcaption>`;
    track.appendChild(box);
  });
}

function renderSchema(){
  const site = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "trizpro.app",
    "url": "https://trizpro.app/",
    "description": "Hub for TRIZ + AI mini apps by the Vibe Coding Workshop community"
  };
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": DATA.apps.slice(0,6).map((a,i)=>({
      "@type":"ListItem",
      "position": i+1,
      "url": a.live_url,
      "name": a.title
    }))
  };
  document.getElementById('schema-json').textContent = JSON.stringify([site,itemList]);
}

function init(){
  initFilters();
  renderApps();
  renderCreators();
  renderTestimonials();
  renderSchema();
}

document.addEventListener('DOMContentLoaded', init);
