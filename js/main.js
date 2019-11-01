$(function () {
  $('.sidebar__link-box').click(function () {
    $('.sidebar__gamburger').toggleClass('sidebar__link_active');
    $('.sidebar').toggleClass('sidebar_active');
    $('.menu__item a').toggleClass('sidebar__a_active');
    $('.menu__item').toggleClass('menu__item_mobil-active');
  });

  $('.menu__item').click(function () {

    $('.menu__item_active').removeClass('menu__item_active');
    $(this).addClass('menu__item_active');

  })

})