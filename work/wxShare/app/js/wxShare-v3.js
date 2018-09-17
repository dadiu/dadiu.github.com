/*
 * @Author: whj 
 * @Date: 2018-09-17 14:52:30 
 * @Last Modified by: whj
 * @Last Modified time: 2018-09-17 16:37:10
 */

// jsonp fn
;

function jsonp(params) {

    // 格式化
    function formatParams(data) {

        let arr = [];

        for (let keys in data) {

            arr.push(encodeURIComponent(keys) + '=' + encodeURIComponent(data[keys]));

        };

        // 添加一个随机数，防止缓存   

        arr.push('cache=' + Math.floor(Math.random() * 10000 + 500));

        return arr.join('&');
    };

    params = params || {};
    params.data = params.data || {};

    let callbackName = params.jsonp;
    let bd = document.getElementsByTagName('body')[0];


    params.data['callback'] = callbackName;
    let data = formatParams(params.data);
    let script = document.createElement('script');

    bd.appendChild(script);


    //为了得知此次请求是否成功，设置超时处理   
    if (params.time) {

        script.timer = setTimeout(function() {

            window[callbackName] = null;

            head.removeChild(script);

            params.error && params.error({

                message: '超时'

            });

        }, time);

    }

    window[callbackName] = function(json) {

        bd.removeChild(script);

        clearTimeout(script.timer);

        window[callbackName] = null;

        params.success && params.success(json);

    };

    //发送请求   
    script.src = params.url + '?' + data;

};


// wxshare 
var wxApi = {

    init(customData) {

        this.isweixin() && this.wxRegister(this.ShareTimeline, customData);

    },

    /**
     * [isweixin 判断是否微信浏览器]
     */
    isweixin() {
        const ua = window.navigator.userAgent.toLowerCase()
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true
        } else {
            // this.$router.push({ path: '/wxkj/isnotWechat' })
            return false
        }
    },


    /**
     * [wxRegister 请求接口]
     * @param {*} cb 
     */
    wxRegister(cb, customData) {

        // console.log(link);
        let link = window.location.href.split("#")[0];

        jsonp({
            url: '//weixinmp.m3guo.com/wechat/get_signature/',
            jsonp: 'wxCallBack',
            data: {
                'url': link,
                'time': 5000
            },
            success: function(res) {
                console.log(res);
                // return;
                wxApi.wxRegisterInit(res.data, cb, customData);
            },
            error: function(err) {
                console.log(err);
            }
        })
    },

    /** 
     * [wxRegister 微信Api初始化]
     * @param  {Function} callback [ready回调函数]
     */
    wxRegisterInit(data, callback, customData) {

        // sig.genSign(ticket, window.location.href);
        // data.url = ''
        wx.config(data)

        wx.ready((res) => {
            // 如果需要定制ready回调方法
            if (callback) {
                callback(customData)
            }
        })
    },

    /**
     * [ShareTimeline 微信分享到朋友圈]
     * @param {[type]} opstion [分享信息]
     * @param {[type]} success [成功回调]
     * @param {[type]} error   [失败回调]
     */
    ShareTimeline(data) {

        let options = {
            "title": data.title,
            "desc": data.desc,
            "link": data.link,
            "imgUrl": data.imgUrl
        };

        // 1.4.0 新增以下2个 => 当前 微信开发者工具并不支持这种分享方式，暂时不开发
        wx.updateAppMessageShareData(options, function(res) {
            alert(res)
        });
        wx.updateTimelineShareData(options, function(res) {
            alert(res)
        });

        // 1.4.0 即将废弃以下方法 目前暂时保留
        wx.onMenuShareTimeline(data);
        wx.onMenuShareAppMessage(data);
        wx.onMenuShareQQ(data);
        wx.onMenuShareQZone(data);
        wx.onMenuShareWeibo(data);
    }

};