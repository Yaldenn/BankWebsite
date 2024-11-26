$(document).ready(function () {
    $("#hero-title").hide().fadeIn(2000); // Fade-in effect for the title.
});
  
$(window).on("scroll", function () {
    $(".service-card").each(function () {
      if ($(window).scrollTop() > $(this).offset().top - 500) {
        $(this).animate({ opacity: 1, top: "0px" }, 800); // Smooth card appearance.
      }
    });
  });
  