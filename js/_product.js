
let form3 = document.getElementById("#modal3");
// burger 

// var burger = document.getElementById('burger');

// var overlay = document.getElementById('burger__menu');

// burger.addEventListener('click', function() {
//   this.classList.toggle("close");
//   overlay.classList.toggle("overlay");
// });

// modal
$("#modal1").iziModal({
  width: 1280,
});

$("#modal2").iziModal({
  width: 624,
});
$("#modal3").iziModal({
  width: 624,
});

var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7(999)999-99-99");

im.mask(selector);

const validation1 = new window.JustValidate('.modal2__form', {
  errorFiledCssClass: 'invalid-input',
  errorLabelCssClass: 'invalid-label'
});

validation1
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
  $('#modal2').iziModal('close'),
  $('#modal3').iziModal('open');
});

let swiper4 = new Swiper(".similar__swiper", {
  grid: {
    rows: 1,
    fill: "row"
  },

  navigation: {
      prevEl: ".similar__swiper-button-prev",
      nextEl: ".similar__swiper-button-next"
    },

  breakpoints: {
    10: {
      
      spaceBetween: 16 ,
      slidesPerGroup:2
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
  allowTouchmove: true,

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

let swiper5 = new Swiper(".modal__swiper", {
  grid: {
    rows: 1,
    fill: "row"
  },
  navigation: {
      prevEl: ".modal__swiper-button-prev",
      nextEl: ".modal__swiper-button-prev"
    },
    allowTouchmove: true,
    observer: true, 
observeParents: true,
autoplay: {
delay: 300
},
  breakpoints: {
    620: {
   
      
      slidesPerGroup:1
    },
    768: {
    
      spaceBetween: 78,
     
      slidesPerGroup:2
    },
    1025:{    
      
      spaceBetween: 78,
      slidesPerGroup:1   
    }
  },

  slidesPerView: "auto", 
 

  
  

  a11y: false,
  keyboard: true, // можно управлять с клавиатуры стрелками влево/вправо

 
});



var elem = document.getElementById('#modal-open-in');
if(elem){
elem.addEventListener('click', () => {
  slider.style.display = "block";
  swiper5.update();
});
}







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