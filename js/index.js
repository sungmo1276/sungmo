$(document).ready(function () {
  const menu = $(".header_top>li");
  const contents = $("#wrap>section");

  menu.click(function (event) {
    event.preventDefault();

    let i = $(this).index();
    let section = contents.eq(i);
    let tt = section.offset().top;

    $("html,body").stop().animate({ scrollTop: tt });
  });

  $(window).scroll(function () {
    const windowTop = $(window).scrollTop() + 300;
    $(".q_mn")
      .stop()
      .animate({ top: windowTop + "px" }, 0);
  });
  $(".q_mn li").hover(
    function () {
      $(this).addClass("on");
    },
    function () {
      $(this).removeClass("on");
    }
  );
  $("a").click(function (e) {
    e.preventDefault();
  });
  //------------------------------------------------------------------
});
