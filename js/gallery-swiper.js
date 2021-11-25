// // gallery swiper// gallery swiper// gallery swiper// gallery swiper// gallery swiper// gallery swiper// gallery swiper// gallery swiper// gallery swiper// gallery swiper// gallery swiper// gallery swiper// gallery swiper// gallery swiper

// let gallerySlider = new Swiper(".swiper-right--content", {
//   slidesPerView: 3,
//   slidesPerGroup: 1,
//   grid: {
//     rows: 2
//   },
//   spaceBetween: 30,
//   pagination: {
//     el: ".swiper-pagination--right",
//     type: "fraction"
//   },
//   navigation: {
//     nextEl: ".swiper-btn--next",
//     prevEl: ".swiper-btn--prev"
//   },

//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//       grid: {
//         rows: 1
//       },
//       spaceBetween: 0
//     },
//     576: {
//       slidesPerView: 2,
//       grid: {
//         rows: 2
//       },
//       spaceBetween: 30
//     },

//     1200: {
//       slidesPerView: 3,
//       grid: {
//         rows: 2
//       },
//       spaceBetween: 50
//     }
//   },

//   a11y: {
//     prevSlideMessage: 'Предыдущий',
//     nextSlideMessage: 'Следующий',
//   }

//   // on: {
//   //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
//   //   beforeResize: function () {
//   //     this.slides.forEach((el) => {
//   //       el.style.marginTop = "";
//   //     });
//   //   }
//   // }
// });
// let swiperSlides = document.querySelector(".swiper-section").querySelectorAll(".swiper-slide");
// let modal = document.querySelector(".swiper-section-modal");
// let modalBtn = modal.querySelector(".close");
// swiperSlides.forEach(el => {
//   el.addEventListener("click", function () {
//     let img = this.querySelector("img");
//     let link = img.getAttribute("src");
//     console.log(modal.querySelector("img"));
//     modal.classList.add("modal-active");
//     modal.querySelector("img").setAttribute("src", link);
//   })
// })
// modalBtn.addEventListener("click", function () {
//   modal.classList.remove("modal-active");
// });













// let gallerySlider = new Swiper(".gallery__slides-container", {
//   slidesPerView: 1,
//   grid: {
//     rows: 1,
//     fill: "row"
//   },
//   spaceBetween: 20,
//   pagination: {
//     el: ".gallery .gallery__pagination",
//     type: "fraction"
//   },
//   navigation: {
//     nextEl: ".gallery__next-btn",
//     prevEl: ".gallery__prev-btn"
//   },

//   breakpoints: {
//     441: {
//       slidesPerView: 2,
//       grid: {
//         rows: 2
//       },
//       spaceBetween: 30
//     },

//     900: {
//       slidesPerView: 2,
//       grid: {
//         rows: 2
//       },
//       spaceBetween: 34
//     },

//     1200: {
//       slidesPerView: 3,
//       grid: {
//         rows: 2
//       },
//       spaceBetween: 34
//     }
//   },

//   a11y: false,
//   keyboard: true, // можно управлять с клавиатуры стрелками влево/вправо

//   // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
//   watchSlidesProgress: true,
//   slideVisibleClass: 'slide-visible',

//   on: {
//     init: function () {
//       this.slides.forEach(slide => {
//         if (!slide.classList.contains('slide-visible')) {
//           slide.tabIndex = '-1';
//         } else {
//           slide.tabIndex = '';
//         }
//       });
//     },
//     slideChange: function () {
//       this.slides.forEach(slide => {
//         if (!slide.classList.contains('slide-visible')) {
//           slide.tabIndex = '-1';
//         } else {
//           slide.tabIndex = '';
//         }
//       });
//     }
//   }

//   // on: {
//   //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
//   //   beforeResize: function () {
//   //     this.slides.forEach((el) => {
//   //       el.style.marginTop = "";
//   //     });
//   //   }
//   // }
// });
