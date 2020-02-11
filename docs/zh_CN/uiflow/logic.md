# if判断

#### 功能说明

>if判断Block，会根据判断条件是否成立，决定是否运行程序，或是根据情况选择运行不同的程序

><img src="/image/Logic/IF.jpg" width="20%"> 

* __if__
判断条件是否成立，当成立时执行Do右侧程序

* __if else__
判断条件是否成立，当成立时执行Do，不成立时执行else

* __true__
布尔值可以代替判断条件的式子，设置为true为成立，设置false为不成立


#### 使用方法

>将if Block添加到程序中，添加判断条件，添加条件成立，与不成立时的执行程序,例：当M5GO站立时点亮RGB bar

><img src="/image/Logic/IF_user.gif" width="50%"> 


# 逻辑关系式

#### 功能说明

>逻辑关系式在if判断中经常用作判断条件，运算两侧的数据关系是否正确，最后得出true或false两个值，用作if判断

><img src="/image/Logic/LogicA.jpg" width="20%"> 

#### 使用方法

>用数据建立一个关系式，并连接到if Block上用作判断条件，例：当陀螺仪X坐标大于90时，点亮RGB bar

><img src="/image/Logic/LogicA_user.gif" width="50%"> 

# 逻辑运算

#### 功能说明

>对两个逻辑关系式进行“与，或，非”的逻辑运算

><img src="/image/Logic/LogicB.jpg" width="30%"> 

* __and__
当左右两个逻辑关系式 __都成立__ 时，逻辑运算的结果才为True，否则为False

* __or__
当左右两个逻辑关系式 __有一个成立__ 时，逻辑运算的结果为True，否则为False

* __not__
将一个式子的逻辑结果取反，即notTrue=False，notFalse=True

#### 使用方法

>将需要进行逻辑运算的关系式，添加到两侧，修改运算类型

><img src="/image/Logic/LogicB_user.gif" width="50%"> 


# 条件循环

#### 功能说明

>顾名思义，条件循环指的是需要满足一定条件才能进行的循环，当符合我们设定的条件时，循环运行Block里的程序内容

><img src="/image/Loops/Repeat.jpg" width="30%"> 

* __repeat n time__
设定循环次数

* __repeat while__
判断条件是否成立，当成立时无限循环

#### 使用方法

>将repaet添加到程序中，设定循环次数（循环条件），添加需要循环的程序

><img src="/image/Loops/Repeat_user.gif" width="50%"> 

# 数据迭代

#### 功能说明

>简单的说，数据迭代就是将许多数字，一个接一个有顺序的，赋值给同一个变量，并且每赋值一次，运行do的内容一次

><img src="/image/Loops/Range.jpg" width="40%"> 

* __for each item i in list__
将一个数组的内容顺序迭代到变量 __i__ 上,并且每迭代一次，运行do的内容一次

* __count with i from a to b by c__
从 __a__ 开始增加到 __b__ ，每次增加的数为 __c__ ，并将每一次增加后的结果，迭代到变量 __i__ 上，每迭代一次，运行do的内容一次

* __break out of loop__
可以选择跳出整个循环，或跳出本次循环，当执行到该Block时执行跳出

#### 使用方法

>添加迭代Block到程序中，设定迭代参数，以及每次迭代后运行的do程序，例：将RGB bar的亮度从0迭代到100

><img src="/image/Loops/Range_user.gif" width="50%"> 

# 函数功能

#### 什么是函数？

>函数就像是一个包裹，我们可以给函数取一个名字，在函数里放入程序，当函数被调用时，它就运行它包含在内的程序，在有多段程序重复的时候，使用函数可以节省程序的长度，同时使程序更加的简洁明了，同时方便修改

><img src="/image/Functions/Functions.png" width="30%"> 

#### 创建函数

>点击Functions选项，拖动函数体到编程区域，并修改函数名称，往函数里放置程序

><img src="/image/Functions/Functions_user1.gif" width="50%"> 

#### 使用函数

>当添加函数体到编程区域中后，在Functions选项里会出现一个函数调用的Block，将它添加到程序中去

><img src="/image/Functions/Functions_user2.gif" width="50%"> 
