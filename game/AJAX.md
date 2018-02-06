# 接口说明


## 命名 post
```json

    {
        "name" : ""         // 宠物命名 中文 最长5个字符 英文 最长10个字符 不允许出现特殊字符
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
        "count" : 0,        // Number [0, 20] 普通货币
        "lucky" : 0         // Number [0, 20] 幸运货币
    }

```

## 庭院 get
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
            "isCome" : false,   // 是否有访客 
            "id" : 1,           // 访客类别：1 蜗牛 2 蜜蜂 3 乌龟
            "isEat" : false     // 是否喂食 false 否 true 是
        },
        "card" : [          // 明信片 
            {
                "point" : {"x": 0, "y" : 0},    // 地图坐标 用于二期扩展地图
                "id" : "",          // String 明信片的id
                "createTime" : "",  // 明信片创建时间 时间戳 单位毫秒
                "pic" : ""          // 明信片图片名
            }
        ],
        "specialty" : [     // 旅行归来带的特产
            {
                "id" : 1,           // Number 特产id
                "name" : "",        // 特产名字
                "count" : 1,        // Number 特产数量
            }
        ],
        "souvenir" : [      // 旅行归来带的纪念品
            {
                "name" : "",        // 图片名
                "id" : 1,           // Number 纪念品id
                "count" : 1         // 纪念品数量
            }
        ],
        "achievement" : [           // 旅行归来获得的成就 长度可为0-N
            {
                "name" : "",        // 成就名
                "id" : 0            // Number 成就id
            }
        ],
        "isMail" : false            // Boolean 是否有未阅读或未领取奖励的新邮件
    }

```

## 房间 get
```json

    {
        "status" : 0,         // Number 状态
        "position" : ""       // string 所处位置 如果status=0，则为空
    }

```

参数 | 类型 | 说明
-:|:-:|:-
status | Number | 0 出游、1 吃饭、2 睡觉、3 记笔记、4 削铅笔
position | String | desk、table、bed



## 获取邮件 get
```json

    [
        {
            "type" : 0,             // 邮件类别 系统 or 访友
            "count" : 0,           // 赠送货币数量
            "ad" : ""
        }
    ]

```
参数 | 类型 | 说明
-:|:-:|:-
type | Number | 0 系统、1 蜗牛、2 蜜蜂、3 乌龟
count | Number | 0-N
ad | String | ``预留key, 二期扩展，一期不做推广仅作奖励发放`` <br/>如果是广告或活动通知，此处放外链，如果不是则为空字串


## 领取邮箱奖励
``领取奖励后直接删除，仅保留未领取的``
```json
    {
        "type" : 0,             // 邮件类别 系统 or 访友
        "count" : 0           // 赠送货币数量
    }
```


## 访客饲养 post
``同一类别访客，连续3次喂食的食物不同，赠送双倍货币``
``如果不是方可喜欢的食物，仅赠送1货币``
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

## 保存明信片 post
```json

    {
        "point" : {"x": 0, "y" : 0},    // 地图坐标 用于二期扩展地图
        "id" : "",          // String 明信片的id
        "createTime" : "",  // 明信片创建时间 时间戳 单位毫秒
        "pic" : ""          // 明信片图片名
    }

```

## 保存明信片 删除
```json

    {
        "id" : "",          // String 明信片的id
    }

```

## 明信片列表 get
```json

    [
        {
            "point" : {"x": 0, "y" : 0},    // 地图坐标 用于二期扩展地图
            "id" : "",          // String 明信片的id
            "createTime" : "",    // String 创建时间
            "pic" : ""            // String 图片名
        }
    ]

```

## 当地特产列表 get
- ``记录：拥有过即点亮，与当前拥有数量无关，判断isOwn``
- ``喂食：当前拥有才显示，判断count>0``

```json
    [ 
        {
            "id" : 1,           // Number 特产id
            "name" : "",        // 特产名字
            "count" : 0,        // Number 拥有数量
            "isOwn " : false    // 是否获得过 flase 否 true 是
        }
    ]

```

## 纪念品列表 get
``拥有过即点亮，与当前拥有数量无关``
```json
    [
        {
            "id" : 1,           // Number 纪念品id
            "name" : "",        // 纪念品名字
            "count" : 0,        // Number 拥有数量
            "isOwn" : false     // 是否已拥有,false 否,true 是,默认false
        }
    ]

```

## 商城列表 get
``食物和道具分开，方便后期扩展tab分类``
```json

    {
        "food" : [
            {
                "id" : 0,       // Number
                "name" : "",    // String 食物名
                "count" : 0,    // Number
                "price" : 0     // Number 价格
            }
        ],

        "tool" : [
            {
                "type" : 1,         // Number 1 无耐久可永久使用 2 有耐久 为0时消失需重新购买 默认1 
                "durability": 100,  // Number 默认100
                "id" : 0,           // Number
                "name" : "",        // String 食物名
                "count" : 0,        // Number   如果type等于1且count等于1 则不可再购买
                "price" : 0         // Number 价格
            }
        ]
    }

```
``tool 说明``
参数 | 类型 | 说明
-:|:-:|:-
type | Number | 道具类别，1 无耐久可永久使用 2 有耐久 为0时消失需重新购买 默认1 ``预留后期扩展备用``
durability | Number | 耐久度,新道具耐久度统一为 100 ``预留后期扩展备用``


## 商城购买道具 post
```json

{
    "type" : 0,         // Number  商品类别 0为食物 1为无耐久可永久使用道具 2为有耐久道具
    "id" : 0,           // Number  商品id
    "count" : 1,        // Number  一期默认1，方便后期可一次性买多个时可扩展
    "price" : 0         // Number  价格
}

```