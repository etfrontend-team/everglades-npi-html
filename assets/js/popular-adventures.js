const swiperInstances = {};

function getSwiperConfig(scrollbarEl) {
  return {
    slidesPerView: 'auto',
    spaceBetween: 20,
    grabCursor: true,
    watchOverflow: false,
    observer: true,
    observeParents: true,
    scrollbar: {
      el: scrollbarEl,
      draggable: true,
      hide: false,
    },
    breakpoints: {
      0: { slidesPerView: 'auto', spaceBetween: 16 },
      576: { slidesPerView: 'auto', spaceBetween: 20 },
      1700: { slidesPerView: 3, spaceBetween: 20 },
    },
  };
}

function initPanelSwiper(panel) {
  const category = panel.dataset.panel;
  if (swiperInstances[category]) return;
  const swiperEl = panel.querySelector('.popular-adventures-swiper');
  const scrollbarEl = panel.querySelector('.popular-adventures-scrollbar');
  swiperInstances[category] = new Swiper(swiperEl, getSwiperConfig(scrollbarEl));
}

function initCategoryTabs() {
  const tabs = document.querySelectorAll('.popular-adventures-section__tab');
  const panels = document.querySelectorAll('.popular-adventures-section__panel');
  const dropdownBtn = document.querySelector('.popular-adventures-section__dropdown-btn');
  const dropdownValue = document.querySelector('.popular-adventures-section__dropdown-value');
  const dropdownItems = document.querySelectorAll('.popular-adventures-section__dropdown-item');
  const dropdown = document.getElementById('adventures-dropdown');

  function switchCategory(category, label) {
    tabs.forEach((t) => {
      t.classList.toggle('popular-adventures-section__tab--active', t.dataset.tab === category);
    });
    if (dropdownValue) dropdownValue.textContent = label;
    dropdownItems.forEach((item) => {
      const isActive = item.dataset.tab === category;
      item.classList.toggle('popular-adventures-section__dropdown-item--active', isActive);
      item.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
    panels.forEach((p) => {
      p.classList.toggle('popular-adventures-section__panel--active', p.dataset.panel === category);
    });
    const activePanel = document.querySelector(`.popular-adventures-section__panel[data-panel="${category}"]`);
    if (activePanel) initPanelSwiper(activePanel);
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      switchCategory(tab.dataset.tab, tab.textContent.trim());
    });
  });

  if (dropdownBtn && dropdown) {
    dropdownBtn.addEventListener('click', () => {
      const isOpen = dropdown.classList.toggle('popular-adventures-section__dropdown--open');
      dropdownBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    dropdownItems.forEach((item) => {
      item.addEventListener('click', () => {
        dropdown.classList.remove('popular-adventures-section__dropdown--open');
        dropdownBtn.setAttribute('aria-expanded', 'false');
        switchCategory(item.dataset.tab, item.textContent.trim());
      });
    });

    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('popular-adventures-section__dropdown--open');
        dropdownBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

export function initPopularAdventures() {
  const panels = document.querySelectorAll('.popular-adventures-section__panel');
  if (!panels.length) return;

  const firstPanel = document.querySelector('.popular-adventures-section__panel--active');
  if (firstPanel) initPanelSwiper(firstPanel);

  initCategoryTabs();
}
