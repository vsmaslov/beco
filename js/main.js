$(function() {
  $(".sidebar__link-box").click(function() {
    $(".sidebar__gamburger").toggleClass("sidebar__link_active");
    $(".sidebar").toggleClass("sidebar_active");
    $(".menu >li a").toggleClass("sidebar__a_active");
    $(".menu > li").toggleClass("menu__item_mobil-active");
  });

  $(".menu__item").click(function() {
    let i = 1;
    for (i; i < 6; i++) {
      $(".menu > li").addClass("menu__item");
      $(".menu > li").removeClass("menu__item-" + i);
    }
    $number = $(this).attr("data-number");
    $(this).addClass("menu__item-" + $number);
    $(this).toggleClass("menu__item");
    $(".menu__item_active").removeClass("menu__item_active");
    $(this).addClass("menu__item_active");
  });
});
