# 微信分享 SDK

## 支持

- 支持域名：

  - www.m3guo.com
  - action.17m3.com
  - m.m3guo.com

- http & https 均可
- 依赖微信 sdk 版本 1.4.0


## 更新

- 20180917 : 更新至依赖 jweixin-1.4.0.js,兼容 jweixin-1.2.0.js
- 20180711 : 创建（具体见 v2）,依赖 jweixin-1.2.0.js


## 接入说明

1. 引入地址:

```js
<script src="//static.m3guo.com/m3guo/js/jweixin-1.4.0.js"></script>
<script src="//static.m3guo.com/m3guo/js/wxShare-v3.min.js"></script>
```

2. 设置分享内容

```js
// 使用方法

wxApi.init({
  title: "分享标题文字1.4.0", // 分享标题
  desc: "分享描述文字4.4.0", // 分享描述
  link: window.location.href, // 分享链接
  imgUrl: "https://www.m3guo.com/activity/201809/test/img/share.jpg", // 分享图标
  success: function() {
    // 用户确认分享后执行的回调函数
    alert("分享成功");
  },
  cancel: function() {
    // 用户取消分享后执行的回调函数
    alert("取消分享");
  }
});
```
