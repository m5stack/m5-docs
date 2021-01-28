
<el-card class="box-card" style="margin-bottom:20px">
    <div slot="header" class="clearfix">
        <span>目录</span>
        <i class="el-icon-s-management" style="float: right;"></i>
    </div>
    <div style="margin: 0px 10px 10px 0px ;display:inline-block;">
        <el-tag onclick="page_move('variables')">无限循环</el-tag>
        <el-tag onclick="page_move('operation')">按键</el-tag>
        <el-tag onclick="page_move('map')">定时器</el-tag>
    </div>
</el-card>

## Loop

#### 无限循环

>无限循环执行包含在Loop内的程序

><img src="/image/Operation/Variables_user1.webp" width="50%"> 

#### 使用变量

>例如：无限循环点灯与熄灭

><img src="/image/Operation/Variables_user2.webp" width="50%"> 

## Button

#### 功能说明

>按键状态的监听，配置按键回调函数

><img src="/image/Operation/Math.webp" width="30%"> 

* __常量__
监听按键状态，并绑定回调函数

* __常用运算__
监听按键状态

* __求余__
在式子两边添加数据，进行求余

* __特殊数判断__
添加一个数值，设定判断是否为成立（例如判断是否为奇数或偶数或质数），符合时为True，否则为False


#### 使用方法

>在运算式子两边添加数据，将运算式子赋给一个变量或其他对象，获取结果

><img src="/image/Operation/Math_user.webp" width="50%"> 

## Timer

#### 功能说明

>设置定时器，并指定相应回调函数定时执行。

><img src="/image/Operation/Random.webp" width="50%"> 

* __random fraction__
每当执行一次，在0到1之间随机生成一个数字

* __random integer__
指定一个随机范围，每当执行一次，在范围内随机生成一个整数

#### 使用方法

>用常量设定随机范围，将random intger赋值给一个变量

><img src="/image/Operation/Random_user.webp" width="50%"> 


## map

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

><img src="/image/Operation/map_creat_user.webp" width="50%"> 

## array

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

><img src="/image/Operation/List_user.webp" width="50%"> 


## JSON

#### 功能说明

>JSON 是一种轻量级数据交互格式，方便数据传输与阅读

><img src="/image/Operation/JSON.webp" width="40%"> 

* __dumps to json__
将python对象编码为JSON格式

* __loads json__
将JSON字符串解码为python对象


#### 使用方法
>建立字典转成JSON格式

><img src="/image/Operation/JSON_dump_user.webp" width="50%"> 