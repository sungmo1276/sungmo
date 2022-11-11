$(document).ready(function () {
  const menu = $(".header_top>li");
  const contents = $("#wrap>section");
  var scene01 = true;
  var scene02 = true;
  var scene03 = true;
  var scene04 = true;
  var scene05 = true;

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
  //------------------------------------------------------------------
  $(window).scroll(function () {
    const bar = document.querySelector(".html_bar .html");
    let gage = 90;
    let t = 0;
    bar.style.width = 0;
    var sct = $(document).scrollTop();
    if (sct > 1800 && scene01 == true) {
      scene01 = false;
      const barAnimation = setInterval(() => {
        bar.style.width = t + "%";
        t++ >= gage && clearInterval(barAnimation);
      }, 0);
    } else if (sct < 3000 && scene01 == false) {
      scene01 = true;
      const barAnimation = setInterval(() => {
        bar1.style.width = t + "0";
        t++ >= gage && clearInterval(barAnimation);
      }, 10);
    }
  });
  $(window).scroll(function () {
    const bar1 = document.querySelector(".css_bar .css");
    let gage1 = 85;
    let t1 = 0;
    bar1.style.width = 0;
    var sct1 = $(document).scrollTop();
    if (sct1 > 1800 && scene02 == true) {
      scene02 = false;
      const barAnimation = setInterval(() => {
        bar1.style.width = t1 + "%";
        t1++ >= gage1 && clearInterval(barAnimation);
      }, 0);
    } else if (sct1 < 3000 && scene02 == false) {
      scene02 = true;
      const barAnimation = setInterval(() => {
        bar1.style.width = t1 + "0";
        t1++ >= gage1 && clearInterval(barAnimation);
      }, 10);
    }
  });
  $(window).scroll(function () {
    const bar2 = document.querySelector(".javascript_bar .javascript");
    let gage2 = 70;
    let t2 = 0;
    bar2.style.width = 0;
    var sct2 = $(document).scrollTop();
    if (sct2 > 1800 && scene03 == true) {
      scene03 = false;
      const barAnimation = setInterval(() => {
        bar2.style.width = t2 + "%";
        t2++ >= gage2 && clearInterval(barAnimation);
      }, 0);
    } else if (sct2 < 3000 && scene03 == false) {
      scene03 = true;
      const barAnimation = setInterval(() => {
        bar2.style.width = t2 + "0";
        t2++ >= gage2 && clearInterval(barAnimation);
      }, 10);
    }
  });
  $(window).scroll(function () {
    const bar3 = document.querySelector(".jquery_bar .jquery");
    let gage3 = 65;
    let t3 = 0;
    bar3.style.width = 0;
    var sct3 = $(document).scrollTop();
    if (sct3 > 1800 && scene04 == true) {
      scene04 = false;
      const barAnimation = setInterval(() => {
        bar3.style.width = t3 + "%";
        t3++ >= gage3 && clearInterval(barAnimation);
      }, 0);
    } else if (sct3 < 3000 && scene04 == false) {
      scene04 = true;
      const barAnimation = setInterval(() => {
        bar3.style.width = t3 + "0";
        t3++ >= gage3 && clearInterval(barAnimation);
      }, 10);
    }
  });
  $(window).scroll(function () {
    const bar4 = document.querySelector(".nodejs_bar .nodejs");
    let gage4 = 50;
    let t4 = 0;
    bar4.style.width = 0;
    var sct4 = $(document).scrollTop();
    if (sct4 > 1800 && scene05 == true) {
      scene05 = false;
      const barAnimation = setInterval(() => {
        bar4.style.width = t4 + "%";
        t4++ >= gage4 && clearInterval(barAnimation);
      }, 0);
    } else if (sct4 < 3000 && scene05 == false) {
      scene05 = true;
      const barAnimation = setInterval(() => {
        bar4.style.width = t4 + "0";
        t4++ >= gage4 && clearInterval(barAnimation);
      }, 10);
    }
  });
});
