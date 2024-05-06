
// tabs

$(document).ready(function(){

	$('body').on('click','.catalog__pages-item a',function(){
	  $('.catalog__pages-item a').removeClass('active');
	  $(this).addClass('active');
	  var href = $(this).attr('href');
	  $('.catalog__wrapper-page').removeClass('active').removeClass('in');
	  var id = $(href).addClass('active');
	  setTimeout(function(){
		$(href).addClass('in');
	  }, 200);
	  return false;
	});
  });

  $(document).ready( function() {
    /* Check width on page load*/
    if ( $(window).width() <= 970) {
	$('.catalog__wrapper-page-1').removeClass('active');	
     $('.catalog__wrapper-page-3').addClass('active');
    }
    else {}
 });

 $(window).resize(function() {
    if ($(window).width() <= 970) {
	$('.catalog__wrapper-page-1').removeClass('active');
     $('.catalog__wrapper-page-3').addClass('active');
	 
    }
    else {$('.catalog__wrapper-page-3').removeClass('active');
	$('.catalog__wrapper-page-1').addClass('active');}
 });

// $(function() {
// 	// var tab = $('#tabs .catalog__wrapper-collection > div'); 
// 	// tab.hide().filter(':first').show(); 
	
// 	// // Клики по вкладкам.
// 	// $('#tabs .catalog__pages-list a').click(function(){
// 	// 	tab.hide(); 
// 	// 	tab.filter(this.hash).show(); 
// 	// 	$('#tabs .catalog__pages-list a').removeClass('active');
// 	// 	$(this).addClass('active');
// 	// 	return false;
// 	// }).filter(':first').click();

 
// 	// Клики по якорным ссылкам.
// 	$('.catalog__pages-link').click(function(){
// 		$('.catalog__pages-list a[href=' + $(this).attr('href')+ ']').click();
// 	});
	
// });

// $(function() {                       //run when the DOM is ready
// 	$(".catalog__page").click(function() {  //use a class, since your ID gets mangled
// 	  $(this).toggleClass("active");      //add the class to the clicked element
// 	});
// });



// slider

var stepsSlider = document.getElementById('slider');
var input0 = document.getElementById('first-price');
var input1 = document.getElementById('second-price');
var inputs = [input0, input1];

noUiSlider.create(stepsSlider, {
    start: [2000, 150000],
    connect: true,
	step:1,
	range: {
        'min': [0],
		'10%': [2000],
		'70%': [150000],
        'max': [250000]
    }
});

stepsSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);
});

// filter 

// $('.catalog__filter-btn').click(function(){
// 	$(".catalog__filter-wrapper-1").fadeToggle(400);
//   });  

$(function() {                       //run when the DOM is ready
	$(".catalog__filter-item").click(function() {  //use a class, since your ID gets mangled
	  $(this).toggleClass("active");      //add the class to the clicked element
	});
});


// burger 

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