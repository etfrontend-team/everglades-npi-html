/* ==========================================================================
   PARK MAP — location chips over the Everglades map illustration.

   DATA SOURCE: <script id="park-map-data" type="application/json"> in the HTML.
   In WordPress, that tag is output by ACF via:
     echo json_encode(['locations' => array_map(fn($r) => [...], get_field('map_locations'))]);

   Chip position coordinates are % of the Figma 1512 × 908 frame.
   ========================================================================== */

/* ==========================================================================
   DOM BUILDER
   ========================================================================== */
function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function buildLocation(loc) {
  const hasPopup = !!loc.popup;
  const side     = loc.side || 'right';
  const slug     = slugify(loc.name);

  const el = document.createElement('div');
  el.className = 'map-loc';
  el.style.setProperty('--left', loc.left);
  el.style.setProperty('--top',  loc.top);
  el.dataset.variant = loc.variant || 'coral';
  el.dataset.side    = side;
  if (loc.textColor)  el.dataset.textcolor  = loc.textColor;
  if (loc.textStroke) el.dataset.textstroke = loc.textStroke;

  /* chip */
  const chip = document.createElement('span');
  chip.className = 'map-loc__chip';

  /* optional icon (location pin or plane) */
  if (loc.icon) {
    const iconEl = document.createElement('img');
    iconEl.className = 'map-loc__icon';
    iconEl.src = `/assets/icons/icon-${loc.icon}.svg`;
    iconEl.width = 28;
    iconEl.height = 28;
    iconEl.alt = '';
    iconEl.setAttribute('aria-hidden', 'true');
    iconEl.loading = 'lazy';
    iconEl.decoding = 'async';
    chip.appendChild(iconEl);
  }

  /* chip content — image if provided, otherwise text */
  if (loc.image) {
    const imgEl = document.createElement('img');
    imgEl.className = 'map-loc__img';
    imgEl.src = loc.image;
    imgEl.width  = loc.imageWidth  || 120;
    imgEl.height = loc.imageHeight || 40;
    imgEl.alt = loc.name.replace(/\n/g, ' ');
    imgEl.loading  = 'lazy';
    imgEl.decoding = 'async';
    chip.appendChild(imgEl);
  } else {
    const nameEl = document.createElement('span');
    String(loc.name || '').split('\n').forEach((line, i) => {
      if (i) nameEl.appendChild(document.createElement('br'));
      nameEl.appendChild(document.createTextNode(line));
    });
    chip.appendChild(nameEl);
  }

  /* tail triangle (only for left/right sided chips) */
  const hasTail = side === 'left' || side === 'right';
  const tail = hasTail ? document.createElement('span') : null;
  if (tail) {
    tail.className = 'map-loc__tail';
    tail.setAttribute('aria-hidden', 'true');
  }

  /* trigger wrapper — button if popup, span if decorative */
  const inner = hasPopup
    ? document.createElement('button')
    : document.createElement('span');
  inner.className = 'map-loc__trigger';

  if (hasPopup) {
    inner.type = 'button';
    inner.setAttribute('aria-expanded', 'false');
    inner.setAttribute('aria-label', loc.name.replace(/\n/g, ' ') + ' — open details');
  }

  /* DOM order determines tail direction */
  if (side === 'right') {
    if (tail) inner.appendChild(tail);   /* tail on left → points left ◀ */
    inner.appendChild(chip);
  } else if (side === 'left') {
    inner.appendChild(chip);
    if (tail) inner.appendChild(tail);   /* tail on right → points right ▶ */
  } else {
    inner.appendChild(chip);
  }

  el.appendChild(inner);

  /* popup card */
  if (hasPopup) {
    const popup = document.createElement('div');
    popup.className = 'map-loc__popup';
    popup.id = 'map-popup-' + slug;
    popup.setAttribute('role', 'dialog');
    popup.setAttribute('aria-label', loc.name.replace(/\n/g, ' '));

    const ptitle = document.createElement('p');
    ptitle.className = 'map-loc__popup-title';
    ptitle.textContent = loc.name.replace(/\n/g, ' ');
    popup.appendChild(ptitle);

    if (loc.popup.text) {
      const ptext = document.createElement('p');
      ptext.className = 'map-loc__popup-text';
      ptext.textContent = loc.popup.text;
      popup.appendChild(ptext);
    }

    if (loc.popup.link) {
      const a = document.createElement('a');
      a.className = 'map-loc__popup-link';
      a.href = loc.popup.link.href || '#';
      a.target = '_self';
      a.setAttribute('role', 'link');
      a.setAttribute('aria-label', loc.popup.link.label || 'More Info');
      a.textContent = loc.popup.link.label || 'More Info';
      popup.appendChild(a);
    }

    el.appendChild(popup);
    inner.setAttribute('aria-controls', popup.id);
  }

  return el;
}

/* ==========================================================================
   POPUP BEHAVIOUR
   ========================================================================== */
function closeAll(labelsEl, except) {
  labelsEl.querySelectorAll('.map-loc.is-open').forEach((el) => {
    if (el === except) return;
    el.classList.remove('is-open', 'popup-below');
    const t = el.querySelector('.map-loc__trigger[aria-expanded]');
    if (t) t.setAttribute('aria-expanded', 'false');
    const p = el.querySelector('.map-loc__popup');
    if (p) p.style.removeProperty('margin-left');
  });
}

/* Flip popup below chip when there isn't room above inside the stage.
   Nudge horizontally so it never bleeds past the stage edges. */
function clampPopup(stageEl, el) {
  const popup = el.querySelector('.map-loc__popup');
  if (!popup) return;

  popup.style.removeProperty('margin-left');
  el.classList.remove('popup-below');

  const stage      = stageEl.getBoundingClientRect();
  const chipRect   = el.getBoundingClientRect();
  const popupH     = popup.offsetHeight || 130;
  const spaceAbove = chipRect.top - stage.top;

  if (spaceAbove < popupH + 16) {
    el.classList.add('popup-below');
  }

  requestAnimationFrame(() => {
    const rect = popup.getBoundingClientRect();
    const pad  = 12;
    let shift  = 0;
    if (rect.left < stage.left + pad)        shift = (stage.left + pad) - rect.left;
    else if (rect.right > stage.right - pad) shift = (stage.right - pad) - rect.right;
    if (shift) popup.style.marginLeft = shift + 'px';
  });
}

/* ==========================================================================
   INIT
   ========================================================================== */
export function initParkMap() {
  const labelsEl = document.getElementById('parkMapLabels');
  const stageEl  = document.getElementById('parkMapStage');
  const dataEl   = document.getElementById('park-map-data');
  if (!labelsEl || !stageEl || !dataEl) return;

  let locations = [];
  try {
    const parsed = JSON.parse(dataEl.textContent);
    locations = parsed.locations || [];
  } catch (e) {
    console.error('[park-map] Invalid JSON in #park-map-data', e);
    return;
  }

  locations.forEach((loc) => {
    const node = buildLocation(loc);
    if (node) labelsEl.appendChild(node);
  });

  labelsEl.addEventListener('click', (e) => {
    const trigger = e.target.closest('.map-loc__trigger[aria-expanded]');
    if (!trigger) return;
    const el      = trigger.closest('.map-loc');
    const willOpen = trigger.getAttribute('aria-expanded') === 'false';
    closeAll(labelsEl, el);
    el.classList.toggle('is-open', willOpen);
    trigger.setAttribute('aria-expanded', String(willOpen));
    if (willOpen) clampPopup(stageEl, el);
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.map-loc')) closeAll(labelsEl, null);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    const open = labelsEl.querySelector('.map-loc.is-open');
    closeAll(labelsEl, null);
    if (open) {
      const t = open.querySelector('.map-loc__trigger');
      if (t) t.focus();
    }
  });

  window.addEventListener('resize', () => {
    const open = labelsEl.querySelector('.map-loc.is-open');
    if (open) clampPopup(stageEl, open);
  });
}
