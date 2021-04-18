$(function () {
  //add active to a class on click
  $(".menu li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
  //scroll to section on click
  $(".menu li a").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $("#" + $(this).data("scroll")).offset().top,
      },
      1000
    );
  });
  //start slider
  $(".slider").bxSlider({
    pager: false,
  });
  // start my auto slider
  (function autoSlider() {
    $(".my-slider .active-slider").each(function () {
      if (!$(this).is(":last-child")) {
        $(this)
          .delay(3000)
          .animate({ top: "-" + $(".my-slider").height() }, 1000, function () {
            $(this)
              .removeClass("active-slider")
              .animate({ top: $(".my-slider").height() }, 0, function () {
                $(this).next().addClass("active-slider");
                autoSlider();
              });
          });
      } else {
        $(this)
          .delay(3000)
          .animate({ top: "-" + $(".my-slider").height() }, 1000, function () {
            $(this)
              .removeClass("active-slider")
              .animate({ top: $(".my-slider").height() }, 0, function () {
                $(".my-slider div:first-child").addClass("active-slider");
                autoSlider();
              });
          });
      }
    });
  })();
  // trigger nice scroll
  $("body").niceScroll({
    cursorcolor: "var(--main-color)",
    cursorwidth: "3.5px",
    cursorborder: "0px solid #000",
    cursorborderradius: 0,
  });
  // heart click
  $(".port-card .heart i").click(function () {
    $(this)
      .removeClass("far fa-heart")
      .addClass("fas fa-heart")
      .css({ color: "red" })
      .next()
      .text(parseInt($(this).next().text()) + 1);
  });
});
// using MixItUp
let mixer = mixitup(".cards-container");
