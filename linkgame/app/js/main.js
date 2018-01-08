/*
 * @Author: whj 
 * @Date: 2018-01-08 14:11:07 
 * @Last Modified by: whj
 * @Last Modified time: 2018-01-08 15:56:31
 */

// 完结样式自定义
function myIsEnd(totalTime) {

    let timeArr = totalTime.split(" : ");
    alert("恭喜通关，用时 " + timeArr[0] + '分' + timeArr[1] + '秒');
}

; (function () {


    var app = {

        init() {
            if (/iphone|ipad|android/i.test(navigator.userAgent)) {

                window.location.href = "app.html"
                return;
            }

            // console.log(picData);
            // this.startView("start");
            // line.init();
            this.even();
            // $("#fn-start").click();
        },

        even() {

            $("#app").on("click", ".pic-link", function () {
                $(".pic-link").removeClass("pic-false");
                if (!$(this).hasClass('pic-true')) {
                    common.pointFn($(this))
                }
            })

            // 开始
            $("#fn-start").on("click", function () {
                common.startView('start', true);
            });

            // 刷新
            $("#fn-reset").on("click", function () {
                common.startView('reset', true);
            });

        }
    };

    app.init();
}())