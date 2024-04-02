$("#modal").iziModal({
  width: 624,
});
// tooltip
(() => {
    tippy('.js-contacts-btn', {
      theme:'sdp-tooltip' ,
      maxWidth: 180,
    });
  })();

  var selector = document.querySelector("input[type='tel']");

  var im = new Inputmask("+7(999)999-99-99");
  
  im.mask(selector);

const validation = new window.JustValidate('.contacts__form', {
  errorFiledCssClass: 'invalid-input',
  errorLabelCssClass: 'invalid-label'
});

validation
.addField('#name', [
{
  rule: 'required',
  errorMessage: 'Введите имя',
},
{
  rule: 'minLength',
  value: 3,
  errorMessage: 'Минимум 3 буквы',
},
{
  rule: 'maxLength',
  value: 30,
  errorMessage: 'Максимум 30 букв',
},
])
.addField('#E-mail', [
{
  rule: 'required',
  errorMessage: 'Введите E-mail',
},
{
  rule: 'email',
  errorMessage: 'Неверный E-mail',
},
])
.addField('#tel', [
{
  rule: 'required',
  errorMessage: 'Введите телефон',
},
{
  validator: (name,value) =>{
      const phone = selector.inputmask.unmaskedvalue ();
      return Number(phone);
      
  }
},
])
.onSuccess((event) => {
  $('#modal').iziModal('open');
});;

let swiper1 = new Swiper(".swiper1", {
  grid: {
    rows: 1,
    fill: "row"
  },
  pagination: {
    el: ".hero__pagination",
    clickable: true 
  },
  loop:true ,

  // breakpoints: {
  //   10: {
  //     slidesPerView: 1 ,
  //     slidesPerGroup:1
  //   }
  // },

  a11y: false,
  keyboard: true, // можно управлять с клавиатуры стрелками влево/вправо

  // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
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
});

let swiper2 = new Swiper(".swiper2", {
  grid: {
    rows: 1,
    fill: "row"
  },

  navigation: {
      prevEl: ".offer__swiper-button-prev",
      nextEl: ".offer__swiper-button-next"
    },

  breakpoints: {
    10: {
      
      spaceBetween: 32 ,
      slidesPerGroup:1
    },
    768: {
      spaceBetween: 32 ,
      slidesPerGroup:2
    },
    1024:{
      
      spaceBetween: 32 ,
      slidesPerGroup:3   
    }
  },

  slidesPerView:'auto',

  a11y: false,
  keyboard: true, // можно управлять с клавиатуры стрелками влево/вправо

  // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
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
});

let swiper3 = new Swiper(".swiper3", {
  grid: {
    rows: 1,
    fill: "row"
  },

  navigation: {
      prevEl: ".use__swiper-button-prev",
      nextEl: ".use__swiper-button-next"
    },

  breakpoints: {
    10: {
      
      spaceBetween: 32 ,
      slidesPerGroup:1
    },
    768: {
      spaceBetween: 32 ,
      slidesPerGroup:2
    },
    1024:{
      
      spaceBetween: 32 ,
      slidesPerGroup:3   
    },

    1500:  {

      spaceBetween: 32 ,
      slidesPerGroup:2 
    }
  },

  slidesPerView:'auto',

  a11y: false,
  keyboard: true, // можно управлять с клавиатуры стрелками влево/вправо

  // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
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
});


var play = document.querySelector("#burger");
var reverse = document.querySelector(".burger__close");

var tl = gsap.timeline({paused: true});

tl.to(".burger__menu", {opacity:1, display:"block", duration:1})
tl.fromTo(".burger__close", {opacity:0, y:10}, {opacity:1, y:0, duration:.3}, "-=1")
tl.fromTo(".burger__container", {opacity:0, y:10}, {opacity:1, y:0, duration:.5}, "-=.8")
tl.fromTo(".social", {opacity:0, y:10}, {opacity:1, y:0, duration:.5}, "-=.3")
tl.fromTo(".menu__right", {opacity:0, y:20}, {opacity:1, y:0, duration:.5}, "-=.3")

play.onclick = function() {
  tl.play();
}

reverse.onclick = function() {
  tl.reverse();
}

// select
const element = document.querySelector('.choice-1');
const choices = new Choices(element, {
    searchEnabled: false ,
    itemSelectText: '' ,
    placeholder: true
}); 

const element1 = document.querySelector('#choice-2');
const choices1 = new Choices(element1, {
    searchEnabled: false ,
    itemSelectText: '' ,
    placeholder: true,
    duplicateItemsAllowed: false ,
    classNames: {
      containerOuter: 'header__choice-2',
    }
}); 


