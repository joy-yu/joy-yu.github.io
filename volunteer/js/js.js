$(function() {

    //导航栏跳转
    $("[id*='Btn']").stop(true).on('click', function(e) {
        e.preventDefault();
        $(this).scrolld();
    });

    //最近活动的hover效果
    $("#page2 .price li").hover(function() {
        $(this).children().children().css({
            background: "#339beb",
            color: "#fff",
            transition: "0.5s"
        });
    }, function() {
        $(this).children().children().css({
            background: "#fff",
            color: "#000",
            transition: "0.5s"
        });
    });

    //部门介绍的hover效果
    $("#page3 .leftIntro>div,#page3 .rightIntro").hover(function() {
        $(this).css({
            background: "#eee",
            transition: "0.5s"
        });
    }, function() {
        $(this).css({
            background: "transparent",
            transition: "0.5s"
        });
    });


    //首页的图片轮播
    var i = 2;
    var changeBg = setInterval(function() {
        if (i < 5) {

            $("#page1").css({
                "background": "url(./img/banner" + i + ".jpg)",
                "background-size": "cover",
                "filter": "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=Enabled, sizingMethod=scale , src=./img/banner" + i + ".jpg)"
            });
            i++;
        } else {

            i = 1;
            $("#page1").css({
                "background": "url(./img/banner" + i + ".jpg)",
                "background-size": "cover",
                "filter": "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=Enabled, sizingMethod=scale , src=./img/banner" + i + ".jpg)"
            });
        }
    }, 5000);

});

//发展历程的左侧时间列表
window.onscroll = function() {
    var bodyTop = $("body").scrollTop() || $("html").scrollTop();
    var timelineTop = $(".timeline").offset().top;
    var footerTop = $(".footer").offset().top;

    if (bodyTop > (timelineTop - 250)) {

        if ($(".timeline").offset().left > 100) {
            $(".yNameList").css({
                "display": "block",
                "left": $(".timeline").offset().left - 100
            });
        }
    }

    if (bodyTop < (timelineTop - 250)) {
        $(".yNameList").css("display", "none");
    }

    if (bodyTop > footerTop - 400) {
        $(".yNameList").css("display", "none");
    }

}
