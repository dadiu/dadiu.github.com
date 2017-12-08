

// console.log(picData);
; (function () {

    var POINT_A = null;     // 点击第一下  {"x" : Number, "y" : Number}
    var POINT_B = null;     // 点击第二下  {"x" : Number, "y" : Number}
    var POINT_BOO = false;  // 重置点击
    var CODEARR = [];       // pic arr
    var ROW = 6;            // x
    var COLUMN = 6;         // y
    var PICNum = 9;         // pic 必须能被 x*y 整除
    var TOTALNum = ROW * COLUMN;


    // CODEARR = [  x = index
    //     [pic0, pic1],
    //     [pic2, pic3]
    // ]

    var temp = {
        TABLE: $("<table cellspacing='0'></table>"),
        myRow: ROW + 2,
        myColumn: COLUMN + 2,

        init(status) {
            
            let _t = this;
            let picArr = status === 'start' ? _t.picFn() : _t.resetPicFn();

            CODEARR = [];
            _t.TABLE.html(_t.trFn(picArr));
            $("#app").html(_t.TABLE);

        },

        trFn(arr) {

            let r = 0;
            let TR = '';

            for (; r < this.myRow; r++) {

                CODEARR[r] = [];

                TR += '<tr>' + this.tdFn(r, arr[r]) + '</tr>';
            }

            return TR;

        },

        tdFn(r, arr) {

            let d = 0;
            let TD = '';
            // let tdArr = arr.slice(r * this.myColumn, (r + 1) * this.myColumn);
            for (; d < this.myColumn; d++) {

                CODEARR[r].push(arr[d]);
                if(r===0 || r === this.myRow-1 || d===0 || d === this.myColumn -1){
                    TD += '<td></td>';
                } else {

                    if(arr[d]===null){
                        TD += '<td><i class="pic-link pic-true"></i></td>';
                    } else {
                        TD += '<td id="pic_' + r + '_' + d + '"><i data-x="' + r + '"data-y="' + d + '" class="pic-link pic-' + arr[d] + '" ></i></td>';
                    }
                };

            }

            return TD;
        },

        /**
         * @param picData
         */
        picFn: function () {
            let i = 0;
            let j = 0;
            let len = picData.length;
            let copyCount = Math.floor(COLUMN * ROW / PICNum);   // 复制次数
            let idx = Number;
            let linkPicArr = [];
            let copyPicArr = [];

            // 随机图片数组
            for (; i < PICNum; i++) {

                idx = Math.floor(Math.random() * len);

                linkPicArr.push(picData[idx]);
            };

            // 复制图片
            for (; j < copyCount; j++) {
                copyPicArr = copyPicArr.concat(linkPicArr);
            };

            // 混乱顺序
            copyPicArr.sort(function () {
                return 0.5 - Math.random()
            });

            return this.picGroupFn(copyPicArr);
        },

        picGroupFn(arr) {

            let x = 0;
            let _t = this;
            let backArr = [];

            function _childList(r) {

                let y = 0;
                let splitArr = arr.slice((r - 1) * COLUMN, r * COLUMN);

                for (; y < _t.myColumn; y++) {
                    if (r === 0 || r === _t.myRow - 1 || y === 0 || y === _t.myColumn - 1) {
                        backArr[r].push(null);
                    } else {
                        backArr[r].push(splitArr[y - 1]);
                    }
                }
            }

            for (; x < _t.myRow; x++) {
                backArr[x] = [];
                _childList(x);
            }

            return backArr;

        },

        // 重置图片顺序
        resetPicFn() {

            console.log(CODEARR);

            let _t = this;
            let i = 0;
            let resetArr = CODEARR.slice(1, CODEARR.length - 1);
            let childArr = [];
            let backArr = [];

            for (; i < ROW; i++) {
                childArr = resetArr[i].slice(1, _t.myColumn - 1);
                backArr = backArr.concat(childArr);                
            };
            
            backArr.sort(function(){
                return 0.5 - Math.random();
            });

            return this.picGroupFn(backArr);
        }
    };

    var app = {
        init() {

            // console.log(picData);

            // this.startView("start");
            this.even();
            // $("#fn-start").click();
        },

        startView(status){

            temp.init(status);

            $("#fn-start").html("重新开始")
            $("#fn-reset").removeClass("fn-hide");

            $("#app").animate({
                "height" :  $("#app table").height()
            });
        },

        // 点击事件
        even() {

            let _t = this;
            $("#app").on("touchend", ".pic-link", function () {
                $(".pic-link").removeClass("pic-false");
                if (!$(this).hasClass('pic-true')) {
                    _t.pointFn($(this))
                }
            })

            // 开始
            $("#fn-start").on("touchend", function () {
                TOTALNum = ROW * COLUMN;
                _t.startView('start');
            });

            // 刷新
            $("#fn-reset").on("touchend", function () {
                _t.startView('reset');
            });
        },

        // 记录点击
        pointFn(dom) {

            let _t = this;
            let x = parseInt(dom.attr('data-x'));
            let y = parseInt(dom.attr('data-y'));

            dom.addClass("fn-crt");
            // console.log({"x" : x, "y" : y});
            // return;
            if (!POINT_BOO) {
                POINT_A = { "x": x, "y": y };
                POINT_BOO = !POINT_BOO;
                return;
            };

            if (POINT_BOO) {
                POINT_B = { "x": x, "y": y };
                POINT_BOO = !POINT_BOO;
                _t.countPointFn();
            };

        },

        // 计算方法
        countPointFn() {

            console.log(POINT_A);
            console.log(POINT_B);

            // 位置是否相同
            if (POINT_A.x === POINT_B.x && POINT_A.y === POINT_B.y) {
                console.log("the same pic");
                this.picStatusFn('error');
                return;
            }

            // 图片是否相同
            if (CODEARR[POINT_A.x][POINT_A.y] !== CODEARR[POINT_B.x][POINT_B.y]) {
                console.log("pic is no");
                this.picStatusFn('error');
                return;
            };

            // 0折
            if (this.isStep0()) {
                return;
            };

            // 1 折
            if (this.isStep1()) {
                return;
            };

            // 2 折
            if (this.isStep2()) {
                return;
            };

            // default
            this.picStatusFn('error');
            console.log(">>>> other ?");
        },

        // 0 折
        isStep0() {


            if (this.compareFn(POINT_A, POINT_B)) {
                this.picStatusFn('remove');
                return true;
            };

            return false;
        },

        // 1折
        isStep1() {

            let Pt1 = { "x": POINT_A.x, "y": POINT_B.y };
            let Pt2 = { "x": POINT_B.x, "y": POINT_A.y };

            if (
                this.compareFn(POINT_A, Pt1, false) &&
                this.compareFn(POINT_B, Pt1, false) &&
                CODEARR[Pt1.x][Pt1.y] === null
            ) {
                this.picStatusFn('remove');
                return true;
            }

            if (
                this.compareFn(POINT_A, Pt2, false) &&
                this.compareFn(POINT_B, Pt2, false) &&
                CODEARR[Pt2.x][Pt2.y] === null
            ) {
                this.picStatusFn('remove');
                return true;
            }

            return false;

        },

        // 2折
        isStep2() {

            let _t = this;

            // other
            let Pt1 = { "x": POINT_A.x, "y": temp.myColumn };
            let Pt2 = { "x": temp.myRow, "y": POINT_A.y };
            let Pt3 = { "x": POINT_A.x, "y": 0 };
            let Pt4 = { "x": 0, "y": POINT_A.y };
            let ChildPt = {};


            let step1 = this.compareSecondFn(POINT_A, Pt1, function (res) {

                ChildPt = { "x": POINT_B.x, "y": res.y }
                if (
                    _t.compareFn(res, ChildPt) &&
                    CODEARR[ChildPt.x][ChildPt.y] === null &&
                    _t.compareFn(ChildPt, POINT_B)
                ) {
                    console.log(">>> step1" + JSON.stringify(ChildPt));
                    return true;
                }
            }, 1);
            if (step1) {
                _t.picStatusFn('remove');
                return true;
            }

            let step2 = this.compareSecondFn(POINT_A, Pt2, function (res) {

                ChildPt = { "x": res.x, "y": POINT_B.y };
                if (
                    _t.compareFn(res, ChildPt) &&
                    CODEARR[ChildPt.x][ChildPt.y] === null &&
                    _t.compareFn(ChildPt, POINT_B)
                ) {
                    console.log(">>> step2" + JSON.stringify(ChildPt));
                    return true;
                }
            }, 1);
            if (step2) {
                _t.picStatusFn('remove');
                return true;
            }


            let step3 = this.compareSecondFn(POINT_A, Pt3, function (res) {

                ChildPt = { "x": POINT_B.x, "y": res.y };
                if (
                    _t.compareFn(res, ChildPt) &&
                    CODEARR[ChildPt.x][ChildPt.y] === null &&
                    _t.compareFn(ChildPt, POINT_B)
                ) {
                    console.log(">>> step3" + JSON.stringify(ChildPt));
                    return true;
                }
            }, -1);
            if (step3) {
                _t.picStatusFn('remove');
                return true;
            }


            let step4 = this.compareSecondFn(POINT_A, Pt4, function (res) {

                ChildPt = { "x": res.x, "y": POINT_B.y };
                if (
                    _t.compareFn(res, ChildPt) &&
                    CODEARR[ChildPt.x][ChildPt.y] === null &&
                    _t.compareFn(ChildPt, POINT_B)
                ) {
                    console.log(">>> step4" + JSON.stringify(ChildPt));
                    return true;
                }
            }, -1);
            if (step4) {
                _t.picStatusFn('remove');
                return true;
            }

            return false;
        },

        /**
         * 2折算法
         * @param {Object} srcPt 
         * @param {Object} destPt 
         * @param {Function} cb 
         * @param {Number} isDirection  1 || -1;
         */
        compareSecondFn(srcPt, destPt, cb, isDirection) {

            let base = 0;
            let roof = 0;
            let back = {};

            if (srcPt.x === destPt.x) {

                base = srcPt.y - destPt.y > 0 ? destPt.y : srcPt.y;
                roof = srcPt.y - destPt.y > 0 ? srcPt.y : destPt.y;

                if (isDirection > 0) {
                    base++;

                    for (; base < roof; base++) {

                        if (CODEARR[srcPt.x][base] === null) {

                            back = { "x": srcPt.x, "y": base };
                            console.log("back x | 1: " + JSON.stringify(back));

                            if (cb && cb(back)) {
                                return true;
                            }

                        } else {
                            break;
                        }
                    }

                }

                else if (isDirection < 0) {

                    roof--;
                    for (; roof >= base; roof--) {
                        if (CODEARR[srcPt.x][roof] === null) {
                            back = { "x": srcPt.x, "y": roof };
                            console.log("back x | -1: " + JSON.stringify(back));

                            if (cb && cb(back)) {
                                return true;
                            }

                        } else {
                            break;
                        }
                    }
                }


            }

            if (srcPt.y === destPt.y) {

                base = srcPt.x - destPt.x > 0 ? destPt.x : srcPt.x;
                roof = srcPt.x - destPt.x > 0 ? srcPt.x : destPt.x;

                if (isDirection > 0) {
                    base++;

                    for (; base < roof; base++) {
                        if (CODEARR[base][srcPt.y] === null) {

                            back = { "x": base, "y": srcPt.y }
                            console.log("back y | 1 : " + JSON.stringify(back));
                            if (cb && cb(back)) {
                                return true;
                            }
                        } else {
                            break;
                        }
                    }
                }
                else if (isDirection < 0) {
                    roof--;
                    for (; roof >= base; roof--) {

                        if (CODEARR[roof][srcPt.y] === null) {

                            back = { "x": roof, "y": srcPt.y };
                            console.log("back y | -1 : " + JSON.stringify(back));

                            if (cb && cb(back)) {
                                return true;
                            }
                        } else {
                            break;
                        }
                    }
                }


            }

            return false;
        },

        /**
         * 0折 1折算法
         * @param {Object} srcPt    {"x" : Number, "y" : Number} 
         * @param {Object} destPt   {"x" : Number, "y" : Number} 
         * @param {Boolean} isNeighbor 
         */
        compareFn(srcPt, destPt, isNeighbor) {

            let base = 0;
            let roof = 0;
            let isBack = true;

            isNeighbor = typeof isNeighbor === 'undefined' ? true : isNeighbor;

            // 相邻
            if (
                isNeighbor &&
                (
                    (Math.abs(srcPt.x - destPt.x) === 1 && srcPt.y === destPt.y) ||
                    (Math.abs(srcPt.y - destPt.y) === 1 && srcPt.x === destPt.x)
                )
            ) {
                return isBack;
            };

            if (srcPt.x === destPt.x) {
                base = srcPt.y - destPt.y > 0 ? destPt.y : srcPt.y;
                roof = srcPt.y - destPt.y > 0 ? srcPt.y : destPt.y;
                base++;

                for (; base < roof; base++) {
                    if (CODEARR[srcPt.x][base] !== null) {
                        isBack = false;
                        break;
                    }
                }

                return isBack;
            }

            if (srcPt.y === destPt.y) {
                base = srcPt.x - destPt.x > 0 ? destPt.x : srcPt.x;
                roof = srcPt.x - destPt.x > 0 ? srcPt.x : destPt.x;

                base++;
                for (; base < roof; base++) {
                    if (CODEARR[base][srcPt.y] !== null) {
                        isBack = false;
                        break;
                    }
                }

                return isBack;
            }

            return false;
        },

        // 移除 或 警告
        picStatusFn(type) {

            let DOMA = "#pic_" + POINT_A.x + '_' + POINT_A.y;
            let DOMB = "#pic_" + POINT_B.x + '_' + POINT_B.y;
            let pic = $(DOMA + ',' + DOMB).find('.pic-link');

            pic.removeClass("fn-crt");

            if (type === 'remove') {
                CODEARR[POINT_A.x][POINT_A.y] = null;
                CODEARR[POINT_B.x][POINT_B.y] = null;
                pic.removeClass("pic-false").addClass("pic-true");

                this.isTheEndFn();
                return;
            }

            if (type === 'error') {
                pic.addClass("pic-false");
            }

        },

        isTheEndFn() {
            TOTALNum = TOTALNum - 2;

            if (TOTALNum === 0) {
                alert("恭喜通关")
            }
        }
    };


    app.init();
}())