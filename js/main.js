// ==========================================================================
// hamburger
// ==========================================================================

$(".hamburger-trigger").click(
    function() {
    $(".hamburger-menu").toggleClass("active")
    $(".hamburger").toggleClass("active")
    $("#hamburger-bg").toggleClass("active")
    
    // ハンバーガーメニューが開いている時は固定要素を非表示にする
    if ($(".hamburger-menu").hasClass("active")) {
        $("#contact-btn").fadeOut(200);
        $("#upper-arrow1").fadeOut(200);
        $("#upper-arrow2").fadeOut(200);
    } else {
        // ハンバーガーメニューが閉じている時は元の表示状態に戻す
        // スクロール位置に応じて適切に表示制御
        const scrollTop = $(window).scrollTop();
        
        // contact-btnの表示制御
        if (scrollTop > 100) {
            $("#contact-btn").fadeIn(200);
        }
        
        // upper-arrowの表示制御
        if ($('#first-view').length > 0) {
            const fvHeight = $('#first-view').outerHeight();
            const mainPaddingTop = parseInt($('.header-padding').css('padding-top'));
            const threshold = fvHeight + mainPaddingTop;
            
            if (scrollTop > threshold) {
                $("#upper-arrow1").fadeIn(200);
                $("#upper-arrow2").fadeIn(200);
            }
        }
    }
});

// ==========================================================================
// fixed-btn
// ==========================================================================
const fixArea = $("#fixed-btn");
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      fixArea.fadeIn();
    } else {
      fixArea.fadeOut();
    }
  });