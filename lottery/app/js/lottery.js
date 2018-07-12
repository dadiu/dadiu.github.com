/*
 * @Author: whj 
 * @Date: 2018-06-27 13:39:51 
 * @Last Modified by: whj
 * @Last Modified time: 2018-06-27 14:58:28
 */
(function() {


    var lottery = {

        isRun: false,

        run() {
            if (!this.isRun) {
                this.isRun = true;
                $('#lottery-end').removeClass('fn-show');
                $('#lottery-bg').addClass("fn-run");

                this.testRun();
                return;
            }
        },

        stop(id, data) {
            $('#lottery-bg').removeClass()
                .addClass('rotateInStop-' + id);

            this.isRun = false;
            this.err(data[id]);
        },

        err(obj) {
            console.log(obj);
            $('#lottery-end').html('恭喜，获得' + obj.name + '!')
                .addClass('fn-show');
        },

        testRun() {
            let lotteryLen = lotteryData.length;
            setTimeout(() => {
                let id = Math.floor(Math.random() * lotteryLen);
                console.log(id);
                lottery.stop(id, lotteryData)
            }, 1000);
        }
    }

    var app = {
        init() {

            this.even();
        },

        even() {

            $('#lottery-btn').on('click', function() {
                lottery.run();
            })
        }
    };

    app.init()
}())