每月珍宝
---


'根据当前设备自动切换页面，PC和移动兼可使用'

- [2017-08期](http://www.m3guo.com/activity/201708/diamond/)
- [2017-07期](http://www.m3guo.com/activity/201707/diamond/)
- [2017-06期](http://www.m3guo.com/activity/201706/diamond/)
- [2017-04期](http://www.m3guo.com/activity/201704/diamond/)
- [2017-03期](http://www.m3guo.com/activity/201703/diamond/)
- [2017-02期](http://www.m3guo.com/activity/201702/diamond/)



## 文件结构

    |- img
    |   |- app      手机端图片
    |   |- eq       道具图片（公用）
    |   |- eq_info  部分需要图片提示的道具详情
    |- src
    |   |- js
    |   |   |- master.js        公用js
    |   |   |- list.js          道具分类表
    |   |   |- list-info.js     道具详情表
    |   |   |- date.js          其他大区领取时间
    |   |   |- app.js           手机端js
    |   |   |- main.js          PC端js
    |   |- styles
    |       |- app.css          手机端样式表
    |       |- main.css         PC端样式表
    |- app.html         手机端页面
    |- index.html       PC端页面
    |- gulpfile.js
    |- pakeage.json



### 名词说明
list.js

                {
                    "道具id" : {
                        "name" : "道具名",
                        "txt" : "道具说明",
                        "type" : "道具类型1",
                        "type1" : "道具类型2",
                        "level" : "等级色(中文)",
                        "color" : "显示等级色(英文,储存在master.js中)"
                    }
                }


list-info.js

                {
                    "总类别名" : {
                        "price" : "价格（类型: Number）",
                        "info" : [
                            {
                                "img" : "图片名",
                                "k" : "道具id，如道具详情为图片，则写null（类型：Null），如不需要出现tips，则为空",
                                "n" : "道具名"
                            }
                        ],
                        "p" : "解释文字（类型: Array）"
                    }
                }



## FTP地址

- 服务器地址：216
- 文件夹地址：/web/activity/




## 项目技术栈
依赖 node + gulp


压缩文件

                gulp publish

本地运行

                gulp default

本地运行后预览地址（记得修改common.js的basePath路径，否则会存在跨域问题）

                http://localhost:8014/devlopment/



### 更新记录


- 20170609
    - 1.增加功能，当list.js里的k为空时，不出现tips

- 20170406 
    - 1.整理模板
    - 2.提取除"火烧赤壁"外，其他大区领取时间的参数
