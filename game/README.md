# 接口说明

## 命名 post

```json
{
    "name" : "" // 宠物命名 中文 最长5个字符 英文 最长10个字符 不允许出现特殊字符
}
```

## 重命名 post

```json
{
    "oldName" : "",     // 原名
    "newName" : ""      // 新名
}
```

## 收获货币

``` json
{
    "count" : 0     // Number [0, 20]
}
```

## 登录 get
- 房外

```json

    {
        "gold" : {          // 货币
            "own" : 0,      // Number 已拥有 
            "get" : 0       // Number 可获得
        },
        "pet" : {           // 宠物
            "name" : "",    // 宠物名
            "status" : 0,   // Number 宠物状态 0 在家  1 出游中  2 归来
        },
        "visitor" : {       // 访客
            "id" : 0,           // 访客类别：0 蜗牛 1 蜜蜂 2 乌龟
            "isEat" : false     // 是否喂食 false 否 true 是
        },
        "card" : [          // 明信片 
            {
                "createTime" : "",  // 明信片创建时间
                "pic" : ""          // 明信片图片名
            }
        ],
        "specialty" : [     // 旅行归来带的特产
            {
                "pic" : "",         // 图片名
                "name" : "",        // 特产名字
                "explain" : "",     // 特产说明
                "count" : 1,        // Number 特产数量
            }
        ],
        "" : [  // 旅行归来获得的成就 长度可为[0, N]

        ]
    }

```
- 房内

```json
{
    "status" : 0,         // Number
    "position" : ""       // string
}
```
status | 状态
- | -
0 | 出游
1 | 吃饭
2 | 睡觉
3 | 记笔记
4 | 削铅笔


position | 所处位置
- | -
desk | 书桌
table | 餐桌
bed | 床


## 访客饲养 post
``同一类别访客，连续3次喂食的食物不同，赠送双倍货币``

```json

    {
        "petId" : 0,       // Number 访客类别
        "foodId" : 0       // Number 喂食食物id 
    }

```

## 获得称谓列表 get

```json

[
    {
        "name" : "",        // 称谓名
        "isOwn " : false    // 是否获得 flase 否 true 是
    }
]

```


## 明信片列表

```json

{
    "path" : "",      // String 图片路径
    "info" : [
        {
            "createTime" : "",    // String 创建时间
            "pic" : ""            // String 图片名
        }
    ]
}

```

## 当地特产列表

```json

{
    "path" : "",
    "info":[
        {
            "isOwn" : false     // 是否已拥有,false 否,true 是,默认false
        }
    ]
}
```

