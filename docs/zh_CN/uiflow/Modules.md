<el-card class="box-card" style="margin-bottom:20px">
    <div slot="header" class="clearfix">
        <span>目录</span>
        <i class="el-icon-s-management" style="float: right;"></i>
    </div>
    <div style="margin: 0px 10px 10px 0px ;display:inline-block;">
        <el-tag onclick="page_move('lorawan')">LoRaWAN</el-tag>
        <el-tag onclick="page_move('Lidarbot')">LidarBOT</el-tag>
        <el-tag onclick="page_move('setpmotor')">SetpMotor</el-tag>
        <el-tag onclick="page_move('servo')">SERVO</el-tag>
        <el-tag onclick="page_move('bala-motor')">Bala Motor</el-tag>
        <el-tag onclick="page_move('bala')">Bala</el-tag>
        <el-tag onclick="page_move('lego+')">LEGO+</el-tag>
        <el-tag onclick="page_move('pm25')">PM2.5</el-tag>
        <el-tag onclick="page_move('basex')">BaseX</el-tag>
        <el-tag onclick="page_move('plus')">PLUS</el-tag>
        <el-tag onclick="page_move('goplus')">GoPlus</el-tag>
        <el-tag onclick="page_move('gps')">GPS</el-tag>
    </div>
</el-card>


## LoRaWAN

#### 功能说明

> 使用LoRaWAN模块向同一频段内的其他LoRa设备广播数据

><img src="/image/Modules/lorawan.webp" width="30%"> 

* __LoRaWAN init Rx Mode with data__
设置数据接收回调

* __Set point to point with frq__
设置通信频率

* __Send string__
发送消息

* __Get data__
获取接收的数据(在数据接收回调中使用)

#### 使用方法

> 按下按键A/B发送消息，并实时监听接收数据

><img src="/image/Modules/lorawan_use.webp" width="50%"> 


## STEPMOTOR

#### 功能说明

> 步进电机控制

><img src="/image/Modules/STEPMOTOR.webp" width="50%"> 

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

><img src="/image/Modules/STEPMOTOR_user.webp" width="50%"> 


## SERVO

#### 功能说明

> 舵机控制

><img src="/image/Modules/SERVO.webp" width="40%"> 

* __Set servo rotate__
设置指定舵机角度

* __Set servo write us__
设置舵机脉冲时间

#### 使用方法

>控制0-5号舵机旋转90度

><img src="/image/Modules/SERVO_user.webp" width="50%"> 


## Bala Motor

#### 功能说明

> 控制Bala编码电机运行

><img src="/image/Modules/Bala Motor.webp" width="40%"> 

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

><img src="/image/Modules/Bala Motor_user.webp" width="50%"> 


## Bala

#### 功能说明

> 控制Bala运行

><img src="/image/Modules/BALA.webp" width="40%"> 

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

><img src="/image/Modules/BALA_user.webp" width="50%"> 



## LEGO+

#### 功能说明

> 控制lego编码电机运行

><img src="/image/Modules/LEGO+.webp" width="40%"> 

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

><img src="/image/Modules/LEGO+_user.webp" width="50%"> 


## PM2.5

#### 功能说明

> 灰尘颗粒物检测,输出浓度或数量

><img src="/image/Modules/PM2.5.webp" width="40%"> 

* __PM2.5 get value in__
设置检测颗粒物直径与检测模式，返回检测结果 SPM为标准颗粒物浓度值 APM为大气环境颗粒物浓度值

* __PM2.5 get particles above um number__
返回指定直径的颗粒物含有数量


#### 使用方法

> 屏幕显示PM2.5颗粒物数量

><img src="/image/Modules/PM2.5_user.webp" width="50%"> 


## BaseX

#### 功能说明

> 控制乐高电机与舵机

><img src="/image/Modules/BaseX.webp" width="40%"> 

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

><img src="/image/Modules/BaseX_user.webp" width="50%"> 

## PLUS

#### 功能说明

> 读取编码器

><img src="/image/Modules/PLUS.webp" width="40%"> 

* __Get encode__
读取编码器数值

* __Clean encode__
编码器清零

* __Get press__
读取编码器按键

#### 使用方法

> 显示编码器状态

><img src="/image/Modules/PLUS_user.webp" width="70%"> 

## GoPlus

#### 功能说明

> 控制直流电机和舵机以及读取模拟量和数字量

><img src="/image/Modules/GoPlus.webp" width="40%"> 

* __Set servo angle__
设置舵机角度

* __Set motor speed__
设置电机速度

* __Digital read pos__
读取端口指定引脚的数字量

* __Analog read__
读取指定端口的模拟量

#### 使用方法

> 显示编码器状态

><img src="/image/Modules/GoPlus_user.webp" width="70%"> 

## GPS

#### 功能说明

> 获取GPS信息

><img src="/image/Units/GPS.webp" width="50%"> 

* __get time__
获取本地时间

* __get latitude__
获取纬度

* __get longitude__
获取经度

* __get satellite num__
获取搜星数量

* __get positioning quality__
获取定位精度

* __get speed__
获取对地速度

* __get course__
获取地理北极位置

* __set time zone__
设置本地时区

#### 使用方法

> 在屏幕上显示GPS相关信息

><img src="/image/Units/GPS_user.webp" width="80%"> 