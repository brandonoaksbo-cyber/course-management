// Top-down SVG hole diagrams for Pebble Beach
// viewBox="0 0 300 180" — wider than tall for mobile landscape feel
// Colors: rough=#152a18, fairway=#336644, bunker=#c9a84c, ocean=#1a3652, green=#4a8f5a
// Red dashed = OB line, dark circles = trees, labels throughout

const HOLE_DIAGRAMS = {

  1: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="background:#152a18">
  <!-- Fairway: slight dogleg right -->
  <path d="M40,80 Q100,80 150,88 Q200,96 240,90 L250,115 Q200,120 148,112 Q100,104 38,104 Z" fill="#336644"/>
  <!-- Tee box -->
  <rect x="28" y="84" width="16" height="12" fill="#4a8f5a" rx="1"/>
  <text x="36" y="93" fill="#c9a84c" font-size="5" text-anchor="middle" font-family="Georgia">TEE</text>
  <!-- Green -->
  <ellipse cx="250" cy="102" rx="22" ry="14" fill="#4a8f5a"/>
  <circle cx="250" cy="100" r="2" fill="white"/>
  <text x="250" y="118" fill="white" font-size="5" text-anchor="middle" font-family="Georgia">GREEN</text>
  <!-- Left bunkers -->
  <ellipse cx="188" cy="82" rx="14" ry="7" fill="#c9a84c"/>
  <text x="188" y="80" fill="#5c4010" font-size="5" text-anchor="middle" font-family="Georgia">BUNKER</text>
  <!-- Trees right -->
  <ellipse cx="200" cy="130" rx="30" ry="14" fill="#0d1f10"/>
  <text x="200" y="148" fill="#5ab877" font-size="5" text-anchor="middle" font-family="Georgia">TREES</text>
  <!-- Trees left -->
  <ellipse cx="120" cy="66" rx="22" ry="10" fill="#0d1f10"/>
  <text x="120" y="58" fill="#5ab877" font-size="5" text-anchor="middle" font-family="Georgia">TREES</text>
  <!-- 150y marker -->
  <line x1="178" y1="90" x2="178" y2="115" stroke="#c9a84c" stroke-width="0.8" stroke-dasharray="3,2"/>
  <text x="170" y="108" fill="#c9a84c" font-size="5" font-family="Georgia">150y</text>
  <!-- Hole label -->
  <text x="14" y="168" fill="#c9a84c" font-size="8" font-family="Georgia" font-weight="bold">HOLE 1</text>
  <text x="14" y="177" fill="#8aab8e" font-size="6" font-family="Georgia">Par 4 · 377 yds</text>
  <!-- Wind arrow: L-to-R crosswind -->
  <text x="150" y="25" fill="#7ab8f5" font-size="6" text-anchor="middle" font-family="Georgia">↑ L-TO-R WIND 10mph</text>
</svg>`,

  2: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="background:#152a18">
  <!-- Fairway, slight right side -->
  <path d="M30,75 Q100,72 160,78 Q220,84 256,80 L260,105 Q222,108 160,102 Q100,96 30,98 Z" fill="#336644"/>
  <!-- Tee -->
  <rect x="18" y="79" width="16" height="12" fill="#4a8f5a" rx="1"/>
  <text x="26" y="88" fill="#c9a84c" font-size="5" text-anchor="middle" font-family="Georgia">TEE</text>
  <!-- Green -->
  <ellipse cx="260" cy="92" rx="22" ry="12" fill="#4a8f5a"/>
  <circle cx="260" cy="90" r="2" fill="white"/>
  <text x="260" y="107" fill="white" font-size="5" text-anchor="middle" font-family="Georgia">GREEN</text>
  <!-- Front bunker -->
  <ellipse cx="234" cy="102" rx="14" ry="6" fill="#c9a84c"/>
  <text x="234" y="114" fill="#5c4010" font-size="4.5" text-anchor="middle" font-family="Georgia">BUNKER</text>
  <!-- Layup zone marker -->
  <line x1="220" y1="78" x2="220" y2="108" stroke="#5ab877" stroke-width="0.8" stroke-dasharray="3,2"/>
  <text x="208" y="74" fill="#5ab877" font-size="4.5" font-family="Georgia">LAYUP</text>
  <text x="208" y="80" fill="#5ab877" font-size="4.5" font-family="Georgia">ZONE</text>
  <!-- 150y marker -->
  <line x1="180" y1="78" x2="180" y2="106" stroke="#c9a84c" stroke-width="0.8" stroke-dasharray="3,2"/>
  <text x="172" y="100" fill="#c9a84c" font-size="5" font-family="Georgia">150y</text>
  <!-- Wind: headwind into tee -->
  <text x="240" y="25" fill="#7ab8f5" font-size="6" font-family="Georgia">← HEADWIND</text>
  <!-- Trees -->
  <ellipse cx="110" cy="65" rx="28" ry="10" fill="#0d1f10"/>
  <text x="110" y="57" fill="#5ab877" font-size="5" text-anchor="middle" font-family="Georgia">TREES</text>
  <ellipse cx="130" cy="118" rx="28" ry="10" fill="#0d1f10"/>
  <text x="130" y="133" fill="#5ab877" font-size="5" text-anchor="middle" font-family="Georgia">TREES</text>
  <!-- Hole label -->
  <text x="14" y="168" fill="#c9a84c" font-size="8" font-family="Georgia" font-weight="bold">HOLE 2</text>
  <text x="14" y="177" fill="#8aab8e" font-size="6" font-family="Georgia">Par 5 · 502 yds</text>
</svg>`,

  3: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="background:#152a18">
  <!-- Narrow fairway, slight left dogleg -->
  <path d="M30,82 Q100,80 160,82 Q200,82 248,86 L250,104 Q202,100 160,98 Q100,96 30,98 Z" fill="#336644"/>
  <!-- Tee -->
  <rect x="18" y="84" width="16" height="12" fill="#4a8f5a" rx="1"/>
  <text x="26" y="93" fill="#c9a84c" font-size="5" text-anchor="middle" font-family="Georgia">TEE</text>
  <!-- Green -->
  <ellipse cx="254" cy="95" rx="20" ry="12" fill="#4a8f5a"/>
  <circle cx="254" cy="93" r="2" fill="white"/>
  <text x="254" y="110" fill="white" font-size="5" text-anchor="middle" font-family="Georgia">GREEN</text>
  <!-- Tight tree corridors -->
  <ellipse cx="100" cy="66" rx="34" ry="11" fill="#0d1f10"/>
  <text x="100" y="57" fill="#5ab877" font-size="5" text-anchor="middle" font-family="Georgia">TREES — NARROWS HERE</text>
  <ellipse cx="130" cy="115" rx="38" ry="11" fill="#0d1f10"/>
  <text x="130" y="132" fill="#5ab877" font-size="5" text-anchor="middle" font-family="Georgia">TREES</text>
  <!-- Right rough trees -->
  <ellipse cx="240" cy="118" rx="18" ry="10" fill="#0d1f10"/>
  <text x="240" y="133" fill="#5ab877" font-size="5" text-anchor="middle" font-family="Georgia">ROUGH</text>
  <!-- 150y marker -->
  <line x1="178" y1="82" x2="178" y2="104" stroke="#c9a84c" stroke-width="0.8" stroke-dasharray="3,2"/>
  <text x="170" y="100" fill="#c9a84c" font-size="5" font-family="Georgia">150y</text>
  <!-- Fairway narrows note -->
  <text x="80" y="76" fill="#c9a84c" font-size="4" font-family="Georgia">22 yds wide</text>
  <!-- Hole label -->
  <text x="14" y="168" fill="#c9a84c" font-size="8" font-family="Georgia" font-weight="bold">HOLE 3</text>
  <text x="14" y="177" fill="#8aab8e" font-size="6" font-family="Georgia">Par 4 · 388 yds · Narrow</text>
</svg>`,

  4: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="background:#152a18">
  <!-- Short par 4 fairway -->
  <path d="M30,82 Q130,78 220,82 L240,94 Q240,100 220,100 Q130,96 30,98 Z" fill="#336644"/>
  <!-- Tee -->
  <rect x="18" y="84" width="16" height="12" fill="#4a8f5a" rx="1"/>
  <text x="26" y="93" fill="#c9a84c" font-size="5" text-anchor="middle" font-family="Georgia">TEE</text>
  <!-- Green, slightly elevated -->
  <ellipse cx="242" cy="90" rx="22" ry="13" fill="#4a8f5a"/>
  <circle cx="242" cy="88" r="2" fill="white"/>
  <text x="242" y="105" fill="white" font-size="5" text-anchor="middle" font-family="Georgia">GREEN</text>
  <!-- OB stakes — left side (top of diagram) red dashed -->
  <line x1="30" y1="78" x2="270" y2="78" stroke="#c94444" stroke-width="1.2" stroke-dasharray="5,3"/>
  <text x="270" y="76" fill="#c94444" font-size="5" text-anchor="end" font-family="Georgia">← OB LEFT SIDE</text>
  <!-- Drop-off right of green (bottom of diagram = right side) -->
  <path d="M222,100 Q230,106 250,108 L250,120 Q228,118 220,110 Z" fill="#0f2e14"/>
  <text x="238" y="125" fill="#5ab877" font-size="4.5" text-anchor="middle" font-family="Georgia">DROP-OFF RIGHT</text>
  <!-- Layup zone 70y -->
  <line x1="176" y1="82" x2="176" y2="100" stroke="#5ab877" stroke-width="0.8" stroke-dasharray="3,2"/>
  <text x="155" y="112" fill="#5ab877" font-size="4.5" font-family="Georgia">LAYUP → 70y</text>
  <!-- Wind arrow: L-to-R crosswind -->
  <text x="150" y="25" fill="#7ab8f5" font-size="6" text-anchor="middle" font-family="Georgia">↑ L-TO-R WIND</text>
  <!-- Hole label -->
  <text x="14" y="158" fill="#c9a84c" font-size="8" font-family="Georgia" font-weight="bold">HOLE 4</text>
  <text x="14" y="167" fill="#8aab8e" font-size="6" font-family="Georgia">Par 4 · 331 yds · OB Left</text>
</svg>`,

  5: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="background:#152a18">
  <!-- Par 3, ocean cliff left/behind -->
  <rect x="0" y="0" width="60" height="180" fill="#1a3652"/>
  <text x="30" y="90" fill="#3a6a9a" font-size="6" text-anchor="middle" font-family="Georgia" transform="rotate(-90,30,90)">PACIFIC OCEAN</text>
  <!-- Tee box left, elevated -->
  <rect x="18" y="78" width="18" height="14" fill="#4a8f5a" rx="1"/>
  <text x="27" y="89" fill="#c9a84c" font-size="5" text-anchor="middle" font-family="Georgia">TEE</text>
  <!-- Green, perched cliff -->
  <ellipse cx="210" cy="88" rx="36" ry="20" fill="#4a8f5a"/>
  <circle cx="210" cy="85" r="2" fill="white"/>
  <text x="210" y="110" fill="white" font-size="5" text-anchor="middle" font-family="Georgia">GREEN</text>
  <!-- Front bunker -->
  <ellipse cx="170" cy="98" rx="16" ry="7" fill="#c9a84c"/>
  <text x="170" y="113" fill="#5c4010" font-size="5" text-anchor="middle" font-family="Georgia">BUNKER</text>
  <!-- Cliff edge -->
  <path d="M60,65 Q90,60 130,65 Q170,68 210,65" stroke="#8aab8e" stroke-width="1" fill="none" stroke-dasharray="4,2"/>
  <text x="110" y="57" fill="#8aab8e" font-size="5" text-anchor="middle" font-family="Georgia">CLIFF EDGE</text>
  <!-- Long rough / back -->
  <ellipse cx="248" cy="90" rx="14" ry="20" fill="#0d1f10"/>
  <text x="248" y="116" fill="#5ab877" font-size="5" text-anchor="middle" font-family="Georgia">LONG ROUGH</text>
  <!-- Headwind indicator -->
  <text x="140" y="30" fill="#7ab8f5" font-size="6" font-family="Georgia" text-anchor="middle">← HEADWIND 15mph</text>
  <!-- Yardage -->
  <line x1="55" y1="85" x2="165" y2="85" stroke="#c9a84c" stroke-width="0.8" stroke-dasharray="3,2"/>
  <text x="110" y="80" fill="#c9a84c" font-size="5" text-anchor="middle" font-family="Georgia">166 yds</text>
  <!-- Hole label -->
  <text x="68" y="165" fill="#c9a84c" font-size="8" font-family="Georgia" font-weight="bold">HOLE 5</text>
  <text x="68" y="174" fill="#8aab8e" font-size="6" font-family="Georgia">Par 3 · 166 yds · Plays longer</text>
</svg>`,

  6: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="background:#152a18">
  <!-- Uphill par 5, slight left bend -->
  <path d="M28,96 Q100,94 180,88 Q230,84 258,80 L260,102 Q230,106 180,110 Q100,116 28,118 Z" fill="#336644"/>
  <!-- Tee -->
  <rect x="16" y="100" width="16" height="12" fill="#4a8f5a" rx="1"/>
  <text x="24" y="109" fill="#c9a84c" font-size="5" text-anchor="middle" font-family="Georgia">TEE</text>
  <!-- Green, elevated at far end -->
  <ellipse cx="260" cy="90" rx="20" ry="13" fill="#4a8f5a"/>
  <circle cx="260" cy="88" r="2" fill="white"/>
  <text x="260" y="107" fill="white" font-size="5" text-anchor="middle" font-family="Georgia">GREEN</text>
  <!-- Left bunker -->
  <ellipse cx="240" cy="108" rx="16" ry="7" fill="#c9a84c"/>
  <text x="240" y="120" fill="#5c4010" font-size="4.5" text-anchor="middle" font-family="Georgia">LEFT BUNKER</text>
  <!-- Layup zone -->
  <line x1="210" y1="88" x2="210" y2="116" stroke="#5ab877" stroke-width="0.8" stroke-dasharray="3,2"/>
  <text x="196" y="84" fill="#5ab877" font-size="4.5" font-family="Georgia">LAYUP</text>
  <text x="196" y="90" fill="#5ab877" font-size="4.5" font-family="Georgia">ZONE</text>
  <!-- 150y marker -->
  <line x1="172" y1="90" x2="172" y2="116" stroke="#c9a84c" stroke-width="0.8" stroke-dasharray="3,2"/>
  <text x="162" y="112" fill="#c9a84c" font-size="5" font-family="Georgia">150y</text>
  <!-- Uphill arrows -->
  <text x="140" y="80" fill="#8aab8e" font-size="6" text-anchor="middle" font-family="Georgia">↑ UPHILL</text>
  <!-- Headwind -->
  <text x="240" y="30" fill="#7ab8f5" font-size="6" font-family="Georgia">← HEADWIND</text>
  <!-- Trees -->
  <ellipse cx="100" cy="80" rx="30" ry="10" fill="#0d1f10"/>
  <text x="100" y="70" fill="#5ab877" font-size="5" text-anchor="middle" font-family="Georgia">TREES</text>
  <ellipse cx="80" cy="128" rx="28" ry="10" fill="#0d1f10"/>
  <text x="80" y="143" fill="#5ab877" font-size="5" text-anchor="middle" font-family="Georgia">TREES</text>
  <!-- Hole label -->
  <text x="14" y="165" fill="#c9a84c" font-size="8" font-family="Georgia" font-weight="bold">HOLE 6</text>
  <text x="14" y="174" fill="#8aab8e" font-size="6" font-family="Georgia">Par 5 · 513 yds · Uphill</text>
</svg>`,

  7: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="background:#1a3652">
  <!-- ALL OCEAN — the iconic par 3 -->
  <!-- Tee box, upper left cliff -->
  <rect x="14" y="22" width="28" height="18" fill="#336644" rx="1"/>
  <text x="28" y="35" fill="#c9a84c" font-size="5.5" text-anchor="middle" font-family="Georgia">TEE</text>
  <!-- Tiny peninsula green -->
  <ellipse cx="196" cy="108" rx="32" ry="20" fill="#4a8f5a"/>
  <circle cx="196" cy="106" r="2.5" fill="white"/>
  <text x="196" y="132" fill="white" font-size="6" text-anchor="middle" font-family="Georgia">GREEN</text>
  <!-- Cliff land bridge connecting tee to green -->
  <path d="M40,30 Q90,30 130,55 Q160,72 162,90" stroke="#336644" stroke-width="12" fill="none"/>
  <!-- Drop zone marker -->
  <circle cx="155" cy="105" r="5" fill="none" stroke="#c9a84c" stroke-width="1" stroke-dasharray="2,1"/>
  <text x="138" y="118" fill="#c9a84c" font-size="4.5" font-family="Georgia">DROP ZONE</text>
  <!-- Ocean labels -->
  <text x="60" y="100" fill="#3a6a9a" font-size="7" text-anchor="middle" font-family="Georgia">PACIFIC OCEAN</text>
  <text x="250" y="60" fill="#3a6a9a" font-size="6" text-anchor="middle" font-family="Georgia">OCEAN</text>
  <text x="250" y="140" fill="#3a6a9a" font-size="6" text-anchor="middle" font-family="Georgia">OCEAN</text>
  <!-- Cliff edges -->
  <path d="M40,38 Q120,42 160,78 Q162,84 163,92" stroke="#8aab8e" stroke-width="0.8" fill="none" stroke-dasharray="3,2"/>
  <text x="80" y="68" fill="#8aab8e" font-size="4.5" font-family="Georgia">CLIFF EDGE</text>
  <!-- Wind crosswind indicator -->
  <text x="150" y="20" fill="#7ab8f5" font-size="6" font-family="Georgia">← 20mph CROSSWIND →</text>
  <!-- Yardage line -->
  <line x1="40" y1="35" x2="168" y2="100" stroke="#c9a84c" stroke-width="0.8" stroke-dasharray="3,2"/>
  <text x="95" y="55" fill="#c9a84c" font-size="5.5" font-family="Georgia" transform="rotate(32,95,55)">106 yds</text>
  <!-- Hole label -->
  <text x="14" y="165" fill="#c9a84c" font-size="8" font-family="Georgia" font-weight="bold">HOLE 7</text>
  <text x="14" y="174" fill="#8aab8e" font-size="6" font-family="Georgia">Par 3 · 106 yds · Peninsula</text>
</svg>`,

  8: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="background:#152a18">
  <!-- Ocean cliff right entire hole -->
  <rect x="225" y="0" width="75" height="180" fill="#1a3652"/>
  <text x="262" y="90" fill="#3a6a9a" font-size="6" text-anchor="middle" font-family="Georgia" transform="rotate(90,262,90)">PACIFIC OCEAN / CLIFF</text>
  <!-- Fairway along cliff -->
  <path d="M28,85 Q100,82 175,84 L175,105 Q100,107 28,108 Z" fill="#336644"/>
  <!-- Tee -->
  <rect x="16" y="88" width="16" height="14" fill="#4a8f5a" rx="1"/>
  <text x="24" y="98" fill="#c9a84c" font-size="5" text-anchor="middle" font-family="Georgia">TEE</text>
  <!-- Green, right side near ocean -->
  <ellipse cx="200" cy="90" rx="26" ry="16" fill="#4a8f5a"/>
  <circle cx="200" cy="87" r="2" fill="white"/>
  <text x="200" y="110" fill="white" font-size="5" text-anchor="middle" font-family="Georgia">GREEN</text>
  <!-- Right bunker near cliff -->
  <ellipse cx="218" cy="100" rx="10" ry="6" fill="#c9a84c"/>
  <text x="218" y="112" fill="#5c4010" font-size="4" text-anchor="middle" font-family="Georgia">BUNKER</text>
  <!-- Safe miss left indicator -->
  <text x="174" y="76" fill="#5ab877" font-size="5" text-anchor="right" font-family="Georgia">← SAFE MISS LEFT</text>
  <!-- Cliff edge -->
  <line x1="225" y1="0" x2="225" y2="180" stroke="#8aab8e" stroke-width="1" stroke-dasharray="4,2"/>
  <!-- 150y marker -->
  <line x1="148" y1="84" x2="148" y2="107" stroke="#c9a84c" stroke-width="0.8" stroke-dasharray="3,2"/>
  <text x="138" y="102" fill="#c9a84c" font-size="5" font-family="Georgia">150y</text>
  <!-- Trees left -->
  <ellipse cx="80" cy="70" rx="30" ry="12" fill="#0d1f10"/>
  <text x="80" y="60" fill="#5ab877" font-size="5" text-anchor="middle" font-family="Georgia">TREES</text>
  <!-- Hole label -->
  <text x="14" y="165" fill="#c9a84c" font-size="8" font-family="Georgia" font-weight="bold">HOLE 8</text>
  <text x="14" y="174" fill="#8aab8e" font-size="6" font-family="Georgia">Par 4 · 418 yds · Miss Left</text>
</svg>`,

  9: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="background:#152a18">
  <!-- Stillwater Cove right -->
  <rect x="220" y="0" width="80" height="180" fill="#1a3652"/>
  <text x="258" y="90" fill="#3a6a9a" font-size="6" text-anchor="middle" font-family="Georgia" transform="rotate(90,258,90)">STILLWATER COVE</text>
  <!-- Fairway tilting right -->
  <path d="M28,82 Q130,78 210,80 L212,104 Q130,106 28,108 Z" fill="#336644"/>
  <!-- Tee -->
  <rect x="16" y="86" width="16" height="14" fill="#4a8f5a" rx="1"/>
  <text x="24" y="96" fill="#c9a84c" font-size="5" text-anchor="middle" font-family="Georgia">TEE</text>
  <!-- Green -->
  <ellipse cx="214" cy="91" rx="22" ry="13" fill="#4a8f5a"/>
  <circle cx="214" cy="89" r="2" fill="white"/>
  <text x="214" y="107" fill="white" font-size="5" text-anchor="middle" font-family="Georgia">GREEN</text>
  <!-- Fairway tilt arrow -->
  <text x="130" y="76" fill="#c9a84c" font-size="5" text-anchor="middle" font-family="Georgia">↘ FAIRWAY TILTS RIGHT</text>
  <!-- Cliff edge -->
  <line x1="220" y1="0" x2="220" y2="180" stroke="#8aab8e" stroke-width="1" stroke-dasharray="4,2"/>
  <!-- Aim left indicator -->
  <text x="80" y="75" fill="#5ab877" font-size="5" font-family="Georgia">← AIM LEFT</text>
  <!-- Trees left rough -->
  <ellipse cx="60" cy="68" rx="26" ry="11" fill="#0d1f10"/>
  <text x="60" y="57" fill="#5ab877" font-size="5" text-anchor="middle" font-family="Georgia">TREES</text>
  <!-- 150y marker -->
  <line x1="168" y1="80" x2="168" y2="106" stroke="#c9a84c" stroke-width="0.8" stroke-dasharray="3,2"/>
  <text x="158" y="100" fill="#c9a84c" font-size="5" font-family="Georgia">150y</text>
  <!-- Tailwind -->
  <text x="150" y="28" fill="#7ab8f5" font-size="6" text-anchor="middle" font-family="Georgia">→ TAILWIND</text>
  <!-- Hole label -->
  <text x="14" y="165" fill="#c9a84c" font-size="8" font-family="Georgia" font-weight="bold">HOLE 9</text>
  <text x="14" y="174" fill="#8aab8e" font-size="6" font-family="Georgia">Par 4 · 464 yds · Cove Right</text>
</svg>`,

  10: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="background:#152a18">
  <!-- Ocean cliff right again -->
  <rect x="230" y="0" width="70" height="180" fill="#1a3652"/>
  <text x="265" y="90" fill="#3a6a9a" font-size="6" text-anchor="middle" font-family="Georgia" transform="rotate(90,265,90)">CLIFF / PACIFIC</text>
  <!-- Fairway, slightly uphill -->
  <path d="M28,85 Q120,82 210,80 L212,104 Q120,107 28,108 Z" fill="#336644"/>
  <!-- Tee -->
  <rect x="16" y="88" width="16" height="14" fill="#4a8f5a" rx="1"/>
  <text x="24" y="98" fill="#c9a84c" font-size="5" text-anchor="middle" font-family="Georgia">TEE</text>
  <!-- Green on shelf -->
  <ellipse cx="212" cy="90" rx="20" ry="13" fill="#4a8f5a"/>
  <circle cx="212" cy="88" r="2" fill="white"/>
  <text x="212" y="107" fill="white" font-size="5" text-anchor="middle" font-family="Georgia">GREEN</text>
  <!-- Shelf drop front-right -->
  <path d="M214,100 Q220,108 230,112 L230,120 Q220,116 212,108 Z" fill="#0f2e14"/>
  <text x="228" y="125" fill="#c94444" font-size="4.5" text-anchor="middle" font-family="Georgia">FALLOFF</text>
  <!-- Headwind -->
  <text x="150" y="28" fill="#7ab8f5" font-size="6" text-anchor="middle" font-family="Georgia">← HEADWIND 12mph</text>
  <!-- 150y marker -->
  <line x1="170" y1="82" x2="170" y2="108" stroke="#c9a84c" stroke-width="0.8" stroke-dasharray="3,2"/>
  <text x="158" y="102" fill="#c9a84c" font-size="5" font-family="Georgia">150y</text>
  <!-- Trees left -->
  <ellipse cx="80" cy="68" rx="30" ry="12" fill="#0d1f10"/>
  <text x="80" y="57" fill="#5ab877" font-size="5" text-anchor="middle" font-family="Georgia">TREES</text>
  <!-- Hole label -->
  <text x="14" y="165" fill="#c9a84c" font-size="8" font-family="Georgia" font-weight="bold">HOLE 10</text>
  <text x="14" y="174" fill="#8aab8e" font-size="6" font-family="Georgia">Par 4 · 446 yds · Cliff Stretch</text>
</svg>`,

  11: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="background:#152a18">
  <!-- Fairway -->
  <path d="M28,82 Q130,80 230,82 L232,102 Q130,104 28,104 Z" fill="#336644"/>
  <!-- Tee -->
  <rect x="16" y="86" width="16" height="14" fill="#4a8f5a" rx="1"/>
  <text x="24" y="96" fill="#c9a84c" font-size="5" text-anchor="middle" font-family="Georgia">TEE</text>
  <!-- Green -->
  <ellipse cx="234" cy="92" rx="22" ry="13" fill="#4a8f5a"/>
  <circle cx="234" cy="90" r="2" fill="white"/>
  <text x="234" y="108" fill="white" font-size="5" text-anchor="middle" font-family="Georgia">GREEN</text>
  <!-- Right rough trees with ball in there -->
  <ellipse cx="175" cy="122" rx="36" ry="14" fill="#0d1f10"/>
  <text x="175" y="140" fill="#c9a84c" font-size="5" text-anchor="middle" font-family="Georgia">RIGHT ROUGH (YOUR BALL)</text>
  <!-- Overhanging branch hazard -->
  <path d="M155,88 Q170,75 185,90" stroke="#0d1f10" stroke-width="6" fill="none"/>
  <text x="165" y="70" fill="#c94444" font-size="5" text-anchor="middle" font-family="Georgia">BRANCH ↓</text>
  <!-- Punch direction indicator -->
  <text x="100" y="75" fill="#5ab877" font-size="5" text-anchor="middle" font-family="Georgia">← PUNCH OUT TO 94y</text>
  <!-- Bunker at green -->
  <ellipse cx="212" cy="108" rx="12" ry="6" fill="#c9a84c"/>
  <text x="212" y="120" fill="#5c4010" font-size="4" text-anchor="middle" font-family="Georgia">BUNKER</text>
  <!-- Trees left -->
  <ellipse cx="80" cy="68" rx="30" ry="12" fill="#0d1f10"/>
  <text x="80" y="57" fill="#5ab877" font-size="5" text-anchor="middle" font-family="Georgia">TREES (LEFT)</text>
  <!-- 150y marker -->
  <line x1="170" y1="82" x2="170" y2="104" stroke="#c9a84c" stroke-width="0.8" stroke-dasharray="3,2"/>
  <text x="160" y="100" fill="#c9a84c" font-size="5" font-family="Georgia">150y</text>
  <!-- Hole label -->
  <text x="14" y="165" fill="#c9a84c" font-size="8" font-family="Georgia" font-weight="bold">HOLE 11</text>
  <text x="14" y="174" fill="#8aab8e" font-size="6" font-family="Georgia">Par 4 · 380 yds · Scramble</text>
</svg>`,

  12: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="background:#152a18">
  <!-- Beach / Carmel Beach strip at bottom -->
  <rect x="0" y="120" width="300" height="60" fill="#c9a84c" opacity="0.3"/>
  <text x="150" y="155" fill="#9a7830" font-size="6" text-anchor="middle" font-family="Georgia">CARMEL BEACH</text>
  <!-- Tee, left side elevated -->
  <rect x="18" y="75" width="18" height="14" fill="#4a8f5a" rx="1"/>
  <text x="27" y="86" fill="#c9a84c" font-size="5" text-anchor="middle" font-family="Georgia">TEE</text>
  <!-- Wide green -->
  <ellipse cx="220" cy="88" rx="50" ry="22" fill="#4a8f5a"/>
  <circle cx="220" cy="84" r="2.5" fill="white"/>
  <text x="220" y="115" fill="white" font-size="5.5" text-anchor="middle" font-family="Georgia">WIDE GREEN</text>
  <!-- Back-left pin -->
  <circle cx="198" cy="80" r="3" fill="none" stroke="#c9a84c" stroke-width="1"/>
  <text x="188" y="75" fill="#c9a84c" font-size="4.5" font-family="Georgia">PIN</text>
  <!-- Right rough -->
  <ellipse cx="278" cy="90" rx="16" ry="22" fill="#0d1f10"/>
  <text x="278" y="120" fill="#5ab877" font-size="5" text-anchor="middle" font-family="Georgia">ROUGH</text>
  <!-- Center target zone -->
  <ellipse cx="220" cy="88" rx="12" ry="8" fill="none" stroke="#5ab877" stroke-width="0.8" stroke-dasharray="3,2"/>
  <text x="220" y="74" fill="#5ab877" font-size="4.5" text-anchor="middle" font-family="Georgia">CENTER TARGET</text>
  <!-- Calm wind -->
  <text x="150" y="28" fill="#7ab8f5" font-size="6" text-anchor="middle" font-family="Georgia">CALM CONDITIONS — RARE</text>
  <!-- Yardage -->
  <line x1="36" y1="82" x2="166" y2="82" stroke="#c9a84c" stroke-width="0.8" stroke-dasharray="3,2"/>
  <text x="100" y="76" fill="#c9a84c" font-size="5" text-anchor="middle" font-family="Georgia">202 yds</text>
  <!-- Hole label -->
  <text x="14" y="165" fill="#c9a84c" font-size="8" font-family="Georgia" font-weight="bold">HOLE 12</text>
  <text x="14" y="174" fill="#8aab8e" font-size="6" font-family="Georgia">Par 3 · 202 yds · Wide Green</text>
</svg>`,

  13: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="background:#152a18">
  <!-- Dogleg left par 4 -->
  <path d="M28,88 Q80,86 130,80 Q170,76 200,80 L202,100 Q170,96 130,100 Q80,106 28,108 Z" fill="#336644"/>
  <!-- Tee -->
  <rect x="16" y="92" width="16" height="14" fill="#4a8f5a" rx="1"/>
  <text x="24" y="102" fill="#c9a84c" font-size="5" text-anchor="middle" font-family="Georgia">TEE</text>
  <!-- Green -->
  <ellipse cx="200" cy="89" rx="26" ry="16" fill="#4a8f5a"/>
  <circle cx="192" cy="88" r="2" fill="white"/>
  <text x="200" y="110" fill="white" font-size="5" text-anchor="middle" font-family="Georgia">GREEN</text>
  <!-- Pot bunker left of green — the sucker flag -->
  <ellipse cx="172" cy="93" rx="10" ry="7" fill="#c9a84c"/>
  <text x="160" y="106" fill="#5c4010" font-size="4" font-family="Georgia">POT</text>
  <text x="160" y="112" fill="#5c4010" font-size="4" font-family="Georgia">BUNKER</text>
  <!-- Front-left pin marker -->
  <circle cx="185" cy="92" r="3" fill="none" stroke="#c94444" stroke-width="1"/>
  <text x="175" y="118" fill="#c94444" font-size="4.5" text-anchor="middle" font-family="Georgia">SUCKER FLAG</text>
  <!-- Safe right half -->
  <ellipse cx="216" cy="88" rx="8" ry="6" fill="none" stroke="#5ab877" stroke-width="0.8" stroke-dasharray="3,2"/>
  <text x="230" y="82" fill="#5ab877" font-size="4.5" font-family="Georgia">SAFE</text>
  <text x="230" y="88" fill="#5ab877" font-size="4.5" font-family="Georgia">RIGHT</text>
  <!-- Trees left -->
  <ellipse cx="80" cy="70" rx="30" ry="12" fill="#0d1f10"/>
  <text x="80" y="59" fill="#5ab877" font-size="5" text-anchor="middle" font-family="Georgia">TREES</text>
  <!-- 150y marker -->
  <line x1="148" y1="82" x2="148" y2="104" stroke="#c9a84c" stroke-width="0.8" stroke-dasharray="3,2"/>
  <text x="136" y="100" fill="#c9a84c" font-size="5" font-family="Georgia">150y</text>
  <!-- Hole label -->
  <text x="14" y="165" fill="#c9a84c" font-size="8" font-family="Georgia" font-weight="bold">HOLE 13</text>
  <text x="14" y="174" fill="#8aab8e" font-size="6" font-family="Georgia">Par 4 · 399 yds · Pot Bunker</text>
</svg>`,

  14: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="background:#152a18">
  <!-- Long par 5, gentle left turn -->
  <path d="M16,86 Q100,82 190,82 Q240,82 268,84 L268,104 Q240,103 190,102 Q100,102 16,104 Z" fill="#336644"/>
  <!-- Tee -->
  <rect x="4" y="88" width="16" height="12" fill="#4a8f5a" rx="1"/>
  <text x="12" y="97" fill="#c9a84c" font-size="5" text-anchor="middle" font-family="Georgia">TEE</text>
  <!-- Green -->
  <ellipse cx="268" cy="93" rx="20" ry="12" fill="#4a8f5a"/>
  <circle cx="268" cy="91" r="2" fill="white"/>
  <text x="268" y="110" fill="white" font-size="5" text-anchor="middle" font-family="Georgia">GREEN</text>
  <!-- Right rough / first cut -->
  <ellipse cx="200" cy="118" rx="40" ry="12" fill="#1e3220"/>
  <text x="200" y="135" fill="#6e8f72" font-size="5" text-anchor="middle" font-family="Georgia">FIRST CUT / ROUGH</text>
  <!-- Layup zone 70y -->
  <line x1="222" y1="82" x2="222" y2="104" stroke="#5ab877" stroke-width="0.8" stroke-dasharray="3,2"/>
  <text x="210" y="78" fill="#5ab877" font-size="4.5" font-family="Georgia">LAYUP</text>
  <text x="210" y="84" fill="#5ab877" font-size="4.5" font-family="Georgia">→ 70y</text>
  <!-- 150y marker -->
  <line x1="190" y1="82" x2="190" y2="104" stroke="#c9a84c" stroke-width="0.8" stroke-dasharray="3,2"/>
  <text x="178" y="100" fill="#c9a84c" font-size="5" font-family="Georgia">150y</text>
  <!-- Trees -->
  <ellipse cx="80" cy="68" rx="40" ry="12" fill="#0d1f10"/>
  <text x="80" y="57" fill="#5ab877" font-size="5" text-anchor="middle" font-family="Georgia">TREES</text>
  <ellipse cx="140" cy="68" rx="30" ry="10" fill="#0d1f10"/>
  <!-- Wind arrow: L-to-R crosswind -->
  <text x="150" y="28" fill="#7ab8f5" font-size="6" text-anchor="middle" font-family="Georgia">↑ L-TO-R CROSSWIND 10mph</text>
  <text x="150" y="40" fill="#8aab8e" font-size="5" text-anchor="middle" font-family="Georgia">573 yds — 3-shot par 5</text>
  <!-- Hole label -->
  <text x="4" y="165" fill="#c9a84c" font-size="8" font-family="Georgia" font-weight="bold">HOLE 14</text>
  <text x="4" y="174" fill="#8aab8e" font-size="6" font-family="Georgia">Par 5 · 573 yds · Longest Hole</text>
</svg>`,

  15: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="background:#152a18">
  <!-- Medium par 4, relatively straight -->
  <path d="M28,84 Q130,80 232,82 L234,104 Q130,106 28,106 Z" fill="#336644"/>
  <!-- Tee -->
  <rect x="16" y="88" width="16" height="14" fill="#4a8f5a" rx="1"/>
  <text x="24" y="98" fill="#c9a84c" font-size="5" text-anchor="middle" font-family="Georgia">TEE</text>
  <!-- Green, firm today -->
  <ellipse cx="234" cy="92" rx="24" ry="14" fill="#4a8f5a"/>
  <circle cx="236" cy="89" r="2" fill="white"/>
  <text x="234" y="110" fill="white" font-size="5" text-anchor="middle" font-family="Georgia">GREEN (FIRM)</text>
  <!-- Short-right bunker -->
  <ellipse cx="216" cy="108" rx="13" ry="6" fill="#c9a84c"/>
  <text x="216" y="120" fill="#5c4010" font-size="4.5" text-anchor="middle" font-family="Georgia">BUNKER</text>
  <!-- Landing zone short of flag -->
  <ellipse cx="226" cy="94" rx="8" ry="6" fill="none" stroke="#5ab877" stroke-width="0.8" stroke-dasharray="3,2"/>
  <text x="210" y="78" fill="#5ab877" font-size="4.5" font-family="Georgia">LAND SHORT</text>
  <text x="210" y="84" fill="#5ab877" font-size="4.5" font-family="Georgia">LET RELEASE</text>
  <!-- Headwind -->
  <text x="150" y="28" fill="#7ab8f5" font-size="6" text-anchor="middle" font-family="Georgia">← HEADWIND 10mph</text>
  <!-- Trees left, right -->
  <ellipse cx="70" cy="68" rx="30" ry="12" fill="#0d1f10"/>
  <text x="70" y="57" fill="#5ab877" font-size="5" text-anchor="middle" font-family="Georgia">TREES</text>
  <ellipse cx="70" cy="120" rx="30" ry="12" fill="#0d1f10"/>
  <text x="70" y="137" fill="#5ab877" font-size="5" text-anchor="middle" font-family="Georgia">TREES</text>
  <!-- 150y marker -->
  <line x1="168" y1="82" x2="168" y2="108" stroke="#c9a84c" stroke-width="0.8" stroke-dasharray="3,2"/>
  <text x="158" y="102" fill="#c9a84c" font-size="5" font-family="Georgia">150y</text>
  <!-- Hole label -->
  <text x="14" y="165" fill="#c9a84c" font-size="8" font-family="Georgia" font-weight="bold">HOLE 15</text>
  <text x="14" y="174" fill="#8aab8e" font-size="6" font-family="Georgia">Par 4 · 397 yds · Firm Green</text>
</svg>`,

  16: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="background:#152a18">
  <!-- Left-right dogleg par 4 -->
  <path d="M28,82 Q110,78 170,80 L172,102 Q110,106 28,104 Z" fill="#336644"/>
  <path d="M170,78 Q220,70 262,80 L262,102 Q220,92 170,102 Z" fill="#336644"/>
  <!-- Tee -->
  <rect x="16" y="86" width="16" height="14" fill="#4a8f5a" rx="1"/>
  <text x="24" y="96" fill="#c9a84c" font-size="5" text-anchor="middle" font-family="Georgia">TEE</text>
  <!-- Green -->
  <ellipse cx="262" cy="90" rx="22" ry="13" fill="#4a8f5a"/>
  <circle cx="262" cy="88" r="2" fill="white"/>
  <text x="262" y="108" fill="white" font-size="5" text-anchor="middle" font-family="Georgia">GREEN</text>
  <!-- Trees inside corner (the shortcut) -->
  <ellipse cx="175" cy="68" rx="32" ry="16" fill="#0d1f10"/>
  <text x="175" y="50" fill="#c94444" font-size="5" text-anchor="middle" font-family="Georgia">TREES — CORNER CUT</text>
  <text x="175" y="57" fill="#c94444" font-size="4.5" text-anchor="middle" font-family="Georgia">Must carry 255 yds to clear</text>
  <!-- Trees right rough -->
  <ellipse cx="240" cy="114" rx="26" ry="10" fill="#0d1f10"/>
  <text x="240" y="130" fill="#5ab877" font-size="5" text-anchor="middle" font-family="Georgia">RIGHT ROUGH</text>
  <!-- Proper tee line — left center -->
  <line x1="32" y1="93" x2="120" y2="93" stroke="#5ab877" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="70" y="112" fill="#5ab877" font-size="5" text-anchor="middle" font-family="Georgia">PLAY LEFT-CENTER</text>
  <!-- Wind arrow: R-to-L crosswind -->
  <text x="150" y="28" fill="#7ab8f5" font-size="6" text-anchor="middle" font-family="Georgia">↓ R-TO-L WIND</text>
  <!-- 150y marker from green -->
  <line x1="210" y1="74" x2="210" y2="100" stroke="#c9a84c" stroke-width="0.8" stroke-dasharray="3,2"/>
  <text x="199" y="98" fill="#c9a84c" font-size="5" font-family="Georgia">150y</text>
  <!-- Hole label -->
  <text x="14" y="165" fill="#c9a84c" font-size="8" font-family="Georgia" font-weight="bold">HOLE 16</text>
  <text x="14" y="174" fill="#8aab8e" font-size="6" font-family="Georgia">Par 4 · 402 yds · Dogleg Left</text>
</svg>`,

  17: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="background:#1a3652">
  <!-- All ocean left, angled green par 3 -->
  <rect x="0" y="0" width="100" height="180" fill="#1a3652"/>
  <text x="50" y="90" fill="#3a6a9a" font-size="6" text-anchor="middle" font-family="Georgia" transform="rotate(-90,50,90)">PACIFIC OCEAN</text>
  <rect x="100" y="0" width="200" height="180" fill="#152a18"/>
  <!-- Tee box right side -->
  <rect x="242" y="20" width="22" height="16" fill="#4a8f5a" rx="1"/>
  <text x="253" y="31" fill="#c9a84c" font-size="5" text-anchor="middle" font-family="Georgia">TEE</text>
  <!-- Angled green, left edge near ocean -->
  <path d="M112,65 Q148,58 175,62 Q188,70 190,90 Q188,108 175,112 Q148,116 112,108 Q98,98 98,85 Q100,72 112,65 Z" fill="#4a8f5a"/>
  <circle cx="148" cy="86" r="3" fill="white"/>
  <text x="148" y="130" fill="white" font-size="6" text-anchor="middle" font-family="Georgia">GREEN</text>
  <!-- Ocean edge of green — cliff -->
  <line x1="100" y1="68" x2="100" y2="108" stroke="#8aab8e" stroke-width="1.5" stroke-dasharray="4,2"/>
  <text x="90" y="55" fill="#c94444" font-size="5" text-anchor="middle" font-family="Georgia">OCEAN</text>
  <text x="90" y="62" fill="#c94444" font-size="5" text-anchor="middle" font-family="Georgia">EDGE</text>
  <!-- Flag center-left — danger zone -->
  <circle cx="130" cy="84" r="3.5" fill="none" stroke="#c94444" stroke-width="1"/>
  <text x="116" y="78" fill="#c94444" font-size="4.5" font-family="Georgia">FLAG</text>
  <text x="110" y="84" fill="#c94444" font-size="4" font-family="Georgia">OCEAN SIDE!</text>
  <!-- Safe right -->
  <ellipse cx="168" cy="86" rx="10" ry="8" fill="none" stroke="#5ab877" stroke-width="0.8" stroke-dasharray="3,2"/>
  <text x="182" y="82" fill="#5ab877" font-size="4.5" font-family="Georgia">SAFE RIGHT</text>
  <!-- Headwind arrow: tee is RIGHT, green is LEFT, so headwind = → -->
  <text x="200" y="30" fill="#7ab8f5" font-size="6" text-anchor="middle" font-family="Georgia">→ HEADWIND 18mph</text>
  <!-- Yardage line -->
  <line x1="244" y1="28" x2="188" y2="85" stroke="#c9a84c" stroke-width="0.8" stroke-dasharray="3,2"/>
  <text x="230" y="55" fill="#c9a84c" font-size="5" font-family="Georgia">208 yds</text>
  <!-- Hole label -->
  <text x="104" y="165" fill="#c9a84c" font-size="8" font-family="Georgia" font-weight="bold">HOLE 17</text>
  <text x="104" y="174" fill="#8aab8e" font-size="6" font-family="Georgia">Par 3 · 208 yds · Ocean Left</text>
</svg>`,

  18: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="background:#152a18">
  <!-- Stillwater Cove entire left side -->
  <rect x="0" y="0" width="60" height="180" fill="#1a3652"/>
  <text x="30" y="90" fill="#3a6a9a" font-size="5.5" text-anchor="middle" font-family="Georgia" transform="rotate(-90,30,90)">STILLWATER COVE</text>
  <!-- Fairway right side, stays away from cove -->
  <path d="M62,75 Q130,70 200,72 Q240,72 268,80 L268,104 Q240,98 200,96 Q130,94 62,98 Z" fill="#336644"/>
  <!-- Tee top of hole -->
  <rect x="62" y="78" width="16" height="14" fill="#4a8f5a" rx="1"/>
  <text x="70" y="89" fill="#c9a84c" font-size="5" text-anchor="middle" font-family="Georgia">TEE</text>
  <!-- Green at end, right side -->
  <ellipse cx="265" cy="90" rx="24" ry="15" fill="#4a8f5a"/>
  <circle cx="265" cy="87" r="2.5" fill="white"/>
  <text x="265" y="110" fill="white" font-size="5.5" text-anchor="middle" font-family="Georgia">18th GREEN</text>
  <!-- Seawall / ocean edge -->
  <line x1="60" y1="0" x2="60" y2="180" stroke="#8aab8e" stroke-width="1" stroke-dasharray="4,2"/>
  <!-- Right layup safe zone 70y -->
  <line x1="220" y1="70" x2="220" y2="100" stroke="#5ab877" stroke-width="1.2" stroke-dasharray="3,2"/>
  <text x="208" y="66" fill="#5ab877" font-size="4.5" font-family="Georgia">LAYUP</text>
  <text x="208" y="72" fill="#5ab877" font-size="4.5" font-family="Georgia">→ 70y</text>
  <!-- Conservative 120y layup -->
  <line x1="188" y1="72" x2="188" y2="98" stroke="#c9a84c" stroke-width="0.8" stroke-dasharray="3,2"/>
  <text x="178" y="68" fill="#c9a84c" font-size="4.5" font-family="Georgia">120y</text>
  <!-- Danger zone -->
  <path d="M62,88 Q80,85 100,84" stroke="#c94444" stroke-width="2" fill="none"/>
  <text x="80" y="78" fill="#c94444" font-size="4.5" text-anchor="middle" font-family="Georgia">DANGER — COVE LEFT</text>
  <!-- Wind arrow: L-to-R crosswind off ocean -->
  <text x="170" y="25" fill="#7ab8f5" font-size="6" text-anchor="middle" font-family="Georgia">↑ L-TO-R WIND 8mph</text>
  <!-- Hole label -->
  <text x="64" y="165" fill="#c9a84c" font-size="8" font-family="Georgia" font-weight="bold">HOLE 18</text>
  <text x="64" y="174" fill="#8aab8e" font-size="6" font-family="Georgia">Par 5 · 543 yds · Cove Left</text>
</svg>`

};
