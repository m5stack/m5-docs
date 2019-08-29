# LidarBOT
__________________________

#### 功能说明

> 雷达扫描导航小车，控制行走及灯光、显示地图

><img src="/image/Modules/LidarBOT.png" width="20%"> 

>* __Lidarbot set with neopixel__
设置雷达车led颜色

>* __Lidarbot set number with neopixel__
单独设置led颜色

>* __Lidarbot Seed(0±7)__
设置行走方向和速度

>* __Lidarbot set Motor Speed X(-7~7) Y(-7~7) Z(-7~7) A(-7~7)__
设置X和Y方向电机速度和方向

>* __Lidarbot set Servo angle__
设置舵机角度

>* __Lidarbot X axis speed(0±7）Y axis speed (0±7)__
设置X和Y轴方向

>* __Lidarbot Draw Map__
绘制雷达地图

>* __Lidarbot Get Distance__
读取指定角度障碍距离

#### 使用方法

> 小车以3的速度向前走5秒停止

><img src="/image/Modules/LidarBOT_user.gif" width="70%"> 


# STEPMOTOR
__________________________

#### 功能说明

> 步进电机控制

><img src="/image/Modules/STEPMOTOR.png" width="20%"> 

>* __Motor Address__
Module的I2C地址

>* __Motor X Y Z Speed__
设置步进电机X轴Y轴Z轴转动步数和速度

>* __Put g code__
运行G代码

>* __Set mode__
设置电机运行模式，距离模式或相对值模式

>* __lock motor__
锁定电机

>* __unlock motor__
解锁电机


#### 使用方法

>电机正反转交替运行

><img src="/image/Modules/STEPMOTOR_user.gif" width="70%"> 


# SERVO
__________________________

#### 功能说明

> 舵机控制

><img src="/image/Modules/SERVO.png" width="20%"> 

>* __Set servo rotate__
设置指定舵机角度

>* __Set servo write us__
设置舵机脉冲时间

#### 使用方法

>控制0-5号舵机旋转90度

><img src="/image/Modules/SERVO_user.gif" width="70%"> 


# Bala Motor
__________________________

#### 功能说明

> 控制Bala编码电机运行

><img src="/image/Modules/Bala Motor.png" width="20%"> 

>* __set rotate speed__
设置电机转动方向和速度

>* __Run Speed__
设定以某个速度朝运行方向行走一定脉冲数

>* __Go To Position MaxSpeed__
以设定的速度运行500个脉冲

>* __Stop__
电机停止

>* __Read encode__
读取编码器数值


#### 使用方法

> A键按下以255的速度向前行走500脉冲

><img src="/image/Modules/Bala Motor_user.gif" width="70%"> 


# LEGO+
__________________________

#### 功能说明

> 控制lego编码电机运行

><img src="/image/Modules/LEGO+.png" width="20%"> 

>* __Set rotate pwm__
设置电机方向和转速

>* __Stop__
电机停止

>* __Clear encode__
编码器清零

>* __Read encode__
读出编码器数据


#### 使用方法

> 设定电机运行5秒钟停止

><img src="/image/Modules/LEGO+.gif" width="70%"> 


# PM2.5
__________________________

#### 功能说明

> 灰尘颗粒物检测,输出浓度或数量

><img src="/image/Modules/PM2.5_user.png" width="20%"> 

>* __PM2.5 get value in__
设置检测颗粒物直径与检测模式，返回检测结果 SPM为标准颗粒物浓度值 APM为大气环境颗粒物浓度值

>* __PM2.5 get particles above um number__
返回指定直径的颗粒物含有数量


#### 使用方法

> 屏幕显示PM2.5颗粒物数量

><img src="/image/Modules/PM2.5_user.gif" width="70%"> 


