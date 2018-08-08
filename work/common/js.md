# js

```js


    var app = {

        even() {

            let _t = this;

            document.addEventListener('touchstart', function(event) {
                // alert('start')
                _t.startPoint = _t.savePoint(event);
            })

            // 查看奖励
            $('#fn-check').on('touchend', function(event) {
                _t.watchPoint(event, function() {
                	// 运行方法
                    // view.history(myUserInfo.history);
                })
            })


        },

        startPoint: [],
        endPoint: [],

        /**
         * 保存位置
         * @param {dom} point 
         */
        savePoint(point) {

            let x = parseInt(point.changedTouches[0].pageX);
            let y = parseInt(point.changedTouches[0].pageY);
            // console.log([x, y]);
            return [x, y];
        },

        /**
         * 监控touch指令 滑动时阻止触摸事件
         * @param {Function} cb -回调方法 
         */
        watchPoint(event, cb) {

            let _t = this;
            _t.endPoint = _t.savePoint(event);
            // console.log(JSON.stringify(_t.startPoint) + JSON.stringify(_t.endPoint));

            // alert(Math.abs(_t.startPoint[0] - _t.endPoint[0]));
            // alert(Math.abs(_t.startPoint[1] - _t.endPoint[1]))
            if ((Math.abs(_t.startPoint[0] - _t.endPoint[0]) < 20) && (Math.abs(_t.startPoint[1] - _t.endPoint[1]) < 20)) {
                cb && cb();
            }
        }
    };

```