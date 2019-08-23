# RGB
__________________________

#### 功能说明

>驱动RGB bar点亮与熄灭，且能够控制发出的不同颜色的光芒

><img src="/image/Hardwares/RGB.png" width="70%">

>* __Set Rgb Bar color__
设定两侧RGB灯颜色

>* __Set left side Rgb Bar color__
设定左右单侧RGB灯颜色

>* __Set the 1st Rgb colr__
设定单个RGB灯颜色

>* __Set Rgb brightness__
设定RGB灯的亮度值

#### 使用方法

>将所需的RGB Block添加到程序中，当程序执行到它时，则会运行对应的功能

><img src="/image/Hardwares/RGB_user.gif" width="70%">


# Speaker
__________________________

#### 功能说明

>驱动Speaker发出声音，使用不同的Speaker Block能够控制声音的频率，持续时间，音量，音调和节拍

><img src="/image/Hardwares/Speaker.png" width="70%">

>* __Speaker.beep__
调节频率,和持续时间

>* __Speaker.volume__
调节音量

>* __play.tone__
调节音量与节拍

#### 注意

>由于一般人的听力范围在20~20KHz，所以当你将频率设置得过低，或过高时，是听不到它的声音的

#### 使用方法

>将所需的Speaker Block添加到程序中，修改属性或参数，使M5GO发出不同的声音

><img src="/image/Hardwares/Speaker_user.png" width="70%">


# IMU
__________________________

#### 功能说明

>IMU Block是M5GO的陀螺仪姿态数据采集，它会分别采集X，Y，Z三个坐标轴的坐标数据，通过数据可以编程当M5GO处于不同姿态时，实现不同的功能

><img src="/image/Hardwares/IMU.png" width="30%">

>* __Get X__
获取横滚数据

>* __Get Y__
获取俯仰数据

>* __Get X ACC__
获取X轴加速度数据

>* __Get Y ACC__
获取Y轴加速度数据

>* __Get Z ACC__
获取Z轴加速度数据

>* __Get X Gyr__
获取X方向角速度

>* __Get Y Gyr__
获取Y方向角速度

>* __Get Z Gyr__
获取Z方向角速度


#### 使用方法

>使用标签显示采集到的数据，或是将数据用作运算或逻辑判断

><img src="/image/Hardwares/IMU_user.gif" width="70%">


# 电源管理
__________________________

#### 功能说明

>设置充电或者获取电量.


><img src="/image/Hardwares/POWER.png" width="30%">

>* __isCharging__
返回充电状态

>* __isChargeFull__
充满电返回true

>* __setCharge__
设置充电

>* __get Battery Level__
返回电量水平


#### 使用方法

>如果在充电RGB亮红灯

><img src="/image/Hardwares/Power_user.gif" width="70%">