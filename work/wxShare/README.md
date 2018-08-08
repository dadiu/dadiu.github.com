# 微信分享SDK 


## 支持

- 支持域名：
  + www.m3guo.com
  + action.17m3.com
  + m.m3guo.com

- http & https 均可
- 依赖微信sdk版本 1.2.0



## 更新
- 20180711 : 创建


## 接入说明

1. 引入地址:

```js

  <script src="//static.m3guo.com/m3guo/js/jweixin-1.2.0.js"></script>
  <script src="//static.m3guo.com/m3guo/js/wxShare-v2.min.js"></script>

```

2. 设置分享内容

```js

    // 使用方法
    wxApi.init({
        title: "分享标题文字", // 分享标题
        desc: "分享描述文字", // 分享描述
        link: "share link", // 分享链接
        imgUrl: "img link", // 分享图标
        success: function() {
            alert("分享成功");
        },
        error: function() {
            alert("分享失败");
        }
    });
    
```
