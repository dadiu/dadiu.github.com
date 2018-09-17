# 正则

```js

regObj : {
    "allTrue" : "<img src=\"/images/v2/right-green.png\" class=\"u_tipsImg\"/>",
    "cardId" :{ 
        "reg":/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/, 
        "err":"请输入正确的身份证号码"
    },
    "qq" : {
        "reg":/^[1-9]?[0-9]{6,11}$/, 
        "err" : " 请输入正确的QQ号码"
    },
    "phone" : {
        "reg": /^(13|14|15|16|17|18|19)[0-9]{9}$/,
        "err":"请输入正确的手机号码"
    },
    "tjl" : {
        "reg": /^[0-9]{6}$/,
        "err":"请输入正确的手机统军令动态密码"
    },
    "phoneCode" : {
        "reg": /^[0-9]{6}$/,
        "err":"请输入正确的手机验证码"
    },
    "emailCode" : {
        "reg": /^[a-zA-Z0-9]{6}$/,
        "err":"请输入正确的邮箱验证码"
    },
    "checkCode" : {
        "reg": /^[a-zA-Z0-9]{4}$/, 
        "err":"请输入正确的验证码"
    },
    "email" : {
        "reg": /^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,6}){1,2})$/,
        "err" : "请输入正确的邮箱地址"
    },
    "numId" : {
        "reg":/^[1-9]?[0-9]{4,13}$/,
        "err":"请输入正确的数字id"
    },
    "name" : {
        "reg": /^[\u4E00-\u9FA5\uF900-\uFA2D\u40ac]{2,5}$/,
        "err":"请输入正确的真实姓名(2~5位中文)"
    },
    "question" : {
        "reg": /^[\w-~!@#$%^&*()\\,.\/\?\{\}\[\]\u4E00-\u9FA5\uF900-\uFA2D]{6,20}$/,
        "err":"自定义问题长度为6-20,不允许出现特殊字符"
    },
    "answer" : {
        "reg": /^[\w-~!@#$%^&*()\\,.\/\?\{\}\[\]\u4E00-\u9FA5\uF900-\uFA2D]{2,20}$/,
        "err":"请输入正确的密码保护答案"
    },
    "allNum" : {
        "reg": /^[1-9]\d*$/, 
        "err": "纯数字"
    },
    "allEn" : {
        "reg": /^[A-Za-z]+$/, 
        "err": "纯字母"
    },
    "orderId" : {
        "reg":/^DH\d{11}$/,
        "err":"请输入正确的申诉回执编号"
    },
    "pwd": {
        "reg":/^\w{6,20}$/,
        "err":"密码格式应为6至20位大小写字母或数字"
    },
    "date":{
        "reg":/^[12]\d{3}-(?:0[1-9]|1[0-2])$/,
        "err":"请输入正确的日期格式"
    },
    "money":{
        "reg":/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,
        "err":"金额格式错误"
    },
    "account":{
        "reg":/^((13|15|18|14|17)[0-9]{9})||(\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)$/, 
        "err":"请输入正确的账号"
    }
}
        
```