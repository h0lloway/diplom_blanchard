// yakornie linki// yakornie linki// yakornie linki// yakornie linki// yakornie linki// yakornie linki// yakornie linki// yakornie linki// yakornie linki// yakornie linki// yakornie linki// yakornie linki// yakornie linki// yakornie linki// yakornie linki

// $(document).ready(function () {
//   $("#menu").on("click", "a", function (event) {
//     event.preventDefault();
//     var id = $(this).attr('href'),
//       top = $(id).offset().top;
//     $('body,html').animate({ scrollTop: top }, 1500);
//   });

//   $("#button-contacts").on("click", "a", function (event) {
//     event.preventDefault();
//     var id = $(this).attr('href'),
//       top = $(id).offset().top;
//     $('body,html').animate({ scrollTop: top }, 1700);
//   });
// });


$(function () {
  $('a[href^="#"]').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(target).offset().top }, 1200);
    return false;
  });
});


// burger// burger// burger// burger// burger// burger// burger// burger// burger// burger// burger// burger// burger// burger// burger// burger// burger// burger// burger// burger// burger// burger// burger// burger// burger// burger// burger

$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

// search// search// search// search// search// search// search// search// search// search// search// search// search// search// search// search// search// search// search// search// search// search// search

$(document).ready(function () {

  $(".header__mobile-search-btn").click(function () {
    $(".header__search-box, .header__input").toggleClass("active");
    $(".header__input[type='text']").focus();
  });

});

document.querySelector(".form-btn-open").addEventListener("click", function () {
  document.querySelector(".form").classList.add("form__active");
  this.classList.add("active");
});

document.querySelector('.form-btn-close').addEventListener('click', function (event) {
  document.querySelector('.form').classList.remove('form__active');
  document.querySelector('.form-btn-open').classList.remove('active');
  // this.classList.remove("active");
});

document.addEventListener("click", function (e) {
  let target = e.target;
  let form = document.querySelector(".form");
  if (!target.closest(".form-container")) {
    form.classList.remove("form__active");
    form.querySelector(".form__input").value = "";
    document.querySelector(".form-btn-open").classList.remove("active")
  }
})



// menu// menu// menu// menu// menu// menu// menu// menu// menu// menu// menu// menu// menu// menu// menu// menu// menu// menu// menu// menu// menu// menu// menu// menu// menu// menu// menu// menu// menu// menu// menu// menu// menu

const params = {
  btnClassName: "bottom__item-btn",
  activeClassName: "is-active",
  disabledClassName: "is-disabled"
}

function onDisable(evt) {
  if (evt.target.classList.contains(params.disabledClassName)) {
    evt.target.classList.remove(params.disabledClassName, params.activeClassName);
    evt.target.removeEventListener("animationend", onDisable);
  }
}

function setMenuListener() {
  document.body.addEventListener("click", (evt) => {
    const activeElements = document.querySelectorAll(`.${params.activeClassName}`);

    if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
      activeElements.forEach((current) => {
        if (current.classList.contains(params.btnClassName)) {
          current.classList.remove(params.activeClassName);
        } else {
          current.classList.add(params.disabledClassName);
        }
      });
    }

    if (evt.target.closest(`.${params.btnClassName}`)) {
      const btn = evt.target.closest(`.${params.btnClassName}`);
      const path = btn.dataset.path;
      const drop = document.querySelector(`[data-target="${path}"]`);

      btn.classList.toggle(params.activeClassName);

      if (!drop.classList.contains(params.activeClassName)) {
        drop.classList.add(params.activeClassName);
        drop.addEventListener("animationend", onDisable);
      } else {
        drop.classList.add(params.disabledClassName);
      }
    }
  });
}

setMenuListener();

// gallery swiper// gallery swiper// gallery swiper// gallery swiper// gallery swiper// gallery swiper// gallery swiper// gallery swiper// gallery swiper// gallery swiper// gallery swiper// gallery swiper// gallery swiper// gallery swiper

let gallerySlider = new Swiper(".gallery__slides-container", {
  slidesPerView: 1,
  // speed: 1000,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 50,
  pagination: {
    el: ".gallery .gallery__pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".gallery__next-btn",
    prevEl: ".gallery__prev-btn"
  },

  breakpoints: {
    441: {
      slidesPerView: 2,
      grid: {
        rows: 2
      },
      spaceBetween: 30
    },

    900: {
      slidesPerView: 2,
      grid: {
        rows: 2
      },
      spaceBetween: 34
    },

    1024: {
      slidesPerView: 2,
      grid: {
        rows: 2
      },
      spaceBetween: 34
    },

    1200: {
      slidesPerView: 3,
      grid: {
        rows: 2
      },
      spaceBetween: 50
    }
  },

  a11y: false,
  keyboard: true, // можно управлять с клавиатуры стрелками влево/вправо

  // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
  watchSlidesProgress: true,
  slideVisibleClass: 'slide-visible',

  on: {
    init: function () {
      this.slides.forEach(slide => {
        if (!slide.classList.contains('slide-visible')) {
          slide.tabIndex = '-1';
        } else {
          slide.tabIndex = '';
        }
      });
    },
    slideChange: function () {
      this.slides.forEach(slide => {
        if (!slide.classList.contains('slide-visible')) {
          slide.tabIndex = '-1';
        } else {
          slide.tabIndex = '';
        }
      });
    }
  }

  // on: {
  //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
  //   beforeResize: function () {
  //     this.slides.forEach((el) => {
  //       el.style.marginTop = "";
  //     });
  //   }
  // }
});


// tabs// tabs// tabs// tabs// tabs// tabs// tabs// tabs// tabs// tabs// tabs// tabs// tabs// tabs// tabs// tabs// tabs// tabs// tabs// tabs// tabs// tabs// tabs// tabs// tabs// tabs// tabs// tabs// tabs// tabs

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelector('.catalog__tabs');
  const tabsBtn = document.querySelectorAll('.catalog__tabs-btn');
  const tabsContent = document.querySelectorAll('.catalog__tabs-content');

  const tabsPainter = document.querySelectorAll('.catalog__painter-list');
  const painterLink = document.querySelectorAll('.catalog__painter-link');
  const painter = document.querySelectorAll('.painter');



  if (tabs) {
    tabs.addEventListener('click', (e) => {
      if (e.target.classList.contains('catalog__tabs-btn')) {
        const tabsPath = e.target.dataset.tabsPath;
        tabsHandler(tabsPath);
      }
    })

    const tabsHandler = (path) => {
      tabsBtn.forEach(el => { el.classList.remove('catalog__tabs-btn--active') })
      document.querySelector(`[data-tabs-path="${path}"]`).classList.add('catalog__tabs-btn--active')

      tabsContent.forEach(el => { el.classList.remove('catalog__tabs-content--active') })
      document.querySelector(`[data-tabs-target="${path}"]`).classList.add('catalog__tabs-content--active')
    }
  }

  // tabs painter  // tabs painter  // tabs painter  // tabs painter  // tabs painter  // tabs painter  // tabs painter  // tabs painter  // tabs painter  // tabs painter  // tabs painter  // tabs painter  // tabs painter  // tabs painter

  if (tabsPainter) {
    const tabsHandler = (tabLinks) => {
      tabLinks.forEach(el => {
        const path = el.dataset.tabsPath;
        el.addEventListener('click', (e) => {
          e.preventDefault();
          painterLink.forEach(el => { el.classList.remove('catalog__painter-link--active') });
          e.target.classList.add('catalog__painter-link--active');
          painter.forEach(el => { el.classList.remove('painter-content-active') });
          document.querySelector(`[data-tabs-target="${path}"]`).classList.add('painter-content-active');
        });
      });
    }

    tabsPainter.forEach(el => {
      const tabsLinks = el.querySelectorAll('.catalog__painter-link');
      tabsHandler(tabsLinks);
    });
  }

});


// choices// choices// choices// choices// choices// choices// choices// choices// choices// choices// choices// choices// choices// choices// choices// choices// choices// choices// choices// choices

const element = document.querySelector('#selectCustom');
const choices = new Choices(element, {
  searchEnabled: false,
  placeholder: true,
});

// accordion// accordion// accordion// accordion// accordion// accordion// accordion// accordion// accordion// accordion// accordion// accordion// accordion// accordion// accordion// accordion// accordion

$(document).ready(function () {
  $('.catalog__accordion-wrap').click(function (event) {
    if ($('.catalog__accordion').hasClass('one')) {
      $('.catalog__accordion-wrap').not($(this)).removeClass('active');
      $('.catalog__accordion-text').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
  });
});

// events// events// events// events// events// events// events// events// events// events// events// events// events// events// events// events// events// events// events// events// events// events// events

(() => {
  const MOBILE_WIDTH = 626;
  const DESKTOP_WIDTH = 961;
  const btn = document.querySelector(".js-show");

  const sliderMobileParams = {
    paginationClassName: "events-pagination",
    cardsContainerName: "js-slider",
    cardsWrapName: "js-slides-wrap",
    card: "events__list-item",
    hiddenClass: "is-hidden"
  };

  function getWindowWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.body.clientWidth,
      document.documentElement.clientWidth
    );
  }

  function activateMobileSlider(params) {
    const pagination = document.createElement("div");
    pagination.classList.add(params.paginationClassName);
    params.cardsContainer.append(pagination);

    params.cardsContainer.classList.add("swiper-container");
    params.cardsWrap.classList.add("swiper-wrapper");

    params.cardsSlider = new Swiper(`.${params.cardsContainerName}`, {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: `.${params.cardsContainerName} .${params.paginationClassName}`
      },

      on: {
        beforeInit() {
          document.querySelectorAll(`.${params.card}`).forEach((el) => {
            el.classList.add("swiper-slide");
          });
        },

        beforeDestroy() {
          this.slides.forEach((el) => {
            el.classList.remove("swiper-slide");
            el.removeAttribute("role");
            el.removeAttribute("aria-label");
          });

          this.pagination.el.remove();
        }
      }
    });
  }

  function destroyMobileSlider(params) {
    params.cardsSlider.destroy();
    params.cardsContainer.classList.remove("swiper-container");
    params.cardsWrap.classList.remove("swiper-wrapper");
    params.cardsWrap.removeAttribute("aria-live");
    params.cardsWrap.removeAttribute("id");
  }

  function setHiddenCards(params, windowWidth) {
    const cards = document.querySelectorAll(`.${params.card}`);
    let quantity = cards.length;

    if (windowWidth > MOBILE_WIDTH && windowWidth < DESKTOP_WIDTH) {
      quantity = 2;
    }

    if (windowWidth >= DESKTOP_WIDTH) {
      quantity = 3;
    }

    cards.forEach((card, i) => {
      card.classList.remove(params.hiddenClass);
      if (i >= quantity) {
        card.classList.add(params.hiddenClass);
      }
    });
  }

  function showCards(e) {
    const cards = document.querySelectorAll(`.${sliderMobileParams.card}`);

    e.target.style = "display: none";

    cards.forEach((card) => {
      card.classList.remove(sliderMobileParams.hiddenClass);
    });
  }

  function checkWindowWidthMobile(params) {
    const currentWidth = getWindowWidth();
    btn.style = "";
    params.cardsContainer = document.querySelector(
      `.${params.cardsContainerName}`
    );
    params.cardsWrap = document.querySelector(`.${params.cardsWrapName}`);

    if (
      currentWidth <= MOBILE_WIDTH &&
      (!params.cardsSlider || params.cardsSlider.destroyed)
    ) {
      activateMobileSlider(params);
    } else if (currentWidth > MOBILE_WIDTH && params.cardsSlider) {
      destroyMobileSlider(params);
    }

    setHiddenCards(params, currentWidth);
  }

  checkWindowWidthMobile(sliderMobileParams);
  btn.addEventListener("click", showCards);

  window.addEventListener("resize", function () {
    checkWindowWidthMobile(sliderMobileParams);
  });
})();


// publications-checkbox// publications-checkbox// publications-checkbox// publications-checkbox// publications-checkbox// publications-checkbox// publications-checkbox// publications-checkbox


(() => {
  const checkBtn = document.querySelector('.js-check-heading');

  checkBtn.addEventListener('click', function () {
    this.classList.toggle('is-active');
  });
})();


// publications-slider// publications-slider// publications-slider// publications-slider// publications-slider// publications-slider// publications-slider// publications-slider// publications-slider


document.addEventListener('DOMContentLoaded', function () {

  //Слайдер
  let publicationsSlider = new Swiper(".publications-swiper", {
    // slidesPerColumnFill: "row",(от Swiper-а 6-ой версии)
    slidesPerView: 1,
    // slidesPerColumn: 1,(от Swiper-а 6-ой версии)
    grid: { rows: 1, fill: "row" },//(от Swiper-а 7-ая версия)
    spaceBetween: 50,

    //Бесконечное листание страниц
    // speed: 2000,//Интервал ожидания

    //  autoplay: {
    //delay: 13000, Интервал ожидания
    //  disableOnInteraction: false,
    // },


    pagination: {
      el: ".publications, .publications-pagination",
      type: "fraction"
    },

    navigation: {
      nextEl: ".publications-next",
      prevEl: ".publications-prev"
    },

    //Стили для издания
    breakpoints: {
      310: {
        slidesPerView: 2,
        // slidesPerColumn: 4,(от Swiper-а 6-ой версии)
        grid: { rows: 4 },//(от Swiper-а 7-ая версия)
        spaceBetween: 30
      },

      320: {
        slidesPerView: 2,
        // slidesPerColumn: 4,(от Swiper-а 6-ой версии)
        grid: { rows: 4 },//(от Swiper-а 7-ая версия)
        spaceBetween: 30
      },

      581: {
        slidesPerView: 2,
        // slidesPerColumn: 1,(от Swiper-а 6-ой версии)
        grid: { rows: 1 },//(от Swiper-а 7-ая версия)
        spaceBetween: 34
      },

      1024: {
        slidesPerView: 2,
        // slidesPerColumn: 1,(от Swiper-а 6-ой версии)
        grid: { rows: 1 },//(от Swiper-а 7-ая версия)
        spaceBetween: 49
      },

      1200: {
        slidesPerView: 3,
        // slidesPerColumn: 1, (от Swiper-а 6-ой версии)
        grid: { rows: 1 },
        spaceBetween: 50
      }
    },

    on: {
      /* исправляет баг с margin-top остающимся при смене брейкпоинта */
      beforeResize: function () {
        this.slides.forEach((el) => {
          el.style.marginTop = "";
        });
      }
    }
  });


  //Убираем marginRight у каждой второй лишки
  $(document).ready(function () {
    $(".publications__item:nth-child(2n)").click(function () {
      $(".publications__item:nth-child(2n)").show();
      document.getElementsByClassName("{.publications__item:nth-child(2n)}").style.marginRight = "0";
    });
  });
});


// swiper projects// swiper projects// swiper projects// swiper projects// swiper projects// swiper projects// swiper projects// swiper projects// swiper projects// swiper projects// swiper projects// swiper projects// swiper projects


const partnersSlider = document.querySelector('.partners__swiper-container');

var partnersSwiper = new Swiper(partnersSlider, {
  slideClass: ('partners__swiper-slide'),
  slidesPerView: "auto",
  slidesPerGroup: 1,
  // loop: true,
  spaceBetween: 30,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {

    668: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },

    1024: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 46,
    },

    1400: {
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 1,
    }
  },
});


// yandex map// yandex map// yandex map// yandex map// yandex map// yandex map// yandex map// yandex map// yandex map// yandex map// yandex map// yandex map// yandex map// yandex map// yandex map// yandex map


ymaps.ready(init);
function init() {
  const mapElem = document.querySelector('#map');
  const myMap = new ymaps.Map(
    "map",
    {
      center: [55.75846306898368, 37.601079499999905],
      zoom: 14,
      controls: ['geolocationControl', 'zoomControl']
    },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition: { top: "200px", right: "20px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "120px", right: "20px" }
    }
  );

  const myPlacemark = new ymaps.Placemark(
    [55.75846306898368, 37.601079499999905],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/location.svg",
      iconImageSize: [20, 20],
      iconImageOffset: [-20, -40],
    }
  );

  myMap.geoObjects.add(myPlacemark);

  setTimeout(() => {
    myMap.container.fitToViewport();
  }, 5000);
}


// валидация формы// валидация формы// валидация формы// валидация формы// валидация формы// валидация формы// валидация формы// валидация формы// валидация формы// валидация формы// валидация формы// валидация формы// валидация формы// валидация формы// валидация формы// валидация формы// валидация формы

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

new JustValidate('.contacts__form', {
  colorWrong: '#D11616',
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
  },
  messages: {
    name: {
      required: 'Как вас зовут?',
    },
    tel: {
      required: 'Укажите ваш телефон',
    },
  },
});

// tooltips// tooltips// tooltips// tooltips// tooltips// tooltips// tooltips// tooltips// tooltips// tooltips// tooltips// tooltips// tooltips// tooltips// tooltips// tooltips// tooltips// tooltips// tooltips


tippy('.js-tooltip', {
  theme: 'projects-tooltip',
  trigger: 'click',
  trigger: 'focus',
  maxWidth: 264
});

// popup// popup// popup// popup// popup// popup// popup// popup// popup// popup// popup// popup// popup// popup// popup// popup// popup// popup// popup// popup// popup// popup// popup// popup// popup// popup// popup// popup
// disabledScroll// disabledScroll// disabledScroll// disabledScroll// disabledScroll// disabledScroll// disabledScroll// disabledScroll// disabledScroll// disabledScroll// disabledScroll// disabledScroll


const btns = document.querySelectorAll('.js-open-modal');
const modalOverlay = document.querySelector('.modal-overlay');
const modals = document.querySelectorAll('.modal');
const body = document.body;
const fixBlocks = document.querySelectorAll('.fix-block');

let disableScroll = function () {
  let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
  let pagePosition = window.scrollY;
  fixBlocks.forEach((el) => {
    el.style.paddingRight = paddingOffset;
  });
  body.style.paddingRight = paddingOffset;
  body.classList.add('disable-scroll');
  body.dataset.position = pagePosition;
  body.style.top = -pagePosition + 'px';
}

let enableScroll = function () {
  let pagePosition = parseInt(document.body.dataset.position, 10);
  body.style.top = 'auto';
  body.classList.remove('disable-scroll');
  fixBlocks.forEach((el) => {
    el.style.paddingRight = '0px';
  });
  body.style.paddingRight = '0px';
  window.scroll({ top: pagePosition, left: 0 });
  body.removeAttribute('data-position');
}

btns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    disableScroll();

    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
    modalOverlay.classList.add('modal-overlay--visible');
  });

  document.querySelector('.close-modal-btn').addEventListener('click', function (event) {
    document.querySelector('.modal-overlay').classList.remove('modal-overlay--visible');
    document.querySelector('.modal').classList.remove('modal--visible');

  });

});

modalOverlay.addEventListener('click', (e) => {

  enableScroll();

  if (e.target == modalOverlay) {
    modalOverlay.classList.remove('modal-overlay--visible');
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    });
  }
});
