const CARD_DATA = {
  experiences: [
    {
      img: '/assets/images/popular-adventures/card-exp-1.webp',
      imgW: 800, imgH: 600,
      imgAlt: 'Guided van tour at Ernest Coe Visitor Center',
      badge: 'olive', badgeText: 'Ernest Coe Visitor Center',
      price: '$60',
      title: 'Guided Van Tour of Royal Palm, Nike Missile Site, and Pa-hay-okee',
      duration: '3.5 hrs', ages: 'Ages 5+',
      bookUrl: '/experiences/guided-van-tour/book',
      learnUrl: '/experiences/guided-van-tour',
    },
    {
      img: '/assets/images/popular-adventures/card-exp-2.webp',
      imgW: 800, imgH: 533,
      imgAlt: 'Florida Bay eco adventure at Flamingo',
      badge: 'flamingo', badgeText: 'Flamingo',
      price: '$219',
      title: 'Florida Bay Eco Adventure At Flamingo',
      duration: '6 hrs (Bring a lunch with you)', ages: 'Ages 12+',
      bookUrl: '/experiences/florida-bay-eco-adventure/book',
      learnUrl: '/experiences/florida-bay-eco-adventure',
    },
    {
      img: '/assets/images/popular-adventures/card-exp-3.webp',
      imgW: 600, imgH: 800,
      imgAlt: 'Cypress Dome wet walk at Ernest Coe Visitor Center',
      badge: 'olive', badgeText: 'Ernest Coe Visitor Center',
      price: '$55',
      title: 'Cypress Dome Wet Walk',
      duration: '2 hrs', ages: 'Ages 12+',
      bookUrl: '/experiences/cypress-dome-wet-walk/book',
      learnUrl: '/experiences/cypress-dome-wet-walk',
    },
    {
      img: '/assets/images/popular-adventures/card-exp-4.webp',
      imgW: 800, imgH: 600,
      imgAlt: 'Nine Mile Pond eco-paddle at Flamingo',
      badge: 'flamingo', badgeText: 'Flamingo',
      price: '$65',
      title: 'Nine Mile Pond Eco-Paddle',
      duration: '2 hrs', ages: 'Ages 12+',
      bookUrl: '/experiences/nine-mile-pond-eco-paddle/book',
      learnUrl: '/experiences/nine-mile-pond-eco-paddle',
    },
  ],

  workshops: [
    {
      img: '/assets/images/popular-adventures/card-1.webp',
      imgW: 1200, imgH: 800,
      imgAlt: 'Photography workshop cruise at Biscayne National Park',
      badge: 'green', badgeText: 'Coconut Grove',
      price: '$199',
      title: 'Capturing Biscayne: A Photography Workshop Cruise',
      duration: '4 hrs', ages: 'Ages 5+',
      bookUrl: '/workshops/photography-cruise/book',
      learnUrl: '/workshops/photography-cruise',
    },
    {
      img: '/assets/images/popular-adventures/card-2.webp',
      imgW: 3200, imgH: 2133,
      imgAlt: 'Florida Bay eco adventure at Flamingo',
      badge: 'flamingo', badgeText: 'Flamingo',
      price: '$219',
      title: 'Florida Bay Eco Adventure At Flamingo',
      duration: '6 hrs (Bring a lunch with you.)', ages: 'Ages 12+',
      bookUrl: '/workshops/florida-bay-eco-adventure/book',
      learnUrl: '/workshops/florida-bay-eco-adventure',
    },
    {
      img: '/assets/images/popular-adventures/card-3.webp',
      imgW: 3200, imgH: 2133,
      imgAlt: 'Everglades restoration van tour along the Tamiami Trail',
      badge: 'navy', badgeText: 'Shark Valley Visitor Center',
      price: '$50',
      title: 'Everglades Restoration: A Van Tour of Water Restoration Along the Tamiami Trail',
      duration: '2.5–3 hrs', ages: 'Ages 5+',
      bookUrl: '/workshops/everglades-restoration-tour/book',
      learnUrl: '/workshops/everglades-restoration-tour',
    },
    {
      img: '/assets/images/popular-adventures/card-4.webp',
      imgW: 3200, imgH: 2400,
      imgAlt: 'Guided journey through the Everglades at Ernest Coe Visitor Center',
      badge: 'olive', badgeText: 'Ernest Coe Visitor Center',
      price: '$85',
      title: 'Flamingo Experience: Guided Journey through the Everglades',
      duration: '7.5 hrs', ages: 'Ages 5+',
      bookUrl: '/workshops/flamingo-experience/book',
      learnUrl: '/workshops/flamingo-experience',
    },
    {
      img: '/assets/images/popular-adventures/card-8.webp',
      imgW: 1280, imgH: 960,
      imgAlt: 'Discover Biscayne and Everglades',
      badge: 'flamingo', badgeText: 'Flamingo',
      price: '$0',
      title: 'Discover Biscayne and Everglades',
      duration: '0 hrs', ages: 'Ages 0+',
      bookUrl: '/workshops/discover-biscayne-everglades/book',
      learnUrl: '/workshops/discover-biscayne-everglades',
    },
    {
      img: '/assets/images/popular-adventures/card-5.webp',
      imgW: 1280, imgH: 960,
      imgAlt: 'Veteran fishing workshop at Ernest Coe Visitor Center',
      badge: 'olive', badgeText: 'Ernest Coe Visitor Center',
      price: '$25',
      title: 'Veteran Fishing Workshop',
      duration: '4 hrs', ages: 'Ages 8+',
      bookUrl: '/workshops/veteran-fishing/book',
      learnUrl: '/workshops/veteran-fishing',
    },
    {
      img: '/assets/images/popular-adventures/card-6.webp',
      imgW: 3200, imgH: 2133,
      imgAlt: 'Canoeing for beginners at Flamingo',
      badge: 'flamingo', badgeText: 'Flamingo',
      price: '$45',
      title: 'Canoeing for Beginners',
      duration: '2 hrs', ages: 'Ages 12+',
      bookUrl: '/workshops/canoeing-beginners/book',
      learnUrl: '/workshops/canoeing-beginners',
    },
    {
      img: '/assets/images/popular-adventures/card-7.webp',
      imgW: 2000, imgH: 2666,
      imgAlt: 'Guided canoe trip through Nine Mile Pond at Flamingo',
      badge: 'flamingo', badgeText: 'Flamingo',
      price: '$79',
      title: 'Paddling in the Park: Guided Canoe Trip Through Nine Mile Pond',
      duration: '3 hrs', ages: 'Ages 12+',
      bookUrl: '/workshops/paddling-nine-mile-pond/book',
      learnUrl: '/workshops/paddling-nine-mile-pond',
    },
  ],

  packages: [
    {
      img: '/assets/images/popular-adventures/card-pkg-1.webp',
      imgW: 800, imgH: 599,
      imgAlt: 'Loop Road history tour at Big Cypress National Preserve',
      badge: 'brown', badgeText: 'Big Cypress National Preserve',
      price: '$85',
      title: 'Drive Down Memory Lane: Loop Road History Tour',
      duration: '6 hrs', ages: 'Ages 5+',
      bookUrl: '/packages/loop-road-history-tour/book',
      learnUrl: '/packages/loop-road-history-tour',
    },
    {
      img: '/assets/images/popular-adventures/card-pkg-2.webp',
      imgW: 800, imgH: 533,
      imgAlt: 'Florida Bay eco adventure at Shark Valley Visitor Center',
      badge: 'navy', badgeText: 'Shark Valley Visitor Center',
      price: '$50',
      title: 'Florida Bay Eco Adventure At Flamingo',
      duration: '6 hrs', ages: 'Ages 12+',
      bookUrl: '/packages/florida-bay-eco-adventure/book',
      learnUrl: '/packages/florida-bay-eco-adventure',
    },
  ],
};

function buildCardHTML(card) {
  return `<article class="swiper-slide adventure-card">
                                    <img
                                        src="${card.img}"
                                        width="${card.imgW}"
                                        height="${card.imgH}"
                                        alt="${card.imgAlt}"
                                        loading="lazy"
                                        decoding="async"
                                        class="adventure-card__bg"
                                    />
                                    <div class="adventure-card__overlay" aria-hidden="true"></div>
                                    <div class="adventure-card__inner">
                                        <div class="adventure-card__top">
                                            <span class="adventure-card__badge adventure-card__badge--${card.badge}">${card.badgeText}</span>
                                        </div>
                                        <div class="adventure-card__bottom">
                                            <div class="adventure-card__info">
                                                <span class="adventure-card__price">${card.price}</span>
                                                <div class="title title-white adventure-card__title">
                                                    <h3>${card.title}</h3>
                                                </div>
                                                <div class="adventure-card__meta">
                                                    <div class="adventure-card__meta-item">
                                                        <img src="/assets/icons/icon-clock-meta.svg" width="24" height="24" alt="" loading="lazy" decoding="async" />
                                                        <span>${card.duration}</span>
                                                    </div>
                                                    <div class="adventure-card__meta-item">
                                                        <img src="/assets/icons/icon-people.svg" width="24" height="24" alt="" loading="lazy" decoding="async" />
                                                        <span>${card.ages}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="adventure-card__actions">
                                                <a
                                                    href="${card.bookUrl}"
                                                    role="link"
                                                    target="_self"
                                                    aria-label="Book now for ${card.title}"
                                                    class="btn btn-primary"
                                                >Book Now</a>
                                                <a
                                                    href="${card.learnUrl}"
                                                    role="link"
                                                    target="_self"
                                                    aria-label="Learn more about ${card.title}"
                                                    class="btn btn-ghost-coral"
                                                >Learn More</a>
                                            </div>
                                        </div>
                                    </div>
                                </article>`;
}

let swiperInstance = null;

function renderCategory(category) {
  const wrapper = document.querySelector('.popular-adventures-swiper .swiper-wrapper');
  if (!wrapper) return;

  const cards = CARD_DATA[category] || [];
  wrapper.innerHTML = cards.map(buildCardHTML).join('');

  if (swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;
  }

  swiperInstance = new Swiper('.popular-adventures-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    grabCursor: true,
    watchOverflow: false,
    observer: true,
    observeParents: true,
    scrollbar: {
      el: '.popular-adventures-scrollbar',
      draggable: true,
      hide: false,
    },
    breakpoints: {
      0: { slidesPerView: 'auto', spaceBetween: 16 },
      576: { slidesPerView: 'auto', spaceBetween: 20 },
      1700: { slidesPerView: 3, spaceBetween: 20 },
    },
  });
}

function initCategoryTabs() {
  const tabs = document.querySelectorAll('.popular-adventures-section__tab');
  const dropdownBtn = document.querySelector('.popular-adventures-section__dropdown-btn');
  const dropdownValue = document.querySelector('.popular-adventures-section__dropdown-value');
  const dropdownItems = document.querySelectorAll('.popular-adventures-section__dropdown-item');
  const dropdown = document.getElementById('adventures-dropdown');

  function switchCategory(category, label) {
    tabs.forEach((t) => {
      const isActive = t.dataset.tab === category;
      t.classList.toggle('popular-adventures-section__tab--active', isActive);
    });
    if (dropdownValue) dropdownValue.textContent = label;
    dropdownItems.forEach((item) => {
      const isActive = item.dataset.tab === category;
      item.classList.toggle('popular-adventures-section__dropdown-item--active', isActive);
      item.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
    renderCategory(category);
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
  const swiperEl = document.querySelector('.popular-adventures-swiper');
  if (!swiperEl) return;

  renderCategory('experiences');
  initCategoryTabs();
}
