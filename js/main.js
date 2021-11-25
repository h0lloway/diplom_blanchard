// yakornie linki// yakornie linki// yakornie linki// yakornie linki// yakornie linki// yakornie linki// yakornie linki// yakornie linki// yakornie linki// yakornie linki// yakornie linki// yakornie linki// yakornie linki// yakornie linki// yakornie linki

$(document).ready(function () {
  $("#menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  $("#button-contacts").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1700);
  });
});



// burger// burger// burger// burger// burger// burger// burger// burger// burger// burger// burger// burger// burger// burger// burger// burger// burger// burger// burger// burger// burger// burger// burger// burger// burger// burger// burger

$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

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
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 20,
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

    1200: {
      slidesPerView: 3,
      grid: {
        rows: 2
      },
      spaceBetween: 34
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

// const choices = new Choices(element, {
//   searchEnabled: false,
//   itemSelectText: '',
// });

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

let btn = document.querySelector(".events__open-btn");
const slider = document.querySelector('.events__swiper');
let allitems = document.querySelectorAll(".events__list-item");
btn.addEventListener("click", function () {
  allitems.forEach(item => {
    item.style.display = "block";
  })

  this.style.display = "none";

})


let mySwiper;

function mobileSlider() {
  if (window.innerWidth <= 767 && slider.dataset.mobile == 'false') {
    mySwiper = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      slideClass: 'events__list-item',
      pagination: {
        el: '.events__swiper-pagination',
        clickable: true,
      },
    });

    slider.dataset.mobile = 'true';
  }

  if (window.innerWidth > 767 && slider.dataset.mobile == 'true') {
    slider.dataset.mobile = 'false';
    if (slider.classList.contains('swiper-container-initialized')) {
      mySwiper.destroy();
    }
  }
}

mobileSlider()

window.addEventListener('resize', () => {
  mobileSlider();
});



// publications-checkbox// publications-checkbox// publications-checkbox// publications-checkbox// publications-checkbox// publications-checkbox// publications-checkbox// publications-checkbox

let button = ".checkbox__title";
let labels = ".checkbox--label";
let labelsList = ".checkbox-list";
let labelsListActive = "checklist-active";
let labelActive = "checkbox--label-active";
let animationClass = "animation-test";
let inputCheckbox = ".checkbox";

function checkboxToggle(a, b, c, labelsListActive, labelActive, animationClass, inputCheckbox) {
  let btn = document.querySelector(a);
  let labels = document.querySelectorAll(b);
  let listLabels = document.querySelector(c);
  btn.addEventListener("click", toggleSpoiler);
  btn.addEventListener("keyup", function (e) {
    console.log(e.key);
    if (e.code === "Enter") {
      toggleSpoiler();
    }
  })
  function toggleSpoiler() {
    if (!listLabels.classList.contains(labelsListActive)) {
      listLabels.classList.add(labelsListActive);
      labels.forEach(item => {
        // item.classList.add("checkbox--label-active");
        animationItem(item, labelActive, animationClass, "add");
      })
    } else {
      listLabels.classList.remove(labelsListActive);
      labels.forEach(item => {
        if (item.querySelector(inputCheckbox).checked) {
          animationItem(item, labelActive, animationClass, "add");
        } else {
          animationItem(item, labelActive, animationClass, "remove");
        }
      });
    }
    labels.forEach(item => {
      item.addEventListener("click", function () {
        if (!listLabels.classList.contains(labelsListActive)) {
          animationItem(this, labelActive, animationClass, "remove");
        }
      });
    })
  }
  function animationItem(item, class1, class2, f) {
    if (f === "add") {
      item.classList.add(class1);
      setTimeout(function () {
        item.classList.add(class2)
      }, 100);

    } else {
      item.classList.remove(class2);
      setTimeout(function () {
        item.classList.remove(class1)
      }, 300);
    }
  }
}

checkboxToggle(button, labels, labelsList, labelsListActive, labelActive, animationClass, inputCheckbox);


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
    speed: 2000,//Интервал ожидания

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


// swiper projects

const partnersSlider = document.querySelector('.partners__swiper-container');

var partnersSwiper = new Swiper(partnersSlider, {
  slideClass: ('partners__swiper-slide'),
  slidesPerView: "auto",
  slidesPerGroup: 2,
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

    1600: {
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 1,
    }
  }
});




// yandex map

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.7630863, 37.6412295],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 14,
    controls: []
  }, {
    suppressMapOpenBlock: true
  });



  // Создание геообъекта с типом точка (метка).
  var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point", // тип геометрии - точка
      // coordinates: [48.872185, 2.354224] // координаты точки
    }
  });


  var myPlacemark = new ymaps.Placemark([55.75846306898368, 37.601079499999905], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/location.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-3, -42]
  });

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myGeoObject);
  myMap.geoObjects.add(myPlacemark)
}



// валидация формы

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
