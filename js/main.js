// ==========================================================================
// hamburger
// ==========================================================================

$(".hamburger-trigger").click(
    function() {
    $(".hamburger-menu").toggleClass("active")
    $(".hamburger").toggleClass("active")
    $("#hamburger-bg").toggleClass("active")
    
     // メニュー開閉状態に応じてbodyへフラグを付与
    const menuOpen = $(".hamburger-menu").hasClass("active");
    $("body").toggleClass("menu-open", menuOpen);
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