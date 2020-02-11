# LidarBOT

#### 功能说明

> 雷达扫描导航小车，控制行走及灯光、显示地图

><img src="/image/Modules/LidarBOT.png" width="50%"> 

* __Lidarbot set with neopixel__
设置雷达车led颜色

* __Lidarbot set number with neopixel__
单独设置led颜色

* __Lidarbot Seed(0±7)__
设置行走方向和速度

* __Lidarbot set Motor Speed X(-7 ~ 7) Y(-7 ~ 7) Z(-7 ~ 7) A(-7  ~  7)__
设置X和Y方向电机速度和方向

* __Lidarbot set Servo angle__
设置舵机角度

* __Lidarbot X axis speed(0±7）Y axis speed (0±7)__
设置X和Y轴方向

* __Lidarbot Draw Map__
绘制雷达地图

* __Lidarbot Get Distance__
读取指定角度障碍距离

#### 使用方法

> 小车以3的速度向前走5秒停止

><img src="/image/Modules/LidarBOT_user.gif" width="50%"> 


# STEPMOTOR

#### 功能说明

> 步进电机控制

><img src="/image/Modules/STEPMOTOR.png" width="50%"> 

* __Motor Address__
Module的I2C地址

* __Motor X Y Z Speed__
设置步进电机X轴Y轴Z轴转动步数和速度

* __Put g code__
运行G代码

* __Set mode__
设置电机运行模式，距离模式或相对值模式

* __lock motor__
锁定电机

* __unlock motor__
解锁电机


#### 使用方法

>电机正反转交替运行

><img src="/image/Modules/STEPMOTOR_user.gif" width="50%"> 


# SERVO

#### 功能说明

> 舵机控制

><img src="/image/Modules/SERVO.png" width="40%"> 

* __Set servo rotate__
设置指定舵机角度

* __Set servo write us__
设置舵机脉冲时间

#### 使用方法

>控制0-5号舵机旋转90度

><img src="/image/Modules/SERVO_user.gif" width="50%"> 


# Bala Motor

#### 功能说明

> 控制Bala编码电机运行

><img src="/image/Modules/Bala Motor.png" width="40%"> 

* __set rotate speed__
设置电机转动方向和速度

* __Run Speed__
设定以某个速度朝运行方向行走一定脉冲数

* __Go To Position MaxSpeed__
以设定的速度运行500个脉冲

* __Stop__
电机停止

* __Read encode__
读取编码器数值


#### 使用方法

> A键按下以255的速度向前行走500脉冲

><img src="/image/Modules/Bala Motor_user.gif" width="50%"> 


# Bala

#### 功能说明

> 控制Bala运行

><img src="/image/Modules/BALA.png" width="40%"> 

* __Move__
设置电机转动方向和速度

* __Turn__
设置转弯脉冲数

* __Rotate to__
设置转弯度数

* __get angle__
返回当前角度

* __set angle offset__
设置角度偏移量

* __balance loop__
自动平衡

#### 使用方法

> Bala前进500个脉冲转弯45度

><img src="/image/Modules/BALA_user.gif" width="50%"> 



# LEGO+

#### 功能说明

> 控制lego编码电机运行

><img src="/image/Modules/LEGO+.png" width="40%"> 

* __Set rotate pwm__
设置电机方向和转速

* __Stop__
电机停止

* __Clear encode__
编码器清零

* __Read encode__
读出编码器数据


#### 使用方法

> 设定电机运行5秒钟停止

><img src="/image/Modules/LEGO+_user.gif" width="50%"> 


# PM2.5

#### 功能说明

> 灰尘颗粒物检测,输出浓度或数量

><img src="/image/Modules/PM2.5.png" width="40%"> 

* __PM2.5 get value in__
设置检测颗粒物直径与检测模式，返回检测结果 SPM为标准颗粒物浓度值 APM为大气环境颗粒物浓度值

* __PM2.5 get particles above um number__
返回指定直径的颗粒物含有数量


#### 使用方法

> 屏幕显示PM2.5颗粒物数量

><img src="/image/Modules/PM2.5_user.gif" width="50%"> 


# BaseX

#### 功能说明

> 控制乐高电机与舵机

><img src="/image/Modules/BaseX.png" width="40%"> 

* __Set to Mode__
设置电机模式(普通/位置/速度)

* __Get encoder value__
获取编码器的数值

* __Set encoder__
设置编码器的数值

* __Set speed__
设置电机速度（普通模式）

* __Get speed in 20ms__
获取电机20ms内转动的速度

* __Set position point to__
设置电机位置

* __Set position PID max speed to__
设置位置模式电机修正速度

* __Set speed point to__
设置电机速度（速度模式）

* __Run ahead__
向前转到指定位置

* __Set Servo angle to__
设置舵机角度

* __Set Servo pulse to__
设置舵机脉冲数

#### 使用方法

> 设置电机以50的速度转1000
><img src="/image/Modules/BaseX_user.gif" width="50%"> 

# PLUS

#### 功能说明

> 读取编码器

><img src="/image/Modules/PLUS.jpg" width="40%"> 

* __Get encode__
读取编码器数值

* __Clean encode__
编码器清零

* __Get press__
读取编码器按键

#### Usage

> 显示编码器状态

><img src="/image/Modules/PLUS_user.gif" width="70%"> 

# GoPlus

#### 功能说明

> 控制直流电机和舵机以及读取模拟量和数字量

><img src="/image/Modules/GoPlus.jpg" width="40%"> 

* __Set servo angle__
设置舵机角度

* __Set motor speed__
设置电机速度

* __Digital read pos__
读取端口指定引脚的数字量

* __Analog read__
读取指定端口的模拟量

#### Usage

> 显示编码器状态

><img src="/image/Modules/GoPlus_user.gif" width="70%"> 

