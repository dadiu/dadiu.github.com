# js


## 自定义计算touch位移
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
 
## 计算鼠标位置 - 跟随道具详情
 ```js   
    
    tipSeatFn: function(event, dom, maxHeight) {

        let x = event.clientX;
        let y = event.clientY;
        // let dom = $("#fn-eq");
        let BODY = $(window),
            bodyH = BODY.height(),
            bodyW = BODY.width();

        if (x + maxHeight < bodyW && y + maxHeight < bodyH) {
            return {
                left: x + 30,
                top: y + 30
            }
        };

        if (x + maxHeight >= bodyW && y + maxHeight >= bodyH) {
            return {
                left: x - parseInt(dom.width(), 10) + 40,
                top: y - parseInt(dom.height(), 10) - 40
            }
        };

        if (x + maxHeight >= bodyW) {
            return {
                left: x - parseInt(dom.width(), 10) + 40,
                top: y + 10
            }
        };
        if (y + maxHeight >= bodyH) {
            return {
                left: x + 10,
                top: y - parseInt(dom.height(), 10) - 40
            }
        }
    },

```

## 短信倒计时
```js
    
    // 方法
    countTime(max, changeFn, endFn) {

        function count(max) {

            setTimeout(() => {
                if (max > 0) {
                    changeFn && changeFn(max);
                    max--;
                    count(max);
                } else {
                    endFn && endFn();
                }
            }, 1000)
        }

        changeFn(max);
        max--;
        count(max);
    },
    
    // 使用
    common.countTime(
        60,
        function(num) {
            dom.html(num + '秒')
                .addClass('fn-gray');
        },
        function() {
            dom.html('获取验证码')
                .removeClass('fn-gray');
        })
    ),
```