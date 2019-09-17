onResize = function() {
  if ($(window).width() <= 500) {
    console.log("Mobile");
    $("#mobile-nav").attr("hidden",true);
  }
}

$(document).ready(onResize);
$(window).resize(onResize);

$(window).scroll(function() {
  $("#scroll-msg").css("opacity", 1 - $(window).scrollTop() / 400);
});