// Game state
const state = {
  currentCourse: null,
  currentHoleIndex: 0,
  scores: [],
  selectedChoice: null,
};

// Score labels
const SCORE_LABELS = [
  { threshold: -5, label: 'Tour Caliber', emoji: '🏆' },
  { threshold: -2, label: 'Scratch Mentality', emoji: '⭐' },
  { threshold: 1,  label: 'Mid-Amateur', emoji: '🎯' },
  { threshold: 5,  label: 'Bogey Golfer', emoji: '⛳' },
  { threshold: Infinity, label: 'Back to the Range', emoji: '😅' },
];

function getScoreLabel(totalToPar) {
  for (const entry of SCORE_LABELS) {
    if (totalToPar <= entry.threshold) return entry;
  }
  return SCORE_LABELS[SCORE_LABELS.length - 1];
}

function formatScore(s) {
  if (s < 0) return s.toString();
  if (s === 0) return 'E';
  return '+' + s;
}

function getBestScore(courseId) {
  const key = `best_${courseId}`;
  const val = localStorage.getItem(key);
  return val !== null ? parseInt(val, 10) : null;
}

function saveBestScore(courseId, score) {
  const key = `best_${courseId}`;
  const existing = getBestScore(courseId);
  if (existing === null || score < existing) {
    localStorage.setItem(key, score.toString());
  }
}

// DOM helpers
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) {
    el.classList.add('active');
    el.scrollTop = 0;
  }
}

function totalToPar() {
  return state.scores.reduce((a, b) => a + b, 0);
}

// ─── Course Select Screen ───────────────────────────────────────────────────

function renderCourseSelect() {
  const grid = document.getElementById('course-grid');
  grid.innerHTML = '';

  COURSES.forEach(course => {
    const best = getBestScore(course.id);
    const bestStr = best !== null ? formatScore(best) : null;

    const card = document.createElement('div');
    card.className = `course-card${course.available ? '' : ' locked'}`;

    const diffDots = Array.from({ length: 5 }, (_, i) =>
      `<span class="diff-dot${i < course.difficultyLevel ? ' filled' : ''}"></span>`
    ).join('');

    card.innerHTML = `
      <div class="course-card-header">
        <div>
          <div class="course-name">${course.name}</div>
          <div class="course-location">${course.location}</div>
        </div>
        <div class="course-badge badge-${course.difficulty.toLowerCase().replace(' ', '-')}">${course.difficulty}</div>
      </div>
      <div class="course-desc">${course.description}</div>
      <div class="course-footer">
        <div class="course-meta">
          <span>${course.yardage} yds</span>
          <span>Par ${course.par}</span>
          ${bestStr ? `<span class="best-score">Best: ${bestStr}</span>` : ''}
        </div>
        <div class="diff-dots">${diffDots}</div>
      </div>
      ${!course.available ? '<div class="coming-soon-overlay">Coming Soon</div>' : ''}
    `;

    if (course.available) {
      card.addEventListener('click', () => startCourse(course));
    }

    grid.appendChild(card);
  });
}

// ─── Game Start ─────────────────────────────────────────────────────────────

function startCourse(course) {
  state.currentCourse = course;
  state.currentHoleIndex = 0;
  state.scores = [];
  state.selectedChoice = null;
  showHole();
}

// ─── Hole Screen ─────────────────────────────────────────────────────────────

function showHole() {
  const course = state.currentCourse;
  const hole = course.holes[state.currentHoleIndex];

  // Update scorecard strip
  updateScorecardStrip();

  // Populate diagram
  const diagramEl = document.getElementById('hole-diagram');
  const svg = HOLE_DIAGRAMS[hole.number];
  diagramEl.innerHTML = svg || '';

  // Populate hole info
  document.getElementById('hole-course-name').textContent = course.name;
  document.getElementById('hole-number').textContent = `Hole ${hole.number}`;
  document.getElementById('hole-par').textContent = `Par ${hole.par}`;
  document.getElementById('hole-yardage').textContent = `${hole.yardage} yards`;
  document.getElementById('hole-situation').textContent = hole.situation;

  // Render choices
  const choicesEl = document.getElementById('choices-container');
  choicesEl.innerHTML = '';

  hole.choices.forEach((choice, idx) => {
    const risk = getRisk(choice.outcomes);
    const btn = document.createElement('div');
    btn.className = 'choice-card';
    btn.innerHTML = `
      <div class="choice-card-top">
        <div class="choice-label">${String.fromCharCode(65 + idx)}. ${choice.label}</div>
        <span class="risk-badge ${risk.cls} hidden">${risk.label}</span>
      </div>
      <div class="choice-detail">${choice.detail}</div>
    `;
    btn.addEventListener('click', () => selectChoice(idx));
    choicesEl.appendChild(btn);
  });

  // Reset outcome area
  document.getElementById('outcome-area').classList.add('hidden');
  document.getElementById('confirm-btn').classList.remove('hidden');
  document.getElementById('confirm-btn').disabled = true;

  state.selectedChoice = null;

  showScreen('hole-screen');
}

function selectChoice(idx) {
  state.selectedChoice = idx;

  document.querySelectorAll('.choice-card').forEach((card, i) => {
    card.classList.toggle('selected', i === idx);
  });

  document.getElementById('confirm-btn').disabled = false;
}

function getRisk(outcomes) {
  const total = outcomes.reduce((s, o) => s + o.weight, 0);
  const penalty = outcomes.filter(o => o.outcome === 'bogey' || o.outcome === 'double').reduce((s, o) => s + o.weight, 0);
  const pct = penalty / total;
  if (pct >= 0.55) return { label: 'High Risk', cls: 'risk-high' };
  if (pct >= 0.30) return { label: 'Bold Play', cls: 'risk-medium' };
  return { label: 'Safe Play', cls: 'risk-low' };
}

function pickWeightedOutcome(outcomes) {
  const total = outcomes.reduce((sum, o) => sum + o.weight, 0);
  let rand = Math.random() * total;
  for (const o of outcomes) {
    rand -= o.weight;
    if (rand <= 0) return o;
  }
  return outcomes[outcomes.length - 1];
}

function confirmChoice() {
  if (state.selectedChoice === null) return;

  const hole = state.currentCourse.holes[state.currentHoleIndex];
  const choice = hole.choices[state.selectedChoice];
  const result = pickWeightedOutcome(choice.outcomes);

  // Lock choices
  document.querySelectorAll('.choice-card').forEach((card, i) => {
    card.classList.add('locked');
    if (i !== state.selectedChoice) card.classList.add('dimmed');
  });

  // Record score
  state.scores.push(result.score);

  // Update score pill
  const scorePill = document.getElementById('running-score');
  scorePill.textContent = formatScore(totalToPar());
  const pillEl = scorePill.closest('.score-pill');
  if (pillEl) {
    pillEl.classList.toggle('score-under', totalToPar() < 0);
    pillEl.classList.toggle('score-over', totalToPar() > 0);
  }

  // Show ball-in-flight state
  document.getElementById('confirm-btn').classList.add('hidden');
  const flightEl = document.getElementById('shot-in-flight');
  flightEl.classList.remove('hidden');

  // Scroll to flight indicator
  setTimeout(() => flightEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);

  // Reveal outcome after delay
  setTimeout(() => {
    flightEl.classList.add('hidden');

    const outcomeEl = document.getElementById('outcome-area');
    const badgeEl = document.getElementById('outcome-badge');
    const resultEl = document.getElementById('outcome-result');
    const caddieEl = document.getElementById('caddie-text');

    const outcomeMap = {
      eagle:  { label: 'Eagle',  class: 'badge-eagle',  char: '−2' },
      birdie: { label: 'Birdie', class: 'badge-birdie', char: '−1' },
      par:    { label: 'Par',    class: 'badge-par',    char: 'E'  },
      bogey:  { label: 'Bogey', class: 'badge-bogey',  char: '+1' },
      double: { label: 'Double', class: 'badge-double', char: '+2' },
    };

    const om = outcomeMap[result.outcome];
    badgeEl.className = `outcome-badge ${om.class} celebrate`;
    badgeEl.textContent = `${om.label} (${om.char})`;
    resultEl.textContent = `Running total: ${formatScore(totalToPar())}`;
    caddieEl.textContent = result.caddieText;

    outcomeEl.classList.remove('hidden');
    outcomeEl.classList.add('reveal');

    // Reveal risk badges
    document.querySelectorAll('.risk-badge').forEach(b => b.classList.remove('hidden'));

    // Flash for birdie/eagle
    if (result.outcome === 'eagle') outcomeEl.classList.add('eagle-flash');
    else if (result.outcome === 'birdie') outcomeEl.classList.add('birdie-flash');

    // Update next button label
    const nextBtn = document.getElementById('next-btn');
    const isLast = state.currentHoleIndex === state.currentCourse.holes.length - 1;
    nextBtn.textContent = isLast ? 'View Scorecard →' : 'Next Hole →';

    setTimeout(() => outcomeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
  }, 1500);
}

function nextHole() {
  const isLast = state.currentHoleIndex === state.currentCourse.holes.length - 1;
  state.currentHoleIndex++;

  if (isLast) {
    showFinalScorecard();
  } else {
    showHole();
    window.scrollTo(0, 0);
    document.getElementById('hole-screen').scrollTop = 0;
  }
}

// ─── Scorecard Strip ─────────────────────────────────────────────────────────

function updateScorecardStrip() {
  const strip = document.getElementById('scorecard-strip');
  const course = state.currentCourse;
  if (!course) return;

  let html = '';
  course.holes.forEach((hole, idx) => {
    const hasScore = idx < state.scores.length;
    const score = hasScore ? state.scores[idx] : null;
    const isCurrent = idx === state.currentHoleIndex;

    let scoreClass = '';
    let scoreStr = '·';
    if (hasScore) {
      const diff = score - (hole.par - hole.par); // score relative to par contribution
      if (score === -2) { scoreClass = 'sc-eagle'; scoreStr = '◆'; }
      else if (score === -1) { scoreClass = 'sc-birdie'; scoreStr = '−'; }
      else if (score === 0) { scoreClass = 'sc-par'; scoreStr = '●'; }
      else if (score === 1) { scoreClass = 'sc-bogey'; scoreStr = '+'; }
      else { scoreClass = 'sc-double'; scoreStr = '✕'; }
    }

    html += `<div class="sc-cell${isCurrent ? ' sc-current' : ''}${scoreClass ? ' ' + scoreClass : ''}">
      <span class="sc-num">${hole.number}</span>
      <span class="sc-dot">${scoreStr}</span>
    </div>`;
  });

  strip.innerHTML = html;
}

// ─── Final Scorecard ─────────────────────────────────────────────────────────

function showFinalScorecard() {
  const course = state.currentCourse;
  const total = totalToPar();
  const label = getScoreLabel(total);

  saveBestScore(course.id, total);

  // Stats
  const eagles  = state.scores.filter(s => s <= -2).length;
  const birdies = state.scores.filter(s => s === -1).length;
  const pars    = state.scores.filter(s => s === 0).length;
  const bogeys  = state.scores.filter(s => s === 1).length;
  const doubles = state.scores.filter(s => s >= 2).length;

  // Header
  document.getElementById('final-course-name').textContent = course.name;
  document.getElementById('final-total-score').textContent = formatScore(total);
  document.getElementById('final-label').textContent = `${label.emoji} ${label.label}`;

  // Stats grid
  const statsEl = document.getElementById('final-stats');
  statsEl.innerHTML = `
    ${eagles ? `<div class="stat-box eagle-stat"><div class="stat-num">${eagles}</div><div class="stat-lbl">Eagles</div></div>` : ''}
    <div class="stat-box birdie-stat"><div class="stat-num">${birdies}</div><div class="stat-lbl">Birdies</div></div>
    <div class="stat-box par-stat"><div class="stat-num">${pars}</div><div class="stat-lbl">Pars</div></div>
    <div class="stat-box bogey-stat"><div class="stat-num">${bogeys}</div><div class="stat-lbl">Bogeys</div></div>
    <div class="stat-box double-stat"><div class="stat-num">${doubles}</div><div class="stat-lbl">Doubles</div></div>
  `;

  // Full scorecard table
  const tableEl = document.getElementById('final-scorecard-table');
  let rows = '';
  course.holes.forEach((hole, idx) => {
    const score = state.scores[idx];
    let cls = '';
    if (score <= -2) cls = 'row-eagle';
    else if (score === -1) cls = 'row-birdie';
    else if (score === 0) cls = 'row-par';
    else if (score === 1) cls = 'row-bogey';
    else cls = 'row-double';

    const outcomeLabels = { '-2': 'Eagle', '-1': 'Birdie', '0': 'Par', '1': 'Bogey', '2': 'Double' };
    const scoreLabel = outcomeLabels[score] || '+' + score;
    const diff = score < 0 ? score.toString() : score > 0 ? '+' + score : 'E';

    rows += `<tr class="${cls}">
      <td>${hole.number}</td>
      <td>${hole.par}</td>
      <td>${hole.yardage}</td>
      <td>${scoreLabel}</td>
      <td>${diff}</td>
    </tr>`;
  });
  tableEl.innerHTML = rows;

  // Best score note
  const best = getBestScore(course.id);
  const bestEl = document.getElementById('final-best');
  if (best !== null && best === total) {
    bestEl.textContent = '★ New best score!';
    bestEl.classList.remove('hidden');
  } else if (best !== null) {
    bestEl.textContent = `Personal best: ${formatScore(best)}`;
    bestEl.classList.remove('hidden');
  } else {
    bestEl.classList.add('hidden');
  }

  showScreen('final-screen');
}

// ─── Init ────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  renderCourseSelect();
  showScreen('course-select');

  document.getElementById('confirm-btn').addEventListener('click', confirmChoice);
  document.getElementById('next-btn').addEventListener('click', nextHole);
  document.getElementById('play-again-btn').addEventListener('click', () => {
    startCourse(state.currentCourse);
  });
  document.getElementById('home-btn').addEventListener('click', () => {
    renderCourseSelect();
    showScreen('course-select');
  });
  document.getElementById('back-to-menu-btn').addEventListener('click', () => {
    if (state.scores.length > 0) {
      if (!confirm('Quit this round and return to the menu? Your progress will be lost.')) return;
    }
    renderCourseSelect();
    showScreen('course-select');
  });
  document.getElementById('scorecard-toggle').addEventListener('click', () => {
    document.getElementById('scorecard-drawer').classList.toggle('open');
  });
});
