# 每周抢购




'根据当前设备自动切换'
- [线上地址-PC](http://www.m3guo.com/v2/shop/)
- [线上地址-wap](http://www.m3guo.com/v2/shop/app.html)



## 添加新活动方法
1. 在data>menu.json文件内添加菜单，具体如下
2. 在data文件夹中新建以日期名字命名的文件夹，如 20170302
3. 在该文件夹中新建img文件夹，放置新活动需要的图片
4. 新建data.json文件，内置新活动需要的道具信息
5. 需要定制样式，可新建styles文件夹，内置样式表，命名page.css


### menu.json 文件名词说明
    |- fileName 文件夹名称，跟请求的文件夹时间匹配，如20170302
    |- time     活动开启和结束的时间轴
    |- slogan   该期活动的口号
    |- pcAid    pc端的统计aid   【前端生成添加】
    |- appAid   手机端的统计aid 【前端生成添加】

### img文件夹图片命名说明 (* 注意图片后缀名)
    -- PC图片
    |- body_bg.jpg
    |- menu.png
    |- slogan.png
    |- title1.png
    |- title2.png

    -- WAP图片
    |- body_bg_app.jpg
    |- container_bg_app.jpg
    |- slogan_app.png
    |- title1_app.png
    |- title2_app.png
    |- share.png (500x500)

    -- 其他配合data的道具图片，所有道具图片规格为46x46，且为jpg格式


### data.json 文件名词说明
    |- styleName    样式表名称，如果存需要，则在date新建的一个styles文件夹中新建样式表。如不需要，则可填写false，或删掉
    |- today        发布时间 + 请求文件夹名称
    |
    |- boxList      奇幻宝匣
    |   |- oldPrice 原价
    |   |- nowPrice 现价
    |   |- max      限购量，0代表不限购
    |   |- list     宝匣内所有道具列表
    |       |- src  道具图片地址
    |       |- name 道具名字
    |
    |- weekList 本周抢购
        |- name     道具名
        |- cid      道具id
        |- oldPrice 原价
        |- nowPrice 现价
        |- ps       补充文字，没有为空
        |- isBuy    是否限购，是为1，不是为0
        |- isLimit  是否限量，是为1，不是为0



### styles 文件夹说明
    - 默认可没有，如需要自定义样式，则可新建一个样式文件，在data.json的styleName中引入




## 源文件FTP地址

- 服务器地址：216
- 文件夹地址：/web/V2/shop/build/


## 增加数据FTP地址

- 服务器地址：216
- 文件夹地址：/web/activity/shopData/



## 项目技术栈
依赖 node + gulp


压缩文件

                gulp publish

本地运行

                gulp default

本地运行后预览地址（记得修改common.js的basePath路径，否则会存在跨域问题）

                http://localhost:8012/



### 更新记录

- 20180712
  + 服务器搬迁升级，data.json文件由{} 改为 [{}]
- 20170504
  + 上周抢购取消，跟五一活动一起了
- 20170406
  + 1.增加翻页功能
  + 2.增加0406期
- 20170330
  + 1.data.json 增加限量和限购的参数
  + 2.menu.json 增加color参数，选填，默认无, 可选择"white"
- 20170327 
  + 1.已请求过的日期列表储存起来；
  + 2.可自定义样式(data.json增加"style"参数，value为引入style的名字，没有则不写或为false)
- 20170322 
  + 1.修复点击菜单后请求地址出错；
  + 2.增加第二期
- 20170312 
  + 1.增加手机端菜单; 
  + 2.增加手机端分享图片自动更新; 
  + 3.增加统计ID自动更新
- 20170302 
  + 创建



### 备忘 下期更新
