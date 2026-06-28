// Top-down SVG hole diagrams for Pebble Beach Golf Links
// ViewBox: 280×170 | Tee: bottom | Green: top | Augusta color palette

const HOLE_DIAGRAMS = {

  // ── Hole 1: Par 4, 377y — Slight dogleg right ─────────────────────────
  1: `<svg viewBox="0 0 280 170" xmlns="http://www.w3.org/2000/svg">
  <rect width="280" height="170" fill="#0f2214"/>
  <!-- Rough texture -->
  <rect width="280" height="170" fill="#152a18"/>
  <!-- Fairway: gently curves right -->
  <path d="M 128,158 Q 130,110 138,80 Q 148,50 168,22"
        stroke="#2a5e38" stroke-width="42" fill="none" stroke-linecap="round"/>
  <path d="M 128,158 Q 130,110 138,80 Q 148,50 168,22"
        stroke="#336644" stroke-width="32" fill="none" stroke-linecap="round"/>
  <!-- Left bunkers at ~260y -->
  <ellipse cx="112" cy="72" rx="14" ry="8" fill="#c9a84c" opacity="0.85"/>
  <ellipse cx="126" cy="80" rx="10" ry="6" fill="#c9a84c" opacity="0.8"/>
  <!-- Trees right pinch at 250y -->
  <ellipse cx="165" cy="85" rx="8" ry="14" fill="#0f2214" opacity="0.9"/>
  <ellipse cx="172" cy="92" rx="7" ry="10" fill="#122618" opacity="0.9"/>
  <!-- Green -->
  <ellipse cx="168" cy="22" rx="22" ry="13" fill="#3d7a4a"/>
  <ellipse cx="168" cy="22" rx="18" ry="10" fill="#4a8f5a"/>
  <!-- Pin -->
  <line x1="168" y1="22" x2="168" y2="12" stroke="#c9a84c" stroke-width="1.5"/>
  <polygon points="168,12 174,17 168,17" fill="#c9a84c"/>
  <!-- Tee -->
  <rect x="118" y="152" width="20" height="10" rx="1" fill="#f0e8d2" opacity="0.75"/>
  <!-- Labels -->
  <text x="8" y="166" font-family="Georgia,serif" font-size="9" fill="#c9a84c" letter-spacing="1">TEE</text>
  <text x="8" y="14" font-family="Georgia,serif" font-size="9" fill="#c9a84c" letter-spacing="1">377 YDS</text>
  <text x="200" y="25" font-family="Georgia,serif" font-size="8" fill="#f0e8d2" opacity="0.55" letter-spacing="1">PAR 4</text>
  <!-- Wind arrow -->
  <text x="210" y="155" font-family="Georgia,serif" font-size="8" fill="#f0e8d2" opacity="0.45">WIND →</text>
</svg>`,

  // ── Hole 2: Par 5, 502y — Long straight, bunker front-right ───────────
  2: `<svg viewBox="0 0 280 170" xmlns="http://www.w3.org/2000/svg">
  <rect width="280" height="170" fill="#152a18"/>
  <!-- Fairway: long, straight with gentle curve -->
  <path d="M 130,158 Q 132,110 135,70 Q 136,44 140,16"
        stroke="#2a5e38" stroke-width="44" fill="none" stroke-linecap="round"/>
  <path d="M 130,158 Q 132,110 135,70 Q 136,44 140,16"
        stroke="#336644" stroke-width="33" fill="none" stroke-linecap="round"/>
  <!-- Bunker front-right of green -->
  <ellipse cx="160" cy="36" rx="14" ry="8" fill="#c9a84c" opacity="0.85"/>
  <!-- Small left bunker -->
  <ellipse cx="118" cy="55" rx="9" ry="6" fill="#c9a84c" opacity="0.7"/>
  <!-- 150y marker -->
  <line x1="108" y1="75" x2="170" y2="75" stroke="#f0e8d2" stroke-width="0.5" opacity="0.25" stroke-dasharray="3,3"/>
  <!-- Green -->
  <ellipse cx="140" cy="17" rx="24" ry="13" fill="#3d7a4a"/>
  <ellipse cx="140" cy="17" rx="19" ry="10" fill="#4a8f5a"/>
  <!-- Pin -->
  <line x1="140" y1="17" x2="140" y2="7" stroke="#c9a84c" stroke-width="1.5"/>
  <polygon points="140,7 146,12 140,12" fill="#c9a84c"/>
  <!-- Tee -->
  <rect x="120" y="152" width="20" height="10" rx="1" fill="#f0e8d2" opacity="0.75"/>
  <text x="8" y="166" font-family="Georgia,serif" font-size="9" fill="#c9a84c" letter-spacing="1">TEE</text>
  <text x="8" y="14" font-family="Georgia,serif" font-size="9" fill="#c9a84c" letter-spacing="1">502 YDS</text>
  <text x="200" y="25" font-family="Georgia,serif" font-size="8" fill="#f0e8d2" opacity="0.55" letter-spacing="1">PAR 5</text>
  <text x="167" y="33" font-family="Georgia,serif" font-size="7" fill="#c9a84c" opacity="0.7">BNKR</text>
</svg>`,

  // ── Hole 3: Par 4, 388y — Dogleg left, narrow tree-lined ─────────────
  3: `<svg viewBox="0 0 280 170" xmlns="http://www.w3.org/2000/svg">
  <rect width="280" height="170" fill="#152a18"/>
  <!-- Fairway: straight then dogleg left -->
  <path d="M 148,158 Q 148,100 142,78 Q 130,52 110,22"
        stroke="#2a5e38" stroke-width="38" fill="none" stroke-linecap="round"/>
  <path d="M 148,158 Q 148,100 142,78 Q 130,52 110,22"
        stroke="#336644" stroke-width="28" fill="none" stroke-linecap="round"/>
  <!-- Trees RIGHT side — tight wall -->
  <ellipse cx="175" cy="110" rx="10" ry="20" fill="#0f2214"/>
  <ellipse cx="182" cy="90" rx="9" ry="16" fill="#0f2214"/>
  <ellipse cx="175" cy="70" rx="9" ry="14" fill="#112214"/>
  <!-- Trees LEFT side -->
  <ellipse cx="115" cy="115" rx="10" ry="18" fill="#0f2214"/>
  <ellipse cx="108" cy="95" rx="8" ry="15" fill="#0f2214"/>
  <!-- Pinch point label -->
  <text x="188" y="88" font-family="Georgia,serif" font-size="7" fill="#f0e8d2" opacity="0.4">TREES</text>
  <!-- Green -->
  <ellipse cx="110" cy="22" rx="22" ry="12" fill="#3d7a4a"/>
  <ellipse cx="110" cy="22" rx="18" ry="9" fill="#4a8f5a"/>
  <!-- Pin -->
  <line x1="110" y1="22" x2="110" y2="12" stroke="#c9a84c" stroke-width="1.5"/>
  <polygon points="110,12 116,17 110,17" fill="#c9a84c"/>
  <!-- Tee -->
  <rect x="138" y="152" width="20" height="10" rx="1" fill="#f0e8d2" opacity="0.75"/>
  <text x="8" y="166" font-family="Georgia,serif" font-size="9" fill="#c9a84c" letter-spacing="1">TEE</text>
  <text x="8" y="14" font-family="Georgia,serif" font-size="9" fill="#c9a84c" letter-spacing="1">388 YDS</text>
  <text x="196" y="25" font-family="Georgia,serif" font-size="8" fill="#f0e8d2" opacity="0.55" letter-spacing="1">PAR 4</text>
</svg>`,

  // ── Hole 4: Par 4, 331y — Short, OB right entire length ───────────────
  4: `<svg viewBox="0 0 280 170" xmlns="http://www.w3.org/2000/svg">
  <rect width="280" height="170" fill="#152a18"/>
  <!-- OB zone right side -->
  <rect x="185" y="0" width="95" height="170" fill="#1a0a0a" opacity="0.5"/>
  <!-- OB stakes -->
  <line x1="185" y1="10" x2="185" y2="160" stroke="#c94444" stroke-width="1" stroke-dasharray="4,4" opacity="0.6"/>
  <!-- Fairway: short and tight -->
  <path d="M 135,158 Q 138,120 142,90 Q 146,60 148,22"
        stroke="#2a5e38" stroke-width="36" fill="none" stroke-linecap="round"/>
  <path d="M 135,158 Q 138,120 142,90 Q 146,60 148,22"
        stroke="#336644" stroke-width="26" fill="none" stroke-linecap="round"/>
  <!-- OB label -->
  <text x="200" y="88" font-family="Georgia,serif" font-size="10" fill="#c94444" opacity="0.6" letter-spacing="1">O.B.</text>
  <!-- Green with tight bunkers -->
  <ellipse cx="148" cy="22" rx="20" ry="11" fill="#3d7a4a"/>
  <ellipse cx="148" cy="22" rx="16" ry="8" fill="#4a8f5a"/>
  <!-- Bunker left of green -->
  <ellipse cx="128" cy="26" rx="10" ry="6" fill="#c9a84c" opacity="0.8"/>
  <!-- Pin -->
  <line x1="148" y1="22" x2="148" y2="12" stroke="#c9a84c" stroke-width="1.5"/>
  <polygon points="148,12 154,17 148,17" fill="#c9a84c"/>
  <!-- Tee -->
  <rect x="125" y="152" width="20" height="10" rx="1" fill="#f0e8d2" opacity="0.75"/>
  <text x="8" y="166" font-family="Georgia,serif" font-size="9" fill="#c9a84c" letter-spacing="1">TEE</text>
  <text x="8" y="14" font-family="Georgia,serif" font-size="9" fill="#c9a84c" letter-spacing="1">331 YDS</text>
  <text x="196" y="25" font-family="Georgia,serif" font-size="8" fill="#f0e8d2" opacity="0.55" letter-spacing="1">PAR 4</text>
</svg>`,

  // ── Hole 5: Par 3, 166y — Ocean par 3, green perched on cliff ─────────
  5: `<svg viewBox="0 0 280 170" xmlns="http://www.w3.org/2000/svg">
  <rect width="280" height="170" fill="#152a18"/>
  <!-- Pacific Ocean — left side and below green -->
  <path d="M 0,0 L 105,0 L 105,80 Q 105,90 90,95 L 0,95 Z" fill="#1a3652" opacity="0.85"/>
  <!-- Wave texture subtle -->
  <path d="M 10,40 Q 30,35 50,40 Q 70,45 90,40" stroke="#2a5a8a" stroke-width="1" fill="none" opacity="0.4"/>
  <path d="M 5,60 Q 25,55 45,60 Q 65,65 85,60" stroke="#2a5a8a" stroke-width="1" fill="none" opacity="0.4"/>
  <!-- Cliff edge -->
  <path d="M 105,0 L 105,95 Q 105,105 115,108" stroke="#c9a84c" stroke-width="1.5" fill="none" opacity="0.5" stroke-dasharray="3,2"/>
  <!-- Fairway / approach area -->
  <path d="M 148,158 Q 145,130 138,100 Q 132,80 118,55"
        stroke="#2a5e38" stroke-width="36" fill="none" stroke-linecap="round"/>
  <path d="M 148,158 Q 145,130 138,100 Q 132,80 118,55"
        stroke="#336644" stroke-width="26" fill="none" stroke-linecap="round"/>
  <!-- Bunker right of green -->
  <ellipse cx="150" cy="45" rx="12" ry="7" fill="#c9a84c" opacity="0.85"/>
  <!-- Green — perched on cliff -->
  <ellipse cx="118" cy="45" rx="22" ry="12" fill="#3d7a4a"/>
  <ellipse cx="118" cy="45" rx="17" ry="9" fill="#4a8f5a"/>
  <!-- Pin -->
  <line x1="118" y1="45" x2="118" y2="35" stroke="#c9a84c" stroke-width="1.5"/>
  <polygon points="118,35 124,40 118,40" fill="#c9a84c"/>
  <!-- OCEAN label -->
  <text x="12" y="52" font-family="Georgia,serif" font-size="9" fill="#c9a84c" opacity="0.6" letter-spacing="1">PACIFIC</text>
  <text x="18" y="64" font-family="Georgia,serif" font-size="9" fill="#c9a84c" opacity="0.6" letter-spacing="1">OCEAN</text>
  <!-- Tee -->
  <rect x="138" y="152" width="20" height="10" rx="1" fill="#f0e8d2" opacity="0.75"/>
  <text x="160" y="166" font-family="Georgia,serif" font-size="9" fill="#c9a84c" letter-spacing="1">TEE</text>
  <text x="8" y="166" font-family="Georgia,serif" font-size="9" fill="#c9a84c" letter-spacing="1">166 YDS</text>
  <text x="196" y="14" font-family="Georgia,serif" font-size="8" fill="#f0e8d2" opacity="0.55" letter-spacing="1">PAR 3</text>
  <!-- Wind into face -->
  <text x="190" y="155" font-family="Georgia,serif" font-size="8" fill="#f0e8d2" opacity="0.4">↑ WIND</text>
</svg>`,

  // ── Hole 6: Par 5, 513y — Uphill, dogleg left ─────────────────────────
  6: `<svg viewBox="0 0 280 170" xmlns="http://www.w3.org/2000/svg">
  <rect width="280" height="170" fill="#152a18"/>
  <!-- Fairway: long, curves left, uphill -->
  <path d="M 155,158 Q 155,110 148,82 Q 138,55 112,22"
        stroke="#2a5e38" stroke-width="44" fill="none" stroke-linecap="round"/>
  <path d="M 155,158 Q 155,110 148,82 Q 138,55 112,22"
        stroke="#336644" stroke-width="33" fill="none" stroke-linecap="round"/>
  <!-- Left rough / tree line -->
  <ellipse cx="98" cy="100" rx="10" ry="22" fill="#0f2214"/>
  <!-- Uphill contour lines (subtle) -->
  <path d="M 100,120 Q 150,115 175,120" stroke="#f0e8d2" stroke-width="0.5" fill="none" opacity="0.15" stroke-dasharray="2,4"/>
  <path d="M 95,80 Q 145,75 168,80" stroke="#f0e8d2" stroke-width="0.5" fill="none" opacity="0.15" stroke-dasharray="2,4"/>
  <!-- Bunker left of green -->
  <ellipse cx="88" cy="30" rx="14" ry="8" fill="#c9a84c" opacity="0.85"/>
  <!-- Green -->
  <ellipse cx="112" cy="22" rx="23" ry="12" fill="#3d7a4a"/>
  <ellipse cx="112" cy="22" rx="18" ry="9" fill="#4a8f5a"/>
  <!-- Pin -->
  <line x1="112" y1="22" x2="112" y2="12" stroke="#c9a84c" stroke-width="1.5"/>
  <polygon points="112,12 118,17 112,17" fill="#c9a84c"/>
  <!-- Tee -->
  <rect x="145" y="152" width="20" height="10" rx="1" fill="#f0e8d2" opacity="0.75"/>
  <text x="8" y="166" font-family="Georgia,serif" font-size="9" fill="#c9a84c" letter-spacing="1">TEE</text>
  <text x="8" y="14" font-family="Georgia,serif" font-size="9" fill="#c9a84c" letter-spacing="1">513 YDS</text>
  <text x="196" y="25" font-family="Georgia,serif" font-size="8" fill="#f0e8d2" opacity="0.55" letter-spacing="1">PAR 5</text>
  <!-- Uphill label -->
  <text x="195" y="90" font-family="Georgia,serif" font-size="8" fill="#f0e8d2" opacity="0.4" transform="rotate(-70,200,90)">UPHILL</text>
</svg>`,

  // ── Hole 7: Par 3, 106y — ICONIC. Peninsula green, ocean three sides ──
  7: `<svg viewBox="0 0 280 170" xmlns="http://www.w3.org/2000/svg">
  <rect width="280" height="170" fill="#1a3652"/>
  <!-- Full ocean background -->
  <!-- Cliff/land area for tee -->
  <path d="M 0,90 L 280,90 L 280,170 L 0,170 Z" fill="#152a18"/>
  <!-- Peninsula jutting out into ocean toward top -->
  <path d="M 100,90 Q 100,60 120,35 Q 130,22 140,18 Q 150,22 160,35 Q 180,60 180,90 Z"
        fill="#2a5e38"/>
  <!-- Peninsula rough edge -->
  <path d="M 100,90 Q 100,60 120,35 Q 130,22 140,18 Q 150,22 160,35 Q 180,60 180,90 Z"
        stroke="#c9a84c" stroke-width="0.8" fill="none" opacity="0.4"/>
  <!-- Cliff drop texture -->
  <path d="M 103,88 Q 100,70 118,40" stroke="#c9a84c" stroke-width="0.5" fill="none" opacity="0.25" stroke-dasharray="2,3"/>
  <path d="M 177,88 Q 180,70 162,40" stroke="#c9a84c" stroke-width="0.5" fill="none" opacity="0.25" stroke-dasharray="2,3"/>
  <!-- Green on the peninsula -->
  <ellipse cx="140" cy="50" rx="28" ry="20" fill="#3d7a4a"/>
  <ellipse cx="140" cy="50" rx="22" ry="16" fill="#4a8f5a"/>
  <!-- Pin center of green -->
  <line x1="140" y1="50" x2="140" y2="36" stroke="#c9a84c" stroke-width="1.5"/>
  <polygon points="140,36 147,43 140,43" fill="#c9a84c"/>
  <!-- Ocean waves -->
  <path d="M 20,30 Q 40,25 60,30 Q 80,35 100,30" stroke="#2a5a8a" stroke-width="1.2" fill="none" opacity="0.6"/>
  <path d="M 180,35 Q 200,30 220,35 Q 240,40 260,35" stroke="#2a5a8a" stroke-width="1.2" fill="none" opacity="0.6"/>
  <path d="M 50,65 Q 75,60 95,65" stroke="#2a5a8a" stroke-width="1" fill="none" opacity="0.4"/>
  <path d="M 185,65 Q 210,60 235,65" stroke="#2a5a8a" stroke-width="1" fill="none" opacity="0.4"/>
  <!-- OCEAN labels -->
  <text x="15" y="55" font-family="Georgia,serif" font-size="8" fill="#c9a84c" opacity="0.55" letter-spacing="0.5">PACIFIC</text>
  <text x="205" y="55" font-family="Georgia,serif" font-size="8" fill="#c9a84c" opacity="0.55" letter-spacing="0.5">OCEAN</text>
  <!-- Tee area on land -->
  <rect x="130" y="120" width="20" height="10" rx="1" fill="#f0e8d2" opacity="0.75"/>
  <text x="105" y="160" font-family="Georgia,serif" font-size="9" fill="#c9a84c" letter-spacing="1">TEE  •  106 YDS  •  PAR 3</text>
  <!-- Wind indicator -->
  <text x="192" y="145" font-family="Georgia,serif" font-size="8" fill="#f0e8d2" opacity="0.4">WIND ↙</text>
</svg>`,

  // ── Hole 8: Par 4, 418y — Blind over chasm, dogleg left, cliffs right ─
  8: `<svg viewBox="0 0 280 170" xmlns="http://www.w3.org/2000/svg">
  <rect width="280" height="170" fill="#152a18"/>
  <!-- Chasm / ravine between tee and fairway -->
  <path d="M 75,130 Q 100,115 140,118 Q 160,120 175,130"
        stroke="#1a3652" stroke-width="28" fill="none" opacity="0.9"/>
  <path d="M 75,130 Q 100,115 140,118 Q 160,120 175,130"
        stroke="#0a1a2a" stroke-width="18" fill="none" opacity="0.8"/>
  <!-- CHASM label -->
  <text x="92" y="122" font-family="Georgia,serif" font-size="7" fill="#7ab8f5" opacity="0.6" letter-spacing="0.5">CHASM</text>
  <!-- Fairway: dogleg left after chasm -->
  <path d="M 158,158 Q 162,145 160,132 Q 155,110 148,85 Q 138,58 112,22"
        stroke="#2a5e38" stroke-width="40" fill="none" stroke-linecap="round"/>
  <path d="M 158,158 Q 162,145 160,132 Q 155,110 148,85 Q 138,58 112,22"
        stroke="#336644" stroke-width="30" fill="none" stroke-linecap="round"/>
  <!-- Cliffs right side -->
  <path d="M 190,160 L 190,20" stroke="#c94444" stroke-width="0.8" stroke-dasharray="3,3" opacity="0.4"/>
  <text x="198" y="90" font-family="Georgia,serif" font-size="8" fill="#c94444" opacity="0.45" transform="rotate(90,200,90)">CLIFF · OCEAN</text>
  <!-- Ocean right side subtle -->
  <rect x="195" y="0" width="85" height="170" fill="#1a3652" opacity="0.3"/>
  <!-- Bunker right of green -->
  <ellipse cx="130" cy="28" rx="13" ry="7" fill="#c9a84c" opacity="0.85"/>
  <!-- Green -->
  <ellipse cx="112" cy="22" rx="22" ry="12" fill="#3d7a4a"/>
  <ellipse cx="112" cy="22" rx="17" ry="9" fill="#4a8f5a"/>
  <!-- Pin -->
  <line x1="112" y1="22" x2="112" y2="12" stroke="#c9a84c" stroke-width="1.5"/>
  <polygon points="112,12 118,17 112,17" fill="#c9a84c"/>
  <!-- Tee -->
  <rect x="148" y="152" width="20" height="10" rx="1" fill="#f0e8d2" opacity="0.75"/>
  <text x="8" y="166" font-family="Georgia,serif" font-size="9" fill="#c9a84c" letter-spacing="1">TEE</text>
  <text x="8" y="14" font-family="Georgia,serif" font-size="9" fill="#c9a84c" letter-spacing="1">418 YDS</text>
  <text x="196" y="14" font-family="Georgia,serif" font-size="8" fill="#f0e8d2" opacity="0.55" letter-spacing="1">PAR 4</text>
</svg>`,

  // ── Hole 9: Par 4, 464y — Ocean right entire length ───────────────────
  9: `<svg viewBox="0 0 280 170" xmlns="http://www.w3.org/2000/svg">
  <rect width="280" height="170" fill="#152a18"/>
  <!-- Stillwater Cove — right side entire length -->
  <rect x="185" y="0" width="95" height="170" fill="#1a3652" opacity="0.9"/>
  <!-- Cliff edge -->
  <path d="M 185,0 L 185,170" stroke="#c9a84c" stroke-width="1" stroke-dasharray="3,3" opacity="0.45"/>
  <!-- Wave lines in ocean -->
  <path d="M 200,40 Q 225,35 255,40" stroke="#2a5a8a" stroke-width="1" fill="none" opacity="0.5"/>
  <path d="M 198,80 Q 223,75 253,80" stroke="#2a5a8a" stroke-width="1" fill="none" opacity="0.5"/>
  <path d="M 200,120 Q 225,115 255,120" stroke="#2a5a8a" stroke-width="1" fill="none" opacity="0.5"/>
  <!-- Fairway: straight along the cove, slight right tilt -->
  <path d="M 130,158 Q 133,110 136,72 Q 138,45 140,18"
        stroke="#2a5e38" stroke-width="42" fill="none" stroke-linecap="round"/>
  <path d="M 130,158 Q 133,110 136,72 Q 138,45 140,18"
        stroke="#336644" stroke-width="31" fill="none" stroke-linecap="round"/>
  <!-- Fairway tilts right — right side danger zone -->
  <text x="192" y="88" font-family="Georgia,serif" font-size="8" fill="#c9a84c" opacity="0.6" letter-spacing="0.5">STILLWATER</text>
  <text x="200" y="100" font-family="Georgia,serif" font-size="8" fill="#c9a84c" opacity="0.6" letter-spacing="0.5">COVE</text>
  <!-- Green -->
  <ellipse cx="140" cy="18" rx="22" ry="12" fill="#3d7a4a"/>
  <ellipse cx="140" cy="18" rx="17" ry="9" fill="#4a8f5a"/>
  <!-- Pin -->
  <line x1="140" y1="18" x2="140" y2="8" stroke="#c9a84c" stroke-width="1.5"/>
  <polygon points="140,8 146,13 140,13" fill="#c9a84c"/>
  <!-- Tee -->
  <rect x="120" y="152" width="20" height="10" rx="1" fill="#f0e8d2" opacity="0.75"/>
  <text x="8" y="166" font-family="Georgia,serif" font-size="9" fill="#c9a84c" letter-spacing="1">TEE</text>
  <text x="8" y="14" font-family="Georgia,serif" font-size="9" fill="#c9a84c" letter-spacing="1">464 YDS</text>
  <text x="8" y="25" font-family="Georgia,serif" font-size="8" fill="#f0e8d2" opacity="0.55" letter-spacing="1">PAR 4</text>
  <!-- Wind at back -->
  <text x="8" y="88" font-family="Georgia,serif" font-size="8" fill="#f0e8d2" opacity="0.4">↑ TAILWIND</text>
</svg>`,

  // ── Hole 10: Par 4, 446y — Into wind, green on shelf above cliffs ─────
  10: `<svg viewBox="0 0 280 170" xmlns="http://www.w3.org/2000/svg">
  <rect width="280" height="170" fill="#152a18"/>
  <!-- Cliffs and ocean right side -->
  <rect x="190" y="0" width="90" height="170" fill="#1a3652" opacity="0.85"/>
  <path d="M 190,0 L 190,170" stroke="#c9a84c" stroke-width="1" stroke-dasharray="3,3" opacity="0.4"/>
  <!-- Ocean waves -->
  <path d="M 205,50 Q 230,45 260,50" stroke="#2a5a8a" stroke-width="1" fill="none" opacity="0.5"/>
  <path d="M 205,100 Q 230,95 260,100" stroke="#2a5a8a" stroke-width="1" fill="none" opacity="0.5"/>
  <!-- Fairway: straight, uphill into wind -->
  <path d="M 130,158 Q 132,110 136,72 Q 138,45 140,18"
        stroke="#2a5e38" stroke-width="40" fill="none" stroke-linecap="round"/>
  <path d="M 130,158 Q 132,110 136,72 Q 138,45 140,18"
        stroke="#336644" stroke-width="30" fill="none" stroke-linecap="round"/>
  <!-- Green shelf — elevated indicator -->
  <path d="M 112,32 L 170,32" stroke="#c9a84c" stroke-width="1" opacity="0.4" stroke-dasharray="2,2"/>
  <text x="100" y="42" font-family="Georgia,serif" font-size="7" fill="#c9a84c" opacity="0.55">SHELF</text>
  <!-- Cliff drop short-right of green -->
  <path d="M 165,20 Q 175,30 175,50" stroke="#c94444" stroke-width="1.5" fill="none" opacity="0.5"/>
  <!-- Green -->
  <ellipse cx="140" cy="20" rx="22" ry="11" fill="#3d7a4a"/>
  <ellipse cx="140" cy="20" rx="17" ry="8" fill="#4a8f5a"/>
  <!-- Pin -->
  <line x1="140" y1="20" x2="140" y2="10" stroke="#c9a84c" stroke-width="1.5"/>
  <polygon points="140,10 146,15 140,15" fill="#c9a84c"/>
  <!-- Tee -->
  <rect x="120" y="152" width="20" height="10" rx="1" fill="#f0e8d2" opacity="0.75"/>
  <text x="8" y="166" font-family="Georgia,serif" font-size="9" fill="#c9a84c" letter-spacing="1">TEE</text>
  <text x="8" y="14" font-family="Georgia,serif" font-size="9" fill="#c9a84c" letter-spacing="1">446 YDS</text>
  <text x="196" y="14" font-family="Georgia,serif" font-size="8" fill="#f0e8d2" opacity="0.55" letter-spacing="1">PAR 4</text>
  <!-- Into wind -->
  <text x="8" y="88" font-family="Georgia,serif" font-size="8" fill="#f0e8d2" opacity="0.4">↓ HEADWIND</text>
</svg>`,

  // ── Hole 11: Par 4, 380y — Tree-lined, recovery hole ─────────────────
  11: `<svg viewBox="0 0 280 170" xmlns="http://www.w3.org/2000/svg">
  <rect width="280" height="170" fill="#152a18"/>
  <!-- Rough right — where drive went -->
  <rect x="170" y="60" width="60" height="60" fill="#1a3a20" opacity="0.7"/>
  <!-- Trees both sides, tighter right -->
  <ellipse cx="82" cy="130" rx="12" ry="22" fill="#0f2214"/>
  <ellipse cx="80" cy="95" rx="10" ry="18" fill="#0f2214"/>
  <ellipse cx="85" cy="65" rx="10" ry="16" fill="#0f2214"/>
  <ellipse cx="195" cy="120" rx="12" ry="22" fill="#0f2214"/>
  <ellipse cx="192" cy="85" rx="11" ry="18" fill="#0f2214"/>
  <ellipse cx="195" cy="55" rx="10" ry="16" fill="#0f2214"/>
  <!-- Fairway: straight-ish -->
  <path d="M 135,158 Q 138,110 140,75 Q 142,48 144,18"
        stroke="#2a5e38" stroke-width="40" fill="none" stroke-linecap="round"/>
  <path d="M 135,158 Q 138,110 140,75 Q 142,48 144,18"
        stroke="#336644" stroke-width="30" fill="none" stroke-linecap="round"/>
  <!-- Ball in right rough indicator -->
  <circle cx="188" cy="88" r="5" fill="#f0e8d2" opacity="0.6"/>
  <text x="195" y="86" font-family="Georgia,serif" font-size="7" fill="#f0e8d2" opacity="0.5">BALL</text>
  <!-- Green -->
  <ellipse cx="144" cy="18" rx="22" ry="12" fill="#3d7a4a"/>
  <ellipse cx="144" cy="18" rx="17" ry="9" fill="#4a8f5a"/>
  <!-- Bunker right of green -->
  <ellipse cx="166" cy="22" rx="10" ry="6" fill="#c9a84c" opacity="0.8"/>
  <!-- Pin -->
  <line x1="144" y1="18" x2="144" y2="8" stroke="#c9a84c" stroke-width="1.5"/>
  <polygon points="144,8 150,13 144,13" fill="#c9a84c"/>
  <!-- Tee -->
  <rect x="125" y="152" width="20" height="10" rx="1" fill="#f0e8d2" opacity="0.75"/>
  <text x="8" y="166" font-family="Georgia,serif" font-size="9" fill="#c9a84c" letter-spacing="1">TEE</text>
  <text x="8" y="14" font-family="Georgia,serif" font-size="9" fill="#c9a84c" letter-spacing="1">380 YDS</text>
  <text x="196" y="14" font-family="Georgia,serif" font-size="8" fill="#f0e8d2" opacity="0.55" letter-spacing="1">PAR 4</text>
</svg>`,

  // ── Hole 12: Par 3, 202y — Long par 3 over beach ─────────────────────
  12: `<svg viewBox="0 0 280 170" xmlns="http://www.w3.org/2000/svg">
  <rect width="280" height="170" fill="#152a18"/>
  <!-- Beach / ocean between tee and green -->
  <path d="M 0,95 L 280,95 L 280,130 L 0,130 Z" fill="#c9a84c" opacity="0.4"/>
  <path d="M 0,100 L 280,100 L 280,135 L 0,135 Z" fill="#1a3652" opacity="0.7"/>
  <!-- Beach label -->
  <text x="100" y="110" font-family="Georgia,serif" font-size="9" fill="#c9a84c" opacity="0.6" letter-spacing="1">BEACH</text>
  <!-- Tee area ground -->
  <rect x="0" y="130" width="280" height="40" fill="#1c3a22"/>
  <!-- Green side ground -->
  <rect x="0" y="0" width="280" height="90" fill="#1c3a22"/>
  <!-- Approach path -->
  <path d="M 140,158 L 140,130" stroke="#336644" stroke-width="30" fill="none" opacity="0.4"/>
  <!-- Wide green — 202y par 3 -->
  <ellipse cx="140" cy="55" rx="40" ry="20" fill="#3d7a4a"/>
  <ellipse cx="140" cy="55" rx="34" ry="16" fill="#4a8f5a"/>
  <!-- Pin back left -->
  <line x1="122" y1="50" x2="122" y2="38" stroke="#c9a84c" stroke-width="1.5"/>
  <polygon points="122,38 129,44 122,44" fill="#c9a84c"/>
  <!-- Tee -->
  <rect x="130" y="150" width="20" height="10" rx="1" fill="#f0e8d2" opacity="0.75"/>
  <!-- Yardage line -->
  <line x1="140" y1="75" x2="140" y2="148" stroke="#f0e8d2" stroke-width="0.5" stroke-dasharray="3,4" opacity="0.2"/>
  <text x="8" y="166" font-family="Georgia,serif" font-size="9" fill="#c9a84c" letter-spacing="1">TEE</text>
  <text x="8" y="14" font-family="Georgia,serif" font-size="9" fill="#c9a84c" letter-spacing="1">202 YDS  •  PAR 3</text>
  <!-- Calm day note -->
  <text x="190" y="155" font-family="Georgia,serif" font-size="8" fill="#f0e8d2" opacity="0.35">NO WIND</text>
</svg>`,

  // ── Hole 13: Par 4, 399y — Dogleg left, pot bunker front-left ─────────
  13: `<svg viewBox="0 0 280 170" xmlns="http://www.w3.org/2000/svg">
  <rect width="280" height="170" fill="#152a18"/>
  <!-- Fairway: dogleg left -->
  <path d="M 155,158 Q 155,108 148,82 Q 138,55 112,22"
        stroke="#2a5e38" stroke-width="40" fill="none" stroke-linecap="round"/>
  <path d="M 155,158 Q 155,108 148,82 Q 138,55 112,22"
        stroke="#336644" stroke-width="30" fill="none" stroke-linecap="round"/>
  <!-- POT BUNKER front-left of green — deep and dangerous -->
  <ellipse cx="90" cy="35" rx="11" ry="11" fill="#1a1208"/>
  <ellipse cx="90" cy="35" rx="9" ry="9" fill="#c9a84c" opacity="0.9"/>
  <ellipse cx="90" cy="35" rx="6" ry="6" fill="#8a6030"/>
  <text x="72" y="52" font-family="Georgia,serif" font-size="7" fill="#c9a84c" opacity="0.7" letter-spacing="0.5">POT BNKR</text>
  <!-- Right side rough trees -->
  <ellipse cx="192" cy="100" rx="10" ry="20" fill="#0f2214"/>
  <!-- Green -->
  <ellipse cx="112" cy="22" rx="22" ry="12" fill="#3d7a4a"/>
  <ellipse cx="112" cy="22" rx="17" ry="9" fill="#4a8f5a"/>
  <!-- Pin front left — near the bunker -->
  <line x1="100" y1="25" x2="100" y2="14" stroke="#c9a84c" stroke-width="1.5"/>
  <polygon points="100,14 107,20 100,20" fill="#c9a84c"/>
  <text x="65" y="15" font-family="Georgia,serif" font-size="7" fill="#c9a84c" opacity="0.6">SUCKER PIN</text>
  <!-- Tee -->
  <rect x="145" y="152" width="20" height="10" rx="1" fill="#f0e8d2" opacity="0.75"/>
  <text x="8" y="166" font-family="Georgia,serif" font-size="9" fill="#c9a84c" letter-spacing="1">TEE</text>
  <text x="8" y="14" font-family="Georgia,serif" font-size="9" fill="#c9a84c" letter-spacing="1">399 YDS</text>
  <text x="196" y="14" font-family="Georgia,serif" font-size="8" fill="#f0e8d2" opacity="0.55" letter-spacing="1">PAR 4</text>
</svg>`,

  // ── Hole 14: Par 5, 573y — Longest hole, three-shot ──────────────────
  14: `<svg viewBox="0 0 280 170" xmlns="http://www.w3.org/2000/svg">
  <rect width="280" height="170" fill="#152a18"/>
  <!-- Fairway: long and wide, gentle right curve -->
  <path d="M 128,158 Q 130,115 134,82 Q 138,52 142,18"
        stroke="#2a5e38" stroke-width="46" fill="none" stroke-linecap="round"/>
  <path d="M 128,158 Q 130,115 134,82 Q 138,52 142,18"
        stroke="#336644" stroke-width="35" fill="none" stroke-linecap="round"/>
  <!-- 3-shot markers -->
  <line x1="88" y1="105" x2="192" y2="105" stroke="#f0e8d2" stroke-width="0.5" stroke-dasharray="2,4" opacity="0.2"/>
  <text x="196" y="108" font-family="Georgia,serif" font-size="7" fill="#f0e8d2" opacity="0.35">2ND</text>
  <line x1="88" y1="60" x2="192" y2="60" stroke="#f0e8d2" stroke-width="0.5" stroke-dasharray="2,4" opacity="0.2"/>
  <text x="196" y="63" font-family="Georgia,serif" font-size="7" fill="#f0e8d2" opacity="0.35">3RD</text>
  <!-- Cross-wind arrows -->
  <text x="8" y="88" font-family="Georgia,serif" font-size="8" fill="#f0e8d2" opacity="0.35">→ CROSS WIND</text>
  <!-- Guarded green -->
  <ellipse cx="142" cy="30" rx="12" ry="7" fill="#c9a84c" opacity="0.8"/>
  <ellipse cx="160" cy="24" rx="10" ry="6" fill="#c9a84c" opacity="0.75"/>
  <!-- Green -->
  <ellipse cx="142" cy="18" rx="24" ry="12" fill="#3d7a4a"/>
  <ellipse cx="142" cy="18" rx="19" ry="9" fill="#4a8f5a"/>
  <!-- Pin -->
  <line x1="142" y1="18" x2="142" y2="8" stroke="#c9a84c" stroke-width="1.5"/>
  <polygon points="142,8 148,13 142,13" fill="#c9a84c"/>
  <!-- Tee -->
  <rect x="118" y="152" width="20" height="10" rx="1" fill="#f0e8d2" opacity="0.75"/>
  <text x="8" y="166" font-family="Georgia,serif" font-size="9" fill="#c9a84c" letter-spacing="1">TEE</text>
  <text x="8" y="14" font-family="Georgia,serif" font-size="9" fill="#c9a84c" letter-spacing="1">573 YDS</text>
  <text x="196" y="14" font-family="Georgia,serif" font-size="8" fill="#f0e8d2" opacity="0.55" letter-spacing="1">PAR 5</text>
</svg>`,

  // ── Hole 15: Par 4, 397y — Firm green, approach management ───────────
  15: `<svg viewBox="0 0 280 170" xmlns="http://www.w3.org/2000/svg">
  <rect width="280" height="170" fill="#152a18"/>
  <!-- Fairway: straight -->
  <path d="M 130,158 Q 133,110 136,72 Q 138,45 140,18"
        stroke="#2a5e38" stroke-width="40" fill="none" stroke-linecap="round"/>
  <path d="M 130,158 Q 133,110 136,72 Q 138,45 140,18"
        stroke="#336644" stroke-width="30" fill="none" stroke-linecap="round"/>
  <!-- Bunker short-right -->
  <ellipse cx="162" cy="42" rx="13" ry="7" fill="#c9a84c" opacity="0.85"/>
  <!-- Left slope off green -->
  <path d="M 118,22 Q 108,30 105,45" stroke="#c9a84c" stroke-width="0.8" fill="none" opacity="0.4" stroke-dasharray="2,2"/>
  <!-- Wind into face arrows -->
  <text x="8" y="88" font-family="Georgia,serif" font-size="8" fill="#f0e8d2" opacity="0.35">↓ HEADWIND</text>
  <!-- Green — firm, slopes away from front -->
  <ellipse cx="140" cy="22" rx="23" ry="13" fill="#3d7a4a"/>
  <ellipse cx="140" cy="22" rx="18" ry="10" fill="#4a8f5a"/>
  <!-- Subtle slope indicator on green -->
  <path d="M 130,17 L 150,27" stroke="#f0e8d2" stroke-width="0.5" opacity="0.3"/>
  <text x="152" y="29" font-family="Georgia,serif" font-size="7" fill="#f0e8d2" opacity="0.35">▼ SLOPE</text>
  <!-- Pin middle-right -->
  <line x1="148" y1="20" x2="148" y2="10" stroke="#c9a84c" stroke-width="1.5"/>
  <polygon points="148,10 155,15 148,15" fill="#c9a84c"/>
  <!-- Tee -->
  <rect x="120" y="152" width="20" height="10" rx="1" fill="#f0e8d2" opacity="0.75"/>
  <text x="8" y="166" font-family="Georgia,serif" font-size="9" fill="#c9a84c" letter-spacing="1">TEE</text>
  <text x="8" y="14" font-family="Georgia,serif" font-size="9" fill="#c9a84c" letter-spacing="1">397 YDS</text>
  <text x="196" y="14" font-family="Georgia,serif" font-size="8" fill="#f0e8d2" opacity="0.55" letter-spacing="1">PAR 4</text>
</svg>`,

  // ── Hole 16: Par 4, 402y — Dogleg right, trees inside corner ─────────
  16: `<svg viewBox="0 0 280 170" xmlns="http://www.w3.org/2000/svg">
  <rect width="280" height="170" fill="#152a18"/>
  <!-- Fairway: dogleg right -->
  <path d="M 118,158 Q 118,110 128,82 Q 140,55 162,22"
        stroke="#2a5e38" stroke-width="40" fill="none" stroke-linecap="round"/>
  <path d="M 118,158 Q 118,110 128,82 Q 140,55 162,22"
        stroke="#336644" stroke-width="30" fill="none" stroke-linecap="round"/>
  <!-- Trees INSIDE corner (left side of dogleg) -->
  <ellipse cx="110" cy="78" rx="12" ry="22" fill="#0f2214"/>
  <ellipse cx="118" cy="58" rx="10" ry="18" fill="#0f2214"/>
  <text x="70" y="68" font-family="Georgia,serif" font-size="7" fill="#f0e8d2" opacity="0.35">TREES</text>
  <!-- Corner carry line — need 255y to clear -->
  <path d="M 118,158 Q 140,100 162,75" stroke="#c9a84c" stroke-width="0.8" fill="none" opacity="0.3" stroke-dasharray="3,3"/>
  <text x="155" y="95" font-family="Georgia,serif" font-size="7" fill="#c9a84c" opacity="0.45">255 YDS</text>
  <!-- Green -->
  <ellipse cx="162" cy="22" rx="22" ry="12" fill="#3d7a4a"/>
  <ellipse cx="162" cy="22" rx="17" ry="9" fill="#4a8f5a"/>
  <!-- Bunker right of green -->
  <ellipse cx="185" cy="26" rx="11" ry="6" fill="#c9a84c" opacity="0.8"/>
  <!-- Pin -->
  <line x1="162" y1="22" x2="162" y2="12" stroke="#c9a84c" stroke-width="1.5"/>
  <polygon points="162,12 169,17 162,17" fill="#c9a84c"/>
  <!-- Tee -->
  <rect x="108" y="152" width="20" height="10" rx="1" fill="#f0e8d2" opacity="0.75"/>
  <text x="8" y="166" font-family="Georgia,serif" font-size="9" fill="#c9a84c" letter-spacing="1">TEE</text>
  <text x="8" y="14" font-family="Georgia,serif" font-size="9" fill="#c9a84c" letter-spacing="1">402 YDS</text>
  <text x="196" y="14" font-family="Georgia,serif" font-size="8" fill="#f0e8d2" opacity="0.55" letter-spacing="1">PAR 4</text>
  <text x="8" y="88" font-family="Georgia,serif" font-size="8" fill="#f0e8d2" opacity="0.35">← WIND R-TO-L</text>
</svg>`,

  // ── Hole 17: Par 3, 208y — FAMOUS. Ocean entire left, angled green ────
  17: `<svg viewBox="0 0 280 170" xmlns="http://www.w3.org/2000/svg">
  <rect width="280" height="170" fill="#152a18"/>
  <!-- OCEAN — entire left side -->
  <path d="M 0,0 L 130,0 L 115,170 L 0,170 Z" fill="#1a3652" opacity="0.9"/>
  <!-- Cliff edge -->
  <path d="M 130,0 L 115,170" stroke="#c9a84c" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.5"/>
  <!-- Dangerous zone label -->
  <text x="25" y="88" font-family="Georgia,serif" font-size="9" fill="#c9a84c" opacity="0.55" letter-spacing="0.5">PACIFIC</text>
  <text x="30" y="102" font-family="Georgia,serif" font-size="9" fill="#c9a84c" opacity="0.55" letter-spacing="0.5">OCEAN</text>
  <!-- Wave lines -->
  <path d="M 10,45 Q 40,40 70,45 Q 95,50 115,45" stroke="#2a5a8a" stroke-width="1" fill="none" opacity="0.5"/>
  <path d="M 8,85 Q 38,80 68,85 Q 93,90 110,85" stroke="#2a5a8a" stroke-width="1" fill="none" opacity="0.5"/>
  <path d="M 12,125 Q 42,120 72,125 Q 97,130 112,125" stroke="#2a5a8a" stroke-width="1" fill="none" opacity="0.5"/>
  <!-- Fairway: angled toward ocean -->
  <path d="M 195,158 Q 185,120 170,85 Q 158,55 148,22"
        stroke="#2a5e38" stroke-width="38" fill="none" stroke-linecap="round"/>
  <path d="M 195,158 Q 185,120 170,85 Q 158,55 148,22"
        stroke="#336644" stroke-width="28" fill="none" stroke-linecap="round"/>
  <!-- Green — angled, hugging ocean left -->
  <ellipse cx="145" cy="26" rx="28" ry="14" fill="#3d7a4a" transform="rotate(-15,145,26)"/>
  <ellipse cx="145" cy="26" rx="22" ry="11" fill="#4a8f5a" transform="rotate(-15,145,26)"/>
  <!-- Flag center -->
  <line x1="140" y1="24" x2="140" y2="12" stroke="#c9a84c" stroke-width="1.5"/>
  <polygon points="140,12 148,17 140,17" fill="#c9a84c"/>
  <!-- Danger: ocean encroaches on left of green -->
  <text x="8" y="30" font-family="Georgia,serif" font-size="7" fill="#c94444" opacity="0.5">⚠ OOB LEFT</text>
  <!-- Tee -->
  <rect x="185" y="152" width="20" height="10" rx="1" fill="#f0e8d2" opacity="0.75"/>
  <text x="8" y="166" font-family="Georgia,serif" font-size="9" fill="#c9a84c" letter-spacing="1">208 YDS  •  PAR 3</text>
  <text x="196" y="140" font-family="Georgia,serif" font-size="9" fill="#f0e8d2" opacity="0.6">TEE</text>
  <!-- Headwind indicator -->
  <text x="196" y="88" font-family="Georgia,serif" font-size="8" fill="#f0e8d2" opacity="0.4">↓ 18MPH</text>
</svg>`,

  // ── Hole 18: Par 5, 543y — Famous finisher, Stillwater Cove left ──────
  18: `<svg viewBox="0 0 280 170" xmlns="http://www.w3.org/2000/svg">
  <rect width="280" height="170" fill="#152a18"/>
  <!-- Stillwater Cove — entire left side -->
  <path d="M 0,0 L 120,0 L 108,170 L 0,170 Z" fill="#1a3652" opacity="0.9"/>
  <!-- Cliff edge -->
  <path d="M 120,0 L 108,170" stroke="#c9a84c" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.5"/>
  <!-- Cove label -->
  <text x="12" y="80" font-family="Georgia,serif" font-size="8" fill="#c9a84c" opacity="0.55" letter-spacing="0.5">STILLWATER</text>
  <text x="22" y="93" font-family="Georgia,serif" font-size="8" fill="#c9a84c" opacity="0.55" letter-spacing="0.5">COVE</text>
  <!-- Waves -->
  <path d="M 10,35 Q 40,30 75,35 Q 100,40 115,35" stroke="#2a5a8a" stroke-width="1.2" fill="none" opacity="0.5"/>
  <path d="M 8,72 Q 38,67 73,72 Q 98,77 113,72" stroke="#2a5a8a" stroke-width="1" fill="none" opacity="0.5"/>
  <path d="M 10,115 Q 40,110 75,115 Q 100,120 113,115" stroke="#2a5a8a" stroke-width="1" fill="none" opacity="0.5"/>
  <!-- Fairway: hugs the cove, curves left slightly -->
  <path d="M 192,158 Q 185,115 172,82 Q 160,55 148,18"
        stroke="#2a5e38" stroke-width="44" fill="none" stroke-linecap="round"/>
  <path d="M 192,158 Q 185,115 172,82 Q 160,55 148,18"
        stroke="#336644" stroke-width="33" fill="none" stroke-linecap="round"/>
  <!-- 70y layup zone marker -->
  <line x1="122" y1="40" x2="200" y2="40" stroke="#c9a84c" stroke-width="0.8" stroke-dasharray="3,3" opacity="0.45"/>
  <text x="202" y="43" font-family="Georgia,serif" font-size="7" fill="#c9a84c" opacity="0.6">70 YDS</text>
  <!-- Green — famous, by the cove -->
  <ellipse cx="148" cy="18" rx="26" ry="13" fill="#3d7a4a"/>
  <ellipse cx="148" cy="18" rx="21" ry="10" fill="#4a8f5a"/>
  <!-- Seawall left of green -->
  <path d="M 125,12 L 125,28" stroke="#c94444" stroke-width="2" opacity="0.5"/>
  <text x="105" y="10" font-family="Georgia,serif" font-size="7" fill="#c94444" opacity="0.5">SEA WALL</text>
  <!-- Pin -->
  <line x1="148" y1="18" x2="148" y2="6" stroke="#c9a84c" stroke-width="1.5"/>
  <polygon points="148,6 156,12 148,12" fill="#c9a84c"/>
  <!-- Tee -->
  <rect x="182" y="152" width="20" height="10" rx="1" fill="#f0e8d2" opacity="0.75"/>
  <text x="8" y="166" font-family="Georgia,serif" font-size="9" fill="#c9a84c" letter-spacing="1">TEE</text>
  <text x="8" y="14" font-family="Georgia,serif" font-size="9" fill="#c9a84c" letter-spacing="1">543 YDS</text>
  <text x="8" y="25" font-family="Georgia,serif" font-size="8" fill="#f0e8d2" opacity="0.55" letter-spacing="1">PAR 5</text>
  <text x="196" y="140" font-family="Georgia,serif" font-size="9" fill="#f0e8d2" opacity="0.6">TEE</text>
</svg>`,

};
