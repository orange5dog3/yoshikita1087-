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

$(window).scroll(function() {
    const scrollTop = $(this).scrollTop();
    const fvHeight = $('#first-view').outerHeight();
    const mainPaddingTop = parseInt($('.header-padding').css('padding-top'));
    const threshold = fvHeight + mainPaddingTop;
    
    if (scrollTop > threshold && !$(".hamburger-menu").hasClass("active")) {
        $('#fixed-btn').fadeIn();
        
        // footer制御ロジック
        const scrollHeight = $(document).height();/*ページ全体の高さ*/
        const scrollPosition = $(window).height() + $(window).scrollTop();/*ページの一番上からスクロールされた距離*/
        const footHeight = $("footer").outerHeight();/*フッターの高さ*/

        // SP版判定（768px未満）
        const isMobile = $(window).width() < 768;
        
        if ( scrollHeight - scrollPosition  <= footHeight ) {
            if (isMobile) {
                // SP版：footer到達時
                $("#fixed-btn").css({
                    "position":"absolute",
                    "right": "0rem",
                    "bottom": footHeight + 1, 
                });
            } else {
                // PC版：footer到達時
                $("#fixed-btn").css({
                    "position":"absolute",
                    "right": "0rem",
                    "bottom": footHeight + 1, 
                });
            }
        } else {
            if (isMobile) {
                // SP版：通常時
                $("#fixed-btn").css({
                    "position":"fixed",
                    "right": "0rem",
                    "top": "8rem",
                });
            } else {
                // PC版：通常時
                $("#fixed-btn").css({
                    "position":"fixed",
                    "right": "0rem",
                    "top": "15.6rem",
                });
            }
        }
    } else {
        $('#fixed-btn').fadeOut();
    }
});

// スムーススクロール
$('#fixed-btn a').click(function() {
    $('html,body').animate({
        scrollTop: 0
    }, 500);
    return false;
});