// ============================================================
// CIRCLE OF FIFTHS — visuel pour la leçon 1.7
// ============================================================

// The standard order of tonalities on the circle (clockwise from top)
const CIRCLE_TONALITIES = [
  { major: 'C',  minor: 'Am',  sharps: 0,  flats: 0 },
  { major: 'G',  minor: 'Em',  sharps: 1,  flats: 0 },
  { major: 'D',  minor: 'Bm',  sharps: 2,  flats: 0 },
  { major: 'A',  minor: 'F#m', sharps: 3,  flats: 0 },
  { major: 'E',  minor: 'C#m', sharps: 4,  flats: 0 },
  { major: 'B',  minor: 'G#m', sharps: 5,  flats: 0 },
  { major: 'F#', minor: 'D#m', sharps: 6,  flats: 0 },
  { major: 'Db', minor: 'Bbm', sharps: 0,  flats: 5 },
  { major: 'Ab', minor: 'Fm',  sharps: 0,  flats: 4 },
  { major: 'Eb', minor: 'Cm',  sharps: 0,  flats: 3 },
  { major: 'Bb', minor: 'Gm',  sharps: 0,  flats: 2 },
  { major: 'F',  minor: 'Dm',  sharps: 0,  flats: 1 }
];

function renderCircleOfFifthsSVG(opts = {}) {
  const {
    size = 400,
    theme = 'dark',
    highlight = null  // optional: highlight a specific tonality (e.g., 'C')
  } = opts;

  const colors = theme === 'dark' ? {
    bg: 'transparent',
    line: '#2a2a36',
    outerRing: '#1d1d27',
    middleRing: '#14141b',
    centerCircle: '#0a0a0f',
    text: '#f5f0e6',
    textMuted: '#8a8472',
    gold: '#d4a857',
    goldBright: '#f0c674',
    highlight: '#d4a857',
    highlightText: '#0a0a0f'
  } : {
    bg: '#fafafa',
    line: '#cccccc',
    outerRing: '#ffffff',
    middleRing: '#f5f5f5',
    centerCircle: '#ffffff',
    text: '#1a1a1a',
    textMuted: '#666666',
    gold: '#d4a857',
    goldBright: '#a07e2f',
    highlight: '#d4a857',
    highlightText: '#1a1a1a'
  };

  const cx = size / 2;
  const cy = size / 2;
  const outerR = size * 0.45;
  const innerR = size * 0.31;
  const centerR = size * 0.17;

  let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">`;

  // Background
  svg += `<rect width="${size}" height="${size}" fill="${colors.bg}"/>`;

  // Outer ring (majors)
  svg += `<circle cx="${cx}" cy="${cy}" r="${outerR}" fill="${colors.outerRing}" stroke="${colors.gold}" stroke-width="1.5"/>`;
  // Middle ring (minors)
  svg += `<circle cx="${cx}" cy="${cy}" r="${innerR}" fill="${colors.middleRing}" stroke="${colors.line}" stroke-width="1"/>`;
  // Center circle
  svg += `<circle cx="${cx}" cy="${cy}" r="${centerR}" fill="${colors.centerCircle}" stroke="${colors.line}" stroke-width="1"/>`;

  // Draw 12 segments
  for (let i = 0; i < 12; i++) {
    // Angle: -90 (top) + i*30 (clockwise)
    const angle = (-90 + i * 30) * Math.PI / 180;
    const nextAngle = (-90 + (i + 1) * 30) * Math.PI / 180;

    // Position for major label (between outer and inner ring)
    const majorR = (outerR + innerR) / 2;
    const majorX = cx + majorR * Math.cos(angle);
    const majorY = cy + majorR * Math.sin(angle);

    // Position for minor label (between inner and center)
    const minorR = (innerR + centerR) / 2;
    const minorX = cx + minorR * Math.cos(angle);
    const minorY = cy + minorR * Math.sin(angle);

    // Divider line from center to outer (between segments)
    const divAngle = (-90 + i * 30 - 15) * Math.PI / 180; // 15° before this segment
    const divX1 = cx + centerR * Math.cos(divAngle);
    const divY1 = cy + centerR * Math.sin(divAngle);
    const divX2 = cx + outerR * Math.cos(divAngle);
    const divY2 = cy + outerR * Math.sin(divAngle);
    svg += `<line x1="${divX1}" y1="${divY1}" x2="${divX2}" y2="${divY2}" stroke="${colors.line}" stroke-width="0.8"/>`;

    const tonality = CIRCLE_TONALITIES[i];
    const isHighlight = highlight && (tonality.major === highlight || tonality.minor === highlight);

    if (isHighlight) {
      // Draw a highlight wedge
      const a1 = (-90 + i * 30 - 15) * Math.PI / 180;
      const a2 = (-90 + i * 30 + 15) * Math.PI / 180;
      const x1 = cx + innerR * Math.cos(a1);
      const y1 = cy + innerR * Math.sin(a1);
      const x2 = cx + outerR * Math.cos(a1);
      const y2 = cy + outerR * Math.sin(a1);
      const x3 = cx + outerR * Math.cos(a2);
      const y3 = cy + outerR * Math.sin(a2);
      const x4 = cx + innerR * Math.cos(a2);
      const y4 = cy + innerR * Math.sin(a2);
      svg += `<path d="M ${x1} ${y1} L ${x2} ${y2} A ${outerR} ${outerR} 0 0 1 ${x3} ${y3} L ${x4} ${y4} A ${innerR} ${innerR} 0 0 0 ${x1} ${y1} Z" fill="${colors.highlight}" opacity="0.9"/>`;
    }

    // Major label (larger, serif)
    const majorColor = isHighlight ? colors.highlightText : colors.text;
    svg += `<text x="${majorX}" y="${majorY}" text-anchor="middle" dominant-baseline="middle" `
         + `font-family="Georgia, serif" font-size="${size * 0.055}" font-weight="600" fill="${majorColor}">`
         + `${tonality.major}</text>`;

    // Minor label (smaller, italic)
    svg += `<text x="${minorX}" y="${minorY}" text-anchor="middle" dominant-baseline="middle" `
         + `font-family="Georgia, serif" font-size="${size * 0.035}" font-style="italic" fill="${colors.textMuted}">`
         + `${tonality.minor}</text>`;

    // Alterations text on outside of major ring
    const altR = outerR + size * 0.06;
    const altX = cx + altR * Math.cos(angle);
    const altY = cy + altR * Math.sin(angle);
    let altText = '';
    if (tonality.sharps > 0) altText = tonality.sharps + '#';
    else if (tonality.flats > 0) altText = tonality.flats + 'b';
    if (altText) {
      svg += `<text x="${altX}" y="${altY}" text-anchor="middle" dominant-baseline="middle" `
           + `font-family="Inter, sans-serif" font-size="${size * 0.027}" fill="${colors.goldBright}" font-weight="500">`
           + `${altText}</text>`;
    }
  }

  // Center label
  svg += `<text x="${cx}" y="${cy - size * 0.018}" text-anchor="middle" dominant-baseline="middle" `
       + `font-family="Georgia, serif" font-size="${size * 0.045}" font-style="italic" fill="${colors.gold}">Cercle</text>`;
  svg += `<text x="${cx}" y="${cy + size * 0.025}" text-anchor="middle" dominant-baseline="middle" `
       + `font-family="Georgia, serif" font-size="${size * 0.045}" font-style="italic" fill="${colors.gold}">des quintes</text>`;

  svg += `</svg>`;
  return svg;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { renderCircleOfFifthsSVG };
}
