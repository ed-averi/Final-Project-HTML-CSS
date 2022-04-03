
$(window).on("load", function(){
$(".preloader").delay(500).fadeOut();
})
 
let nCount = selector => {
    $(selector).each(function () {
      $(this)
        .animate({
          Counter: $(this).text()
        }, {
          // A string or number determining how long the animation will run.
          duration: 4000,
          // A string indicating which easing function to use for the transition.
          easing: "swing",
          /**
           * A function to be called for each animated property of each animated element. 
           * This function provides an opportunity to
           *  modify the Tween object to change the value of the property before it is set.
           */
          step: function (value) {
            $(this).text(Math.ceil(value));
          }
        });
    });
  };
  
  let a = 0;
  $(window).scroll(function () {
    // The .offset() method allows us to retrieve the current position of an element  relative to the document
    let oTop = $(".numbers").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() >= oTop) {
      a++;
      nCount(".rect > h1");
    }
  });
  
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  $(window).scroll(function(){
  if($(document).scrollTop() > 100){
    $('topnav').addClass('animate');
  }else{
    $('topnav').removeClass('animate');
  }
})

  //navbar animation
 function test(){
    var tabsNewAnim = $('#navbarSupportedContent');
    var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px",
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click","li",function(e){
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px",
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }
  $(document).ready(function(){
    setTimeout(function(){ test(); });
  });
  $(window).on('resize', function(){
    setTimeout(function(){ test(); }, 500);
  });
  $(".navbar-toggler").click(function(){
    setTimeout(function(){ test(); });
  });
  
  /**
   *
   *  sticky navigation
   *
   */
  
 /*
  let navbar = $(".navbar");
  
  $(window).scroll(function () {
    // get the complete hight of window
    let oTop = $(".section-2").offset().top - window.innerHeight;
    if ($(window).scrollTop() > oTop) {
      navbar.addClass("sticky");
    } else {
      navbar.removeClass("sticky");
    }
  });
 */
/*
  $(window).scroll(function () {
    // get the complete hight of window
    let oTop = $(".section-2").offset().top - window.innerHeight;
    let oTop = $(".section-1").offset().top - window.innerHeight;
    if ($(window).scrollTop() > oTop) {
      navbar.addClass("sticky");
    } else {
      */