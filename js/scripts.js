$(window).scroll(function(){
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });

  if ($(this).scrollTop()>276){
    $("#lame").text("askanniething");
    $("ul").removeClass("mx-auto");
    $("ul").addClass("ml-auto");
  }
  else{
    $("#lame").text("");

    $("ul").addClass("mx-auto");
    $("ul").addClass("ml-auto");
  }
})

$(document).ready(function(){
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      window.location.hash = hash;
      });
    }
  });
})

/*
var offset = 80;

$('.navlink').click(function(event) {
    event.preventDefault();
    $($(this).attr('href'))[0].scrollIntoView();
    scrollBy(0, -offset);
});*/
/*
var navOffset = $('.navbar').height();

$('.navbar li a').click(function(event) {
    var href = $(this).attr('href');

    // Don't let the browser scroll, but still update the current address
    // in the browser.
    event.preventDefault();
    window.location.hash = href;

    // Explicitly scroll to where the browser thinks the element
    // is, but apply the offset.
    $(href)[0].scrollIntoView();
    window.scrollBy(0, -navOffset);
});*/
