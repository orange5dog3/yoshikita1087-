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
$(function () {
    const $fixedBtn = $("#fixed-btn");
    // const $fv = $(".top__fv");
    const $cta = $(".c-cta");
  
    let ctaInView = false; // c-ctaが見えているかのフラグ
  
    // 表示/非表示をまとめて制御
    const applyVisibility = () => {
      // cta が見えていないときのみ表示
      if (!ctaInView) {
        $fixedBtn.addClass("is-visible");
      } else {
        $fixedBtn.removeClass("is-visible");
      }
    };
  
    // スクロール・リサイズ時に判定
    $(window).on("scroll resize", applyVisibility);
  
    // c-cta が「1pxでも」画面に入ったら非表示
    if ($cta.length) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            ctaInView = entry.isIntersecting;
            applyVisibility();
          });
        },
        {
          threshold: 0, // ← 1pxでも入った瞬間に反応
        }
      );
      observer.observe($cta[0]);
    } else {
      // c-ctaが存在しない場合は常に表示
      ctaInView = false;
    }
  
    // 初回チェック
    applyVisibility();
});

// ==========================================================================
// swiper
// ==========================================================================
const swiper = new Swiper('.swiper', {
  loop: true,             // 連続ループ
  autoplay: { delay: 5000 }, // 自動再生（任意）
  pagination: { el: '.swiper-pagination', clickable: true },
});