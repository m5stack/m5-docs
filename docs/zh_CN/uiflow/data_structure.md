<el-card class="box-card" style="margin-bottom:20px">
    <div slot="header" class="clearfix">
        <span>目录</span>
        <i class="el-icon-s-management" style="float: right;"></i>
    </div>
    <div style="margin: 0px 10px 10px 0px ;display:inline-block;">
        <el-tag onclick="page_move('引入变量')">引入变量</el-tag>
        <el-tag onclick="page_move('基本运算')">基本运算</el-tag>
        <el-tag onclick="page_move('随机数')">随机数</el-tag>
        <el-tag onclick="page_move('字典')">字典</el-tag>
        <el-tag onclick="page_move('引入数组')">引入数组</el-tag>
        <el-tag onclick="page_move('JSON字符串')">JSON字符串</el-tag>
        <el-tag onclick="page_move('文本')">字符处理</el-tag>
    </div>
</el-card>


## 引入变量

#### 什么是变量？

>变量就像是一个容器，我们可以给变量取一个名字，可以用它来存储数据，也可以读取它，或是改变它，在实际编程中会经常运用到变量

#### 创建变量

>点击Create variable选项，输入变量的名称，点击确定创建

><img src="/image/Operation/Variables_user1.gif" width="50%"> 

#### 使用变量

>例如：将变量赋初值A=6，经过一秒后将变量加2

><img src="/image/Operation/Variables_user2.gif" width="50%"> 

## 基本运算

#### 功能说明

>Math中有一些基本的运算Block，像是“加减乘除幂运算”等

><img src="/image/Operation/Math.webp" width="30%"> 

* __常量__
填写任意数字，然后连接到其他的对象上用作赋值

* __常用运算__
在式子的两边添加数据进行加减乘除幂运算

* __求余__
在式子两边添加数据，进行求余

* __特殊数判断__
添加一个数值，设定判断是否为成立（例如判断是否为奇数或偶数或质数），符合时为True，否则为False

* __数组计算__
对一个数组进行求和，求最大值或最小值，平均数等计算

* __舍入__
对小数进行四舍五入或者上舍下舍

* __高级数学计算__
求三角函数、绝对值等运算

* __转换为整数__
将数值转为整数 

* __转换为浮点数__
将数值转为浮点数


#### 使用方法

>在运算式子两边添加数据，将运算式子赋给一个变量或其他对象，获取结果

><img src="/image/Operation/Math_user.gif" width="50%"> 


## 随机数

#### 功能说明

>在制作游戏或是动画时，我们有时候会需要一些随机的元素，Random可以按照我们的需求生成随机数

><img src="/image/Operation/Random.webp" width="50%"> 

* __random fraction__
每当执行一次，在0到1之间随机生成一个数字

* __random integer__
指定一个随机范围，每当执行一次，在范围内随机生成一个整数


#### 使用方法

>用常量设定随机范围，将random intger赋值给一个变量

><img src="/image/Operation/Random_user.gif" width="50%"> 


## 字典

#### 功能说明

>字典是一种可变容器，可以存储任意类型的变量.

><img src="/image/Operation/map.webp" width="40%"> 

* __creat map__
建立键值对

* __map clear__
清空字典

* __map contain key__
返回是否存在键

* __get key in map__
返回键的值

* __in map add key value__
在字典中添加键值对

* __in map set key value__
在字典中设置键值对

* __in map delete key__
删除指定的键

#### 使用方法
>创建字典，添加键值对

><img src="/image/Operation/map_creat_user.gif" width="50%"> 


## 引入数组

#### 功能说明
>如果说变量是一个容器，那么数组就是由很多个容器组成的一个集合体，我们可以对数组里的任何一个变量进行赋值，获取

><img src="/image/Operation/List.webp" width="40%"> 
* __length of__
测量数组的长度（即数组中元素的个数）
* __X is empty__
判断一个数组是否为空，成立时式子为True，否则为False
* __in list find__
数组索引，索引正序或倒序的某个指定元素
* __create empty list__
添加一个数值，设定判断是否为成立（例如判断是否为奇数或偶数或质数），符合时为True，否则为False
* __create list with__
自定义一个数组
* __in list get__
获取数组某个索引元素值
* __in list get sub-list from__
从数组中截获元素作为新数组
* __icreat list with item repeated times__
建立一个数组，使用元素重复一定次数进行填充
* __reverse__
数组倒序排列
* __in list set as__
在数组中设置某个索引为指定值
* __make list from text with delimiter__
从文本建立数组，使用分隔符

#### 使用方法
>添加一个create list创建数组，添加一些元素到数组中，通过迭代或是其他方式调用

><img src="/image/Operation/List_user.gif" width="50%"> 


## JSON字符串

#### 功能说明

>JSON 是一种轻量级数据交互格式，方便数据传输与阅读

><img src="/image/Operation/JSON.webp" width="40%"> 

* __dumps to json__
将python对象编码为JSON格式

* __loads json__
将JSON字符串解码为python对象


#### 使用方法
>建立字典转成JSON格式

><img src="/image/Operation/JSON_dump_user.gif" width="50%"> 


## 文本

#### 功能描述

>进行相关文本处理或字符串显示

><img src="/image/Operation/Text.webp" width="40%"> 

* __" "__
建立文本内容

* __to UPPER CASE__
将文本内容进行大写或小写转换

* __in text get letter#__
截取指定的文本内容

* __count in__
返回文本中指定字符出现的次数

* __is empty__
返回文本是否为空

* __length of__
返回文本长度

* __print__
打印文本

* __replace with in__
将文本内容进行替换

* __trim spaces from both sides__
删除字符串两边空格

* __Convert to str__
将其他格式转为字符串

* __" "+__
文本合并

* __decode__
将字符串解码为指定格式

* __encode__
将字符串编码为指定格式

* __Reduce to decimal places__
指定小数位数

#### Instructions
>

><img src="/image/Operation/Text_user.gif" width="50%"> 